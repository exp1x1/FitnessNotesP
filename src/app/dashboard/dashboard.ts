import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Navbar } from '../shared/components/layout/navbar/navbar';
import { WeekBoard } from './components/week-board/week-board';
// import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  // imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  imports: [Navbar, ButtonModule, WeekBoard],
})
export class Dashboard {}
