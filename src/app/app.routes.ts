import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./Home/home.component'),
    },
    {
        path: 'products',
        loadComponent: () => import('./products/products.component'),
    },
    {
        path: 'cart',
        loadComponent: () => import('./cart/cart.component'),
    },
    {
        path: '**',
        redirectTo: ''
    }
];
