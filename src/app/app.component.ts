import { MatDrawer } from '@angular/material/sidenav';
import { Component, OnInit, ViewChild } from '@angular/core';
import { App, BackButtonListenerEvent } from '@capacitor/app';
import { ActionPerformed, PushNotifications, PushNotificationSchema, Token } from '@capacitor/push-notifications';
import { Toast } from '@capacitor/toast';
import { SidemenuService } from './service/sidemenu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'material-ui';

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
   /*  console.log('Initializing HomePage');

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    PushNotifications.requestPermissions().then(result => {
      if (result.receive === 'granted') {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // Show some error
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      console.log('Push registration success, token: ' + token.value);
      const txt  = 'Push registration success, token: ' + token.value;
      Toast.show({
        text: txt
      });
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      const txt  = 'Error on registration: ' + JSON.stringify(error);
      Toast.show({
        text: txt
      });
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        const txt  = 'Push received: ' + JSON.stringify(notification);
        Toast.show({
          text: txt
        });
      },
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        const txt  = 'Push action performed: ' + JSON.stringify(notification);
        Toast.show({
          text: txt
        });
      },
    ); */
  }

  onSwipeleft() {
    console.log('swipe');
    // this.drawer.close();
  }
}
