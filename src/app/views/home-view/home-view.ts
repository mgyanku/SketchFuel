import { Component } from '@angular/core';
import {PromptGeneratorComponent} from '../../components/prompt-generator-component/prompt-generator-component';

@Component({
  selector: 'app-home',
  imports: [PromptGeneratorComponent],
  templateUrl: './home-view.html',
  styleUrl: './home-view.css'
})
export class HomeView {

}
