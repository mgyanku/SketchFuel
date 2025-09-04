import { Component } from '@angular/core';
import {PromptGeneratorView} from '../promptGeneratorView/promptGeneratorView';

@Component({
  selector: 'app-home',
  imports: [PromptGeneratorView],
  templateUrl: './homeView.html',
  styleUrl: './homeView.css'
})
export class HomeView {

}
