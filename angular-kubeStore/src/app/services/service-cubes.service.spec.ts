import { TestBed } from '@angular/core/testing';

import { ServiceCubesService } from './service-cubes.service';

describe('ServiceCubesService', () => {
  let service: ServiceCubesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCubesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
