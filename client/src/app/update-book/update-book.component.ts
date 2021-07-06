import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  book={title:'',
  author:'',
  genre:'',
  imageUrl:'',
  _id:''};
  title='Update Book Details'
  constructor(private router:Router,private bookService:BookService) { }

  ngOnInit(): void {
    let bookId = localStorage.getItem("editBookId");
    this.bookService.getBook(bookId).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
  })
  }
  editBook()
  {    
    this.bookService.editBook(this.book);   
    alert("Success");
    this.router.navigate(['/']);
  }

}
