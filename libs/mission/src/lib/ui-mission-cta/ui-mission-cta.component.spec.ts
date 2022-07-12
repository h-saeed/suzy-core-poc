import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiMissionCtaComponent } from './ui-mission-cta.component';

describe('UiMissionCtaComponent', () => {
  let component: UiMissionCtaComponent;
  let fixture: ComponentFixture<UiMissionCtaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiMissionCtaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiMissionCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
