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

import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import {VehicleService} from './vehicle.service';
// bootstrap模态框
import {ModalModule} from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LoginAndRegisterComponent,
    VehicleManagementComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ModalModule,
    ModalModule.forRoot(),
  ],
  // 服务提供者
  providers: [ LoginOrRegisterServiceService , CookieService, VehicleService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
