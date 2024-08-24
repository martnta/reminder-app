import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { ReminderModule } from './reminder/reminder.modules';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component'; // Make sure this is imported

@NgModule({ imports: [BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReminderModule,
        AuthModule], providers: [AuthService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
