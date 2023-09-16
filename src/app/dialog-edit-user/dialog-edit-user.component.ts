import { Component } from '@angular/core';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent {
  user!: User;
  userID: any = '';
  dateOfBirth!: Date;
  loading = false;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  async saveUser() {
    this.user.dateOfBirth = this.dateOfBirth.getTime();
    console.log('current User is', this.user.dateOfBirth);
    this.loading = true;
    let userCollection = collection(this.firestore, 'users');
    await updateDoc(doc(userCollection, this.userID), this.user.toJSON());
    this.loading = false;
    this.dialogRef.close();
  }
}
