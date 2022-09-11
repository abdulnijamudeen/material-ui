import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidemenuService {

  menuSubject = new Subject();
  sideMenu$ = this.menuSubject.asObservable();

  constructor() { }

  toggle() {
    this.menuSubject.next(null);
  }

}
