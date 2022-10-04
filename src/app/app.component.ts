import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { App, BackButtonListenerEvent } from '@capacitor/app';
import { SidemenuService } from './service/sidemenu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private sidemenuService: SidemenuService) {
    App.addListener('backButton', (event: BackButtonListenerEvent) => event.canGoBack ? window.history.back() : App.exitApp());
    this.sidemenuService.sideMenu$.subscribe(() => this.drawer.opened ? this.drawer.close() : this.drawer.open());
  }

  ngOnInit() {
  }

}
