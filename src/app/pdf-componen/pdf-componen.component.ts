import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf-componen',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './pdf-componen.component.html',
  styleUrls: ['./pdf-componen.component.scss']
})
export class PdfComponenComponent {
  @Input() ShowPopup: boolean = false; 
  @Output() closePopup = new EventEmitter<void>(); 
  close() { 
    this.closePopup.emit();
  }

  Name: string = '';
  Number: number = 0;
  Address: string = ' ';
  Delivery: string = '';

  // userData = {
  //   name: "Sunil Kumar",
  //   email: "sunil@example.com"
  // };

  // @ViewChild('templateContainer', { static: false }) templateContainer!: ElementRef;

  // getPDF() {
  //   const element = this.templateContainer.nativeElement;

  //   html2canvas(element).then(canvas => {
  //     const imgData = canvas.toDataURL('image/png');
  //     const pdf = new jsPDF();
  //     pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
  //     pdf.save('UserDetails.pdf');
  //   });
  // }
  
 
  // generatePDF() {
  //   const template = './template.html';
  //   console.log(template);
  //   const doc = new jsPDF();
  //   doc.text(template, 10, 10);

  //   doc.save('UserDetails.pdf');

  //   // doc.setLineWidth(0.5);
  //   // doc.line(10, 25, 200, 25);


  //   // doc.setFontSize(12);
  //   // doc.setFont('helvetica', 'bold');

  //   // doc.text(`Name:`, 10, 40);
  //   // doc.setFont('helvetica', 'normal');
  //   // doc.text(this.Name, 50, 40);

  //   // doc.setFont('helvetica', 'bold');
  //   // doc.text(`Email:`, 10, 50);
  //   // doc.setFont('helvetica', 'normal');
  //   // doc.text(this.Number.toString(), 50, 50);

  //   // doc.setFont('helvetica', 'bold');
  //   // doc.text(`Address:`, 10, 60);
  //   // doc.setFont('helvetica', 'normal');
  //   // doc.text(this.Address, 50, 60, { maxWidth: 140 });
  // }
  
  
  constructor() {

   }

  ngOnInit(): void {}

  generatePDF(): void {
    const content = document.getElementById('pdfContent');
    
    if (!content) {
      console.error('Element not found!');
      return;
    }

    html2canvas(content).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190; // PDF width
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);
      pdf.save('UserDetails.pdf');
    });
  }
}
