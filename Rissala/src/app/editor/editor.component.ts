import { Component, EventEmitter, Input, Output, ViewChild, output } from '@angular/core';
import { AngularEditorConfig, AngularEditorModule } from '@kolkov/angular-editor'; // Import AngularEditorModule
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClientModule} from '@angular/common/http';



@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [FormsModule, AngularEditorModule,HttpClientModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  @Output() htmlOutput = new EventEmitter<string>();
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
  submitHtml() {
    // Get the full HTML content
    this.htmlOutput.emit(this.htmlContent); // Emit the HTML content
  }}


