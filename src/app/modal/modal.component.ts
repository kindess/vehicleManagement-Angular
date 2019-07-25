import { Component, OnInit, Input ,TemplateRef, ViewChild, EventEmitter} from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';
import {FormParamterComponent} from "../form-paramter/form-paramter.component";
import {HttpClient} from '@angular/common/http';
import * as globals from '../RequestUtil';
import {ModalCommunicateComponentService} from "../modal-communicate-component.service";
declare var layer;
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() inputVehicleLicense;
  @ViewChild("form_data",null) component: FormParamterComponent;
  addNzModalRef:NzModalRef
  editNzModalRef:NzModalRef
  // 数据模型
  vehicleInfo;
  constructor(private modalService:NzModalService,
              private http:HttpClient,
              private modalCommunicateComponentService: ModalCommunicateComponentService) { }

  ngOnInit() {
    this.vehicleInfo= {
      id: '',
      vehicleLicense: '',
      owener: '',
      optionColorId: '',
      optionColor: '',
      engineNumber: '',
      vehicleBrandId: -1,
      vehicleBrand: '',
      vehicleRackNumber: '',
      vehicleModel: '',
      registerDate: '',
      vehicleTypeId: '',
      vehicleType: '',
      dateInitialRegistration: '',
      bodyColor: '',
      vehicleMaintenanceStatusId: '',
      vehicleMaintenanceStatus: '',
      seatingCapacity: '',
      annualReviewStatusId: '',
      annualReviewStatus: '',
      fuelTypeId: '',
      fuelType: '',
      nextAnnualInspectionTime: '',
      displacement: '',
      levelId: '',
      level: '',
      businessPurposeId: '',
      businessPurpose: '',
      scopeOfBusinessId: '',
      scopeOfBusiness: '',
      subordinateSuppliersId: '',
      subordinateSuppliers: '',
      seatsOfGuests: '',
      mileage: '',
      drivingLicenseNumber: '',
      dispatchingRightId: '',
      dispatchingRight: '',
      remarks: '',
      imageUrl: '',
    };
  }
// 模态框事件 start ================
  addEvent(): void {
    // 加载数据
    this.http.get(globals.requestUrl+"/vehicleInfo/registerPage",globals.httpOptions).subscribe(
      result=>this.addModalDataInit(result),
      error => console.log(error)
    );
  }

  editEvent(id){
    // 加载数据
    this.http.get(globals.requestUrl+"/vehicleInfo/vehicleId/"+`${id}`,globals.httpOptions).subscribe(
      result=>this.editModalDataInit(result),
      error => console.log(error)
    );
  }

  addModalDataInit(result:any){
    if (result.status ===200) {
      this.addNzModalRef = this.modalService.create({
        nzTitle: "添加车辆信息",
        nzWidth: 960,
        nzContent: FormParamterComponent, //显示的内容
        nzOkLoading:false, //确定按钮 loading
        nzClosable: true, //是否显示右上角的关闭按钮
        nzOnOk: (resolve) => this.nzAddOk(resolve)
      });

      // 发布信息（非父子组件通信）
      this.modalCommunicateComponentService.sendMessage(result.data);
      return ;
    }
    return layer.alert(result.message);
  }

  editModalDataInit(result:any){
    if (result.status ===200) {
      this.editNzModalRef = this.modalService.create({
        nzTitle: "修改车辆信息",
        nzWidth: 960,
        nzContent: FormParamterComponent, //显示的内容
        nzOkLoading:false, //确定按钮 loading
        nzClosable: true, //是否显示右上角的关闭按钮
        nzOnOk: (resolve) =>this.nzEditOk(resolve)
      });
      // console.log("模态框数据: "+JSON.stringify(result.data[0]));
      // 非父子组件通信
      this.modalCommunicateComponentService.sendMessage(result.data);
      return ;
    }
    return layer.alert(result.message);
  }

  deleteEvent(array:any){
    var that= this;
    const arrayIds = new Array();
    for (var item of array){
      // console.log(item)
      //@ts-ignore
      arrayIds.push(item.id);
    }
    // 删除数据
    $.ajax({
      "url":globals.requestUrl+"/vehicleInfo/deleteVehicleInfo",
      "type":"post",
      "traditional":true, // 提交数组
      "data":{"vehicleIds":arrayIds},
      // 允许跨域请求时携带cookie
      xhrFields: {
        withCredentials: true
      },
      "success":function(res){
        if (res.status == 201){
          return layer.msg("操作失败!", {offset: '100px', shift: 5,time: 2000});
        }
        if (res.status == 200){
          layer.msg("操作成功!", {offset: '100px', shift: 5,time: 2000});
          // 刷新页面
          that.refreshTable();
          return ;
        }
        layer.msg("操作失败");
      }
    })
  }

  // 确认回调函数，参数为模态框中的组件
  nzAddOk = (resolve)=>{
    // console.log(resolve) // resolve为FormParamterComponent组件
    // console.log(resolve.vehicleInfo);
    var that = this;
    $.ajax({
      "url":globals.requestUrl+"/vehicleInfo/register",
      "type":"post",
      "traditional":true, // 提交数组
      "data":JSON.stringify(resolve.vehicleInfo),
      "contentType":'application/json;charset=utf-8',
      // 允许跨域请求时携带cookie
      xhrFields: {
        withCredentials: true
      },
      "success":function(res){
        if (res.status == 201){
          return layer.msg("操作失败");
        }
        if (res.status == 200){
          layer.msg("操作成功!", {offset: '100px', shift: 5,time: 2000});
          // 刷新页面
          that.refreshTable();
          return
        }
        return layer.msg("操作失败");
      }
    })
  }

  nzEditOk(resolve){
    var that = this;
    $.ajax({
      "url":globals.requestUrl+"/vehicleInfo/editVehicleInfo",
      "type":"post",
      "traditional":true, // 提交数组
      "data":JSON.stringify(resolve.vehicleInfo),
      "contentType":'application/json;charset=utf-8',
      // async:false,
      // 允许跨域请求时携带cookie
      xhrFields: {
        withCredentials: true
      },
      "success":function(res){
        if (res.status == 201){
          return layer.msg("操作失败!", {offset: '100px', shift: 5,time: 2000});
        }
        if (res.status == 200){
          // 刷新页面
          that.refreshTable();
          return layer.msg("操作成功!", {offset: '100px', shift: 5,time: 2000});
        }
        return  layer.msg("操作失败");
      }
    })
  }

  //刷新表格
  refreshTable(){
    var opt = {
      url: globals.requestUrl+'/vehicleInfo/queryInfoList', //重新请求的链接
      silent: true,
      ajaxOptions: {
        xhrFields: {        //跨域
          withCredentials: true
        },
        crossDomain: true
      },
      method: 'POST',
    };
    //@ts-ignore
    setTimeout(function () {
      //@ts-ignore 重新加载数据
      $("#table").bootstrapTable('refresh',opt);
    }, 2000);
  }

// 模态框事件 end ================

}
