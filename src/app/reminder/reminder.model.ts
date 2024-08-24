export interface Reminder {
  _id?: string;  // MongoDB ObjectId will be represented as a string in the frontend
  title: string;
  description?: string;
  date: Date | string;  // Could be a string if you're not parsing dates
  userId: string;  // User's MongoDB ObjectId as a string
}