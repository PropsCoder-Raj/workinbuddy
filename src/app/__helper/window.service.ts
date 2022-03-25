import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  windowSize = 0;

  constructor() {
    this.windowSize = 840;
  }

  get windowRef(){
    return window;
  }
}
