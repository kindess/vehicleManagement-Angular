import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
declare var layui: any;
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router: Router,
              private loginService: LoginService) { }

  ngOnInit() {
  }
  // 向后台发送退出请求
  logout() {
    this.loginService.logout().subscribe(
      result => this.loginService.checkLogout(result),
      error => console.log(error),
      () => console.log('完成退出请求')
    );
  }
}
