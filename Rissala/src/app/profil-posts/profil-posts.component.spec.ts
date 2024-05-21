import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPostsComponent } from './profil-posts.component';

describe('ProfilPostsComponent', () => {
  let component: ProfilPostsComponent;
  let fixture: ComponentFixture<ProfilPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilPostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
