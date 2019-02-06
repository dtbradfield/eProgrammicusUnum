import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheManComponent } from './the-man.component';

describe('TheManComponent', () => {
  let component: TheManComponent;
  let fixture: ComponentFixture<TheManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
