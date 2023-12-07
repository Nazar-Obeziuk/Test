import { Component, Input, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar/calendar.service';
import { DatePipe } from '@angular/common';
import { format, addDays, subDays } from 'date-fns';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [DatePipe]
})
export class HeaderComponent implements OnInit {

  public daysOfWeek!: { date: Date, dayOfWeek: number }[];
  public weekDays: Date[] = [];
  public currentDate: Date = new Date();
  public year = this.currentDate.getFullYear();
  public month = this.currentDate.getMonth() + 1;
  public nameOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  public currentView: 'month' | 'week' = 'month';
  public switchMonthOrWeek = false;

  ngOnInit(): void {
    this.updateCalendar();
  }

  constructor(
    private calService: CalendarService,
  ) {
    this.generateWeekDays();
  }

  updateCalendar(): void {
    if (this.currentView === 'month') {
      this.daysOfWeek = this.calService.getCurrentMonthDays(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
    } else if (this.currentView === 'week') {
      this.daysOfWeek = this.calService.getCurrentWeekDays(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1);
    }
  }

  toggleMonth(increment: boolean): void {
    this.month += increment ? 1 : -1;
  
    if (this.month > 12) {
      this.month = 1;
      this.year++;
    } else if (this.month < 1) {
      this.month = 12;
      this.year--;
    }
  
    this.updateCalendar();
  }

  switchView(view: 'month' | 'week'): void {
    this.currentView = view;
    this.switchMonthOrWeek = !this.switchMonthOrWeek;

    this.currentDate = new Date(this.year, this.month - 1, 1);
    this.updateCalendar();
  }

  formatDate(date: Date): string {
    return format(date, 'dd.MM.yyyy');
  }

  formatDay(date: Date): number {
    return date.getDate();
  }

  generateWeekDays() {
    this.weekDays = Array.from({ length: 7 }, (_, index) => addDays(this.getSunday(), index));
  }

  getSunday(): Date {
    const currentDayIndex = this.currentDate.getDay();
    const daysToAdd = currentDayIndex === 0 ? 0 : 7 - currentDayIndex;
    return subDays(this.currentDate, daysToAdd);
  }

  goToNextWeek() {
    this.currentDate = addDays(this.currentDate, 7);
    this.generateWeekDays();
  }

  goToPreviousWeek() {
    this.currentDate = subDays(this.currentDate, 7);
    this.generateWeekDays();
  }
}

  // public jpgImage = '../../../assets/images/sf-9 (1).jpg';
  // public gifImage = '../../../assets/images/sf-9.gif';
  // public isHovered = true;

  // public daysOfWeek!: { date: Date, dayOfWeek: number }[];
  // public date = new Date;
  // public year = this.date.getFullYear();
  // public month = this.date.getMonth() + 1;
  // public nameOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // public currentView: 'month' | 'week' = 'month';

  // ngOnInit(): void {
  //   this.getDate();
  //   this.getWeek();
  // }

  // constructor(
  //   private calService: CalendarService
  // ) {}

  // getDate(): void {
  //   this.daysOfWeek = this.calService.getCurrentMonthDays(this.year, this.month);
  //   console.log(this.daysOfWeek);
  // }

  // getWeek(): void {
  //   this.daysOfWeek = this.calService.getCurrentWeekDays(this.year, this.month);
  //   console.log(this.daysOfWeek);
  // }

  // toggleMonth(increment: boolean): void {
  //   this.month += increment ? 1 : -1;
  
  //   if (this.month > 12) {
  //     this.month = 1;
  //     this.year++;
  //   } else if (this.month < 1) {
  //     this.month = 12;
  //     this.year--;
  //   }
  
  //   this.updateCalendar();
  // }

  // private updateCalendar(): void {
  //   this.daysOfWeek = this.calService.getCurrentMonthDays(this.year, this.month);
  // }

  // --------------------

// @Input() year!: number;
// @Input() month!: number;
// public calendar!: { date: Date, dayOfWeek: number }[];
// // public switchYear = false;
// // public switchMonth = false;
// // public countOfYear = 2023;
// // public countOfMonth = 1;
// public switchView: 'month' | 'week' = 'month';
// public dayNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// public currentMonthYear: string = '';

// constructor(
//   private calService: CalendarService,
//   private datePipe: DatePipe
// ) {}

// ngOnInit(): void {
//   this.updateCalendar();
//   this.getCalendar()
// }

// getCalendar(): void {
//   this.calendar = this.calService.getCurrentMonthDays(this.year, this.month);
//   console.log(this.calendar)
// }

// getDayName(dayOfWeek: number): string {
//   return this.dayNames[dayOfWeek];
// }

// toggleYear(increment: boolean): void {
//   this.year += increment ? 1 : -1;
//   this.updateCalendar();
// }

// toggleMonth(increment: boolean): void {
//   this.month += increment ? 1 : -1;

//   if (this.month > 12) {
//     this.month = 1;
//     this.year++;
//   } else if (this.month < 1) {
//     this.month = 12;
//     this.year--;
//   }

//   this.updateCalendar();
// }

// toggleView(view: 'month' | 'week'): void {
//   this.switchView = view;
//   this.updateCalendar();
// }

// private updateCalendar(): void {
//   this.calendar = this.switchView === 'month'
//     ? this.calService.getCurrentMonthDays(this.year, this.month)
//     : [];

//   if (!isNaN(new Date(this.year, this.month - 1).getTime())) {
//     this.currentMonthYear = this.datePipe.transform(new Date(this.year, this.month - 1), 'MMMM yyyy') || '';
//   } else {
//     this.currentMonthYear = '';
//   }
// }