import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private apiUrl = 'http://127.0.0.1:8000/api/companies/';

  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}${id}/`);
  }

  getVacanciesByCompany(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}${id}/vacancies/`);
  }
}
