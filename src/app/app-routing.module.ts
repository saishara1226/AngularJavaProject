import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './books/books.component';
import { BooksIssuedComponent } from './books-issued/books-issued.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddBooksComponent } from './add-books/add-books.component';


const ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'books', component: BooksComponent
  },
  {
    path: 'books-issued',component: BooksIssuedComponent
  },
  {
    path: 'header',component: HeaderComponent
  },
  {
    path: 'footer',component: FooterComponent
  },
  {
    path: 'add-user',component: AddUserComponent
  },
  {
    path: 'add-books',component: AddBooksComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES, { onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
