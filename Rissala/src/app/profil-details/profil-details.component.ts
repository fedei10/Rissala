import { Component, Input } from '@angular/core';
import { creator } from '../types';

@Component({
  selector: 'app-profil-details',
  standalone: true,
  imports: [],
  templateUrl: './profil-details.component.html',
  styleUrl: './profil-details.component.scss'
})
export class ProfilDetailsComponent {
  @Input()  createur!:creator;
}
