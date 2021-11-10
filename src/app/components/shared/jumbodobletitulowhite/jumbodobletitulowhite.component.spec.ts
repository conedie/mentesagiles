import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumbodobletitulowhiteComponent } from './jumbodobletitulowhite.component';

describe('JumbodobletitulowhiteComponent', () => {
  let component: JumbodobletitulowhiteComponent;
  let fixture: ComponentFixture<JumbodobletitulowhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumbodobletitulowhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumbodobletitulowhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
