import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarUsuariosComponent } from './ingresar-usuarios.component';

describe('IngresarUsuariosComponent', () => {
  let component: IngresarUsuariosComponent;
  let fixture: ComponentFixture<IngresarUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngresarUsuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
