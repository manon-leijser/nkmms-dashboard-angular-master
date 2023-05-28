import { Component, OnInit } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { UrgentWarningService } from '../urgent-warning.service/urgent-warning.service';
import { UrgentWarning } from '../urgent-warning.service/urgent-warning';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-plotly',
  templateUrl: './plotly.component.html',
  styleUrls: ['./plotly.component.css']
})

export class PlotlyComponent implements OnInit {
    
  data: any = {};
  layout: any = {};
  dataPlotly3d: any[] = [];
  dataPlotlyLoc: any[] = [];
  dataPlotlyDate: any[] = [];
  layoutPlotly3d: any = {};
  layoutPlotlyLoc: any = {};
  layoutPlotlyDate: any = {};

  urgentWarning!: UrgentWarning[];
  
  constructor(private urgentWarningService: UrgentWarningService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.urgentWarningService.getWarnings()
    .subscribe(result => {
      this.urgentWarning = [];
      this.urgentWarning.push(result);
      this.data = [{
        x: [result.circuit_nr],
        y: [result.number_of_customers],
        type: 'scatter',
        mode: 'lines+points',
        marker: {color: 'red'}
      }];
      this.layout = {
        title: 'Plotly graph',
        xaxis: {title: 'X-axis'},
        yaxis: {title: 'Y-axis'}
      };
    });

    this.readCSVFile()
  }

  private readCSVFile(){
    let chargedata: { x: string, y: string, z: string }[];
    this.httpClient.get('assets/circ_1883_pd.csv', {responseType: 'text'})
    .subscribe({
      next: (data) => {
        let lines = data.split('\r');
        lines.shift();

        chargedata = lines.map(line => {
          let data = line.split(';');
          return {x: data[1], y: data[2], z: data[3]};
        });
        chargedata = chargedata.filter((xyz) => xyz.x !== undefined && xyz.y !== undefined && xyz.z !== undefined);
        console.log(chargedata)

        for (let i = 0; i < 5000; i++) {
          this.dataPlotly3d.push({
            x: [chargedata[i].y],
            z: [chargedata[i].z],
            y: [chargedata[i].x],
            type: 'scatter3d',
            mode: 'points',
            marker: {
              color: 'rgb(84, 112, 198)',
              size: 1
            }
          });

          this.dataPlotlyDate.push({
            x: [chargedata[i].x],
            y: [chargedata[i].z],
            type: 'scatter',
            mode: 'points',
            marker: {color: 'rgb(84, 112, 198)', size: 10, symbol: 'circle'},
            legendgroup: 'partial discharge',
            name: 'partial discharge'
          })

          this.dataPlotlyLoc.push({
            x: [chargedata[i].y],
            y: [chargedata[i].z],
            type: 'scatter',
            mode: 'points',
            marker: {color: 'rgb(84, 112, 198)', size: 10, symbol: 'circle'},
            legendGroup: 'partial discharge',
            name: 'partial discharge'
          })
        }

        this.layoutPlotly3d = {
          title: 'csv file scattered',
          xaxis: {title: 'X-axis'},
          yaxis: {title: 'Y-axis'}
        }

        this.layoutPlotlyDate = {
          title: 'csv file date x charge',
          xaxis: {title: 'date'},
          yaxis: {title: 'charge (picocoulomb)'}
        }

        this.layoutPlotlyLoc = {
          title: 'csv file loc x charge',
          xaxis: {title: 'location in circuit in meters'},
          yaxis: {title: 'charge (picocoulomb)'}
        }
      },
      error: (err) => console.log(err)
    })
  }
}