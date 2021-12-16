import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../core/api.contant';
import { RestApiService } from './rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  constructor(
    private restService: RestApiService
  ) { }

  formData(data: FormData): Observable<any> {
    const url = API_URL.formData;
    return this.restService.postFormData(url, data);
  }

  base64(base64: string): Observable<any> {
    const url = API_URL.base64;
    const data = {
      base64
    };
    return this.restService.postJson(url, data);
  }
}
