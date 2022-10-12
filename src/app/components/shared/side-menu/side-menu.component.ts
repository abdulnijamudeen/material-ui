import { Component, OnInit } from '@angular/core';
import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { SidemenuService } from 'src/app/service/sidemenu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  routerActiveCss = 'bg-purple-500 border-3 border-purple-100 text-white';

  constructor() { }

  ngOnInit(): void {
  }

  onExitClick() {
    if (Capacitor.getPlatform() === 'android' || Capacitor.getPlatform() === 'ios') {
      App.exitApp()
    }
  }

}
