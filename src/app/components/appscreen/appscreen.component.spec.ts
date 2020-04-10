import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppscreenComponent } from './appscreen.component';

describe('AppscreenComponent', () => {
  let component: AppscreenComponent;
  let fixture: ComponentFixture<AppscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
