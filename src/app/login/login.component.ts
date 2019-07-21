import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery'; // 导入jquery
import {LoginOrRegisterServiceService} from '../login-or-register-service.service';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // 表单对象定义
  user: FormGroup;
  constructor(private fb: FormBuilder,
              private loginOrRegisterService: LoginOrRegisterServiceService,
              private loginService: LoginService) {
  }
  ngOnInit() {
    // 使用FormBuilder 快速构建表单（FormControl构建比较繁琐）
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: ['']
    });
  }
  onLogin() {
    // 获取FormGroup表单中的json数据
    // console.log(this.user.value);
    this.loginOrRegisterService.userLogin(this.user.value)
      .subscribe(
        result => this.loginService.checkLogin(result), // 异步处理方法
        error => console.log(error),
        () => console.log('完成登录请求'));
    return ;
  }
}
