import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-talent-category',
  templateUrl: './talent-category.component.html',
  styleUrls: ['./talent-category.component.scss']
})
export class TalentCategoryComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
  }
  category_done() {
    this._router.navigate(['wizard/talent'])
  }
}
