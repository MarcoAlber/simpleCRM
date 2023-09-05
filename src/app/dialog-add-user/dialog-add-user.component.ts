import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, setDoc, doc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  dateOfBirth!: Date;

  constructor(private firestore: Firestore) { }

  saveUser() {
    this.user.dateOfBirth = this.dateOfBirth.getTime();
    console.log('current User is', this.user);

    const userCollection = collection(this.firestore, 'users');
    setDoc(doc(userCollection), this.user.toJSON());
  }
}