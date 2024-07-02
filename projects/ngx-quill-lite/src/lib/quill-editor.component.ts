import {
  Component,
  OnInit,
  OnDestroy,
  model,
  ChangeDetectionStrategy,
} from '@angular/core';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import { Delta } from 'quill/core';

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
  ['link', 'blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
  [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
  [
    {
      color: ['#ffffff', '#eeeeee', '#808080', '#ff0000', '#00ff00', '#0000ff'],
    },
    {
      background: [
        '#000000',
        '#eeeeee',
        '#808080',
        '#ff0000',
        '#00ff00',
        '#0000ff',
      ],
    },
  ], // dropdown with defaults from theme
  [{ align: [false, 'center', 'right', 'justify'] }],
  ['clean'], // remove formatting button
];

@Component({
  selector: 'quill-editor',
  template: '<div id="editor"></div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuillEditorComponent implements OnInit, OnDestroy {
  html = model<string>('');
  quill?: Quill;

  constructor() {}

  ngOnInit() {
    this.quill = new Quill('#editor', {
      theme: 'snow',
      modules: {
        toolbar: toolbarOptions,
      },
    });
    this.quill.clipboard.dangerouslyPasteHTML(0, this.html(), 'silent');
    this.quill.on('text-change', this.textChangeHandler);
  }

  private textChangeHandler = (
    delta: Delta,
    oldDelta: Delta,
    source: string
  ) => {
    if (!this.quill) {
      return;
    }
    if (source == 'user') {
      let html: string = this.quill.getSemanticHTML();
      if (html === '<p><br></p>' || html === '<div><br><div>') {
        html = '';
      }

      this.html.update(() => html);
    }
  };

  ngOnDestroy() {
    this.quill?.off('text-change', this.textChangeHandler);
  }
}
