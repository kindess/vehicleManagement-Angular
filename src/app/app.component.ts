import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
    <!-- 路由出口 -->
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'vehicleManagement';
  constructor() {
  }
}
