import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';
import { UrgentWarningService } from '../urgent-warning.service/urgent-warning.service';
import { UrgentWarning } from '../urgent-warning.service/urgent-warning';

@Component({
  selector: 'app-ngx-chart',
  templateUrl: './ngx-charts.component.html',
  styleUrls: ['./ngx-charts.component.css'],
})
export class NgxChartsComponent implements OnInit {
  single!: any[];
  multi!: any[];

  // options
  x: number = 700;
  y: number = 400;
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  urgentWarning!: UrgentWarning[];

  constructor(
    private urgentWarningService: UrgentWarningService
  ) {

  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit() {
    this.urgentWarningService.getWarnings()
    .subscribe(data => {
      console.log(data);
      this.urgentWarning = [];
      this.urgentWarning.push(data);
      this.single = this.urgentWarning.map((datum: { circuit_nr: any; number_of_customers: any; }) => ({ name: datum.circuit_nr, value: datum.number_of_customers }))
    })
  }
}
