import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartPageComponent} from "./start-page/start-page.component";
import {HeaderComponent} from "./header/header.component";

const routes: Routes = [
  // {path: '', redirectTo: '/header', pathMatch: 'full'},
  {path: 'header', component: HeaderComponent},
  {path: 'start-page', component: StartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
