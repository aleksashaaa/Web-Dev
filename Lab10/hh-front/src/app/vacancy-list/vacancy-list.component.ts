import { Component, OnInit } from '@angular/core';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../vacancy';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies!: Vacancy[];

  constructor(private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.vacancyService.getVacancies().subscribe(data => {
      this.vacancies = data;
    });
  }
}
