import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteFormularioComponent } from './reporte-formulario.component';

describe('ReporteFormularioComponent', () => {
  let component: ReporteFormularioComponent;
  let fixture: ComponentFixture<ReporteFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteFormularioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
