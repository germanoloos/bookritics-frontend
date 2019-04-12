import { HTTP_API } from 'src/app/services/backend.const';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get(`${HTTP_API}/book/allbooks`);
  }

  getRating(){
    return this.http.get(`${HTTP_API}/book/rating`);
  }

}
