import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kaspi';
}
