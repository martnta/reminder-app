import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReminderService {
  private apiUrl = 'http://localhost:3000/api/reminders';

  constructor(private http: HttpClient) {}

  getReminders(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createReminder(reminder: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, reminder);
  }

  deleteReminder(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
