import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {LikesModalComponent} from './likes-modal/likes-modal.component';
import {MatTooltip} from '@angular/material/tooltip';
import {PostComponent} from './post/post.component';

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

  article_post(): void {
    const dialogRef = this.dialog.open(PostComponent, {
      width: '70%',
      height: '800px',
      panelClass: 'app-full-bleed-dialog',
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
