import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FormFindWarningsComponent } from './form-find-warnings.component';

describe('FormFindWarningsComponent', () => {
    let component: FormFindWarningsComponent;
    let fixture: ComponentFixture<FormFindWarningsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ FormFindWarningsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FormFindWarningsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});