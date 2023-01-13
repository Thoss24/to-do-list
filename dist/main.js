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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n\n\n\n\nclass Dom {\n\nstatic loadPage() {\n    Dom.addProjectUi()\n}\n\n\nstatic addProjectUi() {\n\n    const addProjectButton = document.querySelector('.add-projects-button');\n    const addProjectContainer = document.getElementById('add-project-container');\n\n    addProjectButton.addEventListener('click', () => {\n        addProjectContainer.sty\n    })\n}   \n \n    \n}\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadPage)\n\n\n    // Projects container\n    // let myProjects = [];\n\n    //Selectors\n    // const toDoInput = document.querySelector('.todo-input');\n    // const toDoButton = document.querySelector('.todo-button');\n    // const toDoList = document.querySelector('.todo-list');\n    // const todoDateInput = document.getElementById('to-do-date');\n    // const toDoContainer = document.querySelector('.todo-container');\n    // const projectInput = document.querySelector('.project-input');\n    // const projectButton = document.querySelector('.project-button');\n    // const projectList = document.querySelector('.project-list');\n    // const projectTodoTitle = document.querySelector('.project-todo-title');\n    // const projectUiButton = document.querySelector('.project-ui-button.active');\n    // const closeEditTodoButton = document.getElementById('close-edit-todo-button');\n    // const editTodoFormContainer = document.getElementById('edit-todo-form-container');\n    // const editTodoTitle = document.getElementById('edit-todo-title');\n    // const editTodoDate = document.getElementById('edit-todo-date');\n\n    // function createProjectUI() {\n    //     // New Project\n    //     // const newProject = new CreateProject(projectInput.value);\n    //     // myProjects.push(newProject);\n    \n    //     const projectUiButton = document.createElement('button');\n    //     projectUiButton.classList.add('project-ui-button');\n    \n    //     const btn = projectList.getElementsByClassName(\"project-ui-button\");\n    //     const editButton = document.createElement('button');\n    //     editButton.classList.add('edit-button')\n    //     editButton.textContent = \"Edit\"\n\n    //     projectUiButton.addEventListener('click', () => {\n\n    //         toDoContainer.innerHTML = \n    //         `<div class=\"tasks-list\" id=\"tasks-list\"></div>`\n\n    //         // toDoContainer.innerHTML = newProject.tasks\n    //         newProject.tasks.forEach(element => {\n    //             const tasksList = document.getElementById('tasks-list');\n    //             tasksList.innerHTML += `\n    //             <button class=\"button-task\" data-task-button>\n    //             <div class=\"left-task-panel\">\n    //             <i class=\"far fa-circle\"></i>\n    //             <p class=\"input-title-text\"></p>\n    //             <input type=\"text\" class=\"todo-title-input\" id=\"todo-title-input\">\n    //             </div>\n    //             <div class=\"right-task-panel\">\n    //             <p class=\"input-date\"></p>\n    //             <input type=\"date\" class=\"todo-date-input\" id=\"todo-date-input\">\n    //             <i class=\"fa fa-pencil\"></i>\n    //             <i class=\"fas fa-times\"></i>\n    //             </div>\n    //             </button>` \n    //             // editTodo()\n    //         });\n    //         projectTodoTitle.textContent = newProject.projectName;\n    //        });\n    \n    //     // Loop through the buttons and add the active class to the current/clicked button\n    //     for (let i = 0; i < btn.length; i++) {\n    //         btn[i].addEventListener(\"click\", function() {\n    //         let current = document.getElementsByClassName(\"active\");\n    //         // If there's no active class\n    //         if (current.length > 0) {\n    //             current[0].className = current[0].className.replace(\" active\", \"\");\n    //         };\n    //         // Add the active class to the current/clicked button\n    //         this.className += \" active\";\n    //     });\n    //     };\n\n    //     projectUiButton.append(newProject.projectName)\n    //     projectList.appendChild(projectUiButton);\n    //     // editTodo()\n    //  };\n    \n    \n    // function addTodo(e) {\n    //     // const projectUiButton = document.querySelector('.project-ui-button.active');\n    //     // const newTodo = new CreateTodo(toDoInput.value, todoDateInput.value); \n\n    //     toDoContainer.innerHTML = \n    //     `<div class=\"tasks-list\" id=\"tasks-list\"></div>`\n    //     const tasksList = document.getElementById('tasks-list');\n    \n    //    for (let i = 0; i < myProjects.length; i++) {\n    //         if (projectUiButton.textContent == myProjects[i].projectName) { // add condition so that 2 projects cannot have the same name\n    //             myProjects[i].tasks.push(newTodo);\n    //             console.log(myProjects[i].tasks);\n    //             myProjects[i].tasks.forEach(element => {\n    //                 tasksList.innerHTML += `\n    //                 <button class=\"button-task\" data-task-button>\n    //                 <div class=\"left-task-panel\">\n    //                 <i class=\"far fa-circle\"></i>\n    //                 <p class=\"input-title-text\"></p>\n    //                 <input type=\"text\" class=\"todo-title-input\" id=\"todo-title-input\">\n    //                 </div>\n    //                 <div class=\"right-task-panel\">\n    //                 <p class=\"input-date\"></p>\n    //                 <input type=\"date\" class=\"todo-date-input\" id=\"todo-date-input\">\n    //                 <i class=\"fa fa-pencil\"></i>\n    //                 <i class=\"fas fa-times\"></i>\n    //                 </div>\n    //                 </button>`\n                    \n    //                 // editTodo()\n    //             });\n    //         };\n    //     };\n    // }\n\n\n//     function editTodo() {\n\n//     const editTodoIcon = document.getElementsByClassName('fa fa-pencil');\n//     const inputTitleText = document.getElementsByClassName('input-title-text');\n\n//     for (let j = 0; j < editTodoIcon.length; j++){\n//         editTodoIcon[j].addEventListener('click', (e) => {\n//             editTodoFormContainer.style.display = \"flex\";\n//         });\n//     };\n\n//     for (let i = 0; i < myProjects.length; i++) {\n//         for (let j = 0; j < myProjects[i].tasks.length; j++) {\n//             for (let x = 0; x < inputTitleText.length; x++) {\n\n//                 if (inputTitleText[x].textContent == myProjects[i].tasks[j].title) {\n\n//                     console.log(inputTitleText[x].parentNode.parentNode.childNodes[3].childNodes[3])\n//                     // console.log(myProjects[i].tasks[j].title)\n\n//                     closeEditTodoButton.addEventListener('click', (e) => {\n//                         e.preventDefault()\n//                         inputTitleText[x].parentNode.childNodes[3].textContent = editTodoTitle.value\n//                         inputTitleText[x].parentNode.parentNode.childNodes[3].childNodes[3].value = editTodoDate.value\n//                         // myProjects[i].tasks[j].date = editTodoDate.value\n//                         // myProjects[i].tasks[j].title = editTodoTitle.value\n//                         // console.log(myProjects[i].tasks)\n//                         editTodoFormContainer.style.display = \"none\";\n//                     });\n//                     break\n//                 }\n//             }\n//         } \n//     }      \n// };\n\n\n    // for (let i = 0; i < inputTitleText.length; i++){\n    //     inputTitleText[i].addEventListener('click', (e) => {\n    //         // editTodoFormContainer.style.display = \"flex\";\n    //         console.log(inputTitleText[i].parentNode.parentNode.parentNode)\n    //     });\n    // };\n\n\n    // closeEditTodoButton.addEventListener('click', (e) => {\n    //     e.preventDefault()\n    //     editTodoFormContainer.style.display = \"none\";\n    // });\n\n\n    // editTodoBtn[i].parentNode.parentNode.childNodes[1].childNodes[3].textContent\n    // };\n\n    \n     //Event listeners\n    //  toDoButton.addEventListener('click', addTodo);\n\n    //  toDoButton.addEventListener('click', (event) => {\n    //      event.preventDefault();\n    //  }); \n \n    //  projectButton.addEventListener('click', createProjectUI);\n \n    //  projectButton.addEventListener('click', (e) => {\n    //      e.preventDefault()\n    //  });\n    \n    // return {\n    //     createProjectUI,\n    //     addTodo,\n    //     editTodo\n    // }\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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