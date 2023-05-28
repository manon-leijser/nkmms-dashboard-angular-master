import { TestBed } from '@angular/core/testing'

import { UrgentWarningService } from './urgent-warning.service'

describe('UrgentWarningService', () => {
    let service: UrgentWarningService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UrgentWarningService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});