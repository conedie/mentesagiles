import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbocolorredComponent } from './jumbocolorred.component';

describe('JumbocolorredComponent', () => {
  let component: JumbocolorredComponent;
  let fixture: ComponentFixture<JumbocolorredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbocolorredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbocolorredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
