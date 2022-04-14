import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home-page/home/home.component";
import {AllFiguresComponent} from "./figures/all-figures/all-figures.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},

  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},

  {path: 'all-figures', component: AllFiguresComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
