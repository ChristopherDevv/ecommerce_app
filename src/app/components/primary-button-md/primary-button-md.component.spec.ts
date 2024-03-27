import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonMdComponent } from './primary-button-md.component';

describe('PrimaryButtonMdComponent', () => {
  let component: PrimaryButtonMdComponent;
  let fixture: ComponentFixture<PrimaryButtonMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryButtonMdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimaryButtonMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
