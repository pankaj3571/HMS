import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent}  from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component'
import { ProfileComponent } from './profile/profile.component';
import { BookingComponent } from './booking/booking.component';
const routes: Routes=[
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'profile',component:ProfileComponent},
{path:'booking',component:BookingComponent},


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // exports: [RouterModule]
})
export class AppRoutingModule { }
