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
}
