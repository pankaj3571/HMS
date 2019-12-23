import { Component, OnInit } from '@angular/core';
import { CommonService } from '../commonService/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
today=new Date();
today1=new Date();
Checkout=new Date(this.today1.setDate(this.today1.getDate() + 1));

FirstName:any;
LastName:any;
Email:any;
Adults:Number;
Children:Number;
CheckIn:any;
CheckOut:any;
MobileNo:Number;
obj:any;
  constructor(private service:CommonService,private router:Router) { }

  ngOnInit() {

  }
  BookRoom(){
    this.obj={
      FirstName:this.FirstName,
      LastName:this.LastName,
      Email:this.Email,
      Adults:this.Adults,
      Children:this.Children,
      CheckIn:this.CheckIn+1,
      CheckOut:this.CheckOut+1,
      MobileNo:this.MobileNo,
      Status:'InActive',
      RoomId:sessionStorage.getItem('roomId'),
      RoomType:sessionStorage.getItem('roomType')
    }

    this.service.RoomBooking(this.obj).subscribe(data=>{
      console.log(data,"fbjfdbjdj")
      if(data['success']==true){
          sessionStorage.setItem('bookingId',data['result']._id)
          sessionStorage.setItem('statuc',data['result'].Status)
          this.router.navigate(['/profile'])
      }
    })
  }

}
