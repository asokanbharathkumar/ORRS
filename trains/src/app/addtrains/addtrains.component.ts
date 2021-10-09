import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
        train_id: new FormControl('',Validators.required),
        train_name: new FormControl('',Validators.required),
        from: new FormControl('',Validators.required),
        to:new FormControl('',Validators.required) ,
        fare: new FormControl('',Validators.required),
        gen: new FormControl('',Validators.required),
        running: new FormControl('',Validators.required),
        time: new FormControl('',Validators.required),
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

  