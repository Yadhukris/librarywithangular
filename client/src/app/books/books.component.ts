import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books=<any>{};
  title='Books';
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    
    this.bookService.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
  })
  }

}
