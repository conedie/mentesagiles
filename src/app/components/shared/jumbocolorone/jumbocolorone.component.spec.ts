import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbocoloroneComponent } from './jumbocolorone.component';

describe('JumbocoloroneComponent', () => {
  let component: JumbocoloroneComponent;
  let fixture: ComponentFixture<JumbocoloroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbocoloroneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbocoloroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
