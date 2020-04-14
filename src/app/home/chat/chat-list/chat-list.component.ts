import {Component, OnInit, ViewEncapsulation} from '@angular/core';

export interface Messages {
  avatar: string;
  name: string;
  message: string;
  days: string;
  status: boolean;
}

const message_data: Messages[] = [
  {status: false, avatar: 'face11.jpg' ,name: 'Amanda Smith', message: 'mentioned you in a comment', days: '9:40 am'},
  {status: true, avatar: 'face12.jpg' ,name: 'Katie Angel',message: 'is now your friend', days: 'Mon'},
  {status: false, avatar: 'face23.jpg' ,name: 'jobanna Darr',message: 'is now following you', days: 'Wed'},
  {status: false, avatar: 'face14.jpg' ,name: 'Andres Reque',message: 'has confirmed the request', days: 'Thu'},
  {status: true, avatar: 'face15.jpg' ,name: 'Rocio Mirand',message: 'has rejected the request', days: 'Fri'},
  {status: true, avatar: 'face16.jpg' ,name: 'Call Mesolan',message: 'commented your post', days: 'Sat'},
  {status: true, avatar: 'face17.jpg' ,name: 'Virginia',message: 'likes your post', days: 'Sun'},
  {status: false, avatar: 'face11.jpg' ,name: 'Amanda Smith', message: 'mentioned you in a comment', days: '9:40 am'},
  {status: false, avatar: 'face12.jpg' ,name: 'Katie Angel',message: 'is now your friend', days: 'Mon'},
  {status: true, avatar: 'face23.jpg' ,name: 'jobanna Darr',message: 'is now following you', days: 'Wed'},
  {status: false, avatar: 'face14.jpg' ,name: 'Andres Reque',message: 'has confirmed the request', days: 'Thu'},
  {status: true, avatar: 'face15.jpg' ,name: 'Rocio Mirand',message: 'has rejected the request', days: 'Fri'},
  {status: false, avatar: 'face16.jpg' ,name: 'Call Mesolan',message: 'commented your post', days: 'Sat'},
  {status: false, avatar: 'face17.jpg' ,name: 'Virginia',message: 'likes your post', days: 'Sun'},
  {status: false, avatar: 'face11.jpg' ,name: 'Amanda Smith', message: 'mentioned you in a comment', days: '9:40 am'},
  {status: true, avatar: 'face12.jpg' ,name: 'Katie Angel',message: 'is now your friend', days: 'Mon'},
  {status: false, avatar: 'face23.jpg' ,name: 'jobanna Darr',message: 'is now following you', days: 'Wed'},
  {status: false, avatar: 'face14.jpg' ,name: 'Andres Reque',message: 'has confirmed the request', days: 'Thu'},
  {status: true, avatar: 'face15.jpg' ,name: 'Rocio Mirand',message: 'has rejected the request', days: 'Fri'},
  {status: false, avatar: 'face16.jpg' ,name: 'Call Mesolan',message: 'commented your post', days: 'Sat'},
  {status: false, avatar: 'face17.jpg' ,name: 'Virginia',message: 'likes your post', days: 'Sun'},
];

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatListComponent implements OnInit {

  constructor() { }

  message_column: string[] = [ 'message', 'days'];
  message_all = message_data;

  ngOnInit(): void {
  }

}
