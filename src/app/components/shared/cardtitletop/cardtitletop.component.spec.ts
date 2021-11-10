import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtitletopComponent } from './cardtitletop.component';

describe('CardtitletopComponent', () => {
  let component: CardtitletopComponent;
  let fixture: ComponentFixture<CardtitletopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardtitletopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardtitletopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
