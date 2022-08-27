"use strict";(globalThis.webpackChunk_oniijs_onii=globalThis.webpackChunk_oniijs_onii||[]).push([[911],{9911:(l,s,e)=>{e.r(s),e.d(s,{default:()=>t});var i=e(1527);function n(l){const s=Object.assign({p:"p",a:"a",h1:"h1",img:"img",strong:"strong",h2:"h2",pre:"pre",code:"code",ul:"ul",li:"li",h3:"h3"},l.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:["Note: This branch and README covers the upcoming 2.0 release. View ",(0,i.jsx)(s.a,{href:"https://github.com/quilljs/quill/tree/1.3.6",children:"1.x docs here"}),"."]}),"\n",(0,i.jsxs)(s.h1,{align:"center",children:["\n  ",(0,i.jsx)(s.a,{href:"https://quilljs.com/",title:"Quill",children:"Quill Rich Text Editor"}),"\n"]}),"\n",(0,i.jsxs)(s.p,{align:"center",children:["\n  ",(0,i.jsx)(s.a,{href:"https://quilljs.com/",title:"Quill",children:(0,i.jsx)(s.img,{alt:"Quill Logo",src:"https://quilljs.com/assets/images/logo.svg",width:"180"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{align:"center",children:["\n  ",(0,i.jsx)(s.a,{title:"Quickstart",href:"#quickstart",children:(0,i.jsx)(s.strong,{children:"Quickstart"})}),"\n  •\n  ",(0,i.jsx)(s.a,{title:"Documentation",href:"https://quilljs.com/docs/",children:(0,i.jsx)(s.strong,{children:"Documentation"})}),"\n  •\n  ",(0,i.jsx)(s.a,{title:"Development",href:"https://github.com/quilljs/quill/blob/master/.github/DEVELOPMENT.md",children:(0,i.jsx)(s.strong,{children:"Development"})}),"\n  •\n  ",(0,i.jsx)(s.a,{title:"Contributing",href:"https://github.com/quilljs/quill/blob/master/.github/CONTRIBUTING.md",children:(0,i.jsx)(s.strong,{children:"Contributing"})}),"\n  •\n  ",(0,i.jsx)(s.a,{title:"Interactive Playground",href:"https://quilljs.com/playground/",children:(0,i.jsx)(s.strong,{children:"Interactive Playground"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{align:"center",children:["\n  ",(0,i.jsxs)(s.a,{href:"https://travis-ci.org/quilljs/quill",title:"Build Status",children:["\n    ",(0,i.jsx)(s.img,{src:"https://travis-ci.org/quilljs/quill.svg?branch=master",alt:"Build Status"}),"\n  "]}),"\n  ",(0,i.jsxs)(s.a,{href:"https://npmjs.com/package/quill",title:"Version",children:["\n    ",(0,i.jsx)(s.img,{src:"https://img.shields.io/npm/v/quill.svg",alt:"Version"}),"\n  "]}),"\n  ",(0,i.jsxs)(s.a,{href:"https://npmjs.com/package/quill",title:"Downloads",children:["\n    ",(0,i.jsx)(s.img,{src:"https://img.shields.io/npm/dm/quill.svg",alt:"Downloads"}),"\n  "]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{align:"center",children:["\n  ",(0,i.jsxs)(s.a,{href:"https://saucelabs.com/u/quill",title:"Test Status",children:["\n    ",(0,i.jsx)(s.img,{src:"https://cdn.quilljs.com/badge.svg?v=2",alt:"Test Status"}),"\n  "]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"https://quilljs.com/",children:"Quill"})," is a modern rich text editor built for compatibility and extensibility. It was created by ",(0,i.jsx)(s.a,{href:"https://twitter.com/jhchen",children:"Jason Chen"})," and ",(0,i.jsx)(s.a,{href:"https://twitter.com/byronmilligan",children:"Byron Milligan"})," and actively maintained by ",(0,i.jsx)(s.a,{href:"https://slab.com",children:"Slab"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["To get started, check out ",(0,i.jsx)(s.a,{href:"https://quilljs.com/",children:"https://quilljs.com/"})," for documentation, guides, and live demos!"]}),"\n",(0,i.jsx)(s.h2,{children:"Quickstart"}),"\n",(0,i.jsx)(s.p,{children:"Instantiate a new Quill object with a css selector for the div that should become the editor."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'\x3c!-- Include Quill stylesheet --\x3e\n<link href="https://cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">\n\n\x3c!-- Create the toolbar container --\x3e\n<div id="toolbar">\n  <button class="ql-bold">Bold</button>\n  <button class="ql-italic">Italic</button>\n</div>\n\n\x3c!-- Create the editor container --\x3e\n<div id="editor">\n  <p>Hello World!</p>\n</div>\n\n\x3c!-- Include the Quill library --\x3e\n<script src="https://cdn.quilljs.com/1.0.0/quill.js"><\/script>\n\n\x3c!-- Initialize Quill editor --\x3e\n<script>\n  var editor = new Quill(\'#editor\', {\n    modules: { toolbar: \'#toolbar\' },\n    theme: \'snow\'\n  });\n<\/script>\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Take a look at the ",(0,i.jsx)(s.a,{href:"https://quilljs.com/",children:"Quill"})," website for more documentation, guides and ",(0,i.jsx)(s.a,{href:"https://quilljs.com/playground/",children:"live playground"}),"!"]}),"\n",(0,i.jsx)(s.h2,{children:"Download"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://www.npmjs.com/package/quill",children:"npm"})," - ",(0,i.jsx)(s.code,{children:"npm install quill"})]}),"\n",(0,i.jsxs)(s.li,{children:["tar - ",(0,i.jsx)(s.a,{href:"https://github.com/quilljs/quill/releases",children:"https://github.com/quilljs/quill/releases"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{children:"CDN"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-html",children:'\x3c!-- Main Quill library --\x3e\n<script src="//cdn.quilljs.com/1.0.0/quill.js"><\/script>\n<script src="//cdn.quilljs.com/1.0.0/quill.min.js"><\/script>\n\n\x3c!-- Theme included stylesheets --\x3e\n<link href="//cdn.quilljs.com/1.0.0/quill.snow.css" rel="stylesheet">\n<link href="//cdn.quilljs.com/1.0.0/quill.bubble.css" rel="stylesheet">\n\n\x3c!-- Core build with no theme, formatting, non-essential modules --\x3e\n<link href="//cdn.quilljs.com/1.0.0/quill.core.css" rel="stylesheet">\n<script src="//cdn.quilljs.com/1.0.0/quill.core.js"><\/script>\n'})}),"\n",(0,i.jsx)(s.h2,{children:"Community"}),"\n",(0,i.jsx)(s.p,{children:"Get help or stay up to date."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/quilljs/quill/blob/develop/.github/CONTRIBUTING.md",children:"Contribute"})," on ",(0,i.jsx)(s.a,{href:"https://github.com/quilljs/quill/issues",children:"Issues"})]}),"\n",(0,i.jsxs)(s.li,{children:["Follow ",(0,i.jsx)(s.a,{href:"https://twitter.com/jhchen",children:"@jhchen"})," and ",(0,i.jsx)(s.a,{href:"https://twitter.com/quilljs",children:"@quilljs"})," on Twitter"]}),"\n",(0,i.jsxs)(s.li,{children:["Ask questions on ",(0,i.jsx)(s.a,{href:"https://stackoverflow.com/questions/tagged/quill",children:"Stack Overflow"})]}),"\n",(0,i.jsxs)(s.li,{children:["If privacy is required, email ",(0,i.jsx)(s.a,{href:"mailto:support@quilljs.com",children:"support@quilljs.com"})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{children:"License"}),"\n",(0,i.jsx)(s.p,{children:"BSD 3-clause"})]})}const t=function(l={}){const{wrapper:s}=l.components||{};return s?(0,i.jsx)(s,Object.assign({},l,{children:(0,i.jsx)(n,l)})):n(l)}}}]);