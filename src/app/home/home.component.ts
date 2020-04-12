import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SupportComponent} from './navbar/support/support.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private success: string;
  constructor(private dialog: MatDialog) { }

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
}
