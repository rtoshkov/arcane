import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFiguresComponent } from './all-figures.component';

describe('AllFiguresComponent', () => {
  let component: AllFiguresComponent;
  let fixture: ComponentFixture<AllFiguresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFiguresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFiguresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
