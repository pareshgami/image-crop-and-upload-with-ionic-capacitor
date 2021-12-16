import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(
    private http: HttpClient
  ) { }

  postFormData(apiURL: string, data: FormData):Observable<any> {
    return this.http.post(apiURL, data);
  }

  postJson(apiURL: string, data: any) {
    return this.http.post(apiURL, data);
  }
  
}
