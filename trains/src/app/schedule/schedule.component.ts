import { Component, OnInit } from '@angular/core';
import { HttpClientService,Trains } from '../service/http-client.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
 trains: Trains[] =[];
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService.getTrains().subscribe((result)=>{
      console.warn(result)
      this.trains=result
    })
  }

}
