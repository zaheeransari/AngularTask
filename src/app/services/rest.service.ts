import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RestService {
  constructor(private http: HttpClient) { }
  fetch(url): Observable<any> {  
    return this.http.get(url);
  }
}
