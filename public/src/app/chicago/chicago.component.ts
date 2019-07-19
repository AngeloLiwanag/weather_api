import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  weather_details: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeatherChicagoFromService();
  }

  getWeatherChicagoFromService(){
    console.log("Inside getWeatherChicagoFromService() component")
    this._httpService.getWeatherChicago().subscribe(data =>{
      console.log("Data from getWeatherChicago():", data)
      this.weather_details = data;
    })
  }
}
