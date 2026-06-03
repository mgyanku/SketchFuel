import { Component } from '@angular/core';
import {PromptGeneratorComponent} from '../../components/prompt-generator-component/prompt-generator-component';
import {ImagePalette} from '../../components/image-palette/image-palette';
import {ColorPalette} from '../../components/color-palette/color-palette';

@Component({
  selector: 'app-home',
  imports: [PromptGeneratorComponent, ImagePalette, ColorPalette],
  templateUrl: './home-view.html',
  styleUrl: './home-view.css'
})
export class HomeView {

}
