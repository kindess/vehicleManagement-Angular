import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalCommunicateComponentService {

  // 数据源
  public messageSource = new BehaviorSubject<string>('Start');
  sendMessage(message): void {
    this.messageSource.next(message);
  }
  constructor() { }
}
