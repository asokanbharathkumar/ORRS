import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-addtrains',
  templateUrl: './addtrains.component.html',
  styleUrls: ['./addtrains.component.css']
})
export class AddtrainsComponent implements OnInit {

  addResto=new FormGroup(
    {
        train_id: new FormControl(''),
        train_name: new FormControl(''),
        from: new FormControl(''),
        to:new FormControl('') ,
        fare: new FormControl(''),
        gen: new FormControl(''),
    })
    constructor(private httpClientService: HttpClientService,private router:Router) { }
  
    ngOnInit(): void {
    }
    collectResto()
    {
      //console.warn(this.addResto.value)
      this.httpClientService.saveResto(this.addResto.value).subscribe((result: any)=>{
      console.warn("result",result)})
      alert("successfully Added new train details");
      (<any>this.router).navigate(["/Admin"]) 
    }
  
  }


  