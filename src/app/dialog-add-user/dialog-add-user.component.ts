import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, setDoc, doc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  dateOfBirth!: Date;
  loading = false;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  async saveUser() {
    this.user.dateOfBirth = this.dateOfBirth.getTime();
    console.log('current User is', this.user.dateOfBirth);
    this.loading = true;
    let userCollection = collection(this.firestore, 'users');
    await setDoc(doc(userCollection), this.user.toJSON());
    this.loading = false;
    this.dialogRef.close();
  }
}