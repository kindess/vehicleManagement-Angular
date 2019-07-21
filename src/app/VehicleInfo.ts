
export class VehicleInfo {
  id: string;
  // 车牌号
  vehicleLicense: string;
  // 车辆所有人
  owener: string;
  // 对应的id
  optionColorId: number;
  // 车牌颜色
  optionColor: string;
  // 发动机号
  engineNumber: string;
  vehicleBrandId: number;
  // 车辆厂牌
  vehicleBrand: string;

  // 车辆机架号
  vehicleRackNumber: string;

  // 车辆型号
  vehicleModel: string;
  // 注册日期
  registerDate: string;

  vehicleTypeId: number;
// 车辆类型
  vehicleType: string;

// 初次登记日期
  dateInitialRegistration: string;

// 车身颜色
  bodyColor: string;

  vehicleMaintenanceStatusId: number;
  // 车辆检修状态
  vehicleMaintenanceStatus: string;

  // 核定载客位(包含驾驶员)
  seatingCapacity: number;
  annualReviewStatusId: number;
// 车辆年审状态
  annualReviewStatus: string;

 fuelTypeId: number;
// 燃料类型
  fuelType: string;

// 下次年检时间
  nextAnnualInspectionTime: string;

// 排量
  displacement: number;

  levelId: number;
// 等级
  level: string;

  businessPurposeId: number;
// 业务用途
  businessPurpose: string;

  scopeOfBusinessId: number;
// 运营范围
  scopeOfBusiness: string;

  subordinateSuppliersId: number;
// 所属供应商
  subordinateSuppliers: string;

// 载客数(不包含驾驶员)
  seatsOfGuests: number;

// 里程数
  mileage: number;

// 行驶证号
  drivingLicenseNumber: string;

  dispatchingRightId: number;
// 调度权
  dispatchingRight: string;

// 备注
  remarks: string;

// 车辆全身照路径
  imageUrl: string;

// 所有的可选选项与可选参数
  map: any;
}
