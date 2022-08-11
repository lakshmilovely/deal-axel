import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../core/_services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(private service : LoginService,private router : Router) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(['']);
    localStorage.removeItem("UserToken");
  }
}
