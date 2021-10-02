import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { TraindataService, Trains } from '../service/traindata.service';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  [x: string]: any;

  trains: Trains[] = [];


  bookSeats=new FormGroup(
    {
        id: new FormControl(''),
        quantity: new FormControl(''),
        startStation: new FormControl(''),
        endStation:new FormControl(''),
        date:new FormControl(''),
        name:new FormControl(''),
  	    age:new FormControl(''),
  	    gender:new FormControl(''),
  	    credit:new FormControl(''),
	      address:new FormControl(''),
	      berth:new FormControl(''),
	      bankname:new FormControl(''),
        email:new FormControl(''),
        phone:new FormControl(''),
    })
    constructor(private httpClientService: UserServiceService,private httpClientServic: TraindataService,private router:Router,private httpClientServi: HttpClientService,private route:ActivatedRoute) { }
  
    ngOnInit(): void {
    }
    collectTicks()
    {
      //console.warn(this.addResto.value)
      this.httpClientService.saveResto(this.bookSeats.value).subscribe((result: any)=>{
      console.warn("result",result);
      (<any>this.router).navigate(["/pnr"]) 
      alert("Your Ticket Has Been Booked")
      })
    }

    
search()
{
 // console.warn(this.editResto.value);
  this.httpClientServic.updateResto(this.text).subscribe((result: any)=>{
    console.warn(result)
    this.trains=result
  })
}

search1()
{
 // console.warn(this.editResto.value);
  this.httpClientServic.updateRest(this.text1).subscribe((result: any)=>{
    console.warn(result)
    this.trains=result
  })
}





collection()
  {
   // console.warn(this.editResto.value);
    this.httpClientServi.updateResto(this.route.snapshot.params.id,this.editResto.value).subscribe((result: any)=>{
      console.warn(result)
    })
  }




  }