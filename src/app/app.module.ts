import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocListComponent } from './doc-list/doc-list.component';
import { HomeComponent } from './home/home.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { FormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { DoctorRegistrationComponent } from './doctor-registration/doctor-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DocListComponent,
    HomeComponent,
    DoctorLoginComponent,
    AboutUsComponent,
    DoctorRegistrationComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
