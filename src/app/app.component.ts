import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AuthModule, CommonModule, AuthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reminder App';

  constructor(public authService: AuthService, private router: Router, private http: HttpClient) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
