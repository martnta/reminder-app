import { Component, OnInit } from '@angular/core';
import { ReminderService } from './reminder.service';
import { Reminder } from './reminder.model';
import { CreateReminderComponent } from './create-reminder/create-reminder.component';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css'],

})
export class ReminderComponent implements OnInit {
  reminders: Reminder[] = [];

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.loadReminders();
  }

  loadReminders(): void {
    this.reminderService.getReminders().subscribe(
      (reminders: Reminder[]) => {
        this.reminders = reminders;
      },
      (error) => {
        console.error('Error fetching reminders:', error);
      }
    );
  }

  onNewReminderAdded(newReminder: Reminder): void {
    this.reminders.push(newReminder);
  }

  onReminderUpdated(updatedReminder: Reminder): void {
    const index = this.reminders.findIndex(r => r._id === updatedReminder._id);
    if (index !== -1) {
      this.reminders[index] = updatedReminder;
    }
  }

  onReminderDeleted(deletedReminderId: string): void {
    this.reminders = this.reminders.filter(r => r._id !== deletedReminderId);
  }
}
