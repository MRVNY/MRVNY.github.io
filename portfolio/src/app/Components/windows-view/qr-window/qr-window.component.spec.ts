import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrWindowComponent } from './qr-window.component';

describe('QrWindowComponent', () => {
  let component: QrWindowComponent;
  let fixture: ComponentFixture<QrWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
