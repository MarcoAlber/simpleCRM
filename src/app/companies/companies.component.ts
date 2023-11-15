import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Firestore, collection, onSnapshot } from '@angular/fire/firestore';
import { DialogAddCompanyComponent } from '../dialog-add-company/dialog-add-company.component';
import { Company } from 'src/models/company.class';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent {
  company = new Company();
  allCompanies: Company[] = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) {
    this.loadCompanies();
  }

  loadCompanies() {
    let companyCollection = collection(this.firestore, 'companies');

    onSnapshot(companyCollection, (companiesInfo) => {
      this.allCompanies = companiesInfo.docs.map((companyDoc) => {
        let companyData = companyDoc.data() as Company;
        companyData.id = companyDoc.id;
        return companyData;
      });
      console.log(this.allCompanies);
    });
  }

  openDialog(): void {
    this.dialog.open(DialogAddCompanyComponent);
  }
}
