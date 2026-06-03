import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeView} from './views/home-view/home-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SketchFuel');
}
