import { Component, OnInit, EventEmitter } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { UploadFile, UploadChangeParam } from 'ng-zorro-antd';
import {ModalCommunicateComponentService} from "../modal-communicate-component.service";
@Component({
  selector: 'app-form-paramter',
  templateUrl: './form-paramter.component.html',
  styleUrls: ['./form-paramter.component.css']
})
export class FormParamterComponent implements OnInit {
  // 表单
  validateForm: FormGroup;
  vehicleInfo= {
    id: '',
    vehicleLicense: '',
    owener: '',
    optionColorId: '-1', // 这里必须是字符串才能被下拉列表识别
    optionColor: '',
    engineNumber: '',
    vehicleBrandId: '-1',
    vehicleBrand: '',
    vehicleRackNumber: '',
    vehicleModel: '',
    registerDate: '',
    vehicleTypeId: '-1',
    vehicleType: '',
    dateInitialRegistration: '',
    bodyColor: '',
    vehicleMaintenanceStatusId: '-1',
    vehicleMaintenanceStatus: '',
    seatingCapacity: '',
    annualReviewStatusId: '-1',
    annualReviewStatus: '',
    fuelTypeId: '-1',
    fuelType: '',
    nextAnnualInspectionTime: '',
    displacement: '',
    levelId: '-1',
    level: '',
    businessPurposeId: '-1',
    businessPurpose: '',
    scopeOfBusinessId: '-1',
    scopeOfBusiness: '',
    subordinateSuppliersId: '-1',
    subordinateSuppliers: '',
    seatsOfGuests: '',
    mileage: '',
    drivingLicenseNumber: '',
    dispatchingRightId: '-1',
    dispatchingRight: '',
    remarks: '',
    imageUrl: '',
  };
  BrandColorSelect = [
    {fieldId: '', fieldName:''},
  ];
  BrandSelect=[
    {fieldId: '', fieldName:''},
  ];
  vehicleTypeSelect=[
    {fieldId: '', fieldName:''},
  ];
  MaintenanceStatusSelect=[
    {fieldId: '', fieldName:''},
  ];
  annualReviewStatusSelect=[
    {fieldId: '', fieldName:''},
  ];
  fuelTypeSelect=[
    {fieldId: '', fieldName:''},
  ];
  levelSelect=[
    {fieldId: '', fieldName:''},
  ];
  businessPurposeSelect=[
    {fieldId: '', fieldName:''},
  ];
  scopeOfBusinessSelect=[
    {fieldId: '', fieldName:''},
  ];
  subordinateSuppliersSelect=[
    {fieldId: '', fieldName:''},
  ];
  dispatchingRightRadio=[
/*    {fieldId: '1', fieldName:'平台'},
    {fieldId: '2', fieldName:'供应商'}*/
  ];
  dateFormat="yyyy-MM-dd";
  constructor(private fb: FormBuilder,
              private modalCommunicateComponentService:ModalCommunicateComponentService) { }

  ngOnInit() {
    //初始化表单
    this.validateForm = this.fb.group({
      formLayout: ['inline'],
      fieldA: [null, [Validators.required]],
      filedB: [null, [Validators.required]]
    });

    // 订阅消息（非父子组件通信）
    this.modalCommunicateComponentService.messageSource.subscribe(message => {
      // console.log(message.color);
      if (message.length == 1) {
        // @ts-ignore
        this.BrandColorSelect= message[0].color
        // @ts-ignore
        this.BrandSelect= message[0].vehicleBrand
        // @ts-ignore
        this.vehicleTypeSelect=message[0].vehicleType
        // @ts-ignore
        this.MaintenanceStatusSelect=message[0].vehicleMaintenanceStatus
        // @ts-ignore
        this.annualReviewStatusSelect=message[0].annualReviewStatus
        // @ts-ignore
        this.fuelTypeSelect=message[0].fuelType
        // @ts-ignore
        this.levelSelect=message[0].level
        // @ts-ignore
        this.businessPurposeSelect=message[0].businessPurpose
        // @ts-ignore
        this.scopeOfBusinessSelect=message[0].scopeOfBusiness
        // @ts-ignore
        this.subordinateSuppliersSelect=message[0].subordinateSuppliers
        // @ts-ignore
        this.dispatchingRightRadio=message[0].dispatchingRight
      }
      if (message.length == 2) {
        /**
         * 下拉列表
         */
        // @ts-ignore
        this.BrandColorSelect= message[1].color
        // @ts-ignore
        this.BrandSelect= message[1].vehicleBrand
        // @ts-ignore
        this.vehicleTypeSelect=message[1].vehicleType
        // @ts-ignore
        this.MaintenanceStatusSelect=message[1].vehicleMaintenanceStatus
        // @ts-ignore
        this.annualReviewStatusSelect=message[1].annualReviewStatus
        // @ts-ignore
        this.fuelTypeSelect=message[1].fuelType
        // @ts-ignore
        this.levelSelect=message[1].level
        // @ts-ignore
        this.businessPurposeSelect=message[1].businessPurpose
        // @ts-ignore
        this.scopeOfBusinessSelect=message[1].scopeOfBusiness
        // @ts-ignore
        this.subordinateSuppliersSelect=message[1].subordinateSuppliers
        // @ts-ignore
        this.dispatchingRightRadio=message[1].dispatchingRight

        /**
         * 被选中的值
         */
        // @ts-ignore
        this.vehicleInfo.id=message[0].id
        // @ts-ignore
        this.vehicleInfo.vehicleLicense=message[0].vehicleLicense
        // @ts-ignore
        this.vehicleInfo.owener=message[0].owener
        // @ts-ignore
        this.vehicleInfo.optionColorId=message[0].optionColorId
        // @ts-ignore
        this.vehicleInfo.engineNumber=message[0].engineNumber
        // @ts-ignore
        this.vehicleInfo.vehicleBrandId=message[0].vehicleBrandId
        // @ts-ignore
        this.vehicleInfo.vehicleRackNumber=message[0].vehicleRackNumber
        // @ts-ignore
        this.vehicleInfo.vehicleModel=message[0].vehicleModel
        // @ts-ignore
        this.vehicleInfo.registerDate=message[0].registerDate
        // @ts-ignore
        this.vehicleInfo.vehicleTypeId=message[0].vehicleTypeId
        // @ts-ignore
        this.vehicleInfo.dateInitialRegistration=message[0].dateInitialRegistration
        // @ts-ignore
        this.vehicleInfo.bodyColor=message[0].bodyColor
        // @ts-ignore
        this.vehicleInfo.vehicleMaintenanceStatusId=message[0].vehicleMaintenanceStatusId
        // @ts-ignore
        this.vehicleInfo.seatingCapacity=message[0].seatingCapacity+""
        // @ts-ignore
        this.vehicleInfo.annualReviewStatusId=message[0].annualReviewStatusId
        // @ts-ignore
        this.vehicleInfo.fuelTypeId=message[0].fuelTypeId
        // @ts-ignore
        this.vehicleInfo.nextAnnualInspectionTime=message[0].nextAnnualInspectionTime
        // @ts-ignore
        this.vehicleInfo.displacement=message[0].displacement+""
        // @ts-ignore
        this.vehicleInfo.levelId=message[0].levelId
        // @ts-ignore
        this.vehicleInfo.businessPurposeId=message[0].businessPurposeId
        // @ts-ignore
        this.vehicleInfo.scopeOfBusinessId=message[0].scopeOfBusinessId
        // @ts-ignore
        this.vehicleInfo.subordinateSuppliersId=message[0].subordinateSuppliersId
        // @ts-ignore
        this.vehicleInfo.seatsOfGuests=message[0].seatsOfGuests+""
        // @ts-ignore
        this.vehicleInfo.mileage=message[0].mileage+""
        // @ts-ignore
        this.vehicleInfo.drivingLicenseNumber=message[0].drivingLicenseNumber
        // @ts-ignore
        this.vehicleInfo.dispatchingRightId=message[0].dispatchingRightId
        // @ts-ignore
        this.vehicleInfo.remarks=message[0].remarks
        // @ts-ignore
        this.vehicleInfo.imageUrl=message[0].imageUrl
        this.fileList = [
          {
            url:this.vehicleInfo.imageUrl
          }
        ]
      }
    });
  }
// 表单事件 start ================

  get isHorizontal(): boolean {
    return this.validateForm.controls.formLayout && this.validateForm.controls.formLayout.value === 'horizontal';
  }
// 表单事件 end ================

// 图片上传 start ===============

  /**
   * 显示配置
   */
  showUploadList = {
    // 预览图标
    showPreviewIcon: true,
    // 删除图标
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  /**
   * 图片回显路径
   */
  fileList = [
    /*{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }*/
  ];

  previewImage: string | undefined = '';
  previewVisible = false;
  /**
   * 点击预览图标时的回调
   * @param file
   */
  handlePreview = (file: UploadFile) => {
    // thumbUrl：缩略图
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  // 订阅EventEmitter中的UploadChangeParam。开始、上传进度、完成、失败都会调用这个函数。
  statusChange(info: any): void {
    // 2. read from response and show file link
    /**
     * file 当前操作的文件对象:
     *        {
     *          uid: 'uid',      // 文件唯一标识
     *          name: 'xx.png'   // 文件名
     *          status: 'done', // 状态有：uploading done error removed
     *          response: '{"status": "success"}', // 服务端响应内容
     *          linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
     *         }
     */
    if (info.file.response) {
      info.file.url = info.file.response.data[0].url;
      this.vehicleInfo.imageUrl=info.file.response.data[0].url;
    }
    // console.log(info.event)
    // 3. filter successfully uploaded files according to response from server
    // tslint:disable-next-line:no-any
    /*this.fileList = fileList.filter((item: any) => {
      if (item.response) {
        return item.response.status === 'success';
      }
      return true;
    });*/
  }

  /**
   * 将中国标准时间转换为"yyyy-MM-dd"格式
   */
  /*parseTime (time) {
    if ((time + '').indexOf('-') != -1) {
      time = time.replace(new RegExp(/-/gm), '/')
    }
    let d = new Date(time)
    let newDateYear = d.getFullYear();
    let newDateMonth = (d.getMonth() + 1) < 10 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1);
    let newDateDay = d.getDate() < 10 ? '0' + d.getDate() + '' : d.getDate() + '';
    // console.log( newDateYear + '-' + newDateMonth + '-' + newDateDay)
    return newDateYear + '-' + newDateMonth + '-' + newDateDay;
  }*/



  validateStatus(validateParam:string){
    // 验证数字
    var reg = new RegExp("^[0-9]*$");
    if (validateParam.trim() === ''){
      return 'error';
    }
    var value = validateParam.trim().split("'")[0];
    // console.log(validateParam.trim().split("'"))
    if (!reg.test(value)) {
      return 'warning';
    }
    return 'success'
  }

//============================

  submitModal(){

  }
}
