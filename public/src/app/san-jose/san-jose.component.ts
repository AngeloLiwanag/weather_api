import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-san-jose',
  templateUrl: './san-jose.component.html',
  styleUrls: ['./san-jose.component.css']
})
export class SanJoseComponent implements OnInit {
  weather_details: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getWeatherSanJoseFromService();
  }
  getWeatherSanJoseFromService(){
    console.log("Inside getWeatherSanJoseFromService() component")
    this._httpService.getWeatherSanJose().subscribe(data =>{
      console.log("Data from getWeatherSanJose():", data)
      this.weather_details = data;
    })
  }

}
