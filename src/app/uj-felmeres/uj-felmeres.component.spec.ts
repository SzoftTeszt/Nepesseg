import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjFelmeresComponent } from './uj-felmeres.component';

describe('UjFelmeresComponent', () => {
  let component: UjFelmeresComponent;
  let fixture: ComponentFixture<UjFelmeresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjFelmeresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjFelmeresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
