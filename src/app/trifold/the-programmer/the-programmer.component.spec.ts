import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheProgrammerComponent } from './the-programmer.component';

describe('TheProgrammerComponent', () => {
  let component: TheProgrammerComponent;
  let fixture: ComponentFixture<TheProgrammerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheProgrammerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheProgrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
