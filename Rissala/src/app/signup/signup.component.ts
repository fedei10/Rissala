import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{
  constructor (private http:HttpClient, private router:Router){
    
  }
  user : FormGroup=new FormGroup({})
  createuser() {
    if (this.user.valid) {
      console.log(this.user.value)
      this.http.post("http://127.0.0.1:8000/api/users/", this.user.value).subscribe(
        (res: any) => {
          if (res.message === "User created successfully") {
            Swal.fire({
              title: "Good job!",
              text: res.message,
              icon: "success"
            });
            this.router.navigate(['/login']);
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
  }
  ngOnInit(): void {
    this.user=new FormGroup({
      username:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      password:new FormControl(null,[Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]*')]),
      user_img:new FormControl(null,[Validators.required])
    })
    console.log(this.user);
    
  }


}
