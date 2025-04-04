import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loaderStatus = new BehaviorSubject(false);
  // directives it  is a predeifned component or function that helps to perform the heavy tasks


  constructor() { 

  }

  showLoader() {
    this.loaderStatus.next(true);
  }

  hideLoader() {
    this.loaderStatus.next(false);
  }
  public getLoaderStatus() {
    return this.loaderStatus.asObservable();
  }



}