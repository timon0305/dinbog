import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, Validators} from '@angular/forms';
import {BusinessService} from '../../../../@core/service/business.service'
import {map, startWith, switchMap, filter} from 'rxjs/operators';



@Component({
  selector: 'app-business-third-step',
  templateUrl: './business-third-step.component.html',
  styleUrls: ['./business-third-step.component.scss']
})
export class BusinessThirdStepComponent implements OnInit {

  $allBooks: Observable<Book[]>;
  $filteredBooks: Observable<Book[]>;
  constructor(
    private formBuilder: FormBuilder,
    private businessService: BusinessService
  ) { }

  ngOnInit() {
    this.$allBooks = this.businessService.getAllBusinesses();
    this.$filteredBooks = this.book.valueChanges
      .pipe(
        startWith(''),
        switchMap(value => this.filterBooks(value))
      );
  }

  private filterBooks(value: string | Book) {
    let filterValue = '';
    if (value) {
      filterValue = typeof value === 'string' ? value.toLowerCase() : value.name.toLowerCase();
      return this.$allBooks.pipe(
        map(books => books.filter(book => book.name.toLowerCase().includes(filterValue)))
      );
    } else {
      return this.$allBooks;
    }
  }
  public displayFn(book?: Book): string | undefined {
    return book ? book.name: undefined;
  }

  bookForm = this.formBuilder.group({
    book: [null, Validators.required]
  });

  get book() {
    return this.bookForm.get('book')
  }

  onFormSubmit() {
    this.businessService.saveBook(this.bookForm.value);
    this.resetForm();
  }

  resetForm() {
    this.bookForm.reset();
  }
}


export interface Book {
 id: number;
 name: string;
 writer: string
}
