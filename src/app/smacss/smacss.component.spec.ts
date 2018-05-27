import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmacssComponent } from './smacss.component';

describe('SmacssComponent', () => {
  let component: SmacssComponent;
  let fixture: ComponentFixture<SmacssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmacssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmacssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
