import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SungkaBoardComponent } from './sungka-board.component';

describe('SungkaBoardComponent', () => {
  let component: SungkaBoardComponent;
  let fixture: ComponentFixture<SungkaBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SungkaBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SungkaBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
