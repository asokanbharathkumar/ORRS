import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


export class login {
  constructor(
    public  id: String,
    public  quantity: String,
    public  startStation: String,
    public  endStation: String,
    public  date:String,
    public  name:String,
  	public  age:String,
  	public  gender:String,
	  public  credit:String,
	  public  address:String,
	  public  berth:String,
	  public  bankname:String,
    public  email:String,
    public  phone:String,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AserviceService {

  constructor(private httpClient: HttpClient) {
  }
  saveResto(data: any)
   {
      return this.httpClient.post<login[]>('http://localhost:8682/auth',data)
   }
}
