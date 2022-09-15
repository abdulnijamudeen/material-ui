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
    App.addListener('backButton', (event: BackButtonListenerEvent) => {
      if (!event.canGoBack) {
        App.exitApp();
      } else {
        window.history.back();
      }
    });
    this.sidemenuService.sideMenu$.subscribe(() => this.drawer.toggle());
  }

  ngOnInit() {
  }

  onSwipeleft() {
    this.drawer.close();
  }
}
