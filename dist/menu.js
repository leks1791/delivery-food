/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0osMERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS1mb29kLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcblxyXG5hdXRoKClcclxubWVudSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n   const buttonAuth = document.querySelector('.button-auth'),\r\n      modalAuth = document.querySelector('.modal-auth'),\r\n      closeAuth = modalAuth.querySelector('.close-auth'),\r\n      buttonOut = document.querySelector('.button-out'),\r\n      userName = document.querySelector('.user-name'),\r\n      logInForm = document.getElementById('logInForm'),\r\n      inputLogin = document.getElementById('login'),\r\n      inputPassword = document.getElementById('password');\r\n\r\n   const login = (user) => {\r\n      buttonAuth.style.display = 'none';\r\n\r\n      buttonOut.style.display = 'block';\r\n      userName.style.display = 'block';\r\n\r\n      userName.textContent = user.login;\r\n      modalAuth.style.display = 'none';\r\n   }\r\n   const logout = () => {\r\n\r\n      buttonAuth.style.display = 'flex';\r\n      buttonOut.style.display = 'none';\r\n\r\n      userName.textContent = '';\r\n      userName.style.display = 'none';\r\n      localStorage.removeItem('user')\r\n   }\r\n\r\n   buttonAuth.addEventListener('click', () => {\r\n      modalAuth.style.display = 'flex';\r\n   })\r\n\r\n   buttonOut.addEventListener('click', logout)\r\n\r\n   closeAuth.addEventListener('click', () => {\r\n      modalAuth.style.display = 'none';\r\n   })\r\n\r\n   logInForm.addEventListener('submit', (event) => {\r\n      event.preventDefault()\r\n\r\n      if (!inputLogin.value) {\r\n         alert('Введите логин')\r\n      } else {\r\n         const user = {\r\n            login: inputLogin.value,\r\n            password: inputPassword.value\r\n         }\r\n\r\n         localStorage.setItem('user', JSON.stringify(user))\r\n\r\n         login(user)\r\n      }\r\n   })\r\n\r\n   if (localStorage.getItem('user')) {\r\n      login(JSON.parse(localStorage.getItem('user')))\r\n   }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeS1mb29kLy4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XHJcbiAgIGNvbnN0IGJ1dHRvbkF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWF1dGgnKSxcclxuICAgICAgbW9kYWxBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWF1dGgnKSxcclxuICAgICAgY2xvc2VBdXRoID0gbW9kYWxBdXRoLnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1hdXRoJyksXHJcbiAgICAgIGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3V0JyksXHJcbiAgICAgIHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpLFxyXG4gICAgICBsb2dJbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nSW5Gb3JtJyksXHJcbiAgICAgIGlucHV0TG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKSxcclxuICAgICAgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xyXG5cclxuICAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmxvZ2luO1xyXG4gICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgfVxyXG4gICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcblxyXG4gICAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxyXG4gICB9XHJcblxyXG4gICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgfSlcclxuXHJcbiAgIGJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dClcclxuXHJcbiAgIGNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgIH0pXHJcblxyXG4gICBsb2dJbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgIGlmICghaW5wdXRMb2dpbi52YWx1ZSkge1xyXG4gICAgICAgICBhbGVydCgn0JLQstC10LTQuNGC0LUg0LvQvtCz0LjQvScpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgIGxvZ2luOiBpbnB1dExvZ2luLnZhbHVlLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogaW5wdXRQYXNzd29yZC52YWx1ZVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsIEpTT04uc3RyaW5naWZ5KHVzZXIpKVxyXG5cclxuICAgICAgICAgbG9naW4odXNlcilcclxuICAgICAgfVxyXG4gICB9KVxyXG5cclxuICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcclxuICAgICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSlcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n   const restaurant = 'food-band';\r\n\r\n   const renderItems = (data) => {\r\n      data.forEach(element => {\r\n         console.log(element)\r\n\r\n      });\r\n   }\r\n\r\n   fetch(`./db/${restaurant}.json`)\r\n      .then((response) => response.json())\r\n      .then((data) => {\r\n         renderItems(data)\r\n      })\r\n      .catch((error) => {\r\n         console.log(error)\r\n      })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsaUJBQWlCLFdBQVc7QUFDNUI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVsaXZlcnktZm9vZC8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gICBjb25zdCByZXN0YXVyYW50ID0gJ2Zvb2QtYmFuZCc7XHJcblxyXG4gICBjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcbiAgICAgIGRhdGEuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgY29uc29sZS5sb2coZWxlbWVudClcclxuXHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBmZXRjaChgLi9kYi8ke3Jlc3RhdXJhbnR9Lmpzb25gKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgcmVuZGVySXRlbXMoZGF0YSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;