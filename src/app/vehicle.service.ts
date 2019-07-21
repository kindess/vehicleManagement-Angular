import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as globals from './RequestUtil';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  /**
   * 获取可选的厂牌名
   */
  getOptionalVehicleBrands(): Observable<any> {
    return this.http.post(globals.requestUrl+"/vehicleInfo/queryAllVehicleBrand",null,globals.httpOptions);
  }
}
