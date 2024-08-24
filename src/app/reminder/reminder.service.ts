import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reminder } from './reminder.model';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  private apiUrl = 'http://localhost:3000/api/reminders';

  constructor(private http: HttpClient) {}

  getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.apiUrl);
  }

  createReminder(reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(this.apiUrl, reminder);
  }

  deleteReminder(id: string): Observable<Reminder> {
    return this.http.delete<Reminder>(`${this.apiUrl}/${id}`);
  }
}
