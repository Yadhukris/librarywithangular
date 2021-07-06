import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  getBook(id:any){
    return this.http.get("http://localhost:3000/api/"+id);
  }

  getBooks(){
    return this.http.get("http://localhost:3000/api/books");
  }
  newBook(book:any)
  {   
   return this.http.post("http://localhost:3000/api/insert",book)
    .subscribe(data =>{console.log(data)})
  }
  deleteBook(id:any)
  {
    console.log('inside service delete')
    console.log(id)
    return this.http.delete("http://localhost:3000/api/remove/"+id)
    .subscribe(data =>{console.log(data)})
  }
  editBook(book:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/api/update",book)
    .subscribe(data =>{console.log(data)})
  }
}
