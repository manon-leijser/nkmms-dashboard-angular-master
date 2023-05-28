import { Component, OnInit } from '@angular/core';
import { MatRecycleRows, MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TopTenWarnings } from '../top-ten-warnings.service/top-ten-warnings';
import { TopTenWarningsService } from '../top-ten-warnings.service/top-ten-warnings.service';

@Component({
    selector: 'app-top-ten-warnings',
    templateUrl: './top-ten-warnings.component.html',
    styleUrls: ['./top-ten-warnings.component.css']
})
export class TopTenWarningsComponent implements OnInit {
    
    topTenWarnings!: TopTenWarnings[];
    id!: number;
    topTenWarning: TopTenWarnings = new TopTenWarnings();
    isLoading = true;
    color = 'primary';
    mode = 'determinate';
    value = 50;
    displayedColumns = ['grouped_cluster_id', 'circuit_nr', 'median_location', 'min_time', 'max_time', 'proba', 'confluence_link']

    constructor(
        private topTenWarningsService: TopTenWarningsService,
        private router: Router,
        ) { }
    
    ngOnInit() {
        this.topTenWarningsService.getTopTenWarnings().subscribe(data => {
            console.log(data);
            this.topTenWarnings = data;
            this.isLoading = false;
        })
    }
    
}