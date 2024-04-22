import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {StartPageComponent} from "./start-page/start-page.component";
import {HeaderComponent} from "./header/header.component";
import {ClothesComponent} from "./clothes/clothes.component";

const routes: Routes = [
  {path: '', redirectTo: '/start-page', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'start-page', component: StartPageComponent},
  { path: 'clothes/:category', component: ClothesComponent },

import {CartComponent} from "./cart/cart.component";
const routes: Routes = [
  { path: 'cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
