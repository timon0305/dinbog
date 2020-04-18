import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {book} from 'ionicons/icons';

export interface Book {
  id: number;
  name: string;
  writer: string
}

const ALL_BUSINESSES: Book[] = [
  { id: 101, name: 'Godaan', writer: 'Premchand' },
  { id: 102, name: 'Karmabhoomi', writer: 'Premchand' },
  { id: 103, name: 'Pinjar', writer: 'Amrita Pritam' },
  { id: 104, name: 'Kore Kagaz', writer: 'Amrita Pritam' },
  { id: 105, name: 'Nirmala', writer: 'Premchand' },
  { id: 106, name: 'Seva Sadan', writer: 'Premchand' }
];

@Injectable({
  providedIn: 'root'
})

export class BusinessService {
  getAllBusinesses() {
    return of(ALL_BUSINESSES)
  }

  saveBook(books) {
    console.log(JSON.stringify(book))
  }
}
