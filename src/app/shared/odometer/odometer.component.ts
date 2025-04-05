import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-odometer',
  standalone: true,
  template: `<div class="odometer" #odometerRef>{{ value }}</div>`,
  styles: [],
})
export class OdometerComponent implements OnChanges, AfterViewInit {
  @Input() value: number = 0;
  ngOnInit(): void {
    this.increase();

  }

  increase() {
    this.value += 50;
  }

  private odometer: any;
  private isBrowser: boolean;

  constructor(private elRef: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit() {
    if (this.isBrowser) {
      const Odometer = (await import('odometer')).default;

      this.odometer = new Odometer({
        el: this.elRef.nativeElement.querySelector('.odometer'),
        value: this.value,
        duration: 1000,
        theme: 'default',
      });

      this.odometer.render();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.odometer && changes['value']) {
      this.odometer.update(this.value);
    }
  }
}
