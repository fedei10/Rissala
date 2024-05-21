import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRissalaFormComponent } from './add-rissala-form.component';

describe('AddRissalaFormComponent', () => {
  let component: AddRissalaFormComponent;
  let fixture: ComponentFixture<AddRissalaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRissalaFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRissalaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
