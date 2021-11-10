import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbocolorwhiteComponent } from './jumbocolorwhite.component';

describe('JumbocolorwhiteComponent', () => {
  let component: JumbocolorwhiteComponent;
  let fixture: ComponentFixture<JumbocolorwhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbocolorwhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbocolorwhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
