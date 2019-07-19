import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather_details: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeatherSeattleFromService();
  }

  getWeatherSeattleFromService(){
    console.log("Inside getWeatherSeattleFromService() component")
    this._httpService.getWeatherSeattle().subscribe(data =>{
     console.log("Data from getWeatherSeattle():", data)
     this.weather_details = data;
     console.log(this.weather_details);
   })
  }

}
