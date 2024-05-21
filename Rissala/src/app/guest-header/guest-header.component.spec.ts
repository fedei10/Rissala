import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestHeaderComponent } from './guest-header.component';

describe('GuestHeaderComponent', () => {
  let component: GuestHeaderComponent;
  let fixture: ComponentFixture<GuestHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GuestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
