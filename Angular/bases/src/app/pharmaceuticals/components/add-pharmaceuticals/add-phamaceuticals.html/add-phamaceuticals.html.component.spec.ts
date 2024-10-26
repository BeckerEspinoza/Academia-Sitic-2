import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhamaceuticalsHtmlComponent } from './add-phamaceuticals.html.component';

describe('AddPhamaceuticalsHtmlComponent', () => {
  let component: AddPhamaceuticalsHtmlComponent;
  let fixture: ComponentFixture<AddPhamaceuticalsHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPhamaceuticalsHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPhamaceuticalsHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
