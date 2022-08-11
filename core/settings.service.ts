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
export class SettingsService {

  constructor( public http:HttpClient) { }
  viewsetting (obj:any){
    return this.http.post ('https://devtraxapi.axelautomotive.com/api/setting/getSettings?cora_Id=1',obj,headData)
  }
setsetting(obj:any){
  return this.http.post('https://devtraxapi.axelautomotive.com/api/setting/saveSettings',JSON.stringify(obj),headData)
}
getsetting(obj:any){
  return this.http.post ('https://devtraxapi.axelautomotive.com/api/setting/getSettings?cora_Id=1',obj,headData)
  }
}

