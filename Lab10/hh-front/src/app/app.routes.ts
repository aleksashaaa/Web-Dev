import { Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

export const routes: Routes = [
    { path: '', component: CompanyListComponent },
    { path: 'company/:id', component: CompanyDetailComponent },
    { path: 'vacancies', component: VacancyListComponent },
];
