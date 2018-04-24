webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 700px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <app-top-nav></app-top-nav>\n    <app-comments-top-bar></app-comments-top-bar>\n    <app-create-post></app-create-post>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var top_nav_component_1 = __webpack_require__("./src/app/top-nav/top-nav.component.ts");
var comments_top_bar_component_1 = __webpack_require__("./src/app/comments-top-bar/comments-top-bar.component.ts");
var create_post_component_1 = __webpack_require__("./src/app/create-post/create-post.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                top_nav_component_1.TopNavComponent,
                comments_top_bar_component_1.CommentsTopBarComponent,
                create_post_component_1.CreatePostComponent
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/comments-top-bar/comments-top-bar.component.css":
/***/ (function(module, exports) {

module.exports = ".material-icons.md-18 { font-size: 18px; }\n\na { \n    text-decoration: none !important; \n    color: var(--secondary) !important;\n}\n\na:hover { \n    color: black !important;\n}\n\n.dropdown-item:hover {\n    background-color: var(--primary) !important;\n    color: var(--light) !important;\n}"

/***/ }),

/***/ "./src/app/comments-top-bar/comments-top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-inline\">\n  <li class=\"list-inline-item mx-3\">\n    <a class=\"comments-top-bar-link\" href=\"#\">\n      <span *ngIf=\"!favorited\">\n        <i class=\"material-icons md-18 align-middle text-danger\">favorite_border</i>\n        <small class=\"font-weight-bold\">Favorite</small>\n      </span>\n      <span *ngIf=\"favorited\">\n        <i class=\"material-icons md-18 align-middle text-danger\">favorite</i>\n        <small class=\"font-weight-bold\">Favorited</small>\n      </span>\n      <span class=\"badge badge-secondary align-text-bottom\">{{ favorites }}</span>\n    </a>\n  </li>\n  <li class=\"list-inline-item mx-3\">\n    <a class=\"coments-top-bar-link\" href=\"#\">\n      <i class=\"material-icons md-18 align-middle\">share</i>\n      <small class=\"font-weight-bold\">Share</small>\n    </a>\n  </li>\n  <li class=\"list-inline-item ml-2 mr-3 float-right dropdown\">\n    <a class=\"dropdown-toggle top-nav-link\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <small>Sort By {{ selected }}</small>\n    </a>\n    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n      <a class=\"dropdown-item\" href=\"#\">Best</a>\n      <a class=\"dropdown-item\" href=\"#\">Newest</a>\n      <a class=\"dropdown-item\" href=\"#\">Oldest</a>\n    </div>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/comments-top-bar/comments-top-bar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CommentsTopBarComponent = /** @class */ (function () {
    function CommentsTopBarComponent() {
    }
    CommentsTopBarComponent.prototype.ngOnInit = function () {
        this.favorited = true;
        this.favorites = 52;
        this.selected = "Best";
    };
    CommentsTopBarComponent = __decorate([
        core_1.Component({
            selector: 'app-comments-top-bar',
            template: __webpack_require__("./src/app/comments-top-bar/comments-top-bar.component.html"),
            styles: [__webpack_require__("./src/app/comments-top-bar/comments-top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentsTopBarComponent);
    return CommentsTopBarComponent;
}());
exports.CommentsTopBarComponent = CommentsTopBarComponent;


/***/ }),

/***/ "./src/app/create-post/create-post.component.css":
/***/ (function(module, exports) {

module.exports = ".material-icons.md-75 { font-size: 75px; }\n\ntextarea:hover, \ntextarea:active, \ntextarea:focus,\nbutton:active,\nbutton:focus\n{\n    outline: none;\n    border: 1px solid var(--secondary) !important;\n    -webkit-box-shadow: none !important;\n    box-shadow: none !important;\n}\n\ntextarea {\n    resize: none;\n}\n\nimg {\n    padding: 0;\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n}\n\n.btn.submit {\n    font-weight: bold;\n}"

/***/ }),

/***/ "./src/app/create-post/create-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row mx-1\">\n  <img *ngIf=\"loggedIn\" src=\"../assets/profile-pic.png\" class=\"rounded img-fluid float-left ml-4 mr-2 col-1 align-top\" alt=\"A profile picture.\">\n  <img *ngIf=\"!loggedIn\" src=\"../assets/profile-pic.png\" class=\"rounded img-fluid float-left ml-4 mr-2 col-1 align-top\" alt=\"A default profile picture.\">\n  <div class=\"col-10\">\n    <textarea class=\"form-control col-12\" placeholder=\"Leave a comment...\" rows=\"3\"></textarea>\n    <button *ngIf=\"loggedIn\" type=\"submit\" class=\"btn submit btn-danger mt-1 float-right\">SUBMIT</button>\n    <div *ngIf=\"!loggedIn\" class=\"mt-1 float-right\">\n      <p><small class=\"text-secondary\">Log in to Post:</small></p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/create-post/create-post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent() {
    }
    CreatePostComponent.prototype.ngOnInit = function () {
        this.loggedIn = false;
    };
    CreatePostComponent = __decorate([
        core_1.Component({
            selector: 'app-create-post',
            template: __webpack_require__("./src/app/create-post/create-post.component.html"),
            styles: [__webpack_require__("./src/app/create-post/create-post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreatePostComponent);
    return CreatePostComponent;
}());
exports.CreatePostComponent = CreatePostComponent;


/***/ }),

/***/ "./src/app/top-nav/top-nav.component.css":
/***/ (function(module, exports) {

module.exports = "a { \n    text-decoration: none !important; \n    color: var(--secondary) !important;\n}\n\na:hover { \n    color: black !important;\n}\n\n.material-icons.md-24 { font-size: 24px; }\n\n.dropdown-item:hover {\n    background-color: var(--primary) !important;\n    color: var(--light) !important;\n}\n\n.border-bottom-1 {\n    border-bottom: solid 3px var(--danger);\n}"

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-inline mb-1\">\n  <li class=\"list-inline-item mx-3 mt-2 border-danger font-weight-bold border-bottom-1\">\n    {{ numberOfComments }} Comments\n  </li>\n  <li class=\"list-inline-item mx-3 mt-2\">\n    <a href=\"#\">{{ forumName }}</a>\n  </li>\n  <li class=\"list-inline-item ml-2 mr-3 mt-2 float-right dropdown\">\n    <div *ngIf=\"!loggedIn\">\n      <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Login\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <a class=\"dropdown-item\" href=\"#\">Facebook</a>\n        <a class=\"dropdown-item\" href=\"#\">Twitter</a>\n        <a class=\"dropdown-item\" href=\"#\">Google</a>\n      </div>\n    </div>\n    <div *ngIf=\"loggedIn\">\n      <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          {{ userName }}\n      </a>\n      <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n        <a class=\"dropdown-item\" href=\"#\">Profile</a>\n        <a class=\"dropdown-item\" href=\"#\">Settings</a>\n        <a class=\"dropdown-item\" href=\"#\">Logout</a>\n      </div>\n    </div>\n  </li>\n  <li class=\"list-inline-item mt-2 float-right\">\n    <a id=\"top-nav-notifications-link\" href=\"#\">\n      <i *ngIf=\"notifications\" class=\"material-icons md-24 align-middle text-danger\">chat</i>\n      <i *ngIf=\"!notifications\" class=\"material-icons md-24 align-middle\">chat_bubble_outline</i>\n    </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TopNavComponent = /** @class */ (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.ngOnInit = function () {
        this.numberOfComments = 25;
        this.forumName = "Blogspot";
        this.loggedIn = true;
        this.notifications = false;
        this.userName = "Scott Burnette";
    };
    TopNavComponent = __decorate([
        core_1.Component({
            selector: 'app-top-nav',
            template: __webpack_require__("./src/app/top-nav/top-nav.component.html"),
            styles: [__webpack_require__("./src/app/top-nav/top-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopNavComponent);
    return TopNavComponent;
}());
exports.TopNavComponent = TopNavComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map