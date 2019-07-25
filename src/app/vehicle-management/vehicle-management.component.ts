import { Component, OnInit, ViewChild} from '@angular/core';
import {VehicleService} from '../vehicle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ModalComponent} from "../modal/modal.component";
import {HttpClient} from '@angular/common/http';
import * as globals from '../RequestUtil';
declare var layui: any;
// declare var $: any;
@Component({
  selector: 'app-vehicle-management',
  templateUrl: './vehicle-management.component.html',
  styleUrls: ['./vehicle-management.component.css']
})
export class VehicleManagementComponent implements OnInit{
  // 获取子组件 (需要两个参数？)
  @ViewChild("modalComponent",null) child: ModalComponent;

  vehicleInfo;
  // 厂牌下拉框
  vehicleBrandSelect: FormGroup;
  array =[{fieldId: '', fieldName:''}];
  constructor(private vehicleService: VehicleService,
              private fb:FormBuilder,
              private http:HttpClient) {
  }
  ngOnInit(): void {
    this.vehicleBrandSelect = this.fb.group([
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
  // 初始化厂牌下拉框
  vehicleBrandSelectInit() {
    this.vehicleService.getOptionalVehicleBrands().subscribe(
      result=> this.array=result.data[0]
    )
  }

  // 钩子函数（在页面dom元素完全加载之后）
  ngAfterViewInit() {
    // 加载数据表格
    // @ts-ignore
    $('#table').bootstrapTable({
      url: globals.requestUrl+'/vehicleInfo/queryInfoList',
      ajaxOptions: {
        xhrFields: {        //跨域
          withCredentials: true
        },
        crossDomain: true
      },
      method: 'GET',                      //请求方式（*）
      toolbar: '#toolbar',              //工具按钮用哪个容器
      striped: true,                      //是否显示行间隔色
      cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
      pagination: true,                   //是否显示分页（*）
      sortable: true,                     //是否启用排序
      sortOrder: "asc",                   //排序方式
      sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
      pageNum: 1,                      //初始化加载第一页，默认第一页,并记录
      pageSize: 10,                     //每页的记录行数（*）
      pageList: [10,15,20,30,50],        //可供选择的每页的行数（*）
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
      queryParams:function (params) {     //携带参数进行向后台请求
          var temp = {
            // limit: params.limit,       //页面大小
            pageNum:(params.offset / params.limit) + 1,   //页码（计算当前点击的页面）
            // pageNum:this.pageNum,     //对应上面bootstrapTable中的pageNum
            pageSize:params.limit,       //params.limit页面大小，键名pageSize对应上面bootstrapTable中的pageSize
          };
          return temp;
      },
      responseHandler: function (res) {    //解析返回值，解析为表格能加载的格式
        var jsonData = {
          title:'数据表格',
          rows:res.data[0].list,
          total: res.data[0].total
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

    // 数据表格右上角刷新事件
    $('button[name="refresh"]').click(()=>{
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
      //@ts-ignore 重新加载数据
      $("#table").bootstrapTable('refresh',opt);
    });
  }

  // 复选框选中数据
  getSelections(){
    // @ts-ignore
    console.log($('#table').bootstrapTable('getSelections'));
  }

  // 点击添加按钮，显示模态框
  add(){
    this.child.addEvent();
  }

  edit(){
    // @ts-ignore
    const array= $('#table').bootstrapTable('getSelections');
    if (array.length < 1) {
      return layui.layer.alert("请选择需要编辑的数据");
    }
    if (array.length > 1) {
      return layui.layer.alert("请不要选择多条数据");
    }
    this.child.editEvent(array[0].id);
    console.log("修改模态框")
  }

  delete(){
    // @ts-ignore
    const array= $('#table').bootstrapTable('getSelections');
    if (array.length < 1) {
      return layui.layer.alert("请选择需要删除的数据");
    }
    this.child.deleteEvent(array);
  }
  // 根据车牌号查询
  search(){
    var opt = {
      url: globals.requestUrl+`/vehicleInfo/queryByVehicleLicense?vehicleLicense=`+this.vehicleInfo.vehicleLicense, //重新请求的链接
      silent: true,
      ajaxOptions: {
        xhrFields: {        //跨域
          withCredentials: true
        },
        crossDomain: true
      },
      method: 'GET',
    };
    //@ts-ignore 重新加载数据
    $("#table").bootstrapTable('refresh',opt);
  }
  // 下拉列表改变触发事件
  selectByvehicleBrandId(){
    var opt = {
      url: globals.requestUrl+`/vehicleInfo/queryByVehicleBrand?vehicleBrandId=`+this.vehicleInfo.vehicleBrandId, //重新请求的链接
      silent: true,
      ajaxOptions: {
        xhrFields: {        //跨域
          withCredentials: true
        },
        crossDomain: true
      },
      method: 'GET',
    };
    //@ts-ignore 重新加载数据
    $("#table").bootstrapTable('refresh',opt);
  }
}
