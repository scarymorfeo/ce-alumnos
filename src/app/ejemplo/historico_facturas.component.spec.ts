import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoFacturasComponent } from './historico_facturas.component';

describe('HistoricoFacturasComponent', () => {
  let component: HistoricoFacturasComponent;
  let fixture: ComponentFixture<HistoricoFacturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoricoFacturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
