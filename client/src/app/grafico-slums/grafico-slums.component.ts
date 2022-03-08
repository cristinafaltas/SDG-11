import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Slums } from '../models/slums.model';
import { ChartData } from '../models/chart.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';  
import { GoogleChartComponent } from 'angular-google-charts';  

@Component({
  selector: 'app-grafico-slums',
  templateUrl: './grafico-slums.component.html',
  styleUrls: ['./grafico-slums.component.css']
})
export class GraficoSlumsComponent implements OnInit {
  obsSlums: Observable<Slums[]>;
  chartDataArray = new Array<ChartData>();
  chartTitle: string;
  chartType: string;
  chartData = [];
  chartColumns = [];
  chartOptions: object;

  constructor(public http: HttpClient) { 
    this.chartOptions = {
      width: 720,
      height: 480,
      
      colorAxis: {


        values:[1000000,5000000,10000000,25000000,50000000,100000000,150000000,200000000],
        colors: [
          '#E0AAFF',
          '#C77DFF',
          '#9D4EDD',
          '#7B2CBF',
          '#5A189A',
          '#3C096C',
          '#240046',
          '#10002B',
        ]
      },
      legend: 'none',
      hAxis: {
        title: 'Total Population',
        minValue: 0
      },
      vAxis: {
        title: 'City'
      },
      tooltip: {
        isStacked: true,
      },
    };
    this.chartColumns = [
      'Country',
      'Popularity'//,
      //{ role: 'tooltip', type: 'string', p: { html: true } },
    ];
    this.chartType = 'Bar';
    this.chartTitle = 'Population Slums';
  }
  prepareSlumsData = (data: Slums[]) => {
   
    console.log(data);
    for (var i in data) {
      this.chartData.push([
        data[i]['Entity'],
        data[i]['Urban population living in slums']
      ]);
      //console.log(data[i]['Popularity']);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new ChartData('Population Slums', 'GeoChart', this.chartData, this.chartColumns, this.chartOptions));
    console.log(this.chartDataArray)
  };

  ngOnInit(): void {
    this.obsSlums = this.http.get<Slums[]>(
      `https://5000-cristinafaltas-sdg11-0nd0p0jvui0.ws-eu34.gitpod.io/PopulationSlums`
    );
    this.obsSlums.subscribe(this.prepareSlumsData);
  }

}