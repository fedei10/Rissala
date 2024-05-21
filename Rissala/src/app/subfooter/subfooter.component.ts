import { Component, Input } from '@angular/core';
import { creator } from '../types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PostRissalaService } from '../services/post-rissala.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subfooter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subfooter.component.html',
  styleUrl: './subfooter.component.scss'
})
export class SubfooterComponent {
  @Input()  createur!:creator;
  myForm!: FormGroup;
  constructor(
    private postRissalaService: PostRissalaService,
          private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      mail: ['', Validators.email]
    });
  }
  onSubmit() {
  
    if (this.myForm.valid) {
          console.log(this.myForm.value.mail,this.createur.user_id)
          this.postRissalaService.addRissala(`//127.0.0.1:8000/api/profil/subscribe/${this.createur.user_id}/${this.myForm.value.mail}`).subscribe(
            (res: any) => {
              if (res.message === "Subscribed succefully") {
                Swal.fire({
                  title: "Sweet!",
                  text: "Subscribed succefully",
                  imageUrl: this.createur.user_img,
                  imageWidth: 200,
                  imageHeight: 200,
                  imageAlt: "Custom image"
                });;
              } else {
                Swal.fire({
                  title: "Oops...",
                  text: res.message, 
                  icon: "error"
                });
              }
            },
            (error) => {
              console.error("Error:", error);
            }
          );
        }
      else{
        Swal.fire({
          title: "Oh noo...",
          text: "Email Is Not Valid", 
          icon: "warning"
        });
      }
      }}