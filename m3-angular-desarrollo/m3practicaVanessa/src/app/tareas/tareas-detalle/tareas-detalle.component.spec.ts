import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasDetalleComponent } from './tareas-detalle.component';

describe('TareasDetalleComponent', () => {
  let component: TareasDetalleComponent;
  let fixture: ComponentFixture<TareasDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TareasDetalleComponent]
    });
    fixture = TestBed.createComponent(TareasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
