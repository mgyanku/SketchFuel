import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptGeneratorComponent } from './prompt-generator-component';

describe('PromptGenerator', () => {
  let component: PromptGeneratorComponent;
  let fixture: ComponentFixture<PromptGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
