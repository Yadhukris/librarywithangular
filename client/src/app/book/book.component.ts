import { Component, OnInit } from '@angular/core';
import {BookService} from '../book.service';
import { ActivatedRoute,Router } from '@angular/router'
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookFetched={title:'',
                author:'',
                genre:'',
                imageUrl:'',
                _id:''};
  title='Book Details';
  id='';
  
  constructor(private bookService: BookService,private router:Router,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this._Activatedroute.snapshot.params['id'];  
 
   //    this.id=this._Activatedroute.snapshot.paramMap.get("id");
   //this.bookService.getBook(this.id).subscribe((data)=>{
    //this.book=JSON.parse(JSON.stringify(data));
      
   this.bookService.getBook(this.id).subscribe((data)=>{
    this.bookFetched=JSON.parse(JSON.stringify(data));
   });
  }

  editBook(bookFetched:any){
    localStorage.setItem("editBookId", bookFetched._id.toString());
    this.router.navigate(['update']);
  };
  deleteBook(id:any){
    console.log("client ts delte")
    this.bookService.deleteBook(id);
    this.router.navigate(['/books']);
  
  };

}
