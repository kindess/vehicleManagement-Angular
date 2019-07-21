import {HttpHeaders} from '@angular/common/http';
// 跨域请求
export const requestUrl = '//localhost:8080';
export const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Headers': 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild',
    'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
    'Content-Type': 'application/json;charset=UTF-8',
  }),
  withCredentials: true  // 设置浏览器携带cookie
}
