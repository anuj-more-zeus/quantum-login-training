import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class StateDataService{
  private http = inject(HttpClient);

  getStatesAndDistrict(): Observable<{ [key: string]: string[] }> {
    return this.http.get<{ [key: string]: string[] }>('assets/states-districts.json');
  }
}