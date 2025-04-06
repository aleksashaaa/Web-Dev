import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../company.service';
import { Vacancy } from '../vacancy';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  companyId!: number;
  vacancies!: Vacancy[];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    const companyIdParam = this.route.snapshot.paramMap.get('id');
    if (companyIdParam) {
      this.companyId = +companyIdParam;
      this.companyService.getVacanciesByCompany(this.companyId).subscribe(data => {
        this.vacancies = data;
      });
    } else {
      console.error('Company ID is invalid');
    }
  }
}
