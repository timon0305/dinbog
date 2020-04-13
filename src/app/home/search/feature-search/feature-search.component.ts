import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feature-search',
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss'],
  encapsulation: ViewEncapsulation.None
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

