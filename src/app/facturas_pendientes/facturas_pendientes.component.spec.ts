import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturasPendientesComponent } from './facturas_pendientes.component';

describe('AgregarProductosComponent', () => {
  let component: FacturasPendientesComponent;
  let fixture: ComponentFixture<FacturasPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturasPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturasPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
