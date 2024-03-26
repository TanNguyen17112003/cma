import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EraseDiaogComponent } from './erase-diaog.component';

describe('EraseDiaogComponent', () => {
  let component: EraseDiaogComponent;
  let fixture: ComponentFixture<EraseDiaogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EraseDiaogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EraseDiaogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
