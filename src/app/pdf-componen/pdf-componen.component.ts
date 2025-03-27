import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
 
  getPDF() {
    const doc = new jsPDF();
    // doc.setLineWidth(0.5);
    // doc.line(10, 25, 200, 25);

    // doc.setFontSize(12);
    // doc.setFont('helvetica', 'bold');

    // doc.text(`Name:`, 10, 40);
    // doc.setFont('helvetica', 'normal');
    // doc.text(this.Name, 50, 40);

    // doc.setFont('helvetica', 'bold');
    // doc.text(`Email:`, 10, 50);
    // doc.setFont('helvetica', 'normal');
    // doc.text(this.Number.toString(), 50, 50);

    // doc.setFont('helvetica', 'bold');
    // doc.text(`Address:`, 10, 60);
    // doc.setFont('helvetica', 'normal');
    // doc.text(this.Address, 50, 60, { maxWidth: 140 });
    // doc.save('UserDetails.pdf');
  }
}
