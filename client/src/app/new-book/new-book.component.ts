import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  book={title:'',
        author:'',
        genre:'',
        imageUrl:''};
  title="Add New Book"
  constructor(private bookService: BookService,private router: Router) { }

  ngOnInit(): void {
  }
  addBook()
  {    
    this.bookService.newBook(this.book);   
    alert("Success");
    this.router.navigate(['/']);
  }
}
