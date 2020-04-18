import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessComponent implements OnInit {

  files: File[] = [];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
