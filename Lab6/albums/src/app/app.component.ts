import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AlbumsService } from './albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Albums';
}
