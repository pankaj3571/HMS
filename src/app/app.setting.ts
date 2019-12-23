import {environment} from '../environments/environment';
export const appSetting={
  APPLOGIN:environment.apiUrl+'/login',
  APPSIGNUP:environment.apiUrl+'/signup',
  BOOKROOM:environment.apiUrl+'/bookRoom',
  GETBOOKINGDETAILS:environment.apiUrl+'/getBookingDetails',
  UPDATEROOMDETAILS:environment.apiUrl+'/updateDetails',
  CONFIRMBOOKING:environment.apiUrl+'/confirmBooking',
  CANCLEBOOKING:environment.apiUrl+'/cancleBooking',
  GETROOMAVAILBILITY:environment.apiUrl+'/getRoomAvailbilty',
  UPDATEROMM:environment.apiUrl+'/updateRoom',
}
