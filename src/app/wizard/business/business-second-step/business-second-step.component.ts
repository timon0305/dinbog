import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-second-step',
  templateUrl: './business-second-step.component.html',
  styleUrls: ['./business-second-step.component.scss']
})
export class BusinessSecondStepComponent implements OnInit {

  constructor() { }
  files: File[] = [];

  selected = '';
  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
