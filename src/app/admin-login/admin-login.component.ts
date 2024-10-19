import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  adminId: string = '';
  password: string = '';

 
  private adminCredentials = {
    id: 'admin123',
    password: '123'
  };

  constructor(private router: Router) {}

  onLogin() {
    if (this.adminId === this.adminCredentials.id && this.password === this.adminCredentials.password) {
      alert('Login Successful');
      this.router.navigate(['/admin-dashboard']); // Navigate to Admin Dashboard
    } else {
      alert('Invalid Admin ID or Password');
    }
  }
}
