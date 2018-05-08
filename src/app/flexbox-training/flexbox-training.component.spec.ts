import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxTrainingComponent } from './flexbox-training.component';

describe('FlexboxTrainingComponent', () => {
  let component: FlexboxTrainingComponent;
  let fixture: ComponentFixture<FlexboxTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
