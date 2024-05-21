import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostRissalaService } from '../services/post-rissala.service';
import { Rissala, creator, item } from '../types';
import { NgFor } from '@angular/common';
import { GetUserService } from '../services/get-user.service';

@Component({
  selector: 'app-rissala-post',
  standalone: true,
  imports: [],
  templateUrl: './rissala-post.component.html',
  styleUrl: './rissala-post.component.scss'
})
export class RissalaPostComponent {
  post_id!: number;
  rissala!:Rissala;
  final!:any;
  createur!: creator;

  constructor(
    private route: ActivatedRoute,
    private postRissalaService: PostRissalaService,
    private getuserservice:GetUserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      // Get the value of 'id' parameter from the route
      this.post_id = params['post_id'];
    this.postRissalaService.getProducts(`http://127.0.0.1:8000/api/rissala/rissala.id?id=${this.post_id}`)
      .subscribe((rissala: Rissala) => {
        this.rissala = rissala;
        this.final=rissala[0];
        console.log(this.final)
        this.getuserservice.getUser(`http://127.0.0.1:8000/api/users/id?id=${this.final[3]}`)
        .subscribe((creator: creator) => {
          this.createur = creator;
          console.log(this.createur);

        });
      })})}}
