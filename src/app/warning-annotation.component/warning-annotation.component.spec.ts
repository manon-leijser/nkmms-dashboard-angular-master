import { ComponentFixture, TestBed } from '@angular/core/testing'

import { WarningAnnotationComponent } from './warning-annotation.component';

describe('WarningAnnotationComponent', () => {
    let component: WarningAnnotationComponent;
    let fixture: ComponentFixture<WarningAnnotationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ WarningAnnotationComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(WarningAnnotationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});