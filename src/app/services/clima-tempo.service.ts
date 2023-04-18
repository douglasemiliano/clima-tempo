import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaTempoService {
  
  private apiLocationUrl: string = "http://api.weatherapi.com/v1/search.json?key=9656206594ba408f92f11440231704&lang=pt&q=";
  private apiOpenWeather: string = "https://api.openweathermap.org/data/2.5/weather?appid=ddfa2a8727fff241f18b4d659f7fee3b&units=metric"
  
  constructor(private http: HttpClient) { }
  
  public options = {
    headers: {
      Accept: 'application/json'
    }
  };

  public httpOptions = {
  headers: new HttpHeaders({
    'Vary': 'Accept-Encoding',
    'CDN-PullZone': '93447',
    'CDN-Uid': '8fa3a04a-75d9-4707-8056-b7b33c8ac7fe',
    'CDN-RequestCountryCode': 'GB',
    'CDN-ProxyVer': '1.03',
    'CDN-RequestPullSuccess': 'True',
    'CDN-RequestPullCode': '200',
    'CDN-CachedAt': '04/17/2023 01:24:48',
    'CDN-EdgeStorageId': '1072',
    'CDN-Status': '200',
    'CDN-RequestId': '11d127ca58fb7f4154896394964ab28d',
    'CDN-Cache': 'HIT',
    'Cache-Control': 'public, max-age=180',
    'Content-Type': 'application/json',
    'Server': 'BunnyCDN-FR1-1074'
  })
};

  public searchLocation(local: string){
    return this.http.get(this.apiLocationUrl + local, this.httpOptions) 
  }

  public getWeather(latitude: string, longitude: string){
    return this.http.get(this.apiOpenWeather + "&lang=pt&lat=" + latitude + "&lon=" + longitude, this.options);
  }
}
