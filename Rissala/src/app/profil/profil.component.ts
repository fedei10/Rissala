import { Component, Input, OnInit } from '@angular/core';
import { ProfilDetailsComponent } from "../profil-details/profil-details.component";
import { Rissala, creator } from '../types';
import { PostRissalaService } from '../services/post-rissala.service';
import { GetUserService } from '../services/get-user.service'
import { ProfilPostsComponent } from "../profil-posts/profil-posts.component";
import { SubfooterComponent } from '../subfooter/subfooter.component';
import { ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-profil',
    standalone: true,
    templateUrl: './profil.component.html',
    styleUrl: './profil.component.scss',
    imports: [ProfilDetailsComponent, ProfilPostsComponent,SubfooterComponent]
})
export class ProfilComponent implements OnInit {
  user_id!: number;

  createur !: creator
  rissala!:Rissala
userData: any;
    constructor(
      private postRissalaService: PostRissalaService,
      private route: ActivatedRoute,
      private getUserService: GetUserService
    ) {}
  
    ngOnInit() {
      this.route.params.subscribe(params => {
        // Get the value of 'id' parameter from the route
        this.user_id = params['user_id'];
      this.getUserService.getUser(`http://127.0.0.1:8000/api/users/id?id=${this.user_id}`)
        .subscribe((creator: creator) => {
          this.createur = creator;
          console.log(this.createur);

        });
    
    this.postRissalaService.getProducts(`http://127.0.0.1:8000/api/rissala/id?id_user=${this.user_id}`)
      .subscribe((rissala: Rissala) => {
        this.rissala = rissala;
      });})
}}
