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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Projects)\n/* harmony export */ });\nclass Projects {\n    constructor(projectName) {\n        this.projectName = projectName\n        this.tasks = []\n    }\n\n    setProjectName(projectName) {\n        this.projectName = projectName\n    }\n\n    getProjectName() {\n        return this.projectName\n    }\n\n    setTasks(tasks) {\n        this.tasks = tasks\n    }\n\n    getTasks() {\n        return this.tasks\n    }\n\n    //Return the first task in the array that matches taskName.\n    getSelectedTask(taskName) {\n        // The find method returns the first element in the tasks array that matches by name\n        return this.tasks.find((task) => task.getProjectName() === taskName)\n    }\n\n    //Check if the task already exists inside the tasks array.\n    checkSelectedTask(taskName) {\n        // The some method tests whether at least one element in the tasks array has a name equal to the name passed into the function\n        return this.tasks.some((task) => task.getName() == taskName)\n    }\n\n    //Adds a new task to tasks array, if a task with the same name already exists inside the tasks array, return.\n    addTask(newTask) {\n        // using the find method check if a task inside the tasks array has a name equal to the name of newTask (the task added by user)\n        if (this.tasks.find((task) => task.getName() === newTask.name)) return\n        this.tasks.push(newTask)\n    }\n\n    deleteTask(taskName) {\n        // using the filter method to create a shallow copy of the tasks array containing all tasks except the task chosen to be deleted\n        this.tasks = this.tasks.filter((task) => task.name !== taskName)\n    }\n\n\n\n}\n\n//# sourceURL=webpack://to-do-list/./src/add-project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dom)\n/* harmony export */ });\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n/* harmony import */ var _get_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-projects */ \"./src/get-projects.js\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n\n\n\n\n\nclass Dom {\n\n    static loadPage() {\n        Dom.addProjectUi();\n        // Dom.addTodoUi();\n        Dom.loadProjects();\n        // Dom.loadToDos();\n        Dom.setActive();\n    };\n\n    // A method which creates the project ui for each project inside the projects array upon loading the page\n    static loadProjects() {\n        _local_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].retrieveTodoList().getProjects().forEach((project) => { \n            Dom.createNewProject(project.projectName)\n        });\n    }\n\n    static loadToDos(projectName) {\n        // LocalStorage.retrieveTodoList().getSelectedProject(projectName).getTasks().forEach((todo) => Dom.createNewTodo(todo.name));\n        _local_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].retrieveTodoList().getSelectedProject(projectName).getTasks().forEach((todo) => Dom.createNewTodo(todo.name))\n    }\n\n    // Create the inner html for each project added\n    static createNewProject(projectName) {\n        const userProjectsList = document.getElementById('user-projects-container');\n\n        userProjectsList.innerHTML += `\n        <button class=\"user-project-button\">\n        <div class=\"project-name-icon\"> \n        <i class=\"fa fa-list-ul\" id=\"list-icon\"></i>\n        <span>${projectName}</span>\n        </div>\n        <div class=\"delete-project-icon\">\n        <i class=\"fa fa-times-circle\"></i>\n        </div>\n        </button>\n        `;\n    };\n\n    static displayProjectContent(projectName) {\n        const addTodoContent = document.querySelector('.add-todo-container');\n\n        addTodoContent.innerHTML = `\n        <h2 id=\"project-title-heading\">${projectName}</h2>\n        <div id=\"tasks-list-container\"></div>\n        `;\n\n        addTodoContent.innerHTML += `\n        <button id=\"add-todo-button\"><i class=\"fa fa-plus\"></i>Add Todo</button>\n        <div class=\"todo-container\">\n        <form action=\"\" class=\"todo-form\">\n        <input type=\"text\" id=\"todo-input\">\n        <label for=\"to-do-date\"></label>\n        <button id=\"create-todo-button\" type=\"button\">\n        <i class=\"fas fa-plus-square\"></i>\n        </button>\n        <button id=\"cancel-add-todo-button\" type=\"button\">\n        <i class=\"fa fa-times-circle\"></i>\n        </button>\n        </form>\n        </div>\n        `;\n        Dom.loadToDos(projectName)\n    }\n\n    // Create the inner html for each todo added\n    static createNewTodo(todoName) {\n        const todoListContainer = document.getElementById('tasks-list-container');\n\n        todoListContainer.innerHTML += `\n        <button class=\"user-todo-button\">\n        <div class=\"todo-left-div\"> \n        <i class=\"fa fa-check-circle\" id=\"checked-icon\"></i>\n        <span>${todoName}</span>\n        </div>\n        <div class=\"todo-right-div\">\n        <input type=\"date\">\n        <i class=\"fa fa-times-circle\"></i>\n        </div>\n        </button>\n        `\n    }\n\n    // A method which creates an instance of the Projects class and invokes the addProject function which pushes the newly created instance into the projects array\n    // Also passing the value of the input field into the addProject and createNewProject functions as the project name\n    static addProject() {\n        const projectNameInput = document.getElementById('project-name-input');\n\n        const projectName = projectNameInput.value;\n\n        if (projectName === \"\") {\n            alert(\"Project name cannot be empty.\")\n            return\n        };\n\n        if (_local_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].retrieveTodoList().containsProject(projectName)) {\n            alert(\"Project names cannot be the same.\")\n            projectNameInput.value = \"\"\n            return\n        };\n\n        _local_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject(new _add_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"](projectName));\n        Dom.createNewProject(projectName);\n    };\n\n    static addTodo() {\n        const projectTitle = document.getElementById('project-title-heading');\n        const projectTitleContent = projectTitle.textContent\n        const todoInput = document.getElementById('todo-input');\n\n        const todoName = todoInput.value;\n\n        //\n        _local_storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTodo(projectTitleContent, new _add_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](todoName));\n        Dom.createNewTodo(todoName);\n    }\n\n    // Event listeners to display the add project input\n    static addProjectUi() {\n        const addProjectContainer = document.getElementById('add-project-container');\n        const addProjectButton = document.getElementById('add-projects-button');\n        const cancelAddProjectButton = document.getElementById('cancel-add-project-button');\n        const createProjectButton = document.getElementById('create-project-button');\n\n        addProjectButton.addEventListener('click', () => {\n            addProjectContainer.style.display = \"flex\";\n        });\n\n        cancelAddProjectButton.addEventListener('click', (event) => {\n            addProjectContainer.style.display = \"none\";\n        });\n\n        createProjectButton.addEventListener('click', Dom.addProject)\n\n    };\n\n    // Event listeners to display the add todo input\n    static addTodoUi() {\n        const createTodoButton = document.getElementById('create-todo-button');\n        const addTodoButton = document.getElementById('add-todo-button');\n        const todoContainer = document.querySelector('.todo-container');\n        const cancelTodoButton = document.getElementById('cancel-add-todo-button');\n        \n        addTodoButton.addEventListener('click', () => {\n            todoContainer.style.display = \"flex\";\n            addTodoButton.style.display = \"none\";\n        });\n\n        cancelTodoButton.addEventListener('click', () => {\n            todoContainer.style.display = \"none\";\n            addTodoButton.style.display = \"flex\";\n        });\n\n        createTodoButton.addEventListener('click', Dom.addTodo);\n\n        createTodoButton.addEventListener('click', () => {\n            todoContainer.style.display = \"none\";\n            addTodoButton.style.display = \"flex\";\n        })\n    };\n\n    static selectedProject(event) {\n        const projectButtons = document.querySelectorAll('.user-project-button');\n        const thisProject = this.children[0].children[1].textContent\n\n        // if (event.target.classList.containsProject() {\n        //     // this method is to delete project based on the class of the selected button. need to change \"x\" icon on projects to a button\n        // };\n\n        // passing in thisProject and this (which represents the button that was clicked) into the setActive method\n        Dom.setActive(thisProject, this)\n    }\n\n    static setActive(name, button) {\n        const projectButtons = document.querySelectorAll('.user-project-button');\n\n        projectButtons.forEach((button) => button.classList.remove('active'));\n\n        projectButtons.forEach((button) => button.addEventListener('click', Dom.selectedProject));\n\n        button.classList.add('active');\n\n        console.log(button)\n        console.log(name)\n        Dom.displayProjectContent(name)\n        Dom.addTodoUi()\n    }\n\n}\n\n\n\n//# sourceURL=webpack://to-do-list/./src/dom.js?");

/***/ }),

/***/ "./src/get-projects.js":
/*!*****************************!*\
  !*** ./src/get-projects.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n\n\n\nclass List {\n    constructor() {\n        this.projects = []\n        this.projects.push(new _add_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Test1\"))\n    }\n\n    setProjects(projects) {\n        this.projects = projects\n    }\n\n    // retrieve projects array\n    getProjects() {\n        return this.projects\n    }\n\n    // search projects array and return the project matching the name of the project passed into the getSelectedProject function\n    getSelectedProject(projectName) {\n        return this.projects.find((project) => project.getProjectName() === projectName)\n    }\n\n    // search the projects array and test whether at least one element in the array has the same name as projectName (name passed in to containsProject method)\n    containsProject(projectName) {\n        return this.projects.some((project) => project.getProjectName() === projectName)\n    }\n\n    // check if there is a project inside projects array with the same name as newProject, if true then return, else push newProject into the projects array\n    createProject(newProject) {\n        if (this.projects.find((project) => project.projectName === newProject.projectName))\n        return\n        this.projects.push(newProject)\n    }\n\n    // using the find method, get the name of the project to be deleted and then use the splice method to remove it from the array\n    deleteProject(projectName) {\n        // a variable to hold the value of the project the user wants to delete\n        const deleteThisProject = this.projects.find((project) => project.getProjectName() === projectName)\n        // remove deleteThisProject from the projects array\n        this.projects.splice(this.projects.indexOf(deleteThisProject), 1)\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/get-projects.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadPage()\n\n\n\n\n\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LocalStorage)\n/* harmony export */ });\n/* harmony import */ var _add_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-project */ \"./src/add-project.js\");\n/* harmony import */ var _add_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-todo */ \"./src/add-todo.js\");\n/* harmony import */ var _get_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-projects */ \"./src/get-projects.js\");\n\n\n\n\nclass LocalStorage {\n    // our new project and new todo's will be passed into this method to save it to localStorage allowing users to see projects and todo's after refreshing or closing browser\n    static saveList(info) {\n        // localStorage.setItem method uses a key value pair that will add the key 'todo-list' to the given storage object \n        localStorage.setItem('todoList', JSON.stringify(info))\n    }\n\n    static retrieveTodoList() {\n        // Object.assign used to apply the stringified data of the todo list to a instance of List\n        const todoList = Object.assign(new _get_projects__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), JSON.parse(localStorage.getItem('todoList')))\n\n        // create a new array inside our List populated with an instance of the Projects class (in other words a new project inside the projects array) \n        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new _add_project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](), project)))\n\n        // for each project inside the projects array create a new tasks array\n        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((todo) => Object.assign(new _add_todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), todo))))\n\n        return todoList\n    }\n\n    static addProject(project) {\n        const todoList = LocalStorage.retrieveTodoList()\n        todoList.createProject(project)\n        LocalStorage.saveList(todoList)\n        // console.log(todoList)\n    }\n\n    static addTodo(projectName, todo) {\n        const todoList = LocalStorage.retrieveTodoList()\n        todoList.getSelectedProject(projectName).addTask(todo)\n        console.log(todoList.getSelectedProject(projectName).getTasks(todo))\n        console.log(todoList.getProjects())\n        LocalStorage.saveList(todoList)\n        // console.log(todoList)\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/local-storage.js?");

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