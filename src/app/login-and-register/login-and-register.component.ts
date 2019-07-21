import { Component, OnInit } from '@angular/core';
export type EditorType = 'login' | 'register';
@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.css']
})
export class LoginAndRegisterComponent implements OnInit {
  editor: EditorType = 'login';
  constructor() { }
  ngOnInit() {
  }
  get showLogin() {
    return this.editor === 'login';
  }
  get showRegister() {
    return this.editor === 'register';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
