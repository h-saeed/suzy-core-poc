import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureMissionContainerComponent } from './feature-mission.component';

describe('FeatureMissionContainerComponent', () => {
  let component: FeatureMissionContainerComponent;
  let fixture: ComponentFixture<FeatureMissionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureMissionContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureMissionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
