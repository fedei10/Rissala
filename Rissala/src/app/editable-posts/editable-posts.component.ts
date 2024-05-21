import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rissala, item } from '../types';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editable-posts',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './editable-posts.component.html',
  styleUrl: './editable-posts.component.scss'
})
export class EditablePostsComponent {
  @Input()  rissala!:Rissala;
  @Output() deletePost: EventEmitter<number> = new EventEmitter<number>();
  @Output() editPost: EventEmitter<item> = new EventEmitter<item>();
  onDeletePost(id: number) {
    if (id){
      this.deletePost.emit(id);
  }
    else{
      console.log('Error: Invalid post ID');}
  }
  onEditPost(r: item) {
    if (r){
      this.editPost.emit(r);
    }
    else{
      console.log('Error: Invalid post');}
  }
}
