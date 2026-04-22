import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RustyPage } from './rusty.page';

describe('RustyPage', () => {
  let component: RustyPage;
  let fixture: ComponentFixture<RustyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RustyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RustyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
