import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, } from '@angular/fire/firestore';
import User from '../interfaces/usuario.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) {}

  // addUser(user : User){
  //   const userRef = collection(this.firestore, 'users');
  //   return addDoc(userRef, user);
  // }

  getUsers(): Observable<User[]> {
    const userRef = collection(this.firestore, 'users');
    return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
  }

  deleteUser(user: User) {
    const userRef = doc(this.firestore, `users/${user.id}`);
    return deleteDoc(userRef);
  }
}
