import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private popupTrigger = new Subject<boolean>();
  popupState$ = this.popupTrigger.asObservable();

  openPopup() {
    this.popupTrigger.next(true);
  }

  closePopup() {
    this.popupTrigger.next(false);
  }
}


// 