import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventlistPage } from './eventlist.page';

describe('EventlistPage', () => {
  let component: EventlistPage;
  let fixture: ComponentFixture<EventlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
