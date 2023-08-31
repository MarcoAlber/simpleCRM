import { Component } from '@angular/core';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  dateOfBirth!: Date;

  saveUser() {
    this.user.dateOfBirth = this.dateOfBirth.getTime();
    console.log('current User is', this.user);

  }
}
