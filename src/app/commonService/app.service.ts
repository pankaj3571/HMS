import {Injectable} from '@angular/core';
import {appSetting} from '../app.setting';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn:'root'
})

export class CommonService{
  constructor(private httpClient:HttpClient){}

  userLogin(obj:any){
    return this.httpClient.post(appSetting.APPLOGIN,obj)
  }
  userSignUp(obj:any){

    return this.httpClient.post(appSetting.APPSIGNUP,obj)
  }
  RoomBooking(obj:any){

  return this.httpClient.post(appSetting.BOOKROOM,obj)
}
GetRoomDetails(){

return this.httpClient.get(appSetting.GETBOOKINGDETAILS)
}
GetRoomAvailbilty(){

  return this.httpClient.get(appSetting.GETROOMAVAILBILITY)
  }
UpdateDetails(obj:any){

  return this.httpClient.post(appSetting.UPDATEROOMDETAILS,obj)
}
ConfirmBooking(obj:any){

  return this.httpClient.post(appSetting.CONFIRMBOOKING,obj)
}
CancleBooking(obj:any){

  return this.httpClient.post(appSetting.CANCLEBOOKING,obj)
}
UpdateRoom(obj:any){

  return this.httpClient.post(appSetting.UPDATEROMM,obj)
}
}
