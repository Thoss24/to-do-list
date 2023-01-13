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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projects)\n/* harmony export */ });\nclass Projects {\n    constructor(projectName) {\n        this.projectName = projectName\n        this.tasks = []\n    }\n\n    setProjectName(projectName) {\n        this.projectName = projectName\n    }\n\n    getProjectName() {\n        return this.projectName\n    }\n\n    setTasks(tasks) {\n        this.tasks =tasks\n    }\n\n    getTasks() {\n        return this.tasks\n    }\n\n    //Return the first task in the array that matches taskName.\n    getSelectedTask(taskName) {\n        // The find method returns the first element in the tasks array that matches by name\n        return this.tasks.find((task) => task.getProjectName() === taskName)\n    }\n\n    //Check if the task already exists inside the tasks array.\n    checkSelectedTask(taskName) {\n        // The some method tests whether at least one element in the tasks array has a name equal to the name passed into the function\n        return this.tasks.some((task) => task.getName() == taskName)\n    }\n\n    //Adds a new task to tasks array, if a task with the same name already exists inside the tasks array, return.\n    addTask(newTask) {\n        // using the find method check if a task inside the tasks array has a name equal to the name of newTask (the task added by user)\n        if (this.tasks.find((task) => task.getName() === newTask.name)) return\n        this.tasks.push(newTask)\n    }\n\n    deleteTask(taskName) {\n        // using the filter method to create a shallow copy of the tasks array containing all tasks except the task chosen to be deleted\n        this.tasks = this.tasks.filter((task) => task.name !== taskName)\n    }\n\n\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/add-project.js?");

/***/ }),

/***/ "./src/add-todo.js":
/*!*************************!*\
  !*** ./src/add-todo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n   constructor(name, date) {\n      this.name = name\n      this.date = date\n   }\n\n   setName(name) {\n      this.name = name\n   }\n\n   getName() {\n      return this.name\n   }  \n\n   setDate(date) {\n      this.date = date\n   }\n\n   getDate() {\n      return this.date\n   }\n}\n\n//# sourceURL=webpack://to-do-list/./src/add-todo.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n\n\n\nclass Dom {\n\n    static addProjectUi() {\n        const addProjectContainer = document.getElementById('add-project-container');\n        const addProjectButton = document.getElementById('add-projects-button');\n        const cancelAddProjectButton = document.getElementById('cancel-add-project-button');\n        const createProjectButton = document.getElementById('create-project-button');\n\n        addProjectButton.addEventListener('click', () => {\n            addProjectContainer.style.display = \"flex\"\n        });\n\n        cancelAddProjectButton.addEventListener('click', (event) => {\n            event.preventDefault()\n            addProjectContainer.style.display = \"none\"\n        });\n\n        createProjectButton.addEventListener('click', (event) => {\n            event.preventDefault()\n        })\n        \n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectUi()\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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