import { Routes } from '@angular/router';
import {HomeView} from './views/homeView/homeView';
import {PromptGeneratorView} from './views/promptGeneratorView/promptGeneratorView';

export const routes: Routes = [
  { path: '', component: HomeView },
  { path: 'prompt-generator', component: PromptGeneratorView },
  { path: '**', redirectTo: '' }
];
