import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiscinaComponent } from './piscina.component';

describe('PiscinaComponent', () => {
  let component: PiscinaComponent;
  let fixture: ComponentFixture<PiscinaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiscinaComponent]
    });
    fixture = TestBed.createComponent(PiscinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
