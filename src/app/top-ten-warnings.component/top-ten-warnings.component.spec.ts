import { ComponentFixture, TestBed } from '@angular/core/testing'

import { TopTenWarningsComponent } from './top-ten-warnings.component'

describe('TopTenWarningsComponent', () => {
    let component: TopTenWarningsComponent;
    let fixture: ComponentFixture<TopTenWarningsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ TopTenWarningsComponent ]
        })
        .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TopTenWarningsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});