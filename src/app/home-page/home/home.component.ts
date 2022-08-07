import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  send() {
    let headers = new HttpHeaders();
    headers.set('Authorization', this.authKey);
    headers.set('Content-Type', 'application/json');

    this.http.post('https://fcm.googleapis.com/fcm/send', {
      "to": this.to,
      "notification": {
        "title": this.title,
        "body": this.body,
        "mutable_content": true,
        "sound": "Tri-tone"
      }
    },{
      headers: {
        "Authorization": this.authKey,
        "Content-Type": 'application/json'
      }
    }).subscribe(res => {
      console.log('Push alert success: ' + res);
    });
  }

}
