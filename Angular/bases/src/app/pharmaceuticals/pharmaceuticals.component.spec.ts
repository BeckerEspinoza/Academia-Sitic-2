import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmaceuticalsComponent } from './pharmaceuticals.component';

describe('PharmaceuticalsComponent', () => {
  let component: PharmaceuticalsComponent;
  let fixture: ComponentFixture<PharmaceuticalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmaceuticalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PharmaceuticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
