/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TaskStuffService } from './task-stuff.service';

describe('TaskStuffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskStuffService]
    });
  });

  it('should ...', inject([TaskStuffService], (service: TaskStuffService) => {
    expect(service).toBeTruthy();
  }));
});
