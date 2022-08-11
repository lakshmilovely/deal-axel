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
export class RolesService {
  constructor(public http:HttpClient) { }
  save(obj:any){
    return this.http.post('https://devtraxapi.axelautomotive.com/api/Roles/saveRoles',JSON.stringify(obj),headData)
  }
  view(){
    return this.http.get('https://devtraxapi.axelautomotive.com/api/Roles/allRoles',headData)
  }
  getrolebyid(obj:any){
     return this.http.get('https://devtraxapi.axelautomotive.com/api/Roles/roleById?id='+obj,headData)
  }
  editrole(obj:any){
    return this.http.post('https://devtraxapi.axelautomotive.com/api/Roles/upDateRoles',JSON.stringify(obj),headData)
  }
  deleterole(obj:any){
   // return this.http.get('https://devtraxapi.axelautomotive.com/api/Roles/roleById',JSON.stringify(obj),headData)
  }
}
