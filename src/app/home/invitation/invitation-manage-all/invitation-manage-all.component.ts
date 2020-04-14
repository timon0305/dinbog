import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface Invitation_All {
  country_name: string;
  avatar: string;
  name: string;
  job: string;
  country: string;
}

const ELEMENT_DATA: Invitation_All[] = [
  {country_name: 'Caracas, Venezuela',avatar: 'face11.jpg' ,name: 'Amanda Smith', job: 'Model-Dancing-Singer', country: 'VE'},
  {country_name: 'Caracas, Venezuela',avatar: 'face12.jpg' ,name: 'Katie Angel', job: 'Model', country: 'VE'},
  {country_name: 'Caracas, Venezuela',avatar: 'face23.jpg' ,name: 'jobanna Darrios', job: 'Model-Dancing', country: 'VE'},
  {country_name: 'Caracas, Venezuela',avatar: 'face14.jpg' ,name: 'Andres Requena', job: 'Singer', country: 'VE'},
  {country_name: 'Caracas, Venezuela',avatar: 'face15.jpg' ,name: 'Rocio Miranda', job: 'Actress', country: 'VE'},
  {country_name: 'Caracas, Venezuela',avatar: 'face16.jpg' ,name: 'Call Mesolana', job: 'Hair Stylelist', country: 'VE'},
  {country_name: 'Caracas, Venezuela',avatar: 'face17.jpg' ,name: 'Virginia', job: 'Model', country: 'VE'},
  {country_name: 'Caracas, Venezuela',avatar: 'face24.jpg' ,name: 'Call Mesolana', job: 'Hair Stylelist', country: 'VE'},
  {country_name: 'Caracas, Venezuela',avatar: 'face18.jpg' ,name: 'Virginia', job: 'Model', country: 'VE'}
];

@Component({
  selector: 'app-invitation-manage-all',
  templateUrl: './invitation-manage-all.component.html',
  styleUrls: ['./invitation-manage-all.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InvitationManageAllComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['select' ,'name', 'job', 'country'];
  dataSource = new MatTableDataSource<Invitation_All>(ELEMENT_DATA);
  selection = new SelectionModel<Invitation_All>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Invitation_All): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
  }


  ngOnInit(): void {
  }

}
