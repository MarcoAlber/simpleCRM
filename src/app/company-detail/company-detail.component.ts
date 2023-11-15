import { Component } from '@angular/core';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/models/company.class';
import { DialogEditCompanyComponent } from '../dialog-edit-company/dialog-edit-company.component';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent {
  companyID: any = '';
  currentCompany: Company = new Company();

  constructor(private route: ActivatedRoute,
    private firestore: Firestore,
    public dialog: MatDialog) {
    this.companyID = this.route.snapshot.paramMap.get('id');
    console.log('user id =', this.companyID);
    this.getCompany();
  }

  getCompany() {
    let companyDoc = doc(this.firestore, 'companies', this.companyID);

    onSnapshot(companyDoc, (companyInfo) => {

      let companyData = companyInfo.data();
      this.currentCompany = new Company(companyData);
      this.currentCompany.id = companyInfo.id;
      console.log('current Company', this.currentCompany);
    });
  }

  editCompany() {
    let dialog = this.dialog.open(DialogEditCompanyComponent);
    dialog.componentInstance.company = new Company(this.currentCompany.toJSON());
    dialog.componentInstance.companyID = this.companyID;
  }
}
