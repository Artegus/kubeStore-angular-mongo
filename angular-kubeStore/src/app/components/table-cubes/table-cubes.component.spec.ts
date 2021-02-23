import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCubesComponent } from './table-cubes.component';

describe('TableCubesComponent', () => {
  let component: TableCubesComponent;
  let fixture: ComponentFixture<TableCubesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCubesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCubesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
