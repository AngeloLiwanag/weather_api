import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeatherSeattle(){
    console.log("Inside getWeatherSeattle() service")
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=seattle,us&APPID=1a5c5f08e1621959124873f0ccc04700')
  }
  getWeatherSanJose(){
    console.log("Inside getWeatherSanJose() service")
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=san%20jose,us&APPID=1a5c5f08e1621959124873f0ccc04700')
  }
  getWeatherBurbank(){
    console.log("Inside getWeatherBurbank() service")
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=burbank,us&APPID=1a5c5f08e1621959124873f0ccc04700")
  }
  getWeatherDallas(){
    console.log("Inside getWeatherDallas() service")
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=dallas,us&APPID=1a5c5f08e1621959124873f0ccc04700")
  }
  getWeatherWashington(){
    console.log("Inside getWeatherWashington() service")
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=washington,us&APPID=1a5c5f08e1621959124873f0ccc04700")
  }
  getWeatherChicago(){
    console.log("Inside getWeatherChicago() service")
    return this._http.get("http://api.openweathermap.org/data/2.5/weather?q=chicago,us&APPID=1a5c5f08e1621959124873f0ccc04700")
  }
}
