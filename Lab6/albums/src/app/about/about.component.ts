import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
}
