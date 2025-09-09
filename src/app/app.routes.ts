import { Routes } from '@angular/router';
import {HomeView} from './views/home-view/home-view';
import {PromptGeneratorView} from './views/prompt-generator-view/prompt-generator-view';

export const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'prompt-generator', component: PromptGeneratorView },
  { path: '**', redirectTo: '' }
];
