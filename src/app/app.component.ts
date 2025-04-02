import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainCompComponent } from './main-comp/main-comp.component';
import { PdfComponenComponent } from './pdf-componen/pdf-componen.component';
import { jsPDF } from 'jspdf';
import { LoaderCompComponent } from './loader-comp/loader-comp.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,MainCompComponent,PdfComponenComponent,LoaderCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'First-Frontend';
  
}
