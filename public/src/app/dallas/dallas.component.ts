import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather_details: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeatherDallasFromService();
  }

  getWeatherDallasFromService(){
    console.log("Inside getWeatherDallasFromService() component")
    this._httpService.getWeatherDallas().subscribe(data =>{
      console.log("Data from getWeatherDallas():", data)
      this.weather_details = data;
    })
  }

}
