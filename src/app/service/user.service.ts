import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'user';

  constructor(private afs: AngularFirestore) { }

  add(user: User) {
    user.id = this.afs.createId();
    return this.afs.collection<User>(this.path).add(user);
  }

  getAll() {
    return this.afs.collection<User>(this.path).valueChanges();
  }

  delete(id: string) {
    return this.afs.collection<User>(this.path, ref => ref.where('id', '==', id)).doc().delete();
  }
}
