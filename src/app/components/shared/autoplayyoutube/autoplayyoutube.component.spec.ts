import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoplayyoutubeComponent } from './autoplayyoutube.component';

describe('AutoplayyoutubeComponent', () => {
  let component: AutoplayyoutubeComponent;
  let fixture: ComponentFixture<AutoplayyoutubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoplayyoutubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoplayyoutubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
