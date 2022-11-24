(()=>{"use strict";var e={337:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),s=n(645),i=n.n(s)()(r());i.push([e.id,"/* to dos */\n#task-container {\n    display: none;\n    flex-direction: column;\n    width: 200px;\n    height:130px;\n    padding: 20px;\n    background-color: grey;\n}\n\n#submit-toDo {\n    display: flex;\n    height: 40px;\n    font-size: 16px;\n}\n\n#due-date {\n    display: flex;\n    height: 30px;\n    font-size: 13px;\n}\n\n#submit-to-do-button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-size: 16px;\n    height: 40px;\n}\n\n/* projects */\n\n#add-project {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 150px;\n    height: 40px;\n    font-size: 16px;\n    cursor: pointer;\n}\n\n#new-project-container {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    padding: 20px;\n    background-color: grey;\n}\n\n#add-project-buttons {\n    display: flex;\n    flex-direction: row;\n}\n\n#project-name {\n    display: none;\n    height: 40px;\n    font-size: 16px;\n}\n\n#cancel-add-project {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-size: 16px;\n}\n\n#submit-project-button {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    font-size: 16px;\n    height: 40px;\n}",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);o&&i[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],d=o.base?c[0]+o.base:c[0],u=s[d]||0,l="".concat(d," ").concat(u);s[d]=u+1;var p=n(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=r(f,o);o.byIndex=a,t.splice(a,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=o(e,r),d=0;d<s.length;d++){var u=n(s[d]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{class e{constructor(e,t="none"){this.name=e,this.dueDate=t}setToDoName(e){this.name=e}getToDoName(){return this.name}setToDoDate(e){this.dueDate=e}getToDoDate(){return this.dueDate}}class t{constructor(e){this.name=e,this.toDos=[]}setName(e){this.name=e}retrieveName(){return this.name}setToDos(e){this.toDos=e}retrieveToDos(){return this.toDos}getToDo(e){return this.toDos.find((t=>t.retrieveName()===e))}contains(e){return this.toDos.some((t=>t.retrieveName()===e))}addToDo(e){this.toDos.find((t=>t.retrieveName()===e.name))||this.toDos.push(e)}}class o{constructor(){this.projects=[],this.projects.push(new t("Inbox"))}setProjects(e){this.project=e}retrieveProjects(){return this.projects}retrieveProjectName(e){return this.projects.find((t=>t.getToDoName()===e))}contains(e){return this.projects.some((t=>t.getToDoName()===e))}addProject(e){this.projects.find((t=>t.name===e.name))||this.projects.push(e)}checkProjects(){console.log(this.projects)}}var r=n(379),s=n.n(r),i=n(795),a=n.n(i),c=n(569),d=n.n(c),u=n(565),l=n.n(u),p=n(216),f=n.n(p),m=n(589),h=n.n(m),y=n(337),v={};v.styleTagTransform=h(),v.setAttributes=l(),v.insert=d().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=f(),s()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals;const g=document.getElementById("submit-to-do-button"),x=document.getElementById("task-container"),j=(document.getElementById("add-task-button"),document.getElementById("cancel-task-button"),document.getElementById("add-project")),b=document.getElementById("project-name"),D=document.getElementById("cancel-add-project"),E=document.getElementById("submit-project-button");j.addEventListener("click",(()=>{b.style.display="flex",D.style.display="flex",E.style.display="flex"})),D.addEventListener("click",(()=>{b.style.display="none",D.style.display="none",E.style.display="none",x.style.display="none"})),E.addEventListener("click",(n=>{n.preventDefault();const o=b.value,r=new t(o);x.style.display="flex",g.addEventListener("click",(()=>{const t=document.getElementById("submit-toDo").value,n=document.getElementById("due-date").value,o=new e(t,n);r.toDos.push(o)}))})),E.addEventListener("click",(()=>{const e=new o;e.setProjects(),e.retrieveProjects(),e.retrieveProjectName(),e.addProject(),e.checkProjects()}))})()})();