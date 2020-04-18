import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TalentComponent implements OnInit {


  files: File[] = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {

  }
}
