(()=>{"use strict";var e={337:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),s=n.n(a)()(r());s.push([e.id,"/* to dos */\n#task-container {\n    display: none;\n    flex-direction: column;\n    width: 200px;\n    height:200px;\n}\n\n#add-task-button-container {\n    display: flex;\n    margin-top: 20px;\n}\n\n#add-task-button {\n    \n}\n\n#cancel-task-button {\n    display: none;\n}\n\n/* projects */\n\n#add-project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 150px;\n    height: 40px;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n#new-project-container {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n}\n\n#add-project-buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n#project-name {\n    display: none;\n    height: 40px;\n    font-size: 16px;\n}\n\n#cancel-add-project {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-size: 16px;\n}\n\n#submit-project-button {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-size: 16px;\n    height: 40px;\n}",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],l=o.base?c[0]+o.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=o(e,r),l=0;l<a.length;l++){var d=n(a[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t="none"){this.name=e,this.dueDate=t}setToDoName(e){this.name=e}getToDoName(){return this.name}setToDoDate(e){this.dueDate=e}getToDoDate(){return this.dueDate}greet(){console.log(this.name),console.log(this.dueDate)}}class t{constructor(e){this.name=e,this.toDos=[]}setName(e){this.name=e}retrieveName(){return this.name}setToDos(e){this.toDos=e}retrieveToDos(){return this.toDos}checkArray(){console.log(this.toDos)}}var o=n(379),r=n.n(o),a=n(795),s=n.n(a),i=n(569),c=n.n(i),l=n(565),d=n.n(l),u=n(216),p=n.n(u),f=n(589),m=n.n(f),y=n(337),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=p(),r()(y.Z,h),y.Z&&y.Z.locals&&y.Z.locals;const v=document.getElementById("submit-to-do-button"),g=document.getElementById("task-container"),x=document.getElementById("add-task-button"),b=document.getElementById("cancel-task-button"),E=document.getElementById("add-project"),D=document.getElementById("project-name"),j=document.getElementById("cancel-add-project"),k=document.getElementById("submit-project-button");E.addEventListener("click",(()=>{D.style.display="flex",j.style.display="flex",k.style.display="flex"})),j.addEventListener("click",(()=>{D.style.display="none",j.style.display="none",k.style.display="none",g.style.display="none"})),k.addEventListener("click",(n=>{n.preventDefault();const o=D.value,r=new t(o);r.checkArray(),g.style.display="flex",v.addEventListener("click",(()=>{const t=document.getElementById("submit-toDo").value,n=document.getElementById("due-date").value,o=new e(t,n);o.greet(),r.toDos.push(o),r.checkArray()}))})),x.addEventListener("click",(()=>{g.style.display="flex",b.style.display="flex"})),b.addEventListener("click",(()=>{g.style.display="none",b.style.display="none"}))})()})();