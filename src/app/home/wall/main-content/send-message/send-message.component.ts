import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SendMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
