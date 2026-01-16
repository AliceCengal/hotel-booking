import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class AppHeader {
  protected readonly title = signal('Boutique Hotel');
}
