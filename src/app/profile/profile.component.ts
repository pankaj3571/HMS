import { Component, OnInit } from '@angular/core';
import { CommonService } from '../commonService/app.service';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  today=new Date();
  today1=new Date();
  Checkout=new Date(this.today1.setDate(this.today1.getDate() + 1));
  BookingId:any;
  obj:any;
  getId:any=[];
  FirstName:any;
  LastName:any;
  Email:any;
  Adults:Number;
  Children:Number;
  CheckIn:any;
  CheckOut:any;
  MobileNo:Number;
  UserName:any;
  ChooseCheckIn:any;
  ChooseCheckOut:any;
  isHidden=false;
  isCardHidden=false;
  count:number=0;
  roomData:any=[];
  body:any={}
  constructor(private service:CommonService,private date:DatePipe) { }

  ngOnInit() {
    this.UserName=sessionStorage.getItem('userName')
    this.getBookingDetails()
    if(sessionStorage.getItem('statuc')=="Cancle"){
      this.isCardHidden=true;
    }
    if(sessionStorage.getItem('statuc')=="Active"){
      this.isHidden=true;
    }

  }
  getRoomAvailbilty(){
    this.service.GetRoomAvailbilty().subscribe(data=>{
      console.log(data,"data=====")
      this.roomData.push(data['result'])
      console.log(this.roomData[0])
    })
  }
  getBookingDetails(){
    //let id=this.BookingId=sessionStorage.getItem('bookingId')


      this.service.GetRoomDetails().subscribe(data=>{
        if(data['success']==true){
          // data['result'].forEach(element => {

          //   if(element._id==id){
          //     this.getId.push(element)
          //   }
          // });
          this.getId.push(data['result'][0])

          console.log(this.getId)
        }



      })
  }

  upDate(){
   let str;
   let date;
   let str1;
   let date1;
    //this.FirstName=this.getId[0].FirstName;
    this.FirstName=this.getId[0].FirstName;
    this.LastName=this.getId[0].LastName;
    this.Email=this.getId[0].Email;
    this.Children=this.getId[0].Children;
    this.Adults=this.getId[0].Adults;
    str=this.getId[0].CheckIn;
    date=JSON.stringify(str);
    console.log(date)
    this.CheckIn=date.slice(1,16)
    // this.CheckIn=String(this.date.transform(date[0],'yyyy/MM/dd'))
    str1=this.getId[0].CheckOut;
    date1=JSON.stringify(str1);
    console.log(date1)
    this.CheckOut=date1.slice(1,16)
    //String(this.date.transform(date1[0],'yyyy/MM/dd'))
    this.MobileNo=this.getId[0].MobileNo;
    console.log(this.CheckIn,this.CheckOut)
  }
  SaveChanges(){
    this.obj={
  FirstName:this.FirstName,
  LastName:this.LastName,
  Email:this.Email,
  Adults:this.Adults,
  Children:this.Children,
  CheckIn:this.ChooseCheckIn+1,
  CheckOut:this.ChooseCheckOut+1,
  MobileNo:this.MobileNo,
  _id:this.getId[0]._id,
    }
    console.log(this.obj,"dhgfjhdghjgdj")
    this.service.UpdateDetails(this.obj).subscribe(data=>{
      console.log(data,"dsfdfgd")
      if(data['status']=="success"){
         window.location.reload()

      }
    })
  }
  ConfirmBooking(){
this.obj={
  Status:'Active',
  _id:this.getId[0]._id
}
this.service.ConfirmBooking(this.obj).subscribe(data=>{
  console.log(data,"vsdsf")
  if(data['status']=="success"){
  sessionStorage.setItem('statuc',"Active")
   this.isHidden=true;
   this.count=Number(sessionStorage.getItem('roomCount'))
    this.body={
       roomId:sessionStorage.getItem('roomId'),
       availbility:this.count-1
   }
   console.log(this.body['availbility'],"body")
   this.service.UpdateRoom(this.body).subscribe(data2=>{
     console.log(data2)
     sessionStorage.setItem('roomCount',this.body['availbility'])
   })
  }

})
  }
  CancleBooking(){
    this.obj={
      Status:'Cancle',
      _id:this.getId[0]._id
    }
    this.service.CancleBooking(this.obj).subscribe(data=>{
      console.log(data,"dsgfhjdf",this.getId[0].Status)
      if(data['status']=="success"){
        sessionStorage.setItem('statuc',"Cancle")
        this.isCardHidden=true
        this.count=Number(sessionStorage.getItem('roomCount'))
        this.body={
            roomId:sessionStorage.getItem('roomId'),
            availbility:this.count+1
        }
        console.log( this.body,"body")
        this.service.UpdateRoom( this.body).subscribe(data2=>{
          console.log(data2)
          sessionStorage.setItem('roomCount',this.body['availbility'])
        })
      }
    })
  }
}
