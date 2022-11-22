function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    }, {
      path: 'blog',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"]
    }, {
      path: 'resume',
      component: _resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"]
    }, {
      path: 'portfolio',
      component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"]
    }, {
      path: '**',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'site';
      }

      _createClass(AppComponent, [{
        key: "homepage",
        value: function homepage() {}
      }, {
        key: "openResume",
        value: function openResume() {
          this.router.navigateByUrl('/resume');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 21,
      vars: 0,
      consts: [[1, "main"], ["role", "navigation", 1, "navigation"], [1, "navigation-top"], [1, "name"], ["routerLink", "/", "title", "Click to go to homepage", "src", "assets/profile.jpg", "alt", "", 1, "profile"], [1, "intro"], [1, "links"], ["title", "https://www.linkedin.com/in/mayanksaxena001/", "onClick", "parent.open('https://www.linkedin.com/in/mayanksaxena001/')", "src", "assets/linkedin.svg", "alt", ""], ["title", "https://github.com/mayanksaxena001", "onClick", "parent.open('https://github.com/mayanksaxena001')", "src", "assets/github.png", "alt", ""], ["title", "https://stackoverflow.com/users/8324190/mayank-saxena", "onClick", "parent.open('https://stackoverflow.com/users/8324190/mayank-saxena')", "src", "assets/so-icon.svg", "alt", ""], ["title", "https://twitter.com/MAYANKSAXENA001", "onClick", "parent.open('https://twitter.com/MAYANKSAXENA001')", "src", "assets/twitter.svg", "alt", ""], [1, "navigations-links"], ["routerLink", "/portfolio"], ["routerLink", "/resume"], [1, "router"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Mayank Saxena");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Hi, I'm Mayank. I'm a full stack software developer and a Blockchain enthusiast.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%] {\n   box-sizing: border-box;\n }\n\n\n .main[_ngcontent-%COMP%] {\n   font-family: -apple-system,\n     BlinkMacSystemFont,\n     \"Segoe UI\",\n     Roboto,\n     Helvetica,\n     Arial,\n     sans-serif,\n     \"Apple Color Emoji\",\n     \"Segoe UI Emoji\",\n     \"Segoe UI Symbol\";\n   font-size: 14px;\n   display: flex;\n   height: 100%;\n   width: 100%;\n   justify-content: flex-start;\n   margin: 0;\n }\n\n\n .navigation[_ngcontent-%COMP%] {\n   display: flex;\n   align-items: center;\n   background-color: #54b689;\n   color: white;\n   font-weight: 600;\n   flex-direction: column;\n   width: 15%;\n   min-width: 230px;\n   height: 100%;\n   padding: 10px;\n }\n\n\n .navigation-top[_ngcontent-%COMP%] {\n   display: flex;\n   flex: 2;\n   flex-direction: column;\n }\n\n\n .router[_ngcontent-%COMP%] {\n   flex: 1;\n }\n\n\n .name[_ngcontent-%COMP%] {\n   padding: 10px;\n   text-align: center;\n   font-size: 25px;\n }\n\n\n .profile[_ngcontent-%COMP%] {\n   width: 70%;\n   \n   align-self: center;\n   border-radius: 100%;\n   margin: 60px 0px;\n }\n\n\n .intro[_ngcontent-%COMP%] {\n   word-wrap: anywhere;\n   \n   font-weight: 400;\n }\n\n\n .links[_ngcontent-%COMP%] {\n   display: flex;\n   justify-content: space-evenly;\n   \n   width: 100%;\n   \n   flex: 1;\n   align-items: center;\n }\n\n\n .links[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n   height: 30px;\n   width: 30px;\n }\n\n\n .navigations-links[_ngcontent-%COMP%] {\n   flex: 1;\n   display: flex;\n   flex-direction: column;\n   justify-content: space-evenly;\n   height: 100%;\n   width: 100%;\n   border-top: 1px solid;\n   border-bottom: 1px solid;\n }\n\n\n label[_ngcontent-%COMP%] {\n   cursor: pointer;\n   text-align: center;\n   height: 25px;\n }\n\n\n label[_ngcontent-%COMP%]:hover {\n   color: black;\n   border: none;\n   \n }\n\n\n \n\n\n img[_ngcontent-%COMP%]:hover {\n   opacity: 0.6;\n   transition: opacity .55s ease-in-out;\n   -moz-transition: opacity .55s ease-in-out;\n   -webkit-transition: opacity .55s ease-in-out;\n   cursor: pointer;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7R0FDRSxzQkFBc0I7Q0FDeEI7OztDQUdBO0dBQ0U7Ozs7Ozs7OztzQkFTbUI7R0FDbkIsZUFBZTtHQUNmLGFBQWE7R0FDYixZQUFZO0dBQ1osV0FBVztHQUNYLDJCQUEyQjtHQUMzQixTQUFTO0NBQ1g7OztDQUVBO0dBQ0UsYUFBYTtHQUNiLG1CQUFtQjtHQUNuQix5QkFBeUI7R0FDekIsWUFBWTtHQUNaLGdCQUFnQjtHQUNoQixzQkFBc0I7R0FDdEIsVUFBVTtHQUNWLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osYUFBYTtDQUNmOzs7Q0FFQTtHQUNFLGFBQWE7R0FDYixPQUFPO0dBQ1Asc0JBQXNCO0NBQ3hCOzs7Q0FFQTtHQUNFLE9BQU87Q0FDVDs7O0NBRUE7R0FDRSxhQUFhO0dBQ2Isa0JBQWtCO0dBQ2xCLGVBQWU7Q0FDakI7OztDQUVBO0dBQ0UsVUFBVTtHQUNWLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEIsbUJBQW1CO0dBQ25CLGdCQUFnQjtDQUNsQjs7O0NBRUE7R0FDRSxtQkFBbUI7R0FDbkIsc0JBQXNCO0dBQ3RCLGdCQUFnQjtDQUNsQjs7O0NBRUE7R0FDRSxhQUFhO0dBQ2IsNkJBQTZCO0dBQzdCLGtCQUFrQjtHQUNsQixXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLE9BQU87R0FDUCxtQkFBbUI7Q0FDckI7OztDQUVBO0dBQ0UsWUFBWTtHQUNaLFdBQVc7Q0FDYjs7O0NBRUE7R0FDRSxPQUFPO0dBQ1AsYUFBYTtHQUNiLHNCQUFzQjtHQUN0Qiw2QkFBNkI7R0FDN0IsWUFBWTtHQUNaLFdBQVc7R0FDWCxxQkFBcUI7R0FDckIsd0JBQXdCO0NBQzFCOzs7Q0FFQTtHQUNFLGVBQWU7R0FDZixrQkFBa0I7R0FDbEIsWUFBWTtDQUNkOzs7Q0FFQTtHQUNFLFlBQVk7R0FDWixZQUFZO0dBQ1osZ0NBQWdDO0NBQ2xDOzs7Q0FFQTs7OztJQUlHOzs7Q0FFSDtHQUNFLFlBQVk7R0FDWixvQ0FBb0M7R0FDcEMseUNBQXlDO0dBQ3pDLDRDQUE0QztHQUM1QyxlQUFlO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgKiB7XG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuIH1cblxuXG4gLm1haW4ge1xuICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sXG4gICAgIEJsaW5rTWFjU3lzdGVtRm9udCxcbiAgICAgXCJTZWdvZSBVSVwiLFxuICAgICBSb2JvdG8sXG4gICAgIEhlbHZldGljYSxcbiAgICAgQXJpYWwsXG4gICAgIHNhbnMtc2VyaWYsXG4gICAgIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcbiAgICAgXCJTZWdvZSBVSSBFbW9qaVwiLFxuICAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAgZm9udC1zaXplOiAxNHB4O1xuICAgZGlzcGxheTogZmxleDtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHdpZHRoOiAxMDAlO1xuICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgbWFyZ2luOiAwO1xuIH1cblxuIC5uYXZpZ2F0aW9uIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgYmFja2dyb3VuZC1jb2xvcjogIzU0YjY4OTtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgd2lkdGg6IDE1JTtcbiAgIG1pbi13aWR0aDogMjMwcHg7XG4gICBoZWlnaHQ6IDEwMCU7XG4gICBwYWRkaW5nOiAxMHB4O1xuIH1cblxuIC5uYXZpZ2F0aW9uLXRvcCB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgZmxleDogMjtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gfVxuXG4gLnJvdXRlciB7XG4gICBmbGV4OiAxO1xuIH1cblxuIC5uYW1lIHtcbiAgIHBhZGRpbmc6IDEwcHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBmb250LXNpemU6IDI1cHg7XG4gfVxuXG4gLnByb2ZpbGUge1xuICAgd2lkdGg6IDcwJTtcbiAgIC8qIGhlaWdodDogMjUlOyAqL1xuICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgIG1hcmdpbjogNjBweCAwcHg7XG4gfVxuXG4gLmludHJvIHtcbiAgIHdvcmQtd3JhcDogYW55d2hlcmU7XG4gICAvKiBtYXJnaW4tdG9wOiAyMHB4OyAqL1xuICAgZm9udC13ZWlnaHQ6IDQwMDtcbiB9XG5cbiAubGlua3Mge1xuICAgZGlzcGxheTogZmxleDtcbiAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgd2lkdGg6IDEwMCU7XG4gICAvKiBtYXJnaW46IDEwcHg7ICovXG4gICBmbGV4OiAxO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiB9XG5cbiAubGlua3M+aW1nIHtcbiAgIGhlaWdodDogMzBweDtcbiAgIHdpZHRoOiAzMHB4O1xuIH1cblxuIC5uYXZpZ2F0aW9ucy1saW5rcyB7XG4gICBmbGV4OiAxO1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgIGhlaWdodDogMTAwJTtcbiAgIHdpZHRoOiAxMDAlO1xuICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkO1xuICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuIH1cblxuIGxhYmVsIHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIGhlaWdodDogMjVweDtcbiB9XG5cbiBsYWJlbDpob3ZlciB7XG4gICBjb2xvcjogYmxhY2s7XG4gICBib3JkZXI6IG5vbmU7XG4gICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrY3lhbjsgKi9cbiB9XG5cbiAvKiBsYWJlbDpmb2N1cyB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcbiAgIGJvcmRlcjogbm9uZTtcbiAgIGNvbG9yOiBjYWRldGJsdWU7XG4gfSAqL1xuXG4gaW1nOmhvdmVyIHtcbiAgIG9wYWNpdHk6IDAuNjtcbiAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjU1cyBlYXNlLWluLW91dDtcbiAgIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAuNTVzIGVhc2UtaW4tb3V0O1xuICAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC41NXMgZWFzZS1pbi1vdXQ7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gfVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resume/resume.component */
    "./src/app/resume/resume.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./portfolio/portfolio.component */
    "./src/app/portfolio/portfolio.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _resume_resume_component__WEBPACK_IMPORTED_MODULE_5__["ResumeComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogComponent = /*#__PURE__*/function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };

    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 2,
      vars: 0,
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "blog works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 2,
      vars: 0,
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "contact works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 20,
      vars: 0,
      consts: [[1, "home-top-box"], [1, "home"], [1, "home-heading"], [2, "padding-bottom", "10px"], [2, "font-size", "15px", "font-weight", "lighter"], [1, "link-box"], ["routerLink", "/portfolio", "title", "Click to view the portfolio", 1, "box"], ["src", "assets/next.svg", "alt", "", 2, "width", "25px"], ["routerLink", "/resume", "title", "Click to view the Resume", 1, "box", 2, "background-color", "#4f4f4f"], ["src", "assets/portfolio.svg", "alt", "", 2, "width", "25px"], [1, "home-top-box-img"], [1, "home-bottom-box"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Mayank Saxena");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Full Stack Software Developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " View Portfolio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " View Resume ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 11);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["*[_ngcontent-%COMP%] {\n  \n  width: 100%;\n  \n}\n\n.home-top-box[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #fafafa;\n  height: 40%;\n}\n\n.home-top-box-img[_ngcontent-%COMP%] {\n  align-self: center;\n  width: 80%;\n  margin: 5%;\n}\n\n.home[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  justify-content: center;\n  margin: 10%;\n  align-self: center;\n}\n\n.home-heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.home-heading[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bolder;\n}\n\n.link-box[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  \n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  \n  width: 110px;\n  background-color: #54b689;\n  color: white;\n  align-items: center;\n  cursor: pointer;\n  border-radius: 10px;\n  padding: 10px;\n  margin-right: 10px;\n  font-weight: bold;\n  font-size: 15px;\n}\n\n.box[_ngcontent-%COMP%] > img[_ngcontent-%COMP%] {\n  \n  height: 20px;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n  transition: opacity .55s ease-in-out;\n  -moz-transition: opacity .55s ease-in-out;\n  -webkit-transition: opacity .55s ease-in-out;\n  cursor: pointer;\n}\n\n.home-bottom-box[_ngcontent-%COMP%] {\n  background-color: tomato;\n  height: 60%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6Qyw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyAqL1xufVxuXG4uaG9tZS10b3AtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5ob21lLXRvcC1ib3gtaW1nIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDUlO1xufVxuXG4uaG9tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMCU7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmhvbWUtaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhvbWUtaGVhZGluZz5sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLmxpbmstYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGhlaWdodDogMTAwJTsgKi9cbn1cblxuLmJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAvKiBoZWlnaHQ6IDUwcHg7ICovXG4gIHdpZHRoOiAxMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0YjY4OTtcbiAgY29sb3I6IHdoaXRlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJveD5pbWcge1xuICAvKiB3aWR0aDogMzBweDsgKi9cbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uYm94OmhvdmVyIHtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC41NXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogb3BhY2l0eSAuNTVzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjU1cyBlYXNlLWluLW91dDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaG9tZS1ib3R0b20tYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdG9tYXRvO1xuICBoZWlnaHQ6IDYwJTtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/portfolio/portfolio.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/portfolio/portfolio.component.ts ***!
    \**************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppPortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PortfolioComponent = /*#__PURE__*/function () {
      function PortfolioComponent() {
        _classCallCheck(this, PortfolioComponent);
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)();
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      decls: 15,
      vars: 0,
      consts: [[1, "home-top-box"], [1, "home"], [1, "link-box"], ["routerLink", "/resume", "title", "Click to view the Resume", 1, "box"], ["src", "assets/next.svg", "alt", "", 2, "width", "25px"], [1, "box", 2, "background-color", "#4f4f4f"], ["src", "assets/portfolio.svg", "alt", "", 2, "width", "25px"], ["href", "https://xftchain.club", 1, "link"], [1, "home-top-box-img"], [1, "home-bottom-box"]],
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " View Resume ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "xftchain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 9);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: [".home[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    height: 50%;\n    justify-content: center;\n    margin: 10%;\n    align-self: center;\n  }\n  .link-box[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    \n  }\n  .box[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-around;\n    \n    width: 110px;\n    background-color: #54b689;\n    color: white;\n    align-items: center;\n    cursor: pointer;\n    border-radius: 10px;\n    padding: 10px;\n    margin-right: 10px;\n    font-weight: bold;\n    font-size: 15px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBR0Y7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIH1cbiAgLmxpbmstYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgfVxuXG4gIFxuLmJveCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAvKiBoZWlnaHQ6IDUwcHg7ICovXG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NGI2ODk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.component.html',
          styleUrls: ['./portfolio.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume/resume.component.ts":
  /*!********************************************!*\
    !*** ./src/app/resume/resume.component.ts ***!
    \********************************************/

  /*! exports provided: ResumeComponent */

  /***/
  function srcAppResumeResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeComponent", function () {
      return ResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ResumeComponent = /*#__PURE__*/function () {
      function ResumeComponent() {
        _classCallCheck(this, ResumeComponent);
      }

      _createClass(ResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumeComponent;
    }();

    ResumeComponent.ɵfac = function ResumeComponent_Factory(t) {
      return new (t || ResumeComponent)();
    };

    ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeComponent,
      selectors: [["app-resume"]],
      decls: 7,
      vars: 0,
      consts: [[1, "main"], [1, "download"], ["title", "Click to download the Resume", "href", "assets/resume.pdf", "download", "Mayank_Resume", 1, "box"], ["src", "assets/next.svg", "alt", "", "download", "", 2, "width", "25px"], ["src", "assets/resume.pdf", 1, "resume"]],
      template: function ResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Download Resume in PDF ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "embed", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["*[_ngcontent-%COMP%] {\n}\n\n.main[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.download[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100px;\n  width: 100%;\n  background-color: #fafafa;\n  justify-content: center;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 215px;\n  background-color: #54b689;\n  color: white;\n  align-self: center;\n  cursor: pointer;\n  border-radius: 5px;\n  padding: 10px;\n  font-weight: bolder;\n  font-size: 15px;\n  height: 20%;\n}\n\n.box[_ngcontent-%COMP%]:hover {\n  opacity: 0.6;\n  transition: opacity .55s ease-in-out;\n  -moz-transition: opacity .55s ease-in-out;\n  -webkit-transition: opacity .55s ease-in-out;\n  cursor: pointer;\n}\n\n.resume[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHlDQUF5QztFQUN6Qyw0Q0FBNEM7RUFDNUMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG59XG5cbi5tYWluIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRvd25sb2FkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMjE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NGI2ODk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLmJveDpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNTVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IG9wYWNpdHkgLjU1cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC41NXMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlc3VtZSB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbmEsXG5hOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resume',
          templateUrl: './resume.component.html',
          styleUrls: ['./resume.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/zeus/Desktop/workspace/Ethereum/mayanksaxena001.github.io/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map