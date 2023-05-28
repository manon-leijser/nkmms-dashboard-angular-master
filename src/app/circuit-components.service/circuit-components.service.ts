import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CircuitComponentsService {
    public baseUrl = "http://localhost:4200/api/v1/circuits";
    public components = "components";

    constructor(private httpClient: HttpClient) { }

    public getCircuitComponents(id: number): Observable<any> {
        return this.httpClient.get(`${this.baseUrl}/${id}/${this.components}`)
    }
}