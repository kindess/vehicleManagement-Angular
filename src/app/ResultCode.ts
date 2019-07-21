/**
 * 响应结构
 */
export class ResultCode<T> {
  status: number;
  message: string;
  data: T[];
}
