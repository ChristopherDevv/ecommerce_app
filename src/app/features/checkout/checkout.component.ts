import { Component } from '@angular/core';
import { PrimaryNavComponent } from 'app/layout/primary-nav/primary-nav.component';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [PrimaryNavComponent, SkeletonModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export default class CheckoutComponent {

}
