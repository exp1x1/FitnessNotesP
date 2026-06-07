import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { $dt } from '@primeuix/themes';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-week-board',
  imports: [CommonModule, CardModule, CarouselModule],
  templateUrl: './week-board.html',
  styleUrl: './week-board.scss',
})
export class WeekBoard implements OnInit {
  ngOnInit() {
    console.log('$dt', $dt('card.shadow'));
  }
  data = {
    weekNo: 49,
    month: 'December',
    year: 2023,
    days: [
      { day: 'Monday', date: '2023-12-04', workOutData: false },
      { day: 'Tuesday', date: '2023-12-05', workOutData: true },
      { day: 'Wednesday', date: '2023-12-06', workOutData: false },
      { day: 'Thursday', date: '2023-12-07', workOutData: true },
      { day: 'Friday', date: '2023-12-08', workOutData: true },
      { day: 'Saturday', date: '2023-12-09', workOutData: false },
      { day: 'Sunday', date: '2023-12-10', workOutData: false },
    ],
  };

  get days() {
    return this.data.days;
  }

  getDateNumber(dateStr: string): number {
    const date = new Date(dateStr);
    return date.getDate();
  }

  stringShortener(str: string, maxLength: number): string {
    return str.slice(0, maxLength);
  }
}
