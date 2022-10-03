import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SidemenuService } from 'src/app/service/sidemenu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  to = '';
  title = 'Dummy Title';
  body = 'Dummy Message';
  authKey = '';

  constructor(private http: HttpClient, private sidemenuService: SidemenuService) { }

  ngOnInit(): void {
  }

  send() {
  }

  toggle() {
    this.sidemenuService.toggle();
  }

}
