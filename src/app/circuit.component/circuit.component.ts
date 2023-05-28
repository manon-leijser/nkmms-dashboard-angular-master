import { Component, OnInit } from '@angular/core';
import { MatRecycleRows, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Circuit } from '../circuit.service/circuit';
import { CircuitService } from '../circuit.service/circuit.service';

@Component({
    selector: 'app-circuit',
    templateUrl: './circuit.component.html',
    styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {
    
    circuits!: Circuit[];
    id!: number;
    circuit: Circuit = new Circuit();
    isLoading = true;
    color = 'primary';
    mode = 'determinate';
    value = 50;
    displayedColumns = ['circuit_nr', 'circuit_name', 'circuit_id', 'expected_svbm', 'number_of_customers']

    constructor(
        private circuitService: CircuitService,
        private router: Router,
        private route: ActivatedRoute
        ) { }
    
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.circuitService.getCircuit(this.id)
        .subscribe(data => {
            console.log(data);
            this.circuits = [];
            this.circuits.push(data);
            this.isLoading = false;
        }, error => console.log(error));
    }
    
}