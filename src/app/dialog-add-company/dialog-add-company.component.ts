import { Component } from '@angular/core';
import { Firestore, collection, setDoc, doc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { Company } from 'src/models/company.class';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-company',
  templateUrl: './dialog-add-company.component.html',
  styleUrls: ['./dialog-add-company.component.scss']
})
export class DialogAddCompanyComponent {
  loading = false;

  constructor(private firestore: Firestore, public dialogRef: MatDialogRef<DialogAddCompanyComponent>) { }

  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    id: new FormControl(),
    expenses: new FormControl('', [Validators.required, Validators.minLength(10)]),
    phone: new FormControl(),
    zipcode: new FormControl(),
    city: new FormControl(),
    street: new FormControl()
  });

  saveCompany() {
    console.log(this.contactForm.value);
    this.setCompany();
    this.closeDialog();
  }

  async setCompany() {
    this.loading = true;
    let companyCollection = collection(this.firestore, 'companies');
    await setDoc(doc(companyCollection), this.contactForm.value);
  }

  checkForm(){
    let nameField: any = this.contactForm.controls['name'];
    let mailField: any = this.contactForm.controls['email'];
    let expensesField: any = this.contactForm.controls['expenses'];

    this.contactForm.disable();

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('mail', mailField.value);
    formData.append('message', expensesField.value);
  }

  closeDialog() {
    this.loading = false;
    this.dialogRef.close();
  }
}
