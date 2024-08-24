import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AuthService } from './app/auth/auth.service';
import { importProvidersFrom } from '@angular/core';
import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(AppModule),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    AuthService, // Add AuthService here
  ],
}).catch(err => console.error(err));

