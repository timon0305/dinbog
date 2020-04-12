import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LikesModalComponent} from './likes-modal/likes-modal.component';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainContentComponent implements OnInit {

  public success: string;
  status = false;
  modal: boolean;
  constructor(public dialog: MatDialog) {
    this.modal = true
  }
  @ViewChild('tooltip') manualTooltip: MatTooltip;

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
