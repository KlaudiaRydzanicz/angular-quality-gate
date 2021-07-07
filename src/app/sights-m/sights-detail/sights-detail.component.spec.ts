import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightsDetailComponent } from './sights-detail.component';

describe('SightsDetailComponent', () => {
  let component: SightsDetailComponent;
  let fixture: ComponentFixture<SightsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
