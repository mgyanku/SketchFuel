import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderView } from './headerView';

describe('Header', () => {
  let component: HeaderView;
  let fixture: ComponentFixture<HeaderView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
