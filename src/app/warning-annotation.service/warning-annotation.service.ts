import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WarningAnnotationService {
    public baseUrl = "http://localhost:4200/api/v1/warnings/annotation/";

    constructor(private httpClient: HttpClient) { }

    public addWarningAnnotation(warningAnnotation: object): Observable<object> {
        return this.httpClient.post(this.baseUrl, warningAnnotation)
    }
}