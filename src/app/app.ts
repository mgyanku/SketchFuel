import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderView} from './views/header-view/header-view';
import {HomeView} from './views/home-view/home-view';
import {PromptGeneratorView} from './views/prompt-generator-view/prompt-generator-view';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderView, HomeView, PromptGeneratorView],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SketchFuel');
}
