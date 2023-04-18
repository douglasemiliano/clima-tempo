import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ClimaTempoService } from 'src/app/services/clima-tempo.service';

@Component({
  selector: 'app-clima-tempo',
  templateUrl: './clima-tempo.component.html',
  styleUrls: ['./clima-tempo.component.scss']
})
export class ClimaTempoComponent {
  public locationForm = new FormControl("");
  options: any[];
  public currentWeather: any;
  public currentIcon: string;

  constructor(public climaTempoService: ClimaTempoService) { }

  public ngOnInit(): void {
  }

  public search(): void {
    if (this.locationForm.value!.length >= 2) {
      this.climaTempoService.searchLocation(this.locationForm.value as string).subscribe((data: any) => {
        this.options = data;
      });
    }
  }

  public getWeather(option: any) {
    this.climaTempoService.getWeather(option.lat, option.lon).subscribe(data => {
      this.currentWeather = data;
      switch (this.currentWeather.weather[0].main) {
        case "Clear":
          this.currentIcon = "\assets\\clear.gif"
          break;
        case "Rain":
          this.currentIcon = "\assets\\rain.gif"
          break;
        case "Snow":
          this.currentIcon = "\assets\\snow.gif"
          break;
        case "Clouds":
          this.currentIcon = "assets\\clouds.gif"
          break;
        case "Haze":
          this.currentIcon = "\assets\\haze.gif"
          break;
        default:
          this.currentIcon = "\assets\\clear.gif"
          break;
      }
    });
  }
}