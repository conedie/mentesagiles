import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagaenlineaComponent } from './pagaenlinea.component';

describe('PagaenlineaComponent', () => {
  let component: PagaenlineaComponent;
  let fixture: ComponentFixture<PagaenlineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagaenlineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagaenlineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
