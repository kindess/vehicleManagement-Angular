import { Component , TemplateRef} from '@angular/core';
import { DialogService } from "ngx-bootstrap-modal";
import {VehicleManagementComponent} from "./vehicle-management/vehicle-management.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vehicleManagement';
  constructor(public dialogService: DialogService) {
  }
  showAlert() {
    // @ts-ignore
    this.dialogService.addDialog(VehicleManagementComponent, { title: 'Alert title!', message: 'Alert message!!!' });
  }
}
