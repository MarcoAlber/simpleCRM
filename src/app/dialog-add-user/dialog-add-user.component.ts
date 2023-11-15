import { Component } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collection, setDoc, doc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent {
  user = new User();
  positions = ["backend", "frontend"];
  loading = false;
  today = new Date();

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddUserComponent>) { }

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    id: new FormControl(),
    birthday: new FormControl('', [Validators.required]),
    phone: new FormControl(),
    password: new FormControl(),
    zipcode: new FormControl(),
    city: new FormControl(),
    street: new FormControl(),
    position: new FormControl()
  });

  saveUser() {
    console.log(this.contactForm.value);
    this.setUser();
    this.closeDialog();
  }

  async setUser() {
    let birthdayControl: any = this.contactForm.get('birthday');
    let passwordControl: any = this.contactForm.get('password');
    //birthdayControl = birthdayControl.value.getTime();
    birthdayControl.setValue(birthdayControl.value.getTime());
    passwordControl.setValue(this.generatePassword());
    console.log('password', passwordControl);

    console.log('birthday', birthdayControl);
    this.loading = true;
    let userCollection = collection(this.firestore, 'users');
    await setDoc(doc(userCollection), this.contactForm.value);
  }

  closeDialog() {
    this.loading = false;
    this.dialogRef.close();
  }

  generatePassword() {
    let pwLength = 8,
      charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      password = "";
    for (let i = 0, n = charset.length; i < pwLength; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  }
}