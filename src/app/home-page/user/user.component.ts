import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form: User = {
    id: '',
    name: '',
    role: ''
  }
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  addUser() {
    this.userService.add(this.form).then(v => {
      // console.log(v);
      this.getAllUser();
    })
  }

  // TODO: not working
  deleteUser(user: User) {
    this.userService.delete(user.id).then(() => {
      console.log('deleted');
      this.getAllUser();
    })
  }

  getAllUser() {
    this.userService.getAll().subscribe(res => {
      console.log(res);
      this.users = [...res];
    })

  }
}
