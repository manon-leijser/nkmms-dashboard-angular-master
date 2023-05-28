import { TestBed } from '@angular/core/testing'

import { WarningAnnotationService } from './warning-annotation.service';

describe('WarningAnnotationService', () => {
    let service: WarningAnnotationService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(WarningAnnotationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});