import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardstandarComponent } from './cardstandar.component';

describe('CardstandarComponent', () => {
  let component: CardstandarComponent;
  let fixture: ComponentFixture<CardstandarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardstandarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardstandarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
