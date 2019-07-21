import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // 表单对象定义
  user: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    // 使用FormBuilder 快速构建表单（FormControl构建比较繁琐）
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      rememberMe: ['']
    });
  }

  onSubmit(value) {
    console.log(value);
  }
}
