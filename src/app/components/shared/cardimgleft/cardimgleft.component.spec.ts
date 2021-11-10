import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardimgleftComponent } from './cardimgleft.component';

describe('CardimgleftComponent', () => {
  let component: CardimgleftComponent;
  let fixture: ComponentFixture<CardimgleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardimgleftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardimgleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
