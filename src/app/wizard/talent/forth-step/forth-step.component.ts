import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forth-step',
  templateUrl: './forth-step.component.html',
  styleUrls: ['./forth-step.component.scss']
})
export class ForthStepComponent implements OnInit {

  files: File[] = [];
  forthFormGroup: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
    });
  }

}
