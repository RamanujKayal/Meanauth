import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path : 'dashboard',
    component :DashboardComponent
  },{
    path : 'home',
    component : HomeComponent
  },{
    path : 'login',
    component :LoginComponent
  },{
    path : 'navbar',
    component :NavbarComponent
  },{
    path : 'profile',
    component :ProfileComponent
  },{
    path : 'registration',
    component :RegistrationComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
