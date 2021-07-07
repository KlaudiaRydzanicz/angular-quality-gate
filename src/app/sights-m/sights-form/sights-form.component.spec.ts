import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SightsFormComponent } from './sights-form.component';

describe('SightsFormComponent', () => {
  let component: SightsFormComponent;
  let fixture: ComponentFixture<SightsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SightsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SightsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
