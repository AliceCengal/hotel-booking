import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from "./header/header";
import { delay, of } from "rxjs";
import { CommonModule } from '@angular/common';
import rooms_data from '../utils/rooms-data.json'
import { AppRoomCardComponent } from "./room-card/room-card";
import { BOOKED_KEY } from '../utils/interfaces';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeader, CommonModule, AppRoomCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hotel-booking');
  protected readonly rooms$ = of(rooms_data).pipe(delay(2000)) // simulate network lag

  constructor() {
    // reset booked state to ease testing
    localStorage.setItem(BOOKED_KEY, "{}")
  }
}
