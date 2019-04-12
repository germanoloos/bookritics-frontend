import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { HTTP_API } from 'src/app/services/backend.const';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  register(user: User){
    return this.http.post(`${HTTP_API}/register/user`, user);
  }
}
