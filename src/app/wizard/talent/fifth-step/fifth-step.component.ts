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
  files: File[] = [];
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

  talent_Success() {
      this._router.navigate(['wizard/success-talent'])
  }
}
