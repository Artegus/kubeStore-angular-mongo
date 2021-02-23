import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersCubesComponent } from './offers-cubes.component';

describe('OffersCubesComponent', () => {
  let component: OffersCubesComponent;
  let fixture: ComponentFixture<OffersCubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersCubesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
