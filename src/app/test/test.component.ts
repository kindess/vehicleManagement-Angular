import { Component, OnInit ,Input, TemplateRef} from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  ngOnInit() {
  }
  tplModal: NzModalRef;
  tplModalButtonLoading = false;
  htmlModalVisible = false;
  disabled = false;
  constructor(private modalService: NzModalService) {}
  createModal(): void {
    this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: 'string, will close after 1 sec',
      nzClosable: false,
      nzOnOk: () => new Promise(resolve => setTimeout(resolve, 1000))
    });
  }
  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok')
    });
  }
  destroyTplModal(): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      this.tplModal.destroy();
    }, 1000);
  }
  createComponentModal(): void {
    const modal = this.modalService.create({
      nzTitle: 'Modal Title',
      nzContent: "模态框内置组件",
      nzComponentParams: {
        title: 'title in component',
        subtitle: 'component sub title，will be changed after 2 sec'
      },
      nzFooter: [
        {
          label: 'change component tilte from outside',
          onClick: componentInstance => {
            componentInstance!.title = 'title in inner component is changed';
          }
        }
      ]
    });
    modal.afterOpen.subscribe(() => console.log('[afterOpen] emitted!'));
    // Return a result when closed
    modal.afterClose.subscribe(result => console.log('[afterClose] The result is:', result));
    // delay until modal instance created
    setTimeout(() => {
      const instance = modal.getContentComponent();
      instance.subtitle = 'sub title is changed';
    }, 2000);
  }
  createCustomButtonModal(): void {
    const modal: NzModalRef = this.modalService.create({
      nzTitle: 'custom button demo',
      nzContent: 'pass array of button config to nzFooter to create multiple buttons',
      nzFooter: [
        {
          label: 'Close',
          shape: 'default',
          onClick: () => modal.destroy()
        },
        {
          label: 'Confirm',
          type: 'primary',
          onClick: () =>
            this.modalService.confirm({ nzTitle: 'Confirm Modal Title', nzContent: 'Confirm Modal Content' })
        },
        {
          label: 'Change Button Status',
          type: 'danger',
          loading: false,
          onClick(): void {
            this.loading = true;
            setTimeout(() => (this.loading = false), 1000);
            setTimeout(() => {
              this.loading = false;
              this.disabled = true;
              this.label = 'can not be clicked！';
            }, 2000);
          }
        },
        {
          label: 'async load',
          type: 'dashed',
          onClick: () => new Promise(resolve => setTimeout(resolve, 2000))
        }
      ]
    });
  }
  openAndCloseAll(): void {
    let pos = 0;
    ['create', 'info', 'success', 'error'].forEach(method =>
      // @ts-ignore
      this.modalService[method]({
        nzMask: false,
        nzTitle: `Test ${method} title`,
        nzContent: `Test content: <b>${method}</b>`,
        nzStyle: { position: 'absolute', top: `${pos * 70}px`, left: `${pos++ * 300}px` }
      })
    );
    this.htmlModalVisible = true;
    this.modalService.afterAllClose.subscribe(() => console.log('afterAllClose emitted!'));
    setTimeout(() => this.modalService.closeAll(), 2000);
  }
}
