import { Injectable } from '@angular/core';
import { Book } from '../model/book.model';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //classe vai ser compartilhada
  public static instance: SharedService = null;

  constructor() { 
    //sempre que alguem chamar vou retornar a instancia atual
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance(){
    if (this.instance == null){
      this.instance = new SharedService();
    }
    return this.instance;
  }

  public getBooks(){
    return JSON.parse(sessionStorage.getItem('booksStorage')) || [];
  }

  public setBooks(books: Array<Book>){
    sessionStorage.setItem('booksStorage', JSON.stringify(books));
  }
  
  public getUser(){
    return JSON.parse(sessionStorage.getItem('userStorage')) || [];
  }

  public setUser(user: User){
    sessionStorage.setItem('userStorage', JSON.stringify(user));
  }
}
