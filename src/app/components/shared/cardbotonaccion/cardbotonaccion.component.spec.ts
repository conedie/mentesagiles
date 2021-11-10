import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbotonaccionComponent } from './cardbotonaccion.component';

describe('CardbotonaccionComponent', () => {
  let component: CardbotonaccionComponent;
  let fixture: ComponentFixture<CardbotonaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardbotonaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbotonaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
