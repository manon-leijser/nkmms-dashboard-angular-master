import { TestBed } from '@angular/core/testing'

import { FindWarningsService } from './find-warnings.service';

describe('FindWarningsService', () => {
    let service: FindWarningsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FindWarningsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});