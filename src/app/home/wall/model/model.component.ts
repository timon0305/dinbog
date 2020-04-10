import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss']
})
export class ModelComponent implements OnInit {

  public ELEMENT_DATA = [];

 constructor() { }

  ngOnInit(): void {
    this.ELEMENT_DATA = [
      {name: 'Hydrogen',  symbol: '100'},
      {name: 'Helium',  symbol: '50'},
      {name: 'Lithium',  symbol: '140'},
      {name: 'Beryllium', symbol: '500'}
    ]
  }

}

