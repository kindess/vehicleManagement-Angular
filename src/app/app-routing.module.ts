import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VehicleManagementComponent} from './vehicle-management/vehicle-management.component';
import {LoginAndRegisterComponent} from './login-and-register/login-and-register.component';
import {IndexComponent} from './index/index.component';
import {LoginGuard} from './LoginGuard';


/**
 * 定义路由(定义之后需要在下面的imports中导入RouterModule.
 *    forRoot(routes)以及exports导出RouterModule)
 */
const routes: Routes = [
  // 首页重定向
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginAndRegisterComponent},
  {path: 'index', component: IndexComponent, canActivate: [LoginGuard]},
  {path: 'vehicleManagement', component: VehicleManagementComponent, canActivate: [LoginGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // 导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
  exports: [RouterModule],
  // 路由守卫
  providers: [LoginGuard]
})
export class AppRoutingModule { }
