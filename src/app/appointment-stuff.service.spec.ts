/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppointmentStuffService } from './appointment-stuff.service';

describe('AppointmentStuffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppointmentStuffService]
    });
  });

  it('should ...', inject([AppointmentStuffService], (service: AppointmentStuffService) => {
    expect(service).toBeTruthy();
  }));
});
