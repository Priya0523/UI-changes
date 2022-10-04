import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorRegisterCompanyComponent } from './addor-register-company.component';

describe('AddorRegisterCompanyComponent', () => {
  let component: AddorRegisterCompanyComponent;
  let fixture: ComponentFixture<AddorRegisterCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorRegisterCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorRegisterCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
