import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';



@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  public ELEMENT_DATA = [];

 constructor(
   private _router: Router
 ) { }

  ngOnInit(): void {
    this.ELEMENT_DATA = [
      {name: 'Like',  symbol: '100'},
      {name: 'Friends',  symbol: '50'},
      {name: 'Following',  symbol: '140'},
      {name: 'Followers', symbol: '500'},
      {name: 'Visits', symbol: '300'}
    ]
  }

  profile_view() {
   this._router.navigate(['home/profile'])
  }
}

