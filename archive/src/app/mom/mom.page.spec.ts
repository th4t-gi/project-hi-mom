import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MomPage } from './mom.page';

describe('MomPage', () => {
  let component: MomPage;
  let fixture: ComponentFixture<MomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
