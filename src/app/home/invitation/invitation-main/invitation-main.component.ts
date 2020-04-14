import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invitation-main',
  templateUrl: './invitation-main.component.html',
  styleUrls: ['./invitation-main.component.scss']
})
export class InvitationMainComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }
  invitation_manage_all() {
    this._router.navigate(['home/invitation_manage_all'])
  }

}
