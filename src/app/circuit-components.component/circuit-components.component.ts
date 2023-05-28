import { Component, OnInit } from '@angular/core';
import { MatRecycleRows, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CircuitComponents } from '../circuit-components.service/circuit-components';
import { CircuitComponentsService } from '../circuit-components.service/circuit-components.service';
import { YAxisTicksComponent } from '@swimlane/ngx-charts';

@Component({
    selector: 'app-circuit-components',
    templateUrl: './circuit-components.component.html',
    styleUrls: ['./circuit-components.component.css']
})
export class CircuitComponentsComponent implements OnInit {
    
    // table params
    circuitComponents!: CircuitComponents[];
    id!: number;
    circuitComponent!: CircuitComponents;
    isLoading = true;
    color = 'primary';
    mode = 'determinate';
    value = 50;
    displayedColumns = ['component_order', 'component_type', 'component_name', 'circuit_nr', 'length_m', 'distance_to_start_m',
                        'distance_to_end_m', 'used_velocity_m_per_mus', 'alliander_nan', 'description', 'housing_number', 'date_built',
                        'x_coordinate', 'y_coordinate', 'component_version', 'data_source']

    // plotly params
    dataPlotly: any[] = [];
    layout: any = {};
    name = ''
    marker = ''
    length_cable = 0
    x_coordinate!: any[]

    // ngx-charts params
    dataNgx: any[] = [];
    single!: any[];
    multi!: any[];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Circuit meters';
    showYAxisLabel = true;
    yAxisLabel = '';
    colorScheme = {
      domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    };

    // apache echart params
    dataApache: any[] = [];
    options: any;
    length_cable_apache = 0;
    legend: any[] = [];

    constructor(
        private circuitComponentsService: CircuitComponentsService,
        private router: Router,
        private route: ActivatedRoute
        ) { }
    
    ngOnInit() {
        this.circuitComponent = new CircuitComponents();
        this.id = this.route.snapshot.params['id'];
        // plotly chart
        this.circuitComponentsService.getCircuitComponents(this.id)
        .subscribe(result => {
            this.circuitComponents = result;
            this.isLoading = false;

            for (let i = 0; i < result.length; i++) {
                this.length_cable = this.length_cable + result[i].length_m
                if (result[i].component_type == 'RMU') {
                    this.name = 'RMU'
                    this.marker = 'blue'
                    this.dataPlotly.push(
                        {
                        x: [result[i].distance_to_start_m + 0, result[i].distance_to_start_m + 0],
                        y: ['0', '0'],
                        type: 'scatter',
                        mode: 'points',
                        marker: {color: this.marker, size: 10, symbol: 'triangle-up'},
                        legendgroup: this.name,
                        name: this.name
                        }
                    );
                }
                else if (result[i].component_type == 'Joint (oil)' || 
                result[i].component_type == 'Joint (heat shrink)') {
                    this.name = 'Joint'
                    this.marker = 'purple'
                    this.dataPlotly.push(
                        {
                        x: [result[i].distance_to_start_m + 0, result[i].distance_to_start_m + 0],
                        y: ['0', '0'],
                        type: 'scatter',
                        mode: 'points',
                        marker: {color: this.marker, size: 10, symbol: 'circle'},
                        legendgroup: this.name,
                        name: this.name
                        }
                    );
                }
                else if (result[i].component_type == 'Termination (Unknown)') {
                    this.name = 'Termination'
                    this.marker = 'green'
                    this.dataPlotly.push(
                        {
                        x: [result[i].distance_to_start_m + 0, result[i].distance_to_start_m + 0],
                        y: ['0', '0'],
                        type: 'scatter',
                        mode: 'points',
                        marker: {color: this.marker, size: 10, symbol: 'star'},
                        legendgroup: this.name,
                        name: this.name
                        }
                    );
                }
                else if (result[i].component_type == 'Cable (PILC, 3 cores, belted)') {
                    this.name = 'Cable PILC'
                    this.marker = 'orange'
                    this.dataPlotly.push(
                        {
                        x: [this.length_cable, this.length_cable - result[i].length_m],
                        y: ['0', '0'],
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: this.marker},
                        legendgroup: this.name,
                        name: this.name
                        }
                    );
                }
                else if (result[i].component_type == 'Cable (XLPE, 3 cores, common earth screen)' ||
                result[i].component_type == 'Cable (XLPE, 1 core)') {
                    this.name = 'Cable XLPE'
                    this.marker = 'pink'
                    this.dataPlotly.push(
                        {
                        x: [this.length_cable, this.length_cable - result[i].length_m],
                        y: ['0', '0'],
                        type: 'scatter',
                        mode: 'lines',
                        marker: {color: this.marker},
                        legendgroup: this.name,
                        name: this.name
                        }
                    );
                }

                this.layout = {
                    title: 'Circuit components Plotly',
                    xaxis: {title: 'length circuit in meters'},
                    yaxis: {title: ''}
                };
            }
        }, error => console.log(error));

        // apache echarts
        this.circuitComponentsService.getCircuitComponents(this.id)
        .subscribe(result => {
            this.circuitComponents = result;
            this.isLoading = false;

            for (let i = 0; i < result.length; i++) {
                this.length_cable_apache = this.length_cable_apache + result[i].length_m
                if (result[i].component_type == 'Cable (XLPE, 3 cores, common earth screen)' ||
                result[i].component_type == 'Cable (XLPE, 1 core)') {
                    this.name = 'Cable XLPE'
                    this.dataApache.push({
                        name: this.name,
                        data: [this.length_cable_apache, this.length_cable_apache - result[i].length_m],
                        type: 'line',
                    })
                    this.legend.push(this.name)
                } 
                else if (result[i].component_type == 'Cable (PILC, 3 cores, belted)') {
                    this.name = 'Cable PILC'
                    this.dataApache.push({
                        name: this.name,
                        data: [this.length_cable_apache, this.length_cable_apache - result[i].length_m],
                        type: 'line'
                    })
                    this.legend.push(this.name)
                } 
                else if (result[i].component_type == 'RMU') {
                    this.name = 'RMU'
                    this.dataApache.push({
                        name: this.name,
                        data: [[result[i].distance_to_start_m + 0, 0]],
                        type: 'scatter'
                    })
                    this.legend.push(this.name)
                } 
                else if (result[i].component_type == 'Joint (oil)' ||
                result[i].component_type == 'Joint (heat shrink)') {
                    this.name = 'Joint'
                    this.dataApache.push({
                        name: this.name,
                        data: [[result[i].distance_to_start_m + 0, 0]],
                        type: 'scatter'
                    })
                    this.legend.push(this.name)
                } 
                else if (result[i].component_type == 'Termination (Unknown)') {
                    this.name = 'Termination'
                    this.dataApache.push({
                        name: this.name,
                        data: [[result[i].distance_to_start_m + 0, 0]],
                        type: 'scatter'
                    })
                    this.legend.push(this.name)
                }
                this.options = {
                    legend: {
                        data: this.legend,
                        align: 'left'
                    },
                    title: {
                        text: 'Circuit components Apache Echarts'
                    },
                    xAxis: {
                        name: 'length circuit in meters',
                        align: 'center'
                        },
                    yAxis: { 
                        data: [0]
                    },
                    series: this.dataApache,
                    tooltip: {}
                }
            }
        }, error => console.log(error))
    }
}