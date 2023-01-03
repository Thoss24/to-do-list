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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateProject\": () => (/* binding */ CreateProject),\n/* harmony export */   \"createProjectUI\": () => (/* binding */ createProjectUI),\n/* harmony export */   \"myProjects\": () => (/* binding */ myProjects)\n/* harmony export */ });\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n\n\n// Selectors\nconst projectInput = document.querySelector('.project-input');\nconst projectButton = document.querySelector('.project-button');\nconst projectList = document.querySelector('.project-list');\nconst toDoContainer = document.querySelector('.todo-container');\nconst toDoList = document.querySelector('.todo-list');\n\n// Functions\nlet CreateProject = function() {\n    this.projectName = projectInput.value;\n    this.tasks = [\"dummy data\"];\n }\n\n function createProjectUI() {\n\n    // New Project\n    const newProject = new CreateProject();\n    myProjects.push(newProject);\n\n    const projectUiButton = document.createElement('button');\n    projectUiButton.classList.add('project-ui-button');\n\n    const btn = projectList.getElementsByClassName(\"project-ui-button\");\n    projectUiButton.addEventListener('click', () => {\n        console.log(newProject.tasks)\n       });\n\n    // Loop through the buttons and add the active class to the current/clicked button\n    for (let i = 0; i < btn.length; i++) {\n        btn[i].addEventListener(\"click\", function() {\n        \n        let current = document.getElementsByClassName(\"active\");\n\n        // If there's no active class\n        if (current.length > 0) {\n            current[0].className = current[0].className.replace(\" active\", \"\");\n        }\n\n        // Add the active class to the current/clicked button\n        this.className += \" active\";\n    });\n    }\n\n    projectUiButton.append(newProject.projectName)\n    projectList.appendChild(projectUiButton);\n\n   \n    // Trash button\n    const trashButton = document.createElement('button');\n    trashButton.innerHTML = '<i class=\"fas fa-trash\"></i>';\n    trashButton.classList.add('trash-btn');\n    \n }\n\n\n// Projects container\nlet myProjects = [];\n\n\n// Event listeners\nprojectButton.addEventListener('click', createProjectUI);\n\nprojectButton.addEventListener('click', (e) => {\n    e.preventDefault()\n});\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/add-project.js?");

/***/ }),

/***/ "./src/add-todo.js":
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateTodo\": () => (/* binding */ CreateTodo),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n\n\n//Selectors\nconst toDoInput = document.querySelector('.todo-input');\nconst toDoButton = document.querySelector('.todo-button');\nconst toDoList = document.querySelector('.todo-list');\n\n//Event listeners\ntoDoButton.addEventListener('click', addTodo);\n\ntoDoButton.addEventListener('click', (event) => {\n    event.preventDefault();\n}); \n\n// Functions\nlet CreateTodo = function(title) {\n    this.title = toDoInput.value\n}\n\nfunction addTodo(e) {\n    const projectUiButton = document.querySelector('.project-ui-button.active');\n   // ToDo DIV\n   const todoDiv = document.createElement('div');\n   todoDiv.classList.add(\"todo\");\n\n   // New Todo\n   const newTodo = new CreateTodo();\n   todoDiv.append(newTodo.title);\n\n   for (let i = 0; i < _add_project__WEBPACK_IMPORTED_MODULE_0__.myProjects.length; i++) {\n        if (projectUiButton.textContent == _add_project__WEBPACK_IMPORTED_MODULE_0__.myProjects[i].projectName) { // add condition so that 2 projects cannot have the same name\n            _add_project__WEBPACK_IMPORTED_MODULE_0__.myProjects[i].tasks.push(newTodo)\n        };\n        console.log(_add_project__WEBPACK_IMPORTED_MODULE_0__.myProjects[i].tasks)\n        //is \"active\" and text content is equal to myProjects[i].projectName push newToDo to myProjects[i].tasks\n   };\n\n   // Checked button\n   const completedButton = document.createElement('button');\n   completedButton.innerHTML = '<i class=\"fas fa-check\"></i>';\n   completedButton.classList.add('complete-btn');\n   todoDiv.appendChild(completedButton);\n\n   // Trash button\n   const trashButton = document.createElement('button');\n   trashButton.innerHTML = '<i class=\"fas fa-trash\"></i>';\n   trashButton.classList.add('complete-btn');\n   todoDiv.appendChild(trashButton);\n\n   // Append to list\n   toDoList.appendChild(todoDiv);\n} \n\n \n\n\n//# sourceURL=webpack://to-do-list/./src/add-todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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