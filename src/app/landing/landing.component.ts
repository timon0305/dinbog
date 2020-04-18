import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private _router: Router,
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  sign_up() {
    this._router.navigate(['wizard/sign_up'])
  }
  business_sign() {
    this._router.navigate(['wizard/business'])
  }
}
