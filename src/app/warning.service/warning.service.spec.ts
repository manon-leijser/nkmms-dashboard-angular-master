import { TestBed } from '@angular/core/testing'

import { WarningService } from './warning.service';

describe('WarningService', () => {
    let service: WarningService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WarningService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});