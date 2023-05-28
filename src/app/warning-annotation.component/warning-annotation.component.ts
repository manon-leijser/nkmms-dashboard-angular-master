import { Component, OnInit } from '@angular/core';
import { MatRecycleRows, MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WarningAnnotation } from '../warning-annotation.service/warning-annotation';
import { WarningAnnotationService } from '../warning-annotation.service/warning-annotation.service';

@Component({
    selector: 'app-warning-annotation',
    templateUrl: './warning-annotation.component.html',
    styleUrls: ['./warning-annotation.component.css']
})
export class WarningAnnotationComponent implements OnInit {
    
    warningAnnotation: WarningAnnotation = new WarningAnnotation();
    submitted = false;

    constructor(
        private warningAnnotationService: WarningAnnotationService,
        private router: Router,
        ) { }
    
    ngOnInit() { }

    newWarningAnnotation(): void {
        this.submitted = false;
        this.warningAnnotation = new WarningAnnotation();
    }

    save() {
        this.warningAnnotationService.addWarningAnnotation(this.warningAnnotation)
            .subscribe(data =>
                console.log(data),
                error => console.log(error));
        this.warningAnnotation = new WarningAnnotation();
        this.topTenWarnings();
    }

    onSubmit() {
        this.submitted = true;
        this.save();
    }

    topTenWarnings() {
        this.router.navigate(['top-ten-warnings']);
    }
    
}