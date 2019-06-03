import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  NgZone,
  Inject
} from '@angular/core';
import { QuillEditorService } from '../quill-editor.service';
import { DOCUMENT } from "@angular/common";

declare var Quill: any;

@Component({
  selector: 'quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css']
})
export class QuillEditorComponent implements OnInit, OnDestroy {
  @Input() html = '';
  @Output() htmlChange = new EventEmitter<string>();
  quillEditor: any;
  private textChangeEvent: any;
  showEditor = false;

  constructor(
    private elementRef: ElementRef,
    private zone: NgZone,
    private readonly svc: QuillEditorService,
    @Inject(DOCUMENT) private readonly document: any
  ) {}

  ngOnInit() {
    this.svc.lazyLoadQuill().subscribe(_ => {
      if (!Quill) {
        Quill = this.document.defaultView.Quill;
      }
      this.setupQuill();
    });
  }

  setupQuill() {
    if (!Quill) {
      return;
    }
    // use generic align styles
    const align = Quill.import('attributors/style/align');
    align.whitelist = ['right', 'center', 'justify'];
    Quill.register(align, true);

    const toolbarElem = this.elementRef.nativeElement.querySelector(
      '[quill-editor-toolbar]'
    );
    const editorElem = this.elementRef.nativeElement.querySelector(
      '[quill-editor-container]'
    );
    this.quillEditor = new Quill(editorElem, {
      format: 'html',
      theme: 'snow',
      modules: {
        toolbar: toolbarElem
      }
    });

    const contents = this.quillEditor.clipboard.convert(this.html);
    this.quillEditor.setContents(contents, 'silent');
    this.quillEditor.history.clear();

    this.textChangeEvent = this.quillEditor.on(
      'text-change',
      (delta: any, oldDelta: any, source: string): void => {
        if (source === 'user') {
          let html: string | null = this.quillEditor.root.innerHTML;
          if (html === '<p><br></p>' || html === '<div><br><div>') {
            html = null;
          }
          this.zone.run(() => {
            this.htmlChange.emit(html);
          });
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.textChangeEvent) {
      this.textChangeEvent.removeListener('text-change');
    }
  }
}
