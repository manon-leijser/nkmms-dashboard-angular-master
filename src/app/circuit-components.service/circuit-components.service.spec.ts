import { TestBed } from '@angular/core/testing'

import { CircuitComponentsService } from './circuit-components.service';

describe('CircuitComponentsService', () => {
    let service: CircuitComponentsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CircuitComponentsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});