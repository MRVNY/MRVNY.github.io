import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtwComponent } from './otw.component';

describe('OtwComponent', () => {
  let component: OtwComponent;
  let fixture: ComponentFixture<OtwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
