import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  getToken:any;
  isLoggedIn=false;
  UserName:any;
  constructor() { }

  ngOnInit() {
    this.getToken=sessionStorage.getItem('token');
    console.log(this.getToken)
    if(this.getToken){
      this.UserName=sessionStorage.getItem('userName')
      this.isLoggedIn=true
    }
    else{
      this.isLoggedIn=false
    }
  }
  logOut(){
    sessionStorage.removeItem('token');
  }
}
