import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class userlogin {
  constructor(
    public  username: String,
    public  password: String,
    public  conpassword: String,
    public  name: String,
    public  dob: String,
    public  sex: String,
    public  emailid: String,
    public  phone: String,
    public  address: String,

  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class PassengerregisterService {

  constructor(private httpClient: HttpClient) {
  }
  saveResto(data: any)
   {
      return this.httpClient.post<userlogin[]>('http://localhost:8683/subs',data)
   }
}









