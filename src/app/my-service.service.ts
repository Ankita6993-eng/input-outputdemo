import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.url)
  }
  postUser(user:any){
    return this.http.post(this.url,user)
  }
  updateUser(user:any){
    return this.http.put(this.url+'/'+user.id,user)
  }
}
