import { Component } from '@angular/core';
import { PrimaryNavComponent } from 'app/layout/primary-nav/primary-nav.component';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PrimaryNavComponent, SkeletonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export default class ProductsComponent {

}
