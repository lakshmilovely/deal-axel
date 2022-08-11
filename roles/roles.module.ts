import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../core/search.pipe';
import { SortDirective } from '../core/sort.directive';
//import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    RolesComponent,
    SearchPipe,
    SortDirective  
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
   // DatePipe
    
   
   
  ]
})
export class RolesModule { }
