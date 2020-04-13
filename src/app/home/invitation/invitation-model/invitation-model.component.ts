import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitation-model',
  templateUrl: './invitation-model.component.html',
  styleUrls: ['./invitation-model.component.scss']
})
export class InvitationModelComponent implements OnInit {

  public ELEMENT_DATA = [];
  constructor() { }

  ngOnInit(): void {
    this.ELEMENT_DATA = [
      {name: 'Like',  symbol: '100'},
      {name: 'Friends',  symbol: '50'},
      {name: 'Following',  symbol: '140'},
      {name: 'Followers', symbol: '500'},
      {name: 'Visits', symbol: '300'}
    ]
  }

}
