import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contextual-search',
  templateUrl: './contextual-search.component.html',
  styleUrls: ['./contextual-search.component.scss']
})
export class ContextualSearchComponent implements OnInit {

  constructor() { }

  public titles=[
    {id: 1, title: 'Talents', subtitle: '50', status: true},
    {id: 2, title: 'Business Pages', subtitle: '50', status: false},
    {id: 3, title: 'Fans', subtitle: '50', status: false},
    {id: 4, title: 'Castings', subtitle: '50', status: false},
    {id: 5, title: 'Post', subtitle: '50', status: false},
  ];
  ngOnInit(): void {
  }

}
