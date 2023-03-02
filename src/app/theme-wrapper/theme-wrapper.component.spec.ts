import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeWrapperComponent } from './theme-wrapper.component';

describe('ThemeWrapperComponent', () => {
  let component: ThemeWrapperComponent;
  let fixture: ComponentFixture<ThemeWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThemeWrapperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
