import { TestBed } from '@angular/core/testing';

import { LoginOrRegisterServiceService } from './login-or-register-service.service';

describe('LoginOrRegisterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginOrRegisterServiceService = TestBed.get(LoginOrRegisterServiceService);
    expect(service).toBeTruthy();
  });
});
