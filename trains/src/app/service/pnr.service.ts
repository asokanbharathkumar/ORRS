import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class bookingorder {
  constructor(
    public  id: String,
    public  startStation: String,
    public  endStation: String,
    public  date: String,
    public  name:String,
  	public  age:String,
  	public  gender:String,
	  public  credit:String,
	  public  address:String,
	  public  berth:String,
	  public  bankname:String,
    public  email:String,
    public  phone:String,
    public  cvv:String,
    public  month:String,
    public  year:String,
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class PnrService {
  constructor(private httpClient: HttpClient) { }

  getorders()
  {
    return this.httpClient.get<bookingorder[]>('http://localhost:8081/orders') 
   }
}





