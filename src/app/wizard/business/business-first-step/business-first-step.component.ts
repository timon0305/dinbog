import {Component, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-business-first-step',
  templateUrl: './business-first-step.component.html',
  styleUrls: ['./business-first-step.component.scss']
})


export class BusinessFirstStepComponent implements OnInit {

  constructor(
    private elm: ElementRef,
    private render: Renderer2
  ) { }

  defaultcolor: string = 'black';
  Highlightedcolor : string = 'red';
  @HostBinding('style.color') color: string  = this.defaultcolor;

  public category = [];

  ngOnInit(): void {
    this.category = [
      {id: '1', image: 'Abbott.jpg', name: 'Brand'},
      {id: '2', image: 'alice.jpg', name: 'Concerts'},
      {id: '3', image: 'andrew.jpg', name: 'Contest'},
      {id: '4', image: 'Arnold.jpg', name: 'Digital Model'},
      {id: '5', image: 'Barrera.jpg', name: 'Beauty'},
      {id: '6', image: 'Blair.jpg', name: 'Events'},
      {id: '7', image: 'Boyle.jpg', name: 'Festival'},
      {id: '8', image: 'carl.jpg', name: 'Instructor & University'},
      {id: '9', image: 'Christy.jpg', name: 'Locations'},
      {id: '10', image: 'Copeland.jpg', name: 'Miss Media'},
      {id: '11', image: 'danielle.jpg', name: 'Model Agency'},
      {id: '12', image: 'Estes.jpg', name: 'Movies'},
      {id: '13', image: 'garry.jpg', name: 'Musical Groups'},
      {id: '14', image: 'Tillman.jpg', name: 'Nutritionist & Fitness'},
      {id: '15', image: 'Harper.jpg', name: 'Others'},
      {id: '16', image: 'Helen.jpg', name: 'Photo Studio'},
      {id: '17', image: 'Henderson.jpg', name: 'PQ'},
      {id: '18', image: 'james.jpg', name: 'Prints'},
      {id: '19', image: 'jane.jpg', name: 'Production Company'},
      {id: '20', image: 'Josefina.jpg', name: 'Record Company'},
      {id: '21', image: 'joyce.jpg', name: 'Runway'},
      {id: '22', image: 'katherine.jpg', name: 'Theater'},
      {id: '23', image: 'Reyna.jpg', name: 'Tv Programs'},
    ]
  }

}
