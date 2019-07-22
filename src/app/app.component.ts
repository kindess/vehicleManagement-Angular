import { Component , TemplateRef} from '@angular/core';
import {VehicleManagementComponent} from "./vehicle-management/vehicle-management.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehicleManagement';
  constructor() {
  }
}
