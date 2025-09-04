import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptGeneratorView } from './promptGeneratorView';

describe('PromptGenerator', () => {
  let component: PromptGeneratorView;
  let fixture: ComponentFixture<PromptGeneratorView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptGeneratorView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptGeneratorView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
