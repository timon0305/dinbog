import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes-modal',
  templateUrl: './likes-modal.component.html',
  styleUrls: ['./likes-modal.component.scss']
})
export class LikesModalComponent implements OnInit {

  public ELEMENT_DATA = [];
  constructor() { }

  ngOnInit(): void {
    this.ELEMENT_DATA = [
      {id: 1, avatar: 'face1.jpg', name: 'Alexia Noeje', job: 'Photographer', country: 'br', country_name: 'Brazil', status:true},
      {id: 2, avatar: 'face2.jpg', name: 'Basshed Kime', job: 'Designer', country: 'de', country_name: 'Detch', status: true },
      {id: 3, avatar: 'face3.jpg', name: 'Geroie Iwanns', job: 'Model', country: 'fr', country_name: 'France', status: true },
      {id: 4, avatar: 'face4.jpg', name: 'Ikeek meaje', job: 'CEO', country: 'hm', country_name: 'Australia', status : true },
      {id: 5, avatar: 'face5.jpg', name: 'Xdein NPeke', job: 'Manager', country: 'kn', country_name: 'Kenia', status: true }
    ]
  }

  following(id) {
   this.ELEMENT_DATA.forEach(function (item) {
     if(item.id === id) {

       item.status = !item.status;
     }
   })
  }

}
