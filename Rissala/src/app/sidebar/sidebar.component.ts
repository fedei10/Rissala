import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { Routes,RouterModule, RouterOutlet, RouterLink } from '@angular/router';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MainComponent,RouterOutlet,RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  

  }
