import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscrireSiteComponent } from './inscrire-site.component';

describe('InscrireSiteComponent', () => {
  let component: InscrireSiteComponent;
  let fixture: ComponentFixture<InscrireSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscrireSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscrireSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
