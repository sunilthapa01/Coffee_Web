import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfComponenComponent } from './pdf-componen.component';

describe('PdfComponenComponent', () => {
  let component: PdfComponenComponent;
  let fixture: ComponentFixture<PdfComponenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfComponenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfComponenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
