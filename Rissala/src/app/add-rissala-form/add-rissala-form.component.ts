
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorModule } from '@kolkov/angular-editor'; // Import AngularEditorModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule} from '@angular/common/http';
import { EditorComponent } from '../editor/editor.component';

@Component({
  selector: 'app-add-rissala-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule,HttpClientModule,AngularEditorModule,EditorComponent],
  templateUrl: './add-rissala-form.component.html',
  styleUrls: ['./add-rissala-form.component.scss']})

export class AddRissalaFormComponent implements OnInit {

    createForm!: FormGroup;  
    user_id: number = 10;
    
    constructor(private http: HttpClient, private formBuilder: FormBuilder,private router: Router) { }

      
    
    ngOnInit(): void {
      this.createForm = this.formBuilder.group({
        title: ['', Validators.required],
        post_img: ['', Validators.required],
        user_id:this.user_id,
        content:[''],
        style: ['', Validators.required],
        category: ['', Validators.required]
      });
    }
    name = 'Angular 6';
    htmlContent = '';
  
    config: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: '15rem',
      minHeight: '5rem',
      placeholder: 'Enter text here...',
      translate: 'no',
      defaultParagraphSeparator: 'p',
      defaultFontName: 'Arial',
      toolbarHiddenButtons: [
        ['bold']
        ],
      customClasses: [
        {
          name: "quote",
          class: "quote",
        },
        {
          name: 'redText',
          class: 'redText'
        },
        {
          name: "titleText",
          class: "titleText",
          tag: "h1",
        },
      ]
    };

  
    
    createPost(): void {
      if (this.createForm.valid) {
        this.http.post("http://127.0.0.1:8000/api/rissala/", this.createForm.value).subscribe((res: any) => {
          console.log(res.post_id);
          this.router.navigate(['/sidebar/addKeywords', res.post_id]);
        });
      }
    }
    onHtmlChange(html: string) {
      console.log("Received HTML:", html);
      this.htmlContent=html

      // Perform operations on the received HTML
    }
  }



