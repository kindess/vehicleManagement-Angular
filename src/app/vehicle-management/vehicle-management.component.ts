import { Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogComponent, DialogService } from 'ngx-bootstrap-modal';
export interface AlertModel {
  title: string;
  message: string;
}
declare var layui: any;

@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.css']
})
export class VehicleManagementComponent extends DialogComponent<AlertModel, null> implements AlertModel,OnInit{
  // AlertModel接口参数
  message: string;
  title: string;


  vehicleInfo;
  // 厂牌下拉框
  vehicleBrandSelect: FormGroup;
  array =[{fieldId: '', fieldName:''}];
  constructor(private vehicleService: VehicleService,
              private fb:FormBuilder,
              dialogService: DialogService) {
    super(dialogService);
  }
  ngOnInit(): void {
    this.vehicleBrandSelect = this.fb.group([
      {fieldId: '', fieldName:''},
      {fieldId: '', fieldName:''},
      {fieldId: '', fieldName:''},
      {fieldId: '', fieldName:''}
    ]);
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
    this.vehicleBrandSelectInit();

  }
  // this.vehicleBrandSelect=result.data[0]
  // 初始化厂牌下拉框
  vehicleBrandSelectInit() {
    this.vehicleService.getOptionalVehicleBrands().subscribe(
      result=> this.array=result.data[0]
    )
  }

  ngAfterViewInit() {
    // 加载数据表格
    // @ts-ignore 忽略下一行错误（bootstrapTable方法没有被定义）
    $('#table').bootstrapTable({
      url: 'http://localhost:8080/vehicleInfo/queryInfoList',
      ajaxOptions: {
        xhrFields: {        //跨域
          withCredentials: true
        },
        crossDomain: true
      },
      method: 'POST',                      //请求方式（*）
      toolbar: '#toolbar',              //工具按钮用哪个容器
      striped: true,                      //是否显示行间隔色
      cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
      pagination: true,                   //是否显示分页（*）
      sortable: true,                     //是否启用排序
      sortOrder: "asc",                   //排序方式
      sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
      pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
      pageSize: 10,                     //每页的记录行数（*）
      pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
      checkboxHeader: true,
      // search: false,                      //是否显示表格搜索
      strictSearch: true,
      showColumns: true,                  //是否显示所有的列（选择显示的列）
      showRefresh: true,                  //是否显示刷新按钮
      minimumCountColumns: 2,             //最少允许的列数
      clickToSelect: true,                //是否启用点击选中行
      //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
      uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
      showToggle: true,                   //是否显示详细视图和列表视图的切换按钮
      cardView: false,                    //是否显示详细视图
      detailView: false,                  //是否显示父子表
      responseHandler: function (res) {    //解析返回值，解析为表格能加载的格式
        var jsonData = {
          title:'数据表格',
          rows:res.data[0].list,

        };
        return jsonData;
      },
      columns: [
        {
          checkbox: true, // 显示复选框
          width: 50
        },
        {
          title: '序号',
          width: 50,
          formatter: function (value, row, index) {
            // 显示行号
            // @ts-ignore
            var options = $('#table').bootstrapTable('getOptions');
            return options.pageSize * (options.pageNumber - 1) + index + 1;
          }
        }
        ,
        {
          field: 'id',
          title: 'ID',
          visible:false //隐藏
        },
        {
          field: 'vehicleLicense',
          title: '车牌号'
        },
        {
          field: 'vehicleType',
          title: '类型'
        },
        {
          field: 'level',
          title: '等级'
        },
        {
          field: 'drivingLicenseNumber',
          title: '行驶证编号'
        },
        {
          field: 'vehicleBrand',
          title: '厂牌'
        },
        {
          field: 'seatsOfGuests',
          title: '载客数'
        },
        {
          field: 'annualReviewStatus',
          title: '状态'
        },
        {
          field: 'dateInitialRegistration',
          title: '上户日期'
        },
        {
          field: 'subordinateSuppliers',
          title: '所属供应商'
        },
        {
          field: 'dispatchingRight',
          title: '调度权'
        },
        {
          field: 'businessPurpose',
          title: '业务用途'
        },
        {
          field: 'wealth',
          title: '最近绑定产品'
        },
      ]
    });
    // 重置右上角样式
    $('button[name="refresh"]').removeClass("fa fa-sync").addClass("glyphicon glyphicon-refresh columns-btn");
    $('button[name="toggle"]').removeClass("fa fa-sync").addClass("glyphicon glyphicon-list-alt columns-btn");
    $('button[title="Columns"]').removeClass("btn btn-secondary dropdown-toggle").addClass("glyphicon glyphicon-th columns-btn");
    $(".columns-btn").css("background-color: white");
  }

  // 复选框选中数据
  getSelections(){
    // @ts-ignore
    console.log($('#table').bootstrapTable('getSelections'));
  }
}
