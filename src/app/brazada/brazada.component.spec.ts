import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrazadaComponent } from './brazada.component';

describe('BrazadaComponent', () => {
  let component: BrazadaComponent;
  let fixture: ComponentFixture<BrazadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrazadaComponent]
    });
    fixture = TestBed.createComponent(BrazadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
