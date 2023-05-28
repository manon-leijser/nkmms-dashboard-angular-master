import { Component, OnInit } from '@angular/core'
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import { UrgentWarningService } from '../urgent-warning.service/urgent-warning.service';
import { UrgentWarning } from '../urgent-warning.service/urgent-warning';
import 'echarts-gl';
import * as echarts from 'echarts';

@Component({
  selector: 'app-apache-echart',
  templateUrl: './apache-echart.component.html',
  styleUrls: ['./apache-echart.component.css'],
})

export class ApacheEchartComponent implements OnInit {
  options: any;
  private data1: number[] = [];
  private data2: number[] = [];
  urgentWarning!: UrgentWarning[];

  dataApache3d: any[] = [];
  optionsApache3d: any;
  dataApacheDate: any[] = [];
  optionsApacheDate: any;
  legendCharge: any[] = [];
  dataApacheLoc: any[] = [];
  optionsApacheLoc: any;
  dataApacheCalendar: [string, number][] = [];
  optionsApacheCalendar: any;
  partialdischarge: number | undefined;
  legend: any[] = [];
  name = '';

  constructor(private httpClient: HttpClient, private urgentWarningService: UrgentWarningService) {
  }


  ngOnInit(): void {
    this.handleChartData().subscribe()
    this.readCSVFile()
  }

  private buildChart(data1: number[], data2: number[]): void {
    const xAxisData = [];
    // const data1 = [];
    // const data2 = [];

    for (let i = 0; i < 100; i++) {
      xAxisData.push('category' + 1);
      // data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      // data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }

    this.options = {
      legend: {
        data: ['bar', 'bar2'],
        align: 'left',
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false,
        },
      },
      yAxis: {},
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          animationDelay: (idx: number) => idx * 10,
        },
        {
          name: 'bar2',
          type: 'bar',
          data: data2,
          animationDelay: (idx: number) => idx * 10 + 100,
        },
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: (idx: number) => idx * 5,
    };
  }

  private handleChartData() {
    return this.urgentWarningService.getWarnings().pipe(
      map((result: any) => {
        const data1 = [result['circuit_nr']];
        const data2 = [result['number_of_customers']];
        this.buildChart(data1, data2);
      }))
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
        this.dataApache3d.push({
          x: chargedata[i].x, 
          y: chargedata[i].y, 
          z: chargedata[i].z
        });

        this.dataApacheDate.push({
          name: 'partial discharge',
          data: [[chargedata[i].x, chargedata[i].z]],
          type: 'scatter'
        })

        this.dataApacheLoc.push({
          name: 'partial discharge',
          data: [[chargedata[i].y, chargedata[i].z]],
          type: 'scatter'
        })

        this.partialdischarge = +chargedata[i].z
        this.dataApacheCalendar.push([
          echarts.time.format(chargedata[i].x, '{yyyy}-{MM}-{dd}', false),
          this.partialdischarge
        ])

        this.legendCharge.push('partial discharge')
      }

      const symbolSize = 2.5;
      this.optionsApache3d = {
        grid3D: {},
        xAxis3D: {
          type: 'category'
        },
        yAxis3D: {},
        zAxis3D: {},
        dataset: {
          dimensions: [
            'y',
            'z',
            {name: 'x', type: 'ordinal'}
          ],
          source: this.dataApache3d
        },
        series: [
          {
            type: 'scatter3D',
            symbolSize: symbolSize,
            encode: {
              x: 'x',
              y: 'y',
              z: 'z',
              tooltip: [0, 1, 2, 3, 4]
            }
          }
        ]
      }

      this.optionsApacheDate = {
        legend: {
          data: this.legendCharge,
          align: 'left'
        },
        title: {
          text: 'date x charge'
        },
        xAxis: {
          name: 'date',
          align: 'center'
        },
        yAxis: {
          name: 'charge'
        },
        series: this.dataApacheDate,
        tooltip: {}
      }

      this.optionsApacheLoc = {
        legend: {
          data: this.legendCharge,
          align: 'left'
        },
        title: {
          text: 'loc x charge'
        },
        xAxis: {
          name: 'location on the circuit in meters',
          align: 'center'
        },
        yAxis: {
          name: 'charge'
        },
        series: this.dataApacheLoc,
        tooltip: {}
      }

      this.optionsApacheCalendar = {
        visualMap: {
          show: false,
          min: 0,
          max: 10000
        },
        calendar: {
          range: '2018'
        },
        series: {
          type: 'heatmap',
          coordinateSystem: 'calendar',
          data: this.dataApacheCalendar
        }
      }
      console.log(this.optionsApacheDate)
      console.log(this.optionsApacheCalendar)
    },
    error: (err) => console.log(err)
    })
  }
}