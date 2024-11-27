import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})
export class AppComponent {
  title = 'User Management';

  constructor(private router: Router) { }

  // Navigate to user data component
  navigateToUserData() {
    this.router.navigate(['/user-data']);
  }

  // Navigate to role data component
  navigateToRoleData() {
    this.router.navigate(['/role-data']);
  }
}
