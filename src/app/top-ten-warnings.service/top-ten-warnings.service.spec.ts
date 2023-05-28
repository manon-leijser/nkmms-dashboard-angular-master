import { TestBed } from '@angular/core/testing'

import { TopTenWarningsService } from './top-ten-warnings.service'

describe('TopTenWarningsService', () => {
    let service: TopTenWarningsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(TopTenWarningsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});