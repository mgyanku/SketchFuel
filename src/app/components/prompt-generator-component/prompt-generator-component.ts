import { Component } from '@angular/core';
import {PromptService} from '../../service/prompt-service/prompt-service';

@Component({
  selector: 'app-prompt-generator',
  imports: [],
  templateUrl: './prompt-generator-component.html',
  styleUrl: './prompt-generator-component.css'
})
export class PromptGeneratorComponent {
  prompt: string = '';

  constructor(private promptService: PromptService) {
  }

  ngOnInit() {
    this.promptService.getRandom().subscribe((res: any) => {
      this.prompt = res.prompt;
    });
  }
}
