import { Component, OnInit } from '@angular/core';
import { MissionService } from '../data-access/mission.service';

@Component({
  selector: 'suzy-ui-stepper',
  templateUrl: './ui-stepper.component.html',
  styleUrls: ['./ui-stepper.component.css'],
})
export class UiStepperComponent implements OnInit {
  steps: any;

  constructor(private missionService: MissionService) {

  }
  ngOnInit(): void {
    this.steps = this.missionService.getStepper(); 
  }

}
