import { Component } from '@angular/core';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  userID: any = '';
  currentUser: User = new User();

  constructor(private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog) {
    this.userID = this.route.snapshot.paramMap.get('id');
    console.log('user id =', this.userID);
    this.getUser();
  }

  getUser() {
    let userDoc = doc(this.firestore, 'users', this.userID);

    onSnapshot(userDoc, (userInfo) => {

      let userData = userInfo.data();
      this.currentUser = new User(userData);
      this.currentUser.id = userInfo.id;
      console.log('current User', this.currentUser);
    });
  }

  editUser() {
    let dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.currentUser.toJSON());
    dialog.componentInstance.userID = this.userID;
  }
}
