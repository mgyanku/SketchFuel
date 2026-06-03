import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePalette } from './image-palette';

describe('ImagePalette', () => {
  let component: ImagePalette;
  let fixture: ComponentFixture<ImagePalette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePalette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePalette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
