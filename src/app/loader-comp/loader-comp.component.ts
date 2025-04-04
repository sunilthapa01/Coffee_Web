import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader-comp.component.html',
  styleUrl: './loader-comp.component.scss'
})
export class LoaderCompComponent {
  showLoader: boolean = false;
  constructor(private readonly loaderService: LoaderService) { }
  ngOnInit(): void {
    this.loaderService.getLoaderStatus().subscribe((resp:any) => {
      this.showLoader = resp;
    });
}

}
