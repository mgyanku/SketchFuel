import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderView} from './views/headerView/headerView';
import {HomeView} from './views/homeView/homeView';
import {PromptGeneratorView} from './views/promptGeneratorView/promptGeneratorView';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderView, HomeView, PromptGeneratorView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SketchFuel');
}
