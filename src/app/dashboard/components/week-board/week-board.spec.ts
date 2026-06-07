import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekBoard } from './week-board';

describe('WeekBoard', () => {
  let component: WeekBoard;
  let fixture: ComponentFixture<WeekBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
