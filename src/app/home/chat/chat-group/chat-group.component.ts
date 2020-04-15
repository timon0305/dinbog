import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-chat-group',
  templateUrl: './chat-group.component.html',
  styleUrls: ['./chat-group.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatGroupComponent implements OnInit {

  files: File[] = [];
  constructor() { }
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
