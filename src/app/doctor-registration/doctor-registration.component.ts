import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-registration',
  templateUrl: './doctor-registration.component.html',
  styleUrls: ['./doctor-registration.component.css'] 
})
export class DoctorRegistrationComponent {
  
  doctor = {
    name: '',
    specialisation: '',
    age: null as number | null,
    address: '',
    phone: '',
    email: '',
    experience: null as number | null,
    password: '',
    documents: null as File | null,
  };

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.doctor.documents = event.target.files[0];
    }
  }

  
  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Doctor registered:', this.doctor);
      
    } else {
      console.log('Form is not valid');
    }
  }

 
  private isFormValid(): boolean {
    return (
      this.doctor.name.trim() !== '' &&
      this.doctor.specialisation.trim() !== '' &&
      this.doctor.age !== null &&
      this.doctor.address.trim() !== '' &&
      this.doctor.phone.trim() !== '' &&
      this.doctor.email.trim() !== '' &&
      this.doctor.experience !== null &&
      this.doctor.password.trim() !== '' &&
      this.doctor.documents !== null
    );
  }

  
  private resetForm(): void {
    this.doctor = {
      name: '',
      specialisation: '',
      age: null,
      address: '',
      phone: '',
      email: '',
      experience: null,
      password: '',
      documents: null,
    };
  }
}


