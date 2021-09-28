import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


export class bookingorder {
  constructor(
    public  id: String,
    public  quantity: String,
    public  startStation: String,
    public  endStation: String,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private httpClient: HttpClient) { }

  getCurrentResto(id: string)
  {
    return this.httpClient.get("http://localhost:8081/orders/"+id)
  }


  getorders()
  {
    return this.httpClient.get<bookingorder[]>('http://localhost:8081/orders') 
   }

   deleteResto(id: any)
   {
     return this.httpClient.delete<bookingorder[]>(`${'http://localhost:8081/orders/delete'}/${id}`)
   }
}
