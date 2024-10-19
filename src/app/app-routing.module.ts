import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocListComponent } from './doc-list/doc-list.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const routes: Routes = [
  {path:"doc-list",component: DocListComponent},
  {path:"home",component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'about-us', component: AboutUsComponent },
  {path:'doctor-signup',component :DoctorRegistrationComponent},
  {path:'admim-login',component :AdminLoginComponent},
  {path:'admin-dashboard',component :AdminDashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
