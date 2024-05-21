import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthloginService } from '../services/authlogin.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor (private loginservice : AuthloginService,private router:Router ){

  }
  login(){
    if(this.logininfo.valid){
      this.loginservice.login(this.logininfo.value).subscribe(res =>{
        if(res.result){
          this.router.navigate(['/sidebar'])
        }

      })
    }
  }
  logininfo : FormGroup= new FormGroup({})
  ngOnInit(): void {
    this.logininfo=new FormGroup({
      email:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    })
    console.log(this.logininfo);
    
  }

}
