import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fifth-step',
  templateUrl: './fifth-step.component.html',
  styleUrls: ['./fifth-step.component.scss']
})
export class FifthStepComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }
  files1: File[] = [];
  files2: File[] = [];
  ngOnInit(): void {
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

  talent_Success() {
      this._router.navigate(['wizard/success-talent'])
  }
}
