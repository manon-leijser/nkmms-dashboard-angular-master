import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UrgentWarningService {
    public baseUrl = "http://localhost:4200/api/v1/warnings/urgent_warning";

    constructor(private httpClient: HttpClient) { }

    public getWarnings(): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl)
    }
}