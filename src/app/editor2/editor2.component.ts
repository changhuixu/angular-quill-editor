import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor2',
  templateUrl: './editor2.component.html',
  styleUrls: ['./editor2.component.css']
})
export class Editor2Component implements OnInit {
  html = '<h2>Hello</h2>';
  constructor() { }

  ngOnInit() {
  }

}
