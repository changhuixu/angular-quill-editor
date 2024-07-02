import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuillEditorComponent } from './quill-editor.component';

@NgModule({
  declarations: [QuillEditorComponent],
  imports: [CommonModule, FormsModule],
  exports: [QuillEditorComponent],
})
export class NgxQuillLite {}
