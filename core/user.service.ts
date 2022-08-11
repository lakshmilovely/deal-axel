import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const token=localStorage.getItem('UserToken')

const headData={
  headers:new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http:HttpClient) { }
  adduser(obj:any){
    return this.http.post('https://devtraxapi.axelautomotive.com/api/Users/register',JSON.stringify(obj),headData)
  }
  viewuser(){
    return this.http.get('https://devtraxapi.axelautomotive.com/api/Users',headData)
  }
}
