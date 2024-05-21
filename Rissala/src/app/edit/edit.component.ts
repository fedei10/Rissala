import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent implements OnInit {
  constructor (private http:HttpClient){

  }

  create : FormGroup=new FormGroup({})
  o={
    "title": "111111111111111111",
    "post_img": "string",
    "user_id": 0,
    "content": "string",
    "style": "string",
    "category": "string"
  }

  createpost(){
    if(this.create.valid){
      this.http.post("http://127.0.0.1:8080/createrissala/",this.o).subscribe((res:any)=>{
        console.log(res);  
      })
    }
  }

  ngOnInit(): void {
    this.create=new FormGroup({
      title:new FormControl(null,Validators.required),
      content:new FormControl(null,Validators.required),
      category:new FormControl(null,Validators.required)
    })
    
  }



}
