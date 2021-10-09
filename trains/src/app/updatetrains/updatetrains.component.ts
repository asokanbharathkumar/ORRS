import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-updatetrains',
  templateUrl: './updatetrains.component.html',
  styleUrls: ['./updatetrains.component.css']
})
export class UpdatetrainsComponent implements OnInit {
 
  editResto=new FormGroup(
    {
      train_id: new FormControl('',Validators.required),
      train_name: new FormControl('',Validators.required),
      from: new FormControl('',Validators.required),
      to:new FormControl('',Validators.required) ,
      fare: new FormControl('',Validators.required),
      gen: new FormControl('',Validators.required),
      running: new FormControl('',Validators.required),
      time: new FormControl('',Validators.required)
    })

  constructor(private router:ActivatedRoute,private httpClientService: HttpClientService,private rout:Router) { }

  ngOnInit(): void {
   // console.warn(this.router.snapshot.params.id)
    this.httpClientService.getCurrentResto(this.router.snapshot.params.id).subscribe((result: any)=>{
   console.warn("result",result)
   this.editResto.patchValue({

    train_id: result.train_id,
    train_name: result.train_name,
    from: result.from,
    to: result.to,
    fare: result.fare,
    gen: result.gen,
    running: result.running,
    time: result.time
   })
  }
  
  )
  }
  collection()
  {
   // console.warn(this.editResto.value);
    this.httpClientService.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result: any)=>{
      console.warn(result)
      alert("successfully Updated train details");
      (<any>this.rout).navigate(["/Admin"]) 
    })
  }

}