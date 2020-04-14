import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SupportComponent} from './navbar/support/support.component';
import {Router} from '@angular/router';

export interface PeriodicElement {
  country_name: string;
  avatar: string;
  name: string;
  job: string;
  country: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {country_name: 'Venezuela',avatar: 'face11.jpg' ,name: 'Amanda Smith', job: 'Model-Dancing-Singer', country: 'VE'},
  {country_name: 'Venezuela',avatar: 'face12.jpg' ,name: 'Katie Angel', job: 'Model', country: 'VE'},
  {country_name: 'Venezuela',avatar: 'face23.jpg' ,name: 'jobanna Darrios', job: 'Model-Dancing', country: 'VE'},
  {country_name: 'Venezuela',avatar: 'face14.jpg' ,name: 'Andres Requena', job: 'Singer', country: 'VE'},
  {country_name: 'Venezuela',avatar: 'face15.jpg' ,name: 'Rocio Miranda', job: 'Actress', country: 'VE'},
  {country_name: 'Venezuela',avatar: 'face16.jpg' ,name: 'Call Mesolana', job: 'Hair Stylelist', country: 'VE'},
  {country_name: 'Venezuela',avatar: 'face17.jpg' ,name: 'Virginia', job: 'Model', country: 'VE'}
];


export interface Notification {
  avatar: string;
  name: string;
  message: string;
  days: string;
}

const notification_data: Notification[] = [
  {avatar: 'face11.jpg' ,name: 'Amanda Smith', message: 'mentioned you in a comment', days: '9:40 am'},
  {avatar: 'face12.jpg' ,name: 'Katie Angel',message: 'is now your friend', days: 'Mon'},
  {avatar: 'face23.jpg' ,name: 'jobanna Darr',message: 'is now following you', days: 'Wed'},
  {avatar: 'face14.jpg' ,name: 'Andres Reque',message: 'has confirmed the request', days: 'Thu'},
  {avatar: 'face15.jpg' ,name: 'Rocio Mirand',message: 'has rejected the request', days: 'Fri'},
  {avatar: 'face16.jpg' ,name: 'Call Mesolan',message: 'commented your post', days: 'Sat'},
  {avatar: 'face17.jpg' ,name: 'Virginia',message: 'likes your post', days: 'Sun'},
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  private success: string;
  constructor(
    private dialog: MatDialog,
    private _router: Router
    ) { }

  displayedColumns: string[] = ['name', 'job', 'country'];
  dataSource = ELEMENT_DATA;

  notification_column: string[] = [ 'message', 'days'];
  notifi_data = notification_data;

  ngOnInit(): void {
  }

  Support(): void {
    const dialogRef = this.dialog.open(SupportComponent, {
      width: '40%',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.success = result;
    })
  }

  invitation() {
    this._router.navigate(['home/invitation'])
  }
  see_all_notification() {
    this._router.navigate(['home/notification'])
  }
}
