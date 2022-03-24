import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsClubsComponent } from './cards-clubs.component';

describe('CardsClubsComponent', () => {
  let component: CardsClubsComponent;
  let fixture: ComponentFixture<CardsClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsClubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
