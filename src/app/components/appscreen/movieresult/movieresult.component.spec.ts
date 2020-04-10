import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieresultComponent } from './movieresult.component';

describe('MovieresultComponent', () => {
  let component: MovieresultComponent;
  let fixture: ComponentFixture<MovieresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
