import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { ReminderModule } from './reminder/reminder.modules';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component'; // Make sure this is imported

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReminderModule,
    AuthModule,
  ],
  providers: [AuthService],
 // Bootstrap AppComponent
})
export class AppModule { }
