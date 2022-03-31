import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClubComponent } from './page-club.component';

describe('PageClubComponent', () => {
  let component: PageClubComponent;
  let fixture: ComponentFixture<PageClubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageClubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
