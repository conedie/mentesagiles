import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbopagosComponent } from './jumbopagos.component';

describe('JumbopagosComponent', () => {
  let component: JumbopagosComponent;
  let fixture: ComponentFixture<JumbopagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbopagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbopagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
