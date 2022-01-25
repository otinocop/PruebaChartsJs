import { Component } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myType = ChartType.ColumnChart
  myData = [
    ['London', 500],
    ['New York', 400],
    ['Paris', 300],
    ['Berlin', 20],
    ['Kairo', 90]
  ];
}
