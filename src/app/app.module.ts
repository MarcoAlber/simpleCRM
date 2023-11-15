import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatSelectModule } from '@angular/material/select';
import { DialogAddUserComponent } from './dialog-add-user/dialog-add-user.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { DialogEditUserComponent } from './dialog-edit-user/dialog-edit-user.component';
import { NewsComponent } from './news/news.component';
import { CompaniesComponent } from './companies/companies.component';
import { EventsComponent } from './events/events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewsComponent } from './reviews/reviews.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { DialogAddCompanyComponent } from './dialog-add-company/dialog-add-company.component';
import { DialogEditCompanyComponent } from './dialog-edit-company/dialog-edit-company.component';
import { DialogAddEventComponent } from './dialog-add-event/dialog-add-event.component';
import { DialogAddReviewComponent } from './dialog-add-review/dialog-add-review.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogAddUserComponent,
    UserDetailComponent,
    DialogEditUserComponent,
    NewsComponent,
    CompaniesComponent,
    EventsComponent,
    ReviewsComponent,
    CompanyDetailComponent,
    DialogAddCompanyComponent,
    DialogEditCompanyComponent,
    DialogAddEventComponent,
    DialogAddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }