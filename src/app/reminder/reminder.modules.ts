import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderListComponent } from './reminder-list/reminder-list.component';
import { CreateReminderComponent } from './create-reminder/create-reminder.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReminderComponent } from './reminder.component';

@NgModule({
  declarations: [
    CreateReminderComponent,
    ReminderListComponent,
    ReminderComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    ReminderListComponent ,
    CreateReminderComponent,
  ],
  exports: [
    CreateReminderComponent,
    ReminderListComponent  // Re-export the standalone component
  ]
})
export class ReminderModule {}
