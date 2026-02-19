import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { AppHeader } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavbar, AppHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Front-Dev-Statique');

  name: string = "Paul";
}
