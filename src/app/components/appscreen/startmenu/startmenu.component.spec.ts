import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartmenuComponent } from './startmenu.component';

describe('StartmenuComponent', () => {
  let component: StartmenuComponent;
  let fixture: ComponentFixture<StartmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
