import { Component, OnInit } from '@angular/core';
import { RolesService } from '../core/roles.service';
//import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  roledata: any;
  public role=''
  public type=''
  public status=''
  rid: any;
   date=new Date()
  save:boolean=false;
  add12:boolean=false;
  datatoedit: any;
  searchtext:any;
  s: any;
  datePipe1: any;
  //rTs: string | number | Date;

  constructor(public rty:RolesService) { 
 // var datePipe1:string= new Date().toLocaleDateString();
  }

  ngOnInit(): void {

    this.rty.view().subscribe((data)=>{
      console.log(data);
      this.roledata=data
       this.s=this.roledata.length
    })
    
  }
  adduser(){
    this.add12=true;
    this.save=false;
    this.role=''
    this.type=''
    this.status=''
   }
  
  saveroles(){
    const obj=
              {
                "rId": 0,
                "rName": this.role,
                "rType": this.type,
                "rStatus": this.status,
                "rTs": this.date
              }
          console.log(obj)
    this.rty.save(obj).subscribe((res:any)=>{
      console.log(res)
      alert('Roles Added Successfully')
      this.ngOnInit();
    })
     

     //this.ngOnInit();
  }
  edit(data:any) {
    this.add12=false;
    this.save=true;
    console.log(data);
 
  this.rid=data.rId,
  this.role=data.rName,
  this.type=data.rType,
  this.status=data.rStatus
  // })
  this.datatoedit=data
   
  }
  editsave(id:any){
   
    console.log(id)
      const obj=
      {
        "rId": id,
        "rName": this.role,
        "rType": this.type,
        "rStatus": this.status,
        "rTs": this.date
      }
    
    console.log(obj)
    this.rty.editrole(obj).subscribe((data12)=>{
    alert(" Roles updated Succesfully")
    console.log(data12);
    this.ngOnInit();
    })
    //this.ngOnInit();
    }
remove(id:any){
   console.log(id);
    
  const obj={
    "rId": id.rId,
    "rName":id.rName ,
    "rType":id.rType ,
    "rStatus": "D",
    "rTs": id.rTs

  }
  console.log(obj)
  this.rty.editrole(obj).subscribe((data12)=>{
  alert("Deleted Succesfully")
  console.log(data12);
  this.ngOnInit();
  })
  //this.ngOnInit();
 }

}
