import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { NewBookComponent } from './new-book/new-book.component';
import {FormsModule} from '@angular/forms';
import {BookService} from './book.service';
import { UpdateBookComponent } from './update-book/update-book.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    BookComponent,
    NewBookComponent,
    UpdateBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
