import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearbookPage } from './yearbook.page';

describe('YearbookPage', () => {
  let component: YearbookPage;
  let fixture: ComponentFixture<YearbookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearbookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearbookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
