import { Component } from '@angular/core';
import { Company } from 'src/models/company.class';

@Component({
  selector: 'app-dialog-edit-company',
  templateUrl: './dialog-edit-company.component.html',
  styleUrls: ['./dialog-edit-company.component.scss']
})
export class DialogEditCompanyComponent {
  company!: Company;
  companyID: any = '';
  loading = false;
}
