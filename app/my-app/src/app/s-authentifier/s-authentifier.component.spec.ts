import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAuthentifierComponent } from './s-authentifier.component';

describe('SAuthentifierComponent', () => {
  let component: SAuthentifierComponent;
  let fixture: ComponentFixture<SAuthentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAuthentifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAuthentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
