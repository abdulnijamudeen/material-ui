import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { SidemenuService } from '../service/sidemenu.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  @ViewChild('drawer')
  drawer!: MatDrawer;

  constructor(private sidemenuService: SidemenuService) {
    this.sidemenuService.sideMenu$.subscribe(() => this.drawer.toggle());
  }

  ngOnInit(): void {
  }

}
