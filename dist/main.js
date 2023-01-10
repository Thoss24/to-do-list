/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-project.js":
/*!****************************!*\
  !*** ./src/add-project.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateProject\": () => (/* binding */ CreateProject)\n/* harmony export */ });\nclass CreateProject {\n    constructor(projectName) {\n        this.projectName = projectName\n        this.tasks = []\n    }\n}\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/add-project.js?");

/***/ }),

/***/ "./src/add-todo.js":
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateTodo\": () => (/* binding */ CreateTodo)\n/* harmony export */ });\nclass CreateTodo {\n   constructor(title, date) {\n      this.title = title;\n      this.date = date\n      this.completed = false;\n   };\n};\n \n\n\n//# sourceURL=webpack://to-do-list/./src/add-todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n\n\n\n\nconst dom = (() => {\n\n    // Projects container\n    let myProjects = [];\n\n    //Selectors\n    const toDoInput = document.querySelector('.todo-input');\n    const toDoButton = document.querySelector('.todo-button');\n    const toDoList = document.querySelector('.todo-list');\n    const todoDateInput = document.getElementById('to-do-date');\n    const toDoContainer = document.querySelector('.todo-container');\n    const projectInput = document.querySelector('.project-input');\n    const projectButton = document.querySelector('.project-button');\n    const projectList = document.querySelector('.project-list');\n    const projectTodoTitle = document.querySelector('.project-todo-title');\n    const projectUiButton = document.querySelector('.project-ui-button.active');\n\n    function createProjectUI() {\n        // New Project\n        const newProject = new _add_project__WEBPACK_IMPORTED_MODULE_1__.CreateProject(projectInput.value);\n        myProjects.push(newProject);\n    \n        const projectUiButton = document.createElement('button');\n        projectUiButton.classList.add('project-ui-button');\n    \n        const btn = projectList.getElementsByClassName(\"project-ui-button\");\n        projectUiButton.addEventListener('click', () => {\n\n            toDoContainer.innerHTML = \n            `<div class=\"tasks-list\" id=\"tasks-list\"></div>`\n\n            // toDoContainer.innerHTML = newProject.tasks\n            newProject.tasks.forEach(element => {\n                const tasksList = document.getElementById('tasks-list');\n                tasksList.innerHTML += `\n                <button class=\"button-task\" data-task-button>\n                <div class=\"left-task-panel\">\n                <i class=\"far fa-circle\"></i>\n                <p class=\"input-title-text\">${element.title}</p>\n                <input type=\"text\" class=\"input-title\" id=\"input-title\">\n                </div>\n                <div class=\"right-task-panel\">\n                <p class=\"input-date\">${element.date}</p>\n                <input type=\"date\" class=\"input-due-date\" data-input-due-date>\n                <i class=\"fas fa-times\"></i>\n                </div>\n                </button>`\n            });\n            projectTodoTitle.textContent = newProject.projectName;\n           });\n    \n        // Loop through the buttons and add the active class to the current/clicked button\n        for (let i = 0; i < btn.length; i++) {\n            btn[i].addEventListener(\"click\", function() {\n            let current = document.getElementsByClassName(\"active\");\n            // If there's no active class\n            if (current.length > 0) {\n                current[0].className = current[0].className.replace(\" active\", \"\");\n            };\n            // Add the active class to the current/clicked button\n            this.className += \" active\";\n        });\n        };\n        projectUiButton.append(newProject.projectName)\n        projectList.appendChild(projectUiButton);\n     };\n    \n    \n    function addTodo(e) {\n        const projectUiButton = document.querySelector('.project-ui-button.active');\n\n        const newTodo = new _add_todo__WEBPACK_IMPORTED_MODULE_0__.CreateTodo(toDoInput.value, todoDateInput.value);\n\n        toDoContainer.innerHTML = \n        `<div class=\"tasks-list\" id=\"tasks-list\"></div>`\n    \n       for (let i = 0; i < myProjects.length; i++) {\n            if (projectUiButton.textContent == myProjects[i].projectName) { // add condition so that 2 projects cannot have the same name\n                const newTodoValues = [newTodo.title, newTodo.date, newTodo.completed]\n                myProjects[i].tasks.push(newTodo);\n                console.log(myProjects[i].tasks);\n                myProjects[i].tasks.forEach(element => {\n                    const tasksList = document.getElementById('tasks-list');\n                    tasksList.innerHTML += `\n                    <button class=\"button-task\" data-task-button>\n                    <div class=\"left-task-panel\">\n                    <i class=\"far fa-circle\"></i>\n                    <p class=\"input-title-text\">${element.title}</p>\n                    <input type=\"text\" class=\"input-title\" id=\"input-title\">\n                    </div>\n                    <div class=\"right-task-panel\">\n                    <p class=\"input-date\">${element.date}</p>\n                    <input type=\"date\" class=\"input-due-date\" id=\"input-due-date\">\n                    <i class=\"fas fa-times\"></i>\n                    </div>\n                    </button>`\n                });\n            };\n       };\n        const todoTitleInput = document.querySelectorAll('.input-title');\n        const todoTitle = document.querySelectorAll('.input-title-text');\n        const taskContainer = document.querySelector('.button-task');\n\n       // need to set an active class for each todo button as an identifier enabling us to edit the active button (todo)\n    };\n\n\n    //Event listeners\n    toDoButton.addEventListener('click', addTodo);\n\n    toDoButton.addEventListener('click', (event) => {\n        event.preventDefault();\n    }); \n\n    projectButton.addEventListener('click', createProjectUI)\n\n    projectButton.addEventListener('click', (e) => {\n        e.preventDefault()\n    });\n\n    \n\n    return {\n        createProjectUI,\n        addTodo,\n    };\n\n})();\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;