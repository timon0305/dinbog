import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SuccessComponent} from './success/success.component';
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
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TalentComponent implements OnInit {

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
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  success: string;

  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      year: [''],
      month: [''],
      day: ['']
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.forthFormGroup = this._formBuilder.group({
      forthCtrl: ['', Validators.required]
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

  talent_Success(): void {
      const dialogRef = this.dialog.open(SuccessComponent, {
        width: '60%',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        this.success = result;
      })
  }

}
