import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  saveUser() {
    if (this.form.id) {
      this.userService.update(this.form.id, this.form).then(v => {
        this.clearForm();
        this._snackBar.open('Saved successfully', undefined, { duration: 2000 });
      });
    } else {
      this.userService.add(this.form).then(v => {
        this.clearForm()
        this._snackBar.open('Saved successfully', undefined, { duration: 2000 });
      });
    }
  }

  deleteUser(user: User) {
    this.userService.delete(user.id).then(() => {
      this._snackBar.open('Deleted successfully', undefined, { duration: 2000 });
    })
  }

  editUser(user: User) {
    this.userService.get(user.id).subscribe(res => this.form = res);
  }

  getAllUser() {
    this.userService.getAll().subscribe(res => this.users = [...res]);
  }

  clearForm() {
    this.form.id = '';
    this.form.name = '';
    this.form.role = '';
  }

  back() {
    window.history.back();
  }
}
