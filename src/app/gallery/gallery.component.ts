import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../commonService/app.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
singleRoom="Single Room"
doubleRoom="Double Room"
tripleRoom="Triple Room"
queenRoom="Queen Room"
kingRoom="King Room"
studioRoom="Studio Room"
roomData:any=[];
selectedIndex:number=1;
resultArray:any=[];
  constructor(private router:Router,private service:CommonService) { }

  ngOnInit() {
  this.getRoomAvailbilty()
  }
  Book(index:number){


if(sessionStorage.getItem('token')!=null){
this.router.navigate(['/booking'])
this.selectedIndex = index;
var selectedRow = this.roomData[0][index];
sessionStorage.setItem('roomId',selectedRow._id);
sessionStorage.setItem('roomType',selectedRow.room)
sessionStorage.setItem('roomCount',selectedRow.availbility)

console.log(selectedRow.room,"selectedRow")
}
else{
  this.router.navigate(['/login'])
}
  }
  getRoomAvailbilty(){
    this.service.GetRoomAvailbilty().subscribe(data=>{
      console.log(data,"data=====")
      this.roomData.push(data['result'])
      console.log(this.roomData[0])
    })
  }
}
