import { Component, OnInit } from '@angular/core';
import { TraxserviceService } from '../traxservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  view: any;
  public date=new Date();
  save:boolean=false;
  add12:boolean=false;

  id: any;
  role: any;
  userForm=this.bulider.group({
    UserName:[''],
    Password:[''],
    DName:[''],
    CoreId:[''],
    Title :[''],
    RoleId:[''],
    Status:[''],
    Email:[''],
  })
  datausers: any;
  constructor(private service:TraxserviceService,private modelService:NgbModal,private active:ActivatedRoute,private bulider:FormBuilder) {

   }
views(){
  this.service.users().subscribe((res:any)=>{
    console.log(res);
    this.view=res
  })
}
  ngOnInit(): void {
this.views();

  }
//edit
edit(res:any){
this.add12=false;
this.save=true;
  console.log(res)


    this.userForm=new FormGroup({
      UserName:new FormControl(res['username']),
      Password:new FormControl(res['uPassword']),
      userid:new FormControl(res['uId']),
      DName:new FormControl(res['displayname']),
      CoreId:new FormControl(res['cora_Id']),
      Title:new FormControl(res['title']),
      RoleId:new FormControl(res['urId']),
      Status:new FormControl(res['uActive']),
      Email:new FormControl(res['uEmail'])
    })
this.datausers=res;
}

saveuser(id:any){

  console.log(id);
  const obj={
    "uId": id,
    "uName": this.userForm.value.UserName,
    "uDisplayname":this.userForm.value.DName ,
    "uPassword":"string",
    "uTitle": this.userForm.value.Title,
    "urId": this.userForm.value.RoleId,
    "uAsCoraAcctId": this.userForm.value.CoreId,
    "uEmailId": this.userForm.value.Email,
    "uActive": this.userForm.value.Status,
     "createdTs": this.date,
     "updatedTs":this.date
  }
  console.log(obj)
  this.service.adduser(obj).subscribe((res:any)=>{
    console.log(res);
    this.ngOnInit();
    alert("user updated")
  })


}//edit

// adduser

user(){
  const obj={
    "uId": 0,
    "uName": this.userForm.value.UserName,
    "uDisplayname":this.userForm.value.DName,
    "uPassword": this.userForm.value.Password,
    "uTitle": this.userForm.value.Title,
    "urId": this.userForm.value.RoleId,
    "uAsCoraAcctId": this.userForm.value.CoreId,
    "uEmailId": this.userForm.value.Email,
    "uActive": this.userForm.value.Status
  }
  console.log(obj)
  this.service.adduser(obj).subscribe((res:any)=>{
    console.log(res)
    this.ngOnInit();
    alert ("add user")
  })

}
//adduser
open(content:any){
  this.modelService.open(content)
}


adduser(){
  this.add12=true;
  this.save=false;
  this.userForm.reset();

}

// change(data:any){
//   console.log(data.target.value)
//   this.role=data.target.value
// }
close() {
  this.modelService.dismissAll();
}

}
