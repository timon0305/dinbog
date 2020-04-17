import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';

interface Year {
  value: string;
  viewValue: string;
}

interface Month {
  value: string;
  viewValue: string;
}

interface Day {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FirstStepComponent implements OnInit {


  years: Year[] = [
    {value: '2010', viewValue: '2010'},
    {value: '2011', viewValue: '2011'},
    {value: '2012', viewValue: '2012'}
  ];

  months: Month[] = [
    {value: 'January', viewValue: 'January'},
    {value: 'February', viewValue:'February'},
    {value: 'March', viewValue: 'March'}
  ];

  days: Day[] = [
    {value: 'One', viewValue: 'One'},
    {value: 'Two', viewValue:'Two'},
    {value: 'Three', viewValue: 'Three'}
  ];
  files: File[] = [];
  firstFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      year: [''],
      month: [''],
      day: ['']
    });
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
