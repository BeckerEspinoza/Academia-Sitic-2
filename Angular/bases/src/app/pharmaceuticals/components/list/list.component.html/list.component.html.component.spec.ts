import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponentHtmlComponent } from './list.component.html.component';

describe('ListComponentHtmlComponent', () => {
  let component: ListComponentHtmlComponent;
  let fixture: ComponentFixture<ListComponentHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponentHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponentHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
