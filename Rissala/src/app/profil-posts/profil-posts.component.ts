import { Component, Input } from '@angular/core';
import { Rissala, creator, item } from '../types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-profil-posts',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './profil-posts.component.html',
  styleUrl: './profil-posts.component.scss'
})
export class ProfilPostsComponent {


  @Input()  rissala!:Rissala;
  @Input()  createur!:creator;
  constructor(private router: Router) {}
  

}

