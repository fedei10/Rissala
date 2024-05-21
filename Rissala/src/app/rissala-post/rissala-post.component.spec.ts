import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RissalaPostComponent } from './rissala-post.component';

describe('RissalaPostComponent', () => {
  let component: RissalaPostComponent;
  let fixture: ComponentFixture<RissalaPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RissalaPostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RissalaPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
