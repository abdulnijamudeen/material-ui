import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map } from 'rxjs';
import { Doc, User } from '../model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path = 'user';

  constructor(private afs: AngularFirestore, private storage: AngularFireStorage) { }

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

  upload(file: File) {
    const filePath = `${this.path}/${new Date().getTime()}.${file.type.split('/')[1]}`;
    return this.storage.upload(filePath, file);
  }

  download(filePath: string) {
    return this.storage.ref(filePath).getDownloadURL();
  }
}
