import { Component, OnInit } from '@angular/core';
import {CommonService} from '../commonService/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
email:any;
password:any
obj:any;
UserName:any;
  constructor(private service:CommonService,private router:Router) { }

  ngOnInit() {
  }

login(){
this.obj={
  email:this.email,
  password:this.password
}
  this.service.userLogin(this.obj).subscribe(data=>{
    console.log(data[0].data['details'].user,"successfull")
    if(data[0].status=="success"){
      this.router.navigate(['/home'])
      sessionStorage.setItem('token',data[0].data['token'])
       sessionStorage.setItem('userName',data[0].data['details'].user);

    }

  })
}


}
