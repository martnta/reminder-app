import { Component } from '@angular/core';
import { ReminderService } from '../reminder.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reminder',
  templateUrl: './create-reminder.component.html',
  styleUrls: ['./create-reminder.component.css'],
})
export class CreateReminderComponent {
  title = '';
  description = '';
  date = '';

  constructor(private reminderService: ReminderService, private router: Router) {}

  onSubmit(): void {
    const newReminder = {
      title: this.title,
      description: this.description,
      date: this.date,
    };

    this.reminderService.createReminder(newReminder).subscribe(() => {
      this.router.navigate(['/reminders']);
    });
  }
}
