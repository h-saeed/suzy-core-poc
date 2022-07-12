import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureMissionComponent } from './feature-mission/feature-mission.component';
import { UiStepperComponent } from './ui-stepper/ui-stepper.component';
import { UiSurveyComponent } from './ui-survey/ui-survey.component';
import { RouterModule } from '@angular/router';
import { UiMissionCtaComponent } from './ui-mission-cta/ui-mission-cta.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: UiMissionCtaComponent
      }
    ]),
  ],
  declarations: [
    FeatureMissionComponent,
    UiStepperComponent,
    UiSurveyComponent,
    UiMissionCtaComponent,
  ],
})
export class MissionModule {}
