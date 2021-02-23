import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCubeComponent } from './add-cube.component';

describe('AddCubeComponent', () => {
  let component: AddCubeComponent;
  let fixture: ComponentFixture<AddCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
