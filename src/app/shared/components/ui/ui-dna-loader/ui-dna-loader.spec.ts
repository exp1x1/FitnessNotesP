import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDnaLoader } from './ui-dna-loader';

describe('UiDnaLoader', () => {
  let component: UiDnaLoader;
  let fixture: ComponentFixture<UiDnaLoader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiDnaLoader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiDnaLoader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
