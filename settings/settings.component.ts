import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../core/settings.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
   s:any
   tempData: any 
   public tracking=''
   public status=''
   public include=''
   public sequence=''
   public dependency=''
   public notify=''
   public within=''
   public type=''
   public dms=''
   add123:boolean=false
   save123:boolean=false
  editdata: any;
  constructor(private setting:SettingsService) { }
 ngOnInit() {
 this.setting.viewsetting(obj).subscribe((res:any)=>{
    console.log(res);
    this.tempData=res
    this.s=this.tempData.length
  })
}
add(){
  this.tracking=''
  this.status=''
  this. include=''
  this.sequence=''
  this.dependency=''
  this.notify=''
  this.within=''
  this.type=''
  this.dms=''
  this.add123=true
  this.save123=false
}
addmethod(){
const obj=
         {
          "action": "A",
          "sId": 0,
          "sCoraAcctId": 1,
          "sTrackingsteps": this.tracking,
          "sInclude": this.include,
          "sSequence": this.sequence,
          "sDependencies": this.dependency,
          "sNotifications": this.notify,
          "sWithin": this.within,
          "sType": this.type,
          "sDmsevidence": this.type,
          "sStatus": this.status,
          "err_no": 0
        }
        console.log (obj);
        this.setting.setsetting(obj).subscribe((res:any)=>{
          console.log(res);
          alert('Setting Added Successfully')
        })
    }
    edit(data:any){
      this.add123=false
      this.save123=true
      console.log(data)
      this.tracking=data.tracking
      this.status=data.status
      this. include=data.include
      this.sequence=data.sequence
      this.dependency=data.dependency
      this.notify=data.notify
      this.within=data.within
      this.type=data.type
      this.dms=data.dms
      
      this.editdata=data
    }
    editandsave(id:any){
      console.log(id);
      const obj=
      {
       "action": "U",
       "sId": 0,
       "sCoraAcctId": 1,
       "sTrackingsteps": this.tracking,
       "sInclude": this.include,
       "sSequence": this.sequence,
       "sDependencies": this.dependency,
       "sNotifications": this.notify,
       "sWithin": this.within,
       "sType": this.type,
       "sDmsevidence": this.type,
       "sStatus": this.status,
       "err_no": 0
     }
     console.log (obj);
     this.setting.setsetting(obj).subscribe((res:any)=>{
       console.log(res);
       alert('Setting Added Successfully')
     })
    } 
    delete(id:any){
      console.log(id);
      const obj=
      {
       "action": "D",
       "sId": 0,
       "sCoraAcctId": 1,
       "sTrackingsteps": this.tracking,
       "sInclude": this.include,
       "sSequence": this.sequence,
       "sDependencies": this.dependency,
       "sNotifications": this.notify,
       "sWithin": this.within,
       "sType": this.type,
       "sDmsevidence": this.type,
       "sStatus": this.status,
       "err_no": 0
     }
     console.log (obj);
     this.setting.setsetting(obj).subscribe((res:any)=>{
       console.log(res);
       alert('Setting Added Successfully')
     })
    }
}


 






function obj(obj: any) {
  throw new Error('Function not implemented.');
}

