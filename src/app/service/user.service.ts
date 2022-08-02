import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Doc, User } from '../model';
import { map } from 'rxjs';

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
    return this.afs.collection<User>(this.path)
      .snapshotChanges().pipe(map(d => d.map(u => ({ id: u.payload.doc.id, data: u.payload.doc.data() }) as Doc<User>)));
  }

  delete(docId: string) {
    return this.afs.collection<User>(this.path).doc(docId).delete();
  }

  get(docId: string) {
    return this.afs.collection<User>(this.path).doc(docId).get().pipe(map(d => ({ id: d.id, data: d.data() } as Doc<User>)));
  }

  update(docId: string, user: User) {
    return this.afs.collection<User>(this.path).doc(docId).update(user);
  }
}
