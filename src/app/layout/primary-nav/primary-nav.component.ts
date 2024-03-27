import { Component, OnInit } from '@angular/core';
import { SkeletonModule } from 'primeng/skeleton';
import { RouterLink, RouterOutlet, Router, RouterModule } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuItem } from 'primeng/api';
import { NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-primary-nav',
  standalone: true,
  imports: [
    SkeletonModule, 
    RouterOutlet, 
    RouterLink,
    PanelMenuModule,
    NgFor, 
    NgClass,
    RouterModule,
    FormsModule
  ],
  templateUrl: './primary-nav.component.html',
  styleUrl: './primary-nav.component.css'
})
export class PrimaryNavComponent implements OnInit{
  constructor(private router: Router) {}
  items: MenuItem[] | undefined;
  isActive: boolean = false;

  ngOnInit() {
    this.items = [
          {
            label: 'Manage cart',
            icon: 'pi pi-fw pi-shopping-bag',
            items: [
              {
                label: 'Products', 
                icon: 'pi pi-fw pi-box', 
                routerLink: '/products',
                styleClass: this.router.isActive('/products', true) ? 'ui-state-active' : ''
              },
              {
                label: 'Cart', 
                icon: 'pi pi-fw pi-shopping-cart', 
                routerLink: '/checkout'
              },
            ],
          }, 
          {
            label: 'Manage account',
            icon: 'pi pi-fw pi-user',
            items: [
              {
                label: 'Sign in', 
                icon: 'pi pi-fw pi-sign-in', 
                routerLink: '/products'
              },
              {
                label: 'Sign up', 
                icon: 'pi pi-fw pi-user-plus', 
                routerLink: '/checkout'
              },
            ],
          }
    ]
  }

}