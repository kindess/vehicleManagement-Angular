import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// 捕获服务器数据传输的异常
import { catchError, map, tap } from 'rxjs/operators';
import * as globals from './RequestUtil';
import {HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  'http://localhost:8080',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Content-Type': 'application/json;charset=UTF-8',
  }),
  withCredentials: true  // 设置浏览器携带cookie
};
@Injectable({
  providedIn: 'root'
})
export class LoginOrRegisterServiceService {
  constructor(private http: HttpClient) { }
  /** 向服务器发送登录请求 */
  userLogin(requestBody): Observable<any> {
    // 如果将参数放入请求体中，会导致后台无法通过request.getParameter方式获取参数值，request.getParameter只能获取url中的参数
    const paramUrl = globals.requestUrl + '/user/login?username=' + requestBody.username +
            '&password=' + requestBody.password + '&rememberMe=' + requestBody.rememberMe;
    return this.http.post<any>(paramUrl, null, httpOptions).pipe(
      /**
       * catchError() 操作符会拦截失败的 Observable。
       * 它把错误对象传给错误处理器，错误处理器会处理这个错误。
       */
      catchError(this.handleError<any>('login', [])));
  }

  /**
   * 错误处理器
   * @param operation
   * @param result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
