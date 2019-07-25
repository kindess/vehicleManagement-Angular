import { TestBed } from '@angular/core/testing';

import { ModalCommunicateComponentService } from './modal-communicate-component.service';

describe('ModalCommunicateComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalCommunicateComponentService = TestBed.get(ModalCommunicateComponentService);
    expect(service).toBeTruthy();
  });
});
