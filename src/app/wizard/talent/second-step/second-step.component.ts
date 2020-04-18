import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SecondStepComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  files1: File[] = [];
  files2: File[] = [];
  files3: File[] = [];
  files4: File[] = [];
  secondFormGroup: FormGroup;
  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  onSelect(event) {
    console.log(event);
    this.files1.push(...event.addedFiles);
  }
  onRemove(event) {
    console.log(event);
    this.files1.splice(this.files1.indexOf(event), 1);
  }

  onSelect(event) {
    console.log(event);
    this.files2.push(...event.addedFiles);
  }
  onRemove(event) {
    console.log(event);
    this.files2.splice(this.files2.indexOf(event), 1);
  }

  onSelect(event) {
    console.log(event);
    this.files3.push(...event.addedFiles);
  }
  onRemove(event) {
    console.log(event);
    this.files3.splice(this.files3.indexOf(event), 1);
  }

  onSelect(event) {
    console.log(event);
    this.files4.push(...event.addedFiles);
  }
  onRemove(event) {
    console.log(event);
    this.files4.splice(this.files4.indexOf(event), 1);
  }
}
