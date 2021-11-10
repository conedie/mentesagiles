import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MentesagilesComponent } from './mentesagiles.component';


describe('MentesagilesComponent', () => {
  let component: MentesagilesComponent;
  let fixture: ComponentFixture<MentesagilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentesagilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentesagilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
