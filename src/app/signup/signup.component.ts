import { Component, OnInit } from '@angular/core';
import {CommonService} from '../commonService/app.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:any;
  password:any;
  mobileno:any;
  user:any;
  obj:any;
  constructor(private service:CommonService,private router:Router) { }

  ngOnInit() {
  }


  SignUp(){
    this.obj={
      email:this.email,
      password:this.password,
      mobileno:this.mobileno,
      user:this.user
  }
  this.service.userSignUp(this.obj).subscribe(data=>{
    console.log(data,"Signup")
    if(data['success']==true){
      this.router.navigate(['/login']);
    }
    else{
      console.log(data['message'])
    }
  })

}
}
