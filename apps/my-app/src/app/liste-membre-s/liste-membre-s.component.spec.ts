import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMembreSComponent } from './liste-membre-s.component';

describe('ListeMembreSComponent', () => {
  let component: ListeMembreSComponent;
  let fixture: ComponentFixture<ListeMembreSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMembreSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMembreSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
