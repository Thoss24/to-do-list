(()=>{"use strict";document.querySelector(".todo-input");const e=document.querySelector(".todo-button"),t=document.querySelector(".todo-list");function n(e){e.preventDefault();const n=document.createElement("div");n.classList.add("todo");const c=document.createElement("li");c.innerText="hey",c.classList.add("todo-item"),n.appendChild(c);const d=document.createElement("button");d.innerHTML='<i class="fas fa-check"></i>',d.classList.add("complete-btn"),n.appendChild(d);const o=document.createElement("button");o.innerHTML='<i class="fas fa-trash"></i>',o.classList.add("complete-btn"),n.appendChild(o),t.appendChild(n)}e.addEventListener("click",n),n()})();