import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StartPageComponent} from "./start-page/start-page.component";
import {HeaderComponent} from "./header/header.component";
import {ClothesComponent} from "./clothes/clothes.component";
import {CartComponent} from "./cart/cart.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  // {path: '', redirectTo: '/start-page', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  // {path: 'start-page', component: StartPageComponent},
  { path: '', component: ClothesComponent },
  { path: 'cart', component: CartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: StartPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
