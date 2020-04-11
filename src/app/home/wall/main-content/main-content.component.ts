import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LikesModalComponent} from './likes-modal/likes-modal.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  public success: string;
  status = false;
  modal: boolean;
  constructor(public dialog: MatDialog) {
    this.modal = true
  }

  ngOnInit(): void {

  }


  likes_modal(): void {
    const dialogRef = this.dialog.open(LikesModalComponent, {
      width: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.success = result
    })
  }

  onValChange() {
    this.status = !this.status;

  }
}
