import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FindWarningsService {
    public baseUrl = "http://localhost:4200/api/v1/warnings/find";

    constructor(private httpClient: HttpClient) { }

    public getFindWarnings(circuit_nr:number, location:number, decision_type:string): Observable<any> {
        let params = new HttpParams().set("circuit_nr_or_id", circuit_nr).set("location", location).set("decision_type", decision_type);
        return this.httpClient.get(this.baseUrl, {params: params})
    }
}