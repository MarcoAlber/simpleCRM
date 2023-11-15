import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NewsComponent } from './news/news.component';
import { CompaniesComponent } from './companies/companies.component';
import { EventsComponent } from './events/events.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'employees', component: UserComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'events', component: EventsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'employees/:id', component: UserDetailComponent },
  { path: 'companies/:id', component: CompanyDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
