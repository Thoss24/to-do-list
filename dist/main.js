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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateProject\": () => (/* binding */ CreateProject),\n/* harmony export */   \"createProjectUI\": () => (/* binding */ createProjectUI)\n/* harmony export */ });\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n\n\n// Selectors\nconst projectInput = document.querySelector('.project-input');\nconst projectButton = document.querySelector('.project-button');\nconst projectList = document.querySelector('.project-list');\nconst toDoList = document.querySelector('.todo-list');\n\n// Functions\nlet CreateProject = function() {\n    this.projectName = projectInput.value;\n    this.tasks = [\"dummy data\"];\n }\n\n function createProjectUI() {\n    // Create project icon\n    const projectDiv = document.createElement('div');\n    projectDiv.classList.add('project-div');\n\n    // New Project\n    const newProject = new CreateProject();\n    myProjects.push(newProject);\n    // newProject.classList.add('new-project');\n    // document.querySelector('.new-project').innerHTML = newProject.projectName\n    projectDiv.append(newProject.projectName, newProject.tasks);\n\n    // New tasks\n    const newTask = new _add_todo__WEBPACK_IMPORTED_MODULE_0__.CreateTodo();\n    newProject.tasks.push(newTask)\n    toDoList.append(newTask.title)\n\n    // Trash button\n    const trashButton = document.createElement('button');\n    trashButton.innerHTML = '<i class=\"fas fa-trash\"></i>';\n    trashButton.classList.add('trash-btn');\n    projectDiv.appendChild(trashButton);\n\n    // Append to list\n    projectList.appendChild(projectDiv);\n }\n\n// Projects container\nlet myProjects = [];\n \n // work around error in the console. we are on the right track though\n \n\n//  function createProjectUi(event) {\n//      // prevent page refresh\n//      event.preventDefault();\n//      // Create project icon\n//      const projectDiv = document.createElement('div');\n//      projectDiv.classList.add('project-div');\n//      // New Project\n//      const newProject = document.createElement('li');\n//      newProject.innerText = projectInput.value;\n//      newProject.classList.add('new-project');\n//      projectDiv.appendChild(newProject);\n//       // Trash button\n//       const trashButton = document.createElement('button');\n//       trashButton.innerHTML = '<i class=\"fas fa-trash\"></i>';\n//       trashButton.classList.add('trash-btn');\n//       projectDiv.appendChild(trashButton);\n//       // Append to list\n//       projectList.appendChild(projectDiv);\n// }\n\n\n// Event listeners\nprojectButton.addEventListener('click', createProjectUI);\n\nprojectButton.addEventListener('click', (e) => {\n    e.preventDefault()\n});\n\nprojectButton.addEventListener('click', () => {\n    for (let i in myProjects) {\n        console.log(myProjects[i])\n    }\n});\n\n// object is appending to screen, but we still need to figure out how to interact with it\n\n// Selectors\nconst projectUi = document.querySelector('.new-project');\n\nprojectUi.addEventListener('click', () => {\n    console.log(\"hello\")\n});\n\n\n\n//# sourceURL=webpack://to-do-list/./src/add-project.js?");

/***/ }),

/***/ "./src/add-todo.js":
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreateTodo\": () => (/* binding */ CreateTodo),\n/* harmony export */   \"addTodo\": () => (/* binding */ addTodo)\n/* harmony export */ });\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n\n\n//Selectors\nconst toDoInput = document.querySelector('.todo-input');\nconst toDoButton = document.querySelector('.todo-button');\nconst toDoList = document.querySelector('.todo-list');\n\n//Event listeners\ntoDoButton.addEventListener('click', addTodo);\n\ntoDoButton.addEventListener('click', (event) => {\n    event.preventDefault();\n\n}); \n\n// FIGURE OUT HOW TO PUSH TASKS TO PROJECT ARRAY. MAYBE IDENTIFY PROJECT BY OBJECT ID AND ASSIGN THAT WAY\n\nlet CreateTodo = function(title, description, dueDate, priority) {\n    this.title = toDoInput.value;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority\n }\n\nfunction addTodo(e) {\n   // ToDo DIV\n   const todoDiv = document.createElement('div');\n   todoDiv.classList.add(\"todo\");\n   // Create LI\n   const newTodo = document.createElement('li');\n   newTodo.innerText = 'hey';\n   newTodo.classList.add('todo-item');\n   todoDiv.appendChild(newTodo);\n   // Checked button\n   const completedButton = document.createElement('button');\n   completedButton.innerHTML = '<i class=\"fas fa-check\"></i>';\n   completedButton.classList.add('complete-btn');\n   todoDiv.appendChild(completedButton);\n   // Trash button\n   const trashButton = document.createElement('button');\n   trashButton.innerHTML = '<i class=\"fas fa-trash\"></i>';\n   trashButton.classList.add('complete-btn');\n   todoDiv.appendChild(trashButton);\n   // Append to list\n   toDoList.appendChild(todoDiv);\n   // Prevent page refresh\n//    e.preventDefault();\n\n} \n\n \n\n\n//# sourceURL=webpack://to-do-list/./src/add-todo.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n\n\n\n(0,_add_todo__WEBPACK_IMPORTED_MODULE_0__.addTodo)();\n(0,_add_project__WEBPACK_IMPORTED_MODULE_1__.createProjectUI)();\n\n\n\n// let testProject = createProject()\n// testProject.displayTasks()\n\n// let testToDo = createToDo(\"title-test \", \" description-test \", \" dueDate-test \", \" priority-test\")\n// testToDo.displayToDoInfo()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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