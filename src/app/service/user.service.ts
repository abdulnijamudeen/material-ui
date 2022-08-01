import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { User } from '../model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'user';

  constructor(private afs: AngularFirestore) { }

  add(user: User) {
    return this.afs.collection<User>(this.path).add(user);
  }

  getAll() {
    return this.afs.collection<User>(this.path)
      .snapshotChanges().pipe(map(d => d.map(u => ({ ...u.payload.doc.data(), id: u.payload.doc.id }) as User)));
  }

  delete(id: string) {
    return this.afs.collection<User>(this.path).doc(id).delete();
  }

  get(id: string) {
    return this.afs.collection<User>(this.path).doc(id).get().pipe(map((d) => ({ ...d.data(), id: d.id } as User)));
  }

  update(id: string, user: User) {
    return this.afs.collection<User>(this.path).doc(id).update(user);
  }
}
