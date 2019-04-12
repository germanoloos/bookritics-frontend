import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Book } from '../../model/book.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  books: Array<Book>;
  constructor(private _sanitizer: DomSanitizer, private bookService: BookService) {
    this.bookService.getRating().subscribe((responseApi: []) => {
      if (responseApi){
        this.books = responseApi;
        console.log(this.books);
      }
    }, err => {
      console.log({
        type: 'error',
        text: err.message
      });
    });
  }

  ngOnInit() {
  }

}
