import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  notification_column: string[] = [ 'message', 'days'];
  notifi_data = notification_data;
  ngOnInit(): void {
  }

}

export interface Notification {
  avatar: string;
  name: string;
  message: string;
  days: string;
}

const notification_data: Notification[] = [
  {avatar: 'face11.jpg' ,name: 'Amanda Smith', message: 'mentioned you in a comment', days: '2020 April -  9:40 am'},
  {avatar: 'face12.jpg' ,name: 'Katie Angel',message: 'is now your friend', days: '2020 March 09 - Mon'},
  {avatar: 'face23.jpg' ,name: 'jobanna Darr',message: 'is now following you', days: 'Wed'},
  {avatar: 'face14.jpg' ,name: 'Andres Reque',message: 'has confirmed the request', days: 'Thu'},
  {avatar: 'face15.jpg' ,name: 'Rocio Mirand',message: 'has rejected the request', days: 'Fri'},
  {avatar: 'face16.jpg' ,name: 'Call Mesolan',message: 'commented your post', days: 'Sat'},
  {avatar: 'face17.jpg' ,name: 'Virginia',message: 'likes your post', days: 'Sun'},
];
