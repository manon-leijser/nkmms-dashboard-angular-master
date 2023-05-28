import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CircuitComponentsComponent } from './circuit-components.component';

describe('CircuitComponentsComponent', () => {
    let component: CircuitComponentsComponent;
    let fixture: ComponentFixture<CircuitComponentsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ CircuitComponentsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CircuitComponentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});