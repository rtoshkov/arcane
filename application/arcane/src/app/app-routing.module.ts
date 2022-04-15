import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home-page/home/home.component";
import {AllFiguresComponent} from "./figures/all-figures/all-figures.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LoginComponent} from "./auth/login/login.component";
import {CreateFigureComponent} from "./figures/create-figure/create-figure.component";
import {DetailsPageComponent} from "./figures/details-page/details-page.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {LogoutComponent} from "./auth/logout/logout.component";
import {IsUserGuard} from "./middleware/is-user.guard";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/logout', component: LogoutComponent},
  {path: 'all-figures', component: AllFiguresComponent},
  {path: 'create-figure', component: CreateFigureComponent, canActivate:[IsUserGuard]},
  {path: 'details/:id', component: DetailsPageComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
