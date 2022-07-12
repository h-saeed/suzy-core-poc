import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  steps = {};
  constructor() { 
    this.steps = [
        {
          key: 'create',
          url: '/brand/:brandId/survey/create',
          priority: 0,
          title: 'surveyStepper.step1'
        },
        {
          key: 'edit',
          url: '/brand/:brandId/survey/:missionId/edit',
          priority: 0,
          title: 'surveyStepper.step1'
        },
        {
          key: 'questions',
          url: '/brand/:brandId/survey/:missionId/edit/question-setup',
          priority: 1,
          title: 'surveyStepper.step2'
        },
        {
          key: 'review',
          url: '/brand/:brandId/survey/:missionId/edit/review',
          priority: 2,
          title: 'surveyStepper.step3',
          icon: 'assignment_turned_in'
        }
      ]
  }

  getStepper() {
    return this.steps;
  }
}
