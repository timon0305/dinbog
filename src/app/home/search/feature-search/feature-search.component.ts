import {Component, OnInit, EventEmitter, Inject} from '@angular/core';
import {Router} from '@angular/router';


export interface Filter {
  name: string;
  from: number,
  to: number,
  active: boolean
}

const filter: Filter[] = [
  {name: 'Title1', from: 0, to: 100, active: false},
  {name: 'Title2', from: 0, to: 100, active: false},
  {name: 'Title3', from: 0, to: 100, active: false},
  {name: 'Title4', from: 0, to: 100, active: false},
  {name: 'Title5', from: 0, to: 100, active: false}
];


@Component({
  selector: 'app-feature-search',
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss']
})
export class FeatureSearchComponent implements OnInit {
  constructor(
    private _router: Router
  ) {
  }

  ngOnInit(): void {
  }

  contextual_search() {
    this._router.navigate(['home/contextual_search'])
  }
}

