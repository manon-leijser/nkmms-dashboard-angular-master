import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FindWarningsComponent } from './find-warnings.component';

describe('FindWarningsComponents', () => {
    let component: FindWarningsComponent;
    let fixture: ComponentFixture<FindWarningsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ FindWarningsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FindWarningsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});