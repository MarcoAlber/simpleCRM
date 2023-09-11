import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user = new User();
  allUsers: User[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    this.loadUsers();
  }

  loadUsers() {
    let userCollection = collection(this.firestore, 'users');

    onSnapshot(userCollection, (usersInfo) => {
      this.allUsers = usersInfo.docs.map((userDoc) => {
        let userData = userDoc.data() as User;
        userData.id = userDoc.id;
        return userData;
      });
      console.log(this.allUsers);
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddUserComponent);
  }
}