import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component'; // Example component
import { RegisterComponent } from './auth/register/register.component';
import { ReminderListComponent } from './reminder/reminder-list/reminder-list.component';
export const routes: Routes = [

  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
 {/* {path:'reminder', component: ReminderListComponent}*/}
  // Add other routes here
];
