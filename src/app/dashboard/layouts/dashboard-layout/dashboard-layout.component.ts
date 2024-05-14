import { Component, computed, inject } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css'
})
export class DashboardLayoutComponent {

  private authService = inject( AuthService );

  public user = computed( () => this.authService.currentUser() );


  onLogout() {
    this.authService.logout();
  }
  // get user() {
  //   return this.authService.currentUser();
  // } Esto lo cambié por el public user, Fernando recomienda que es una mejor forma usando computed

}
