import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { NewBookComponent } from './new-book/new-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path:'',
  redirectTo: '/books',
  pathMatch:'full'
},
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'book/:id',
    component:BookComponent
  },
  {
    path:'addbook',
    component:NewBookComponent
  },
  {
    path:'update',
    component:UpdateBookComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
