import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// 注册响应式表单 ReactiveFormsModule
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginOrRegisterServiceService } from './login-or-register-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { VehicleManagementComponent } from './vehicle-management/vehicle-management.component';
import { IndexComponent } from './index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import {VehicleService} from './vehicle.service';
// 全局引入ng-zorro
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {ModalComponent} from "./modal/modal.component";
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormParamterComponent } from './form-paramter/form-paramter.component';
import {ModalCommunicateComponentService} from "./modal-communicate-component.service";
import { TestComponent } from './test/test.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginAndRegisterComponent,
    VehicleManagementComponent,
    IndexComponent,
    ModalComponent,
    FormParamterComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    /** 导入 ng-zorro-antd 模块 **/
    NgZorroAntdModule
  ],
  // 服务提供者
  providers: [ LoginOrRegisterServiceService , CookieService, VehicleService,
    /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
    { provide: NZ_I18N, useValue: zh_CN },
    ModalCommunicateComponentService
  ],
  /** 作为所有页面的根节点页面 */
  bootstrap: [AppComponent],
  entryComponents: [
    FormParamterComponent
  ],
})
export class AppModule { }
