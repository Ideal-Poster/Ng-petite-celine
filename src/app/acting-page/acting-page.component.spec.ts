import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActingPageComponent } from './acting-page.component';

describe('ActingPageComponent', () => {
  let component: ActingPageComponent;
  let fixture: ComponentFixture<ActingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
