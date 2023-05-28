import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatRecycleRows, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FindWarnings } from '../find-warnings.service/find-warnings';
import { FindWarningsService } from '../find-warnings.service/find-warnings.service';

@Component({
    selector: 'app-find-warnings',
    templateUrl: './find-warnings.component.html',
    styleUrls: ['./find-warnings.component.css']
})
export class FindWarningsComponent implements OnInit, OnChanges {
    
    @Input() circuit_nr!:number;
    @Input() location!:number;
    @Input() decision_type!:string;

    findWarnings!: FindWarnings[];
    id!: number;
    findWarning: FindWarnings = new FindWarnings();
    isLoading = true;
    color = 'primary';
    mode = 'determinate';
    value = 50;
    displayedColumns = ['grouped_cluster_id', 'circuit_nr', 'median_location', 'min_time', 'max_time', 'proba', 'confluence_link']

    constructor(
        private findWarningsService: FindWarningsService,
        private router: Router
        ) { }
    
    ngOnInit() {
    }

    public getFoundWarnings() {
        this.findWarningsService.getFindWarnings(this.circuit_nr, this.location, this.decision_type)
        .subscribe(data => {
            console.log(data);
            this.findWarnings = data
            this.isLoading = false;
        }, error => 
        console.log(error));
    }
    
    ngOnChanges(changes: SimpleChanges) {
        console.log(changes['circuit_nr'])
        changes['location']
        changes['decision_type']
        this.getFoundWarnings()
    }
}