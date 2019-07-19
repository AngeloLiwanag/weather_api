import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-washington',
  templateUrl: './washington.component.html',
  styleUrls: ['./washington.component.css']
})
export class WashingtonComponent implements OnInit {
  weather_details: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeatherWashingtonFromService();
  }

  getWeatherWashingtonFromService(){
    console.log("Inside getWeatherWashingtonFromService() component")
    this._httpService.getWeatherWashington().subscribe(data =>{
      console.log("Data from getWeatherWashington():", data)
      this.weather_details = data;
    })
  }
}
