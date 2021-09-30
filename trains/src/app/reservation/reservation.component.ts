import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
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
    })
    constructor(private httpClientService: UserServiceService,private router:Router) { }
  
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
  }