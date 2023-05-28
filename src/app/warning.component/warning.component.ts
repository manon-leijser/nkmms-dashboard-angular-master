import { Component, OnInit } from '@angular/core';
import { MatRecycleRows, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Warning } from '../warning.service/warning';
import { WarningService } from '../warning.service/warning.service';

@Component({
    selector: 'app-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
    
    warnings!: Warning[];
    id!: number;
    warning: Warning = new Warning();
    isLoading = true;
    color = 'primary';
    mode = 'determinate';
    value = 50;
    displayedColumns = ['grouped_cluster_id', 'circuit_nr', 'confluence_link', 'annotations', 'median_location', 'min_time', 'max_time', 'proba', 'number_of_customers', 'expected_svbm_in_case_of_failure']

    constructor(
        private warningService: WarningService,
        private router: Router,
        private route: ActivatedRoute
        ) { }
    
    ngOnInit() {
        this.warning = new Warning();
        this.id = this.route.snapshot.params['id'];
        this.warningService.getWarning(this.id).subscribe(data => {
            console.log(data);
            this.warnings = [];
            this.warnings.push(data);
            this.isLoading = false;
        })
    }
    
}