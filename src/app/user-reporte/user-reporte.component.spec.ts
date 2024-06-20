import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReporteComponent } from './user-reporte.component';

describe('UserReporteComponent', () => {
  let component: UserReporteComponent;
  let fixture: ComponentFixture<UserReporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserReporteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
