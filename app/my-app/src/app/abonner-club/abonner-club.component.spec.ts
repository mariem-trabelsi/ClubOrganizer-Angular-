import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnerClubComponent } from './abonner-club.component';

describe('AbonnerClubComponent', () => {
  let component: AbonnerClubComponent;
  let fixture: ComponentFixture<AbonnerClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnerClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnerClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
