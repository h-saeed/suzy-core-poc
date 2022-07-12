import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSurveyComponent } from './ui-survey.component';

describe('UiSurveyComponent', () => {
  let component: UiSurveyComponent;
  let fixture: ComponentFixture<UiSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiSurveyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
