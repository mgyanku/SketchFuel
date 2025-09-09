import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeView} from './views/home-view/home-view';
import {PromptGeneratorComponent} from './components/prompt-generator-component/prompt-generator-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeView, PromptGeneratorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SketchFuel');
}
