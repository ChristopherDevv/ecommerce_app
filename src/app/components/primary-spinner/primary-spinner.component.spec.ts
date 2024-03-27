import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySpinnerComponent } from './primary-spinner.component';

describe('PrimarySpinnerComponent', () => {
  let component: PrimarySpinnerComponent;
  let fixture: ComponentFixture<PrimarySpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarySpinnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimarySpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
