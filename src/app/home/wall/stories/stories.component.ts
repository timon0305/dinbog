import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  public ELEMENT_DATA = [];

  constructor() { }

  ngOnInit(): void {
    this.ELEMENT_DATA = [
      {photo: 'avatar2.png',  name: 'Vladivasar Constantino', date: '10.30 A.M'},
      {photo: 'avatar3.png',  name: 'Alexandra Iwanovich', date: '02.30 P.M'},
      {photo: 'avatar5.png',  name: 'Dragon Worries', date: '12.32 A.M'},
    ]
  }

}
