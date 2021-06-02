# ngx-quill-lite

An Angular library that lazy loads [Quill](https://quilljs.com/) JavaScript and its theme CSS.
Dependencies: @angular/common, @angular/core, @angular/forms, @angular/platform-browser; Released assets from Quill.

[![npm](https://img.shields.io/npm/v/ngx-quill-lite.svg?style=flat-square)](https://www.npmjs.com/package/ngx-quill-lite)

<a href='https://ko-fi.com/changhuixu' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## [Demo](https://ngx-quill-editor.netlify.com/)

### Features

1. Only load Quill js/css when needed. i.e., Quill is not bundled in your application.

1. Optimized toolbar and default configurations for common usages.

### Notes

This library is not intended to be widely used. It is build to fit my own needs.

Extending this library is in my plan. PRs are welcome too.

## Usage

1. Download Quill based on instructions [here](https://quilljs.com/docs/download/).

1. Copy & Paste `quill.min.js` and `quill.snow.css` to `assets\quill` folder. These two files will be lazy loaded during component initialization.

1. Import `NgxQuillLite` module into the module uses Quill rich text editor.

1. Include quill-editor by `<quill-editor [(html)]="html"></quill-editor>` in your component. `quill-editor` has two way bindings with your `html` string.

1. This component binds the following:

```TypeScript
  @Input() html = '';
  @Output() htmlChange = new EventEmitter<string>();
```

## Why this library

I have read and contributed to [ngx-quill](https://github.com/KillerCodeMonkey/ngx-quill), which is a good libary and I recommend you use that libary if you have more requirements.

My goal of making [ngx-quill-lite](https://github.com/changhuixu/ngx-quill-lite) is to have lazy loading feature, because most of my applications only need Quill in one or two pages. Thus, a specialized library is in need, which gives birth to [ngx-quill-lite](https://github.com/changhuixu/ngx-quill-lite).

<a href='https://ko-fi.com/changhuixu' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
