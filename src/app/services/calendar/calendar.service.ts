import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor() { }

  getCurrentMonthDays(year: number, month: number): { date: Date; dayOfWeek: number }[] {
    const days: { date: Date; dayOfWeek: number }[] = [];
    const lastDay = new Date(year, month, 0).getDate();

    for (let day = 1; day <= lastDay; day++) {
      const date = new Date(year, month - 1, day);
      const dayOfWeek = date.getDay();
      days.push({ date, dayOfWeek });
    }

    return days;
  }

  getCurrentWeekDays(year: number, month: number, weekStartDay: number = 0): { date: Date; dayOfWeek: number }[] {
    const days: { date: Date; dayOfWeek: number }[] = [];
    const firstDayOfMonth = new Date(year, month - 1, 1);
    const firstDayOfWeek = (firstDayOfMonth.getDay() - weekStartDay + 7) % 7;
    const startDate = new Date(firstDayOfMonth);
    startDate.setDate(startDate.getDate() - firstDayOfWeek);
  
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      const dayOfWeek = date.getDay();
      days.push({ date, dayOfWeek });
    }
  
    return days;
  }

  getThreeMonthsDays(year: number, startMonth: number): { date: Date; dayOfWeek: number }[] {
    const days: { date: Date; dayOfWeek: number }[] = [];

    for (let i = 0; i < 3; i++) {
      const month = startMonth + i;
      const yearOffset = Math.floor((month - 1) / 12);
      const correctedYear = year + yearOffset;
      const correctedMonth = (month - 1) % 12 + 1;
      const monthDays = this.getCurrentMonthDays(correctedYear, correctedMonth);
      days.push(...monthDays);
    }

    return days;
  }

}
