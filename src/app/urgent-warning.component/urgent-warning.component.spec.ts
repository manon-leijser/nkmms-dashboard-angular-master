import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UrgentWarningComponent } from './urgent-warning.component'

describe('UrgentWarningComponent', () => {
    let component: UrgentWarningComponent;
    let fixture: ComponentFixture<UrgentWarningComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ UrgentWarningComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(UrgentWarningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});