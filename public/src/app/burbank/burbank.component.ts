import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather_details: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeatherBurbankFromService();
  }

  getWeatherBurbankFromService(){
    console.log("Inside getWeatherBurbankFromService() component")
    this._httpService.getWeatherBurbank().subscribe(data =>{
      console.log("Data from getWeatherBurbank():", data)
      this.weather_details = data;
    })
  }
}
