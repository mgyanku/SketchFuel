import { Component } from '@angular/core';
import {PromptService} from '../../service/prompt-service/prompt-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prompt-generator',
  imports: [CommonModule],
  templateUrl: './prompt-generator-component.html',
  styleUrl: './prompt-generator-component.css'
})
export class PromptGeneratorComponent {
  prompt: string = '';

  constructor(private promptService: PromptService) {
  }

  generatePrompt() {
    this.promptService.getRandom().subscribe((res: any) => {
      this.prompt = res.prompt;
    });
  }

  ngOnInit() {
    this.generatePrompt()
  }
}
