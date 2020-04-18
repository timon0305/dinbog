import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-profile-main',
  templateUrl: './profile-main.component.html',
  styleUrls: ['./profile-main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileMainComponent implements OnInit {

  constructor() { }

  panelOpenState = false;

  ngOnInit(): void {
  }
  files1: File[] = [];
  files2: File[] = [];

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
}
