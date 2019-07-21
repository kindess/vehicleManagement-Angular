import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {ResultCode} from './ResultCode';
import {CookieService} from 'ngx-cookie-service';
import {HandleError} from './hadleError';
import * as globals from './RequestUtil';

declare var layui: any;
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router,
              private http: HttpClient,
              private cookieService: CookieService) { }


  /** 向服务器发送登出请求 */
  logout(): Observable<any> {
    const paramUrl = globals.requestUrl + '/user/logout';
    return this.http.post<any>(paramUrl, null).pipe(
      /**
       * catchError() 操作符会拦截失败的 Observable。
       * 它把错误对象传给错误处理器，错误处理器会处理这个错误。
       */
      catchError(HandleError.handleError<any>('logout', [])));
  }
  // 退出检查
  checkLogout(result: ResultCode<any>) {
    if (result.status === 200) {
      // 清空cookie、sessio
      this.cookieService.delete('rememberMe');
      // 路由跳转
      return this.router.navigate(['/login']);
    }
    // 失败提示
    return layui.layer.alert(result.message);
  }
  // 判断结果，由前端控制登录页面的跳转
  checkLogin(result: ResultCode<any>) {
    if (result.status === 200) {
      // 登录成功，路由跳转
      return this.router.navigate(['/index']);
    }
    // 登录失败提示
    layui.layer.alert(result.message);
  }
}
