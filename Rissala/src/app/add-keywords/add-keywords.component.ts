import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { KeywordsService } from '../services/keywords.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-keywords',
  standalone: true,
  imports: [ReactiveFormsModule,NgFor,NgIf,RouterLink],
  templateUrl: './add-keywords.component.html',
  styleUrl: './add-keywords.component.scss'
})
export class AddKeywordsComponent {
  @Input() post_id!: number;
  myForm: FormGroup;
  lista!: string;
  longeur!: number;
  


  constructor(private formBuilder: FormBuilder,private   ks : KeywordsService,private route: ActivatedRoute 
  ) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }
  
  onSubmit() {
    this.route.params.subscribe(params => {
      this.post_id = +params['postId'];
    });
    if (this.myForm.valid) {
      console.log(this.post_id)
      this.ks.GetKeywords(`http://127.0.0.1:8000/api/profil/post/keywords/${this.post_id}`).subscribe((data) => {
        this.longeur = data.length;
        console.log(this.longeur);
  
        // Place the condition inside the subscription block
        if (this.longeur < 6 || this.longeur==undefined) {
          // Form is valid, handle form submission
          console.log(this.myForm.value);
          this.ks.PostKeywords(`http://127.0.0.1:8000/api/profil/post/keywords?id=${this.post_id}&keyword=${this.myForm.value.name}`)
            .subscribe((a) => {
              let b = JSON.parse(a).message;
              console.log(b);
  
              // Update lista after successful keyword posting
              this.updateLista();
            });
        } else {
          alert("You reached your limit");
        }
      });
    } else {
      // Form is invalid, handle validation errors
      console.log('Form is invalid');
    }
  }
  
    logSpanContent(content: string) {
      this.ks.GetKeywords(`http://127.0.0.1:8000/api/profil/post/keywords/${this.post_id}`).subscribe((data) => {
        this.longeur = data.length;
        console.log(this.longeur);
  
        // Place the condition inside the subscription block
        if (this.longeur > 0) {
          this.ks.DeleteKeywords(`http://127.0.0.1:8000/api/profil/post/keywords/delete?id=${this.post_id}&keyword=${content}`).subscribe((data) => {
            console.log(data);
            this.updateLista();
          });
        } else {
          alert('No more keywords to delete');
        }})}
        
  updateLista() {
    this.ks.GetKeywords(`http://127.0.0.1:8000/api/profil/post/keywords/${this.post_id}`).subscribe((data) => {
      this.lista = data;
    });
  }}  
