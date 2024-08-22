import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register({ username: this.username, email: this.email, password: this.password }).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/reminders']);
      },
      (error) => {
        alert('Registration failed');
      }
    );
  }
}
