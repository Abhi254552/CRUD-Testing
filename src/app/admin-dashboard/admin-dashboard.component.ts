import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  sidebarCollapsed = false;

  // For handling dropdown states
  dropdowns: { [key: string]: boolean } = {
    doctorManagement: false // Start collapsed
  };

  constructor() { }

  ngOnInit(): void {
    // Adjust sidebar visibility when the component loads
    this.adjustSidebarVisibility(window.innerWidth);
  }

  // Toggle sidebar collapse
  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  // Adjust sidebar visibility based on screen size
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.adjustSidebarVisibility(event.target.innerWidth);
  }

  // Helper function to adjust sidebar
  adjustSidebarVisibility(width: number): void {
    if (width <= 576) {
      this.sidebarCollapsed = true;
    } else {
      this.sidebarCollapsed = false;
    }
  }

  // Toggle dropdown for doctor management and prevent default behavior
  toggleDropdown(event: Event, section: string): void {
    event.preventDefault(); // Prevent page from reloading
    this.dropdowns[section] = !this.dropdowns[section]; // Toggle dropdown state
  }
}
