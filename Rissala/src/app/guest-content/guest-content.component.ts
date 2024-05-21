import { Component } from '@angular/core';
import { GuestHeaderComponent } from '../guest-header/guest-header.component';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Rissala, creator } from '../types';
import { PostRissalaService } from '../services/post-rissala.service';
import { GetUserService } from '../services/get-user.service';
import { ProfilPostsComponent } from "../profil-posts/profil-posts.component";


@Component({
    selector: 'app-guest-content',
    standalone: true,
    templateUrl: './guest-content.component.html',
    styleUrl: './guest-content.component.scss',
    imports: [GuestHeaderComponent, RouterLink, ReactiveFormsModule, NgIf, ProfilPostsComponent]
})
export class GuestContentComponent {
  myForm!: FormGroup;
  createur !: creator
  rissala!:Rissala
  searching!:string
  ResultsFor!:string
userData: any;
  route: any;
    constructor(
      private formBuilder: FormBuilder,
      private postRissalaService: PostRissalaService,
      private getUserService: GetUserService
    ) {
      this.myForm = this.formBuilder.group({
        search: ['', Validators.required]
      });
    }
  
    ngOnInit() {
      this.ResultsFor="Look For Rissalas To Read"
      this.searching=""
      this.getUserService.getUser('http://127.0.0.1:8000/api/users/id?id=10')
        .subscribe((creator: creator) => {
          this.createur = creator;
          console.log(this.createur);

        });
    
    this.postRissalaService.getProducts('http://127.0.0.1:8000/api/rissala/id?id_user=10')
      .subscribe((rissala: Rissala) => {
        this.rissala = rissala;
      });
}
onSubmit() {
  
  if (this.myForm.valid) {
        console.log(this.myForm.valid)

        // Form is valid, handle form submission
        console.log(this.myForm.value.search);
        this.postRissalaService.getSearch(`http://127.0.0.1:8000/api/find/SearchBar/${this.myForm.value.search}`).subscribe((a) => {
          this.searching=this.myForm.value.search
          if (a!=""){
            this.ResultsFor="Results For"

            this.postRissalaService.getProducts(`http://127.0.0.1:8000/api/SEARCH/idList?idList=${a}`).subscribe((rissala: Rissala) => {
              this.rissala = rissala;
              
              console.log(rissala);})}
          else{
            this.ResultsFor="No Results Found For"
            this.rissala =[]

          }
          }
          )
        
  } else {
        alert("ENTER SOMETHING VALID");
      }
    };
}


