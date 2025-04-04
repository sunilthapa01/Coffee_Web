import { Component } from '@angular/core';
import { PdfComponenComponent } from '../pdf-componen/pdf-componen.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoffeeService } from '../services/coffee.service';
import { LoaderService } from '../loader.service';


@Component({
  selector: 'app-main-comp',
  standalone: true,
  imports: [PdfComponenComponent, FormsModule, CommonModule],
  templateUrl: './main-comp.component.html',
  styleUrl: './main-comp.component.scss'
})
export class MainCompComponent {
  ShowPopup: boolean = false;
  
  Test: boolean = false;
  ShowData() {
    this.loader.showLoader();
    this.Test = !this.Test;
    setTimeout(() => {
      this.loader.hideLoader()
    }, 5000);
  }



  open() {
    this.ShowPopup = true;
  }
  close() {
    this.ShowPopup = false;
  }
  coffees: any[] = [];

  constructor(private coffeeService: CoffeeService, public loader:LoaderService) { }

  ngOnInit(): void {
    this.coffeeService.getCoffees().subscribe({
      next: (data) => {
        this.coffees = data;
        console.log('Coffee Data:', this.coffees); // Log the entire coffee data array
      },
      error: (err) => console.error('Error fetching coffee data:', err)
    });
  }
  
}
