import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

/**
 * 通过cookie判断用户是否有登陆
 */
export class LoginGuard implements CanActivate {
  constructor(private router: Router,
              private cookieService: CookieService) { }
   // 请求中是否包含rememberMe的cookie
  rememberMe: any;
  auth: any;
  // 路由守卫
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.auth = sessionStorage.getItem("auth");
    if (this.auth){ // 存在会话级别的身份认证
      return true;
    }
    this.rememberMe = this.cookieService.get('rememberMe');
    if (this.rememberMe) { // 存在rememberMeCookie
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
