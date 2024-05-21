import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ContentComponent } from '../content/content.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FooterComponent,ContentComponent,RouterLink],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
