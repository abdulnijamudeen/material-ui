import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Doc, User } from 'src/app/model';
import { SidemenuService } from 'src/app/service/sidemenu.service';
import { UserService } from '../service/user.service';

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
  docId: string = '';
  users: Doc<User>[] = [];
  imgUrl: string = ''

  constructor(private userService: UserService, private _snackBar: MatSnackBar, private sidemenuService: SidemenuService) { }

  ngOnInit(): void {
    // this.getAllUser();
  }

  saveUser() {
    if (this.form.id) {
      this.userService.update(this.docId, this.form).then(v => {
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

  deleteUser(docId: string) {
    this.userService.delete(docId).then(() => {
      this._snackBar.open('Deleted successfully', undefined, { duration: 2000 });
    })
  }

  editUser(docId: string) {
    this.userService.get(docId).subscribe(res => {
      this.docId = res.id;
      this.form = res.data;
    });
  }

  getAllUser() {
    this.userService.getAll().subscribe(res => this.users = [...res]);
  }

  upload(file?: File) {
    if (file) {
      /*  this.userService.upload(file).then(res => {
         this._snackBar.open(`Uploaded successfully: ${res.ref.fullPath}`, undefined, { duration: 2000 });
         // this.download(res.ref.fullPath);
       }); */
    }
  }

  download(filePath: string) {
    this.userService.download(filePath).subscribe(res => {
      this.imgUrl = res as string;
    });
  }

  clearForm() {
    this.form.id = '';
    this.form.name = '';
    this.form.role = '';
  }

  back() {
    window.history.back();
  }

  toggle() {
    this.sidemenuService.toggle();
  }
}
