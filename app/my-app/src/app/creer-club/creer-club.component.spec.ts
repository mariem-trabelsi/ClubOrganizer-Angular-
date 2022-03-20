import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerClubComponent } from './creer-club.component';

describe('CreerClubComponent', () => {
  let component: CreerClubComponent;
  let fixture: ComponentFixture<CreerClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
