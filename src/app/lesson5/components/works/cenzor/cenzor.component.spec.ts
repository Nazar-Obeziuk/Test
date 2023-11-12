import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenzorComponent } from './cenzor.component';

describe('CenzorComponent', () => {
  let component: CenzorComponent;
  let fixture: ComponentFixture<CenzorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenzorComponent]
    });
    fixture = TestBed.createComponent(CenzorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
