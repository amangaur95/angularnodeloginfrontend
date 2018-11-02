(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _socialprofile_socialprofile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./socialprofile/socialprofile.component */ "./src/app/socialprofile/socialprofile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emailverify/emailverify.component */ "./src/app/emailverify/emailverify.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/resetpassword/resetpassword.component.ts");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'emailverify/:id', component: _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_7__["EmailverifyComponent"] },
    { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_8__["ForgotpasswordComponent"] },
    { path: 'passwordreset/:id', component: _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_9__["ResetpasswordComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_services_authguard_service__WEBPACK_IMPORTED_MODULE_10__["AuthGuardService"]] },
    { path: 'socialprofile/:token', component: _socialprofile_socialprofile_component__WEBPACK_IMPORTED_MODULE_5__["SocialprofileComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LoginModule';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _socialprofile_socialprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./socialprofile/socialprofile.component */ "./src/app/socialprofile/socialprofile.component.ts");
/* harmony import */ var _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resetpassword/resetpassword.component */ "./src/app/resetpassword/resetpassword.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./emailverify/emailverify.component */ "./src/app/emailverify/emailverify.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_authguard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/authguard.service */ "./src/app/services/authguard.service.ts");
/* harmony import */ var _services_authtokeninterceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/authtokeninterceptor.service */ "./src/app/services/authtokeninterceptor.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_19__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _socialprofile_socialprofile_component__WEBPACK_IMPORTED_MODULE_7__["SocialprofileComponent"],
                _resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_8__["ResetpasswordComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__["ForgotpasswordComponent"],
                _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_13__["EmailverifyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"]
            ],
            providers: [
                _services_authguard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuardService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _services_authtokeninterceptor_service__WEBPACK_IMPORTED_MODULE_17__["AuthtokeninterceptorService"],
                    multi: true
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/emailverify/emailverify.component.css":
/*!*******************************************************!*\
  !*** ./src/app/emailverify/emailverify.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsdmVyaWZ5L2VtYWlsdmVyaWZ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/emailverify/emailverify.component.html":
/*!********************************************************!*\
  !*** ./src/app/emailverify/emailverify.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"result_verifystatus.linkexpiremsg\">\n  <h3>{{ result_verifystatus.linkexpiremsg.msg1 }} {{ result_verifystatus.linkexpiremsg.msg2 }}</h3>\n  <p>Click on below link for new verify Link</p>\n  <a href=\"\">Resend verification link</a>\n</div>\n\n<div *ngIf=\"result_verifystatus.successverification\">\n  <h3>{{ result_verifystatus.successverification.msg1 }} {{ result_verifystatus.successverification.msg2 }}</h3>\n  <p>You can <a routerLink=\"/login\">Login</a> now</p>\n</div>\n\n<div *ngIf=\"result_verifystatus.userinvalidmsg\">\n  <h3>{{ result_verifystatus.userinvalidmsg.msg1 }} {{ result_verifystatus.userinvalidmsg.msg2 }}</h3>\n  <p>Click on below link for new verify Link</p>\n  <a href=\"\">Resend verification link</a>\n</div>"

/***/ }),

/***/ "./src/app/emailverify/emailverify.component.ts":
/*!******************************************************!*\
  !*** ./src/app/emailverify/emailverify.component.ts ***!
  \******************************************************/
/*! exports provided: EmailverifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverifyComponent", function() { return EmailverifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_emailverify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/emailverify.service */ "./src/app/services/emailverify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailverifyComponent = /** @class */ (function () {
    function EmailverifyComponent(activatedroute, emailverifyservice) {
        var _this = this;
        this.activatedroute = activatedroute;
        this.emailverifyservice = emailverifyservice;
        this.activatedroute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    EmailverifyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emailverifyservice.verifyEmail(this.id)
            .subscribe(function (result_verifystatus) {
            _this.result_verifystatus = result_verifystatus;
            console.log(result_verifystatus, "from emailverifyservice ");
        }, function (err) {
            console.log(err);
        });
    };
    EmailverifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emailverify',
            template: __webpack_require__(/*! ./emailverify.component.html */ "./src/app/emailverify/emailverify.component.html"),
            styles: [__webpack_require__(/*! ./emailverify.component.css */ "./src/app/emailverify/emailverify.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_emailverify_service__WEBPACK_IMPORTED_MODULE_2__["EmailverifyService"]])
    ], EmailverifyComponent);
    return EmailverifyComponent;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin:70px 0 0 250px;\n    padding:20px 40px 40px 40px;\n    border: 1px solid #dfdfdf;\n    max-width:600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuICAgIG1hcmdpbjo3MHB4IDAgMCAyNTBweDtcbiAgICBwYWRkaW5nOjIwcHggNDBweCA0MHB4IDQwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RmZGZkZjtcbiAgICBtYXgtd2lkdGg6NjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"box\">\n      <h2>Please Enter Your Registered Email</h2>\n      <form [formGroup]=\"angForm\" novalidate (submit)=\"submit()\">\n        <div class=\"form-group\">\n          <label class=\"col-md-4\">Email</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" #email/>\n        </div>\n        <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"angForm.controls['email'].errors.required\">\n            Email is required.\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-primary\">Next</button>\n          <!-- <button type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Next</button> -->\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_forgotpassword_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/forgotpassword.service */ "./src/app/services/forgotpassword.service.ts");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(fb, forgotpasswordservice, toasterservice) {
        this.fb = fb;
        this.forgotpasswordservice = forgotpasswordservice;
        this.toasterservice = toasterservice;
        this.createForm();
    }
    ForgotpasswordComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ForgotpasswordComponent.prototype.submit = function () {
        var _this = this;
        if (this.angForm.valid) {
            this.forgotpasswordservice.forgotPassword(this.angForm.value)
                .subscribe(function (result_forgotpasswordstatus) {
                if (result_forgotpasswordstatus.code == 200) {
                    _this.toasterservice.successToaster(result_forgotpasswordstatus.successmessage.msg1, result_forgotpasswordstatus.successmessage.msg2);
                }
                else {
                    if (result_forgotpasswordstatus.code == 403) {
                        _this.toasterservice.errorToaster(result_forgotpasswordstatus.failuremessage.msg1, result_forgotpasswordstatus.failuremessage.msg2);
                    }
                    else {
                        _this.toasterservice.errorToaster(result_forgotpasswordstatus.failuremessage.msg1, result_forgotpasswordstatus.failuremessage.msg2);
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            Object.keys(this.angForm.controls).forEach(function (formControl) {
                _this.angForm.controls[formControl].markAsDirty();
            });
        }
    };
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_forgotpassword_service__WEBPACK_IMPORTED_MODULE_2__["ForgotpasswordService"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"\">Home</a>\n      </li>\n      <!-- <li *ngIf=\"userservice.loggedIn\" class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n      </li> -->\n    </ul>\n    <ul class=\"nav navbar-nav ml-auto\">\n      <li *ngIf=\"!userservice.loggedIn\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/login\"><span class=\"glyphicon glyphicon-log-in\"></span>Login</a>\n      </li>\n      <li *ngIf=\"!userservice.loggedIn\" class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/register\"><span class=\"glyphicon glyphicon-user\"></span>Register</a>\n      </li>\n      <li *ngIf=\"userservice.loggedIn\" class=\"nav-item active\">\n        <a class=\"nav-link\" (click)=\"logout()\">Logout</a>\n      </li>\n    </ul>\n  </nav>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    HeaderComponent.prototype.logout = function () {
        this.userservice.logout();
        this.router.navigate(['login']);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n    width: 100%;\n    text-align:center;\n}\n.login_btn{\n    margin-top: 50px;\n    width: 100%;\n    text-align: center;\n}\n.signup_btn{\n    margin-top: 70px;\n    width: 100%;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0NBQ3JCO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtDQUN0QjtBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cbi5sb2dpbl9idG57XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbnVwX2J0bntcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h2>Home Component</h2>\n  <div class=\"login_btn\">\n    <button class=\"btn btn-info\" routerLink=\"/login\">Login</button>\n  </div>\n  <div class=\"signup_btn\">\n    <button class=\"btn btn-danger\" routerLink=\"/register\">Register</button>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin-top:20px;\n    padding:40px 40px 40px 40px;\n    border: 1px solid #dfdfdf;\n    max-width:600px;\n}\nh2{\n    margin-top:50px\n}\n/* #create{\n    margin-top: 7px;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEOztJQUVJIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIHBhZGRpbmc6NDBweCA0MHB4IDQwcHggNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgIG1heC13aWR0aDo2MDBweDtcbn1cbmgye1xuICAgIG1hcmdpbi10b3A6NTBweFxufVxuLyogI2NyZWF0ZXtcbiAgICBtYXJnaW4tdG9wOiA3cHg7XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <h2>Sign in</h2>\n      <p>Not a member? Please <a routerLink=\"/register\">register</a> instead.</p>\n      <div class=\"box\">\n        <form [formGroup]=\"angForm\" novalidate (submit)=\"submit()\">\n            <div class=\"form-group\">\n              <label class=\"col-md-4\">Email</label>\n              <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" #email/>\n            </div>\n            <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"angForm.controls['email'].errors.required\">\n                Email is required.\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-4\">Password</label>\n              <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" #password/>\n            </div>\n            <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\n              <div *ngIf=\"angForm.controls['password'].errors.required\">\n                Password is required.\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n              <!-- <button type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Login</button> -->\n            </div>\n            <a routerLink=\"/forgotpassword\">Forgot Password?</a>\n            <!-- <button class=\"btn btn-info\" [routerLink]=\"['/forgotpassword']\">Forgot Password</button> -->\n          </form>\n          <!-- <button (click)=\"socialSignIn('facebook')\">Sign in with Facebook</button> -->\n          <!-- <button (click)=\"socialSignIn('google')\">Sign in with Google</button> -->\n          <!-- <button (click)=\"socialSignIn('linkedin')\">Sign in with LinkedIn</button> -->\n          <button (click)=\"facebookLogin()\">Sign in with Facebook</button>\n          <button (click)=\"googleLogin()\">Sign in with Google</button>\n          <button (click)=\"twitterLogin()\">Sign in with Twitter</button>\n          <button (click)=\"linkedinLogin()\">Sign in with Linkedin</button>\n        </div><!--end of box-->\n    </div><!--end of col-md-12-->\n  </div><!--end of row-->\n</div><!--end of container-->"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(userservice, fb, router, toastr, activateRoute, loginservice) {
        this.userservice = userservice;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.activateRoute = activateRoute;
        this.loginservice = loginservice;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        if (this.angForm.valid) {
            this.loginservice.login(this.angForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                .subscribe(function (result_loginstatus) {
                if (result_loginstatus == true) {
                    _this.router.navigateByUrl('profile');
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            Object.keys(this.angForm.controls).forEach(function (formControl) {
                _this.angForm.controls[formControl].markAsDirty();
            });
        }
    };
    LoginComponent.prototype.showSuccess = function () {
        this.toastr.success('You Successfully LoggedIn', 'Toastr fun!');
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.userservice.logout();
        // this.returnUrl = this.activateRoute.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.facebookLogin = function () {
        window.location.href = "http://localhost:3000/auth/facebook";
    };
    LoginComponent.prototype.googleLogin = function () {
        window.location.href = "http://localhost:3000/auth/google";
    };
    LoginComponent.prototype.twitterLogin = function () {
        window.location.href = "http://localhost:3000/auth/twitter";
    };
    LoginComponent.prototype.linkedinLogin = function () {
        window.location.href = "http://localhost:3000/auth/linkedin";
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let person of user\">\n  <p>Welcome {{ person.name }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/profile.service */ "./src/app/services/profile.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(profileservice, userservice, router) {
        this.profileservice = profileservice;
        this.userservice = userservice;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileservice.getUserInfo()
            .subscribe(function (result_userinfo) {
            _this.user = result_userinfo.user;
            // console.log(this.user,"from ts file");
        }, function (err) {
            if (err.status == 401) {
                _this.userservice.logout();
                _this.router.navigate(['login']);
            }
            console.log(err);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.css":
/*!***********************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin-top:20px;\n    padding:40px 40px 40px 40px;\n    border: 1px solid #dfdfdf;\n    max-width:600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQixnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xuICAgIHBhZGRpbmc6NDBweCA0MHB4IDQwcHggNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgIG1heC13aWR0aDo2MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.html":
/*!************************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-md-offset-3\">\n      <div class=\"box\">\n       <form [formGroup]=\"resetPasswordForm\" novalidate (submit)=\"resetPassword()\">\n          <div *ngIf=\"resetPasswordForm.hasError('notSame') && resetPasswordForm.controls['confirm_password'].dirty\" class=\"alert alert-danger\">\n            Password Do Not Match\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" #password/>\n          </div>\n          <div *ngIf=\"resetPasswordForm.controls['password'].invalid && (resetPasswordForm.controls['password'].dirty || resetPasswordForm.controls['password'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"resetPasswordForm.controls['password'].errors.required\">\n              Password is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4\">Confirm Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"confirm_password\" formControlName=\"confirm_password\" #confirm_password/>\n          </div>\n          <div *ngIf=\"resetPasswordForm.controls['confirm_password'].invalid && (resetPasswordForm.controls['confirm_password'].dirty || resetPasswordForm.controls['confirm_password'].touched)\" class=\"alert alert-danger\">\n            <div *ngIf=\"resetPasswordForm.controls['confirm_password'].errors.required\">\n              Please Retype Password\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary\">Continue</button>\n            <!-- <button type=\"submit\" [disabled]=\"resetPasswordForm.pristine || resetPasswordForm.invalid\" class=\"btn btn-primary\">Continue</button> -->\n          </div>\n       </form> \n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/resetpassword/resetpassword.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/resetpassword/resetpassword.component.ts ***!
  \**********************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_resetpassword_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/resetpassword.service */ "./src/app/services/resetpassword.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResetpasswordComponent = /** @class */ (function () {
    function ResetpasswordComponent(fb, resetpasswordservice, activatedroute, router, toasterservice) {
        var _this = this;
        this.fb = fb;
        this.resetpasswordservice = resetpasswordservice;
        this.activatedroute = activatedroute;
        this.router = router;
        this.toasterservice = toasterservice;
        this.activatedroute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.createForm();
    }
    ResetpasswordComponent.prototype.createForm = function () {
        this.resetPasswordForm = this.fb.group({
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.checkPasswords });
    };
    ResetpasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        if (this.resetPasswordForm.valid) {
            this.resetpasswordservice.resetPassword(this.resetPasswordForm.value, this.id)
                .subscribe(function (result_resetpasswordstatus) {
                if (result_resetpasswordstatus.code == 200) {
                    _this.router.navigateByUrl('/login');
                    _this.toasterservice.successToaster(result_resetpasswordstatus.successmessage.msg1, result_resetpasswordstatus.successmessage.msg2);
                }
                else {
                    _this.toasterservice.errorToaster(result_resetpasswordstatus.failuremessage.msg1, result_resetpasswordstatus.failuremessage.msg2);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            Object.keys(this.resetPasswordForm.controls).forEach(function (formControl) {
                _this.resetPasswordForm.controls[formControl].markAsDirty();
            });
        }
    };
    ResetpasswordComponent.prototype.checkPasswords = function (group) {
        var password = group.controls.password.value;
        var confirm_password = group.controls.confirm_password.value;
        return password === confirm_password ? null : { notSame: true };
    };
    ResetpasswordComponent.prototype.ngOnInit = function () {
    };
    ResetpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resetpassword',
            template: __webpack_require__(/*! ./resetpassword.component.html */ "./src/app/resetpassword/resetpassword.component.html"),
            styles: [__webpack_require__(/*! ./resetpassword.component.css */ "./src/app/resetpassword/resetpassword.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_resetpassword_service__WEBPACK_IMPORTED_MODULE_2__["ResetpasswordService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]])
    ], ResetpasswordComponent);
    return ResetpasswordComponent;
}());



/***/ }),

/***/ "./src/app/services/authguard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/authguard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(userservice, router) {
        this.userservice = userservice;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.userservice.isAuth()) {
            return true;
        }
        else {
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/authtokeninterceptor.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/authtokeninterceptor.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthtokeninterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthtokeninterceptorService", function() { return AuthtokeninterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthtokeninterceptorService = /** @class */ (function () {
    function AuthtokeninterceptorService(userservice) {
        this.userservice = userservice;
    }
    AuthtokeninterceptorService.prototype.intercept = function (request, next) {
        var token = localStorage.getItem('token');
        if (!token) {
            var sociallogintoken = localStorage.getItem('sociallogintoken');
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + sociallogintoken
                }
            });
            return next.handle(request);
        }
        else {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
            return next.handle(request);
        }
    };
    AuthtokeninterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AuthtokeninterceptorService);
    return AuthtokeninterceptorService;
}());



/***/ }),

/***/ "./src/app/services/emailverify.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/emailverify.service.ts ***!
  \*************************************************/
/*! exports provided: EmailverifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverifyService", function() { return EmailverifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmailverifyService = /** @class */ (function () {
    function EmailverifyService(http) {
        this.http = http;
        this.uri = "http://localhost:3000/zom";
    }
    EmailverifyService.prototype.verifyEmail = function (id) {
        return this.http.get(this.uri + "/verify/" + id);
    };
    EmailverifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailverifyService);
    return EmailverifyService;
}());



/***/ }),

/***/ "./src/app/services/forgotpassword.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/forgotpassword.service.ts ***!
  \****************************************************/
/*! exports provided: ForgotpasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordService", function() { return ForgotpasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ForgotpasswordService = /** @class */ (function () {
    function ForgotpasswordService(http) {
        this.http = http;
        this.uri = "http://localhost:3000/zom";
    }
    ForgotpasswordService.prototype.forgotPassword = function (email) {
        return this.http.post(this.uri + "/forgotpassword", email);
    };
    ForgotpasswordService.prototype.setPassword = function (email) {
        return this.http.post(this.uri + "/forgotpassword", { email: email });
    };
    ForgotpasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ForgotpasswordService);
    return ForgotpasswordService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toaster.service */ "./src/app/services/toaster.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http, toasterservice) {
        this.http = http;
        this.toasterservice = toasterservice;
        this.uri = "http://localhost:3000/zom";
    }
    LoginService.prototype.login = function (user_info) {
        var _this = this;
        return this.http.post(this.uri + "/signin", user_info)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (result.code == 200) {
                localStorage.setItem('token', result.token);
                // localStorage.setItem('user_id',result.user._id);
                _this.toasterservice.successToaster(result.msg.str1, result.msg.str2);
                return true;
            }
            else {
                _this.toasterservice.errorToaster(result.msg.str1, result.msg.str2);
                return false;
            }
        }));
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _toaster_service__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/profile.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
        this.uri = "http://localhost:3000/zom";
    }
    ProfileService.prototype.getUserInfo = function () {
        return this.http.get(this.uri + "/getprofile");
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/services/resetpassword.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/resetpassword.service.ts ***!
  \***************************************************/
/*! exports provided: ResetpasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordService", function() { return ResetpasswordService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetpasswordService = /** @class */ (function () {
    function ResetpasswordService(http) {
        this.http = http;
        this.uri = "http://localhost:3000/zom";
    }
    ResetpasswordService.prototype.resetPassword = function (details, id) {
        var obj = {
            details: details,
            id: id
        };
        return this.http.post(this.uri + "/resetpassword", obj);
    };
    ResetpasswordService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ResetpasswordService);
    return ResetpasswordService;
}());



/***/ }),

/***/ "./src/app/services/signup.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/signup.service.ts ***!
  \********************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
        this.uri = "http://localhost:3000/zom";
    }
    SignupService.prototype.addUser = function (user_details) {
        return this.http.post(this.uri + "/signup", user_details);
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/services/sociallogin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/sociallogin.service.ts ***!
  \*************************************************/
/*! exports provided: SocialloginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialloginService", function() { return SocialloginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocialloginService = /** @class */ (function () {
    // url = "http://localhost:3000/zom";
    function SocialloginService(http) {
        this.http = http;
        this.uri = "http://localhost:3000/zom";
    }
    SocialloginService.prototype.socialLogin = function (user) {
        return this.http.post(this.uri + "/sociallogin", user);
    };
    SocialloginService.prototype.getSocialProfile = function (logintoken) {
        return this.http.post(this.uri + "/socialprofile", { logintoken: logintoken });
    };
    SocialloginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocialloginService);
    return SocialloginService;
}());



/***/ }),

/***/ "./src/app/services/toaster.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/toaster.service.ts ***!
  \*********************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterService = /** @class */ (function () {
    function ToasterService(toasterservice) {
        this.toasterservice = toasterservice;
    }
    ToasterService.prototype.successToaster = function (str1, str2) {
        this.toasterservice.success(str1, str2);
    };
    ToasterService.prototype.errorToaster = function (msg1, msg2) {
        this.toasterservice.error(msg1, msg2);
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Router } from '@angular/router'
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.uri = "http:localhost:3000/zom";
    }
    UserService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id');
        localStorage.removeItem('sociallogintoken');
    };
    Object.defineProperty(UserService.prototype, "loggedIn", {
        get: function () {
            return ((localStorage.getItem('token') !== null) || (localStorage.getItem('sociallogintoken') !== null));
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.isAuth = function () {
        try {
            if ((localStorage.getItem('token')) || (localStorage.getItem('sociallogintoken'))) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            return false;
        }
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n    margin-top:50px;\n    padding:40px 40px 40px 40px;\n    border: 1px solid #dfdfdf;\n    max-width:600px;\n}\n#have_account{\n    font-weight: bold;\n}\n#login_link{\n    font-weight: bold;\n}\n#create{\n    margin-top: 7px;\n}\n#login_btn{\n    margin: 20px 0 0 45px;\n}\n#tag{\nmargin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxrQkFBa0I7Q0FDckI7QUFDRDtJQUNJLGtCQUFrQjtDQUNyQjtBQUNEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekI7QUFDRDtBQUNBLGlCQUFpQjtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3h7XG4gICAgbWFyZ2luLXRvcDo1MHB4O1xuICAgIHBhZGRpbmc6NDBweCA0MHB4IDQwcHggNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xuICAgIG1heC13aWR0aDo2MDBweDtcbn1cbiNoYXZlX2FjY291bnR7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jbG9naW5fbGlua3tcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiNjcmVhdGV7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xufVxuI2xvZ2luX2J0bntcbiAgICBtYXJnaW46IDIwcHggMCAwIDQ1cHg7XG59XG4jdGFne1xubWFyZ2luLXRvcDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-dialog header=\"Account is active through {{ provider_name }}\" [(visible)]=\"display\" [modal]=\"true\" [responsive]=\"true\" [width]=\"350\" [minWidth]=\"200\" [minY]=\"70\" \n        [maximizable]=\"true\" [baseZIndex]=\"10000\">\n  <div *ngIf=\"facebook_provider\">\n    <button id=\"login_btn\" class=\"btn btn-primary\" (click)=\"facebookLogin()\">LOG IN WITH {{ facebook_provider | uppercase }}</button>\n  </div>\n  <div *ngIf=\"google_provider\">\n    <button id=\"login_btn\" class=\"btn btn-danger\" (click)=\"googleLogin()\">LOG IN WITH {{ google_provider | uppercase }}</button>\n  </div>\n  <div *ngIf=\"linkedin_provider\">\n    <button id=\"login_btn\" class=\"btn btn-danger\" (click)=\"linkedinLogin()\">LOG IN WITH {{ linkedin_provider | uppercase }}</button>\n  </div>\n  <div *ngIf=\"twitter_provider\">\n    <button id=\"login_btn\" class=\"btn btn-danger\" (click)=\"twitterLogin()\">LOG IN WITH {{ twitter_provider | uppercase }}</button>\n  </div>\n  <p id=\"tag\">If you wish to set a new password, click the button below and we'll mail you a password reset link</p>\n  <p-footer>\n    <button class=\"btn btn-danger\" (click)=\"setPassword()\">Set Password</button>\n  </p-footer>\n</p-dialog>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"box\">\n              <form [formGroup]=\"angForm\" novalidate (submit)=\"addUser()\">\n                <div class=\"form-group\">\n                  <label class=\"col-md-4\">Name</label>\n                  <input type=\"text\" class=\"form-control\" name=\"name\" formControlName=\"name\" #name/>\n                </div>\n                <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['name'].errors.required\">\n                    Name is required.\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-4\">User Name</label>\n                  <input type=\"text\" class=\"form-control\" name=\"username\" formControlName=\"username\" #username/>\n                </div>\n                <div *ngIf=\"angForm.controls['username'].invalid && (angForm.controls['username'].dirty || angForm.controls['username'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['username'].errors.required\">\n                    User Name is required.\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-4\">Email</label>\n                  <input type=\"email\" class=\"form-control\" name=\"email\" formControlName=\"email\" #email/>\n                </div>\n                <div *ngIf=\"angForm.controls['email'].invalid && (angForm.controls['email'].dirty || angForm.controls['email'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['email'].errors.required\">\n                    Email is required.\n                  </div>\n                  <div *ngIf=\"angForm.controls['email'].errors.email\">\n                    Please Enter valid email.\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-4\">Password</label>\n                  <input type=\"password\" class=\"form-control\" name=\"password\" formControlName=\"password\" #password/>\n                </div>\n                <div *ngIf=\"angForm.controls['password'].invalid && (angForm.controls['password'].dirty || angForm.controls['password'].touched)\" class=\"alert alert-danger\">\n                  <div *ngIf=\"angForm.controls['password'].errors.required\">\n                    Password is required.\n                  </div>\n                  <div *ngIf=\"angForm.controls['password'].hasError('minlength')\">\n                    Password should be minimum of 6 characters\n                  </div>\n                  <div *ngIf=\"angForm.controls['password'].hasError('maxlength')\">\n                    Password should be maximum 15 characters.\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <!-- <button type=\"submit\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">SignUp</button> -->\n                  <button type=\"submit\" class=\"btn btn-primary\">SignUp</button>\n                </div>\n                <p id=\"have_account\">Already Have an Account<a routerLink=\"/login\"><span id=\"login_link\"> Login!!</span></a></p>\n              </form>\n            </div><!--end of box-->\n      </div><!--end of col-md-12-->\n    </div><!--end of row-->\n  </div><!--end of container-->"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toaster.service */ "./src/app/services/toaster.service.ts");
/* harmony import */ var _services_signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/signup.service */ "./src/app/services/signup.service.ts");
/* harmony import */ var _services_forgotpassword_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/forgotpassword.service */ "./src/app/services/forgotpassword.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupComponent = /** @class */ (function () {
    function SignupComponent(userservice, fb, router, toasterService, signupservice, forgotpasswordservice) {
        this.userservice = userservice;
        this.fb = fb;
        this.router = router;
        this.toasterService = toasterService;
        this.signupservice = signupservice;
        this.forgotpasswordservice = forgotpasswordservice;
        this.display = false;
        this.createForm();
    }
    SignupComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)])]
        });
    };
    SignupComponent.prototype.addUser = function () {
        var _this = this;
        if (this.angForm.valid) {
            console.log(this.angForm.value);
            this.signupservice.addUser(this.angForm.value)
                .subscribe(function (result) {
                console.log(result);
                if (result.code == 200) {
                    _this.router.navigateByUrl('/login');
                    _this.toasterService.successToaster(result.msg.str1, result.msg.str2);
                }
                else {
                    if (result.exists_message) {
                        _this.exists_message = result;
                        _this.provider_name = _this.exists_message.provider_name;
                        console.log(_this.exists_message.provider_name);
                        for (var i = 0; i < _this.provider_name.length; i++) {
                            if (_this.provider_name[i] == 'facebook') {
                                _this.facebook_provider = _this.provider_name[i];
                            }
                            if (_this.provider_name[i] == 'google') {
                                _this.google_provider = _this.provider_name[i];
                            }
                            if (_this.provider_name[i] == 'linkedin') {
                                _this.linkedin_provider = _this.provider_name[i];
                            }
                            if (_this.provider_name[i] == 'twitter') {
                                _this.twitter_provider = _this.provider_name[i];
                            }
                        }
                        _this.email = _this.exists_message.email;
                        _this.display = true;
                    }
                    else {
                        _this.toasterService.errorToaster(result.msg.msg1, result.msg.msg2);
                    }
                }
            });
        }
        else {
            Object.keys(this.angForm.controls).forEach(function (formControl) {
                _this.angForm.controls[formControl].markAsDirty();
            });
        }
    };
    SignupComponent.prototype.setPassword = function () {
        var _this = this;
        console.log(this.email, "from set password function");
        this.forgotpasswordservice.setPassword(this.email)
            .subscribe(function (password_status) {
            if (password_status.code == 200) {
                _this.display = false;
                _this.toasterService.successToaster(password_status.successmessage.msg1, password_status.successmessage.msg2);
            }
            else {
                _this.toasterService.errorToaster(password_status.failuremessage.msg1, password_status.failuremessage.msg2);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"],
            _services_signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"],
            _services_forgotpassword_service__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/socialprofile/socialprofile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/socialprofile/socialprofile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbHByb2ZpbGUvc29jaWFscHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/socialprofile/socialprofile.component.html":
/*!************************************************************!*\
  !*** ./src/app/socialprofile/socialprofile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let detail of user_details\">\n  <h2>Welcome {{ detail.name }}</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/socialprofile/socialprofile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/socialprofile/socialprofile.component.ts ***!
  \**********************************************************/
/*! exports provided: SocialprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialprofileComponent", function() { return SocialprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sociallogin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/sociallogin.service */ "./src/app/services/sociallogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialprofileComponent = /** @class */ (function () {
    function SocialprofileComponent(socialloginservice, activatedroute) {
        var _this = this;
        this.socialloginservice = socialloginservice;
        this.activatedroute = activatedroute;
        this.activatedroute.params.subscribe(function (params) {
            _this.token = params['token'];
            console.log(_this.token);
            localStorage.setItem('token', _this.token);
        });
    }
    SocialprofileComponent.prototype.ngOnInit = function () {
        this.getSocialProfile(this.token);
        // this.socialProfile(localStorage.getItem('sociallogintoken'));
    };
    SocialprofileComponent.prototype.getSocialProfile = function (token) {
        var _this = this;
        this.socialloginservice.getSocialProfile(token)
            .subscribe(function (result_profile) {
            console.log(result_profile, "from ts");
            _this.user_details = result_profile.user;
        });
    };
    SocialprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-socialprofile',
            template: __webpack_require__(/*! ./socialprofile.component.html */ "./src/app/socialprofile/socialprofile.component.html"),
            styles: [__webpack_require__(/*! ./socialprofile.component.css */ "./src/app/socialprofile/socialprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sociallogin_service__WEBPACK_IMPORTED_MODULE_1__["SocialloginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SocialprofileComponent);
    return SocialprofileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/amangaur/Desktop/loginmean/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map