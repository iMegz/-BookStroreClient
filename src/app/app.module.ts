import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { LoginComponent } from './component/login/login.component';
import { AddBookComponent } from './component/add-book/add-book.component';
import { ListBooksComponent } from './component/list-books/list-books.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { CartComponent } from './component/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AddBookComponent,
    ListBooksComponent,
    SignUpComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
