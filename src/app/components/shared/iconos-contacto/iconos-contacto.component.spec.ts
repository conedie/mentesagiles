import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconosContactoComponent } from './iconos-contacto.component';

describe('IconosContactoComponent', () => {
  let component: IconosContactoComponent;
  let fixture: ComponentFixture<IconosContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconosContactoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
