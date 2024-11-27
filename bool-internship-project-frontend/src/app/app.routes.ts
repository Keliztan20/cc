import { Routes } from '@angular/router';
import { UserDataComponent } from './components/user-data/user-data.component';
import { RoleDataComponent } from './components/role-data/role-data.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-data', pathMatch:'full' },    // Default route
  { path: 'user-data', component: UserDataComponent },          // User data route
  { path: 'role-data', component: RoleDataComponent },          // Role data route,    
];
