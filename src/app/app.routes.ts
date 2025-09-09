import { Routes } from '@angular/router';
import {HomeView} from './views/home-view/home-view';
import {PromptGeneratorComponent} from './components/prompt-generator-component/prompt-generator-component';

export const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'prompt-generator', component: PromptGeneratorComponent },
  { path: '**', redirectTo: '' }
];
