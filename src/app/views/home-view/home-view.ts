import { Component } from '@angular/core';
import {PromptGeneratorView} from '../prompt-generator-view/prompt-generator-view';

@Component({
  selector: 'app-home',
  imports: [PromptGeneratorView],
  templateUrl: './home-view.html',
  styleUrl: './home-view.css'
})
export class HomeView {

}
