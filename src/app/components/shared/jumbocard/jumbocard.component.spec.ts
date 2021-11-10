import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbocardComponent } from './jumbocard.component';

describe('JumbocardComponent', () => {
  let component: JumbocardComponent;
  let fixture: ComponentFixture<JumbocardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbocardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
