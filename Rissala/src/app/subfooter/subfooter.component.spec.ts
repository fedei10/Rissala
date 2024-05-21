import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubfooterComponent } from './subfooter.component';

describe('SubfooterComponent', () => {
  let component: SubfooterComponent;
  let fixture: ComponentFixture<SubfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubfooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
