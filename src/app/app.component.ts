import { Component } from '@angular/core';
import { App, BackButtonListenerEvent } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ui';
  constructor() {
    App.addListener('backButton', (event: BackButtonListenerEvent) => {
      if (!event.canGoBack) {
        App.exitApp();
      } else {
        window.history.back();
      }
    });
  }
}
