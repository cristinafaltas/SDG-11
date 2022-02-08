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
        colors: [
          '#F7FCFD',
          '#E0ECF4',
          '#BED3E7',
          '#9FBCDB',
          '#8D96C7',
          '#8D6BB0',
          '#88419D',
          '#6F016A',
        ]
      },
      legend: 'none',
      tooltip: {
        isStacked: true,
      },
    };
    this.chartColumns = [
      'Country',
      'Popularity',
      { role: 'tooltip', type: 'string', p: { html: true } },
    ];
    this.chartType = 'Bar';
    this.chartTitle = 'Population Slums';
  }
  prepareSlumsData = (data: Slums[]) => {
   
    console.log(data);
    for (var i in data) {
      this.chartData.push([
        data[i]['Country'],
        data[i]['Popularity']
      ]);
    }
    this.chartDataArray = [];
    this.chartDataArray.push(new ChartData('Population Slums', 'Bar', this.chartData, this.chartColumns, this.chartOptions));
    console.log(this.chartDataArray)
  };

  ngOnInit(): void {
    this.obsSlums = this.http.get<Slums[]>(
      `https://5000-cristinafaltas-sdg11-ldumbynoxo4.ws-eu29.gitpod.io/PopulationSlums`
    );
    this.obsSlums.subscribe(this.prepareSlumsData);
  }

}