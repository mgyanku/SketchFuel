import { Component } from '@angular/core';
import {PromptGeneratorComponent} from '../../components/prompt-generator-component/prompt-generator-component';
import {ImagePalette} from '../../components/image-palette/image-palette';

@Component({
  selector: 'app-home',
  imports: [PromptGeneratorComponent, ImagePalette],
  templateUrl: './home-view.html',
  styleUrl: './home-view.css'
})
export class HomeView {

}
