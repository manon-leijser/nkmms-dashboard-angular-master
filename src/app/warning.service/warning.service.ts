import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WarningService {
    public baseUrl = "http://localhost:4200/api/v1/warnings/warning";

    constructor(private httpClient: HttpClient) { }

    public getWarning(id: number): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/${id}`)
    }
}