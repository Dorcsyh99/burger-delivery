import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-page',
    pathMatch: 'full'
  },
  {
    path: 'main-page',
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuModule)
  },
  {
    path: 'address-form',
    loadChildren: () => import('./pages/address-form/address-form.module').then(m => m.AddressFormModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'user-page',
    loadChildren: () => import('./pages/user-page/user-page.module').then(m => m.UserPageModule),
    canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
