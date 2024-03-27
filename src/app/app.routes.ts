import { Routes } from '@angular/router';
import { authLoginGuard } from './guards/auth-login.guard';
import { authLoggedGuard } from './guards/auth-logged.guard';

export const routes: Routes = [
    {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component'),
         canActivate: [authLoggedGuard]
    },
    {
        path: 'products',
        loadComponent:   () => import('./features/products/products.component'),
        canActivate: [authLoginGuard]
    },
    {
        path: 'product-details/:id',
        loadComponent:   () => import('./features/products/details/details.component')
    },
    {
        path: 'checkout',
        loadComponent:   () => import('./features/checkout/checkout.component'),

    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' },
];