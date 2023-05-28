import { Component, OnInit } from '@angular/core';
import { MatRecycleRows, MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UrgentWarning } from '../urgent-warning.service/urgent-warning'; 
import { UrgentWarningService } from '../urgent-warning.service/urgent-warning.service';

@Component({
    selector: 'app-urgent-warning',
    templateUrl: './urgent-warning.component.html',
    styleUrls: ['./urgent-warning.component.css']
})
export class UrgentWarningComponent implements OnInit {
    
    urgentWarning!: UrgentWarning[];
    id!: number;
    warning: UrgentWarning = new UrgentWarning();
    isLoading = true;
    color = 'primary';
    mode = 'determinate';
    value = 50;
    displayedColumns = ['grouped_cluster_id', 'circuit_nr', 'confluence_link', 'annotations', 'min_time', 'max_time', 'proba', 'number_of_customers', 'expected_svbm_in_case_of_failure']

    constructor(
        private warningsService: UrgentWarningService,
        private router: Router,
        ) { }
    
    ngOnInit() {
        this.warningsService.getWarnings().subscribe(data => {
            console.log(data);
            this.urgentWarning = [];
            this.urgentWarning.push(data);
            this.isLoading = false;
        })
    }
    
}