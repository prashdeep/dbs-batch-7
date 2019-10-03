import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortDigitsComponent } from './sort-digits.component';

describe('SortDigitsComponent', () => {
  let component: SortDigitsComponent;
  let fixture: ComponentFixture<SortDigitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortDigitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortDigitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
