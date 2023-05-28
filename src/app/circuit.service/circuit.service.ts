import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CircuitService {
    public baseUrl = "http://localhost:4200/api/v1/circuits";

    constructor(private httpClient: HttpClient) { }

    public getCircuit(id: number): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/${id}`)
    }
}