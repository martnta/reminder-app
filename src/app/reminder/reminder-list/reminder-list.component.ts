import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { ReminderService } from '../reminder.service';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-reminder-list',
  templateUrl: './reminder-list.component.html',
  imports : [MatCardModule],
  styleUrls: ['./reminder-list.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReminderListComponent implements OnInit {
  reminders: any[] = [];

  constructor(private reminderService: ReminderService) {}

  ngOnInit(): void {
    this.reminderService.getReminders().subscribe((data) => {
      this.reminders = data;
    });
  }

  deleteReminder(id: string): void {
    this.reminderService.deleteReminder(id).subscribe(() => {
      this.reminders = this.reminders.filter((reminder) => reminder._id !== id);
    });
  }
}
