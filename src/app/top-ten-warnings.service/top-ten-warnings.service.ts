import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TopTenWarningsService {
    public baseUrl = "http://localhost:4200/api/v1/warnings/top_ten";

    constructor(private httpClient: HttpClient) { }

    public getTopTenWarnings(): Observable<any> {
        return this.httpClient.get<any>(this.baseUrl)
    }
}