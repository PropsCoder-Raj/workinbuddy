(self["webpackChunkworkinbuddy"] = self["webpackChunkworkinbuddy"] || []).push([["src_app_filter_filter_module_ts"],{

/***/ 1777:
/*!*************************************************!*\
  !*** ./src/app/filter/filter-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageRoutingModule": () => (/* binding */ FilterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter.page */ 432);




const routes = [
    {
        path: '',
        component: _filter_page__WEBPACK_IMPORTED_MODULE_0__.FilterPage
    }
];
let FilterPageRoutingModule = class FilterPageRoutingModule {
};
FilterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FilterPageRoutingModule);



/***/ }),

/***/ 7655:
/*!*****************************************!*\
  !*** ./src/app/filter/filter.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPageModule": () => (/* binding */ FilterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-routing.module */ 1777);
/* harmony import */ var _filter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page */ 432);







let FilterPageModule = class FilterPageModule {
};
FilterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _filter_routing_module__WEBPACK_IMPORTED_MODULE_0__.FilterPageRoutingModule
        ],
        declarations: [_filter_page__WEBPACK_IMPORTED_MODULE_1__.FilterPage]
    })
], FilterPageModule);



/***/ }),

/***/ 432:
/*!***************************************!*\
  !*** ./src/app/filter/filter.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPage": () => (/* binding */ FilterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./filter.page.html */ 1686);
/* harmony import */ var _filter_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.page.scss */ 2957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FilterPage = class FilterPage {
    constructor() { }
    ngOnInit() {
    }
};
FilterPage.ctorParameters = () => [];
FilterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-filter',
        template: _raw_loader_filter_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_filter_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FilterPage);



/***/ }),

/***/ 2957:
/*!*****************************************!*\
  !*** ./src/app/filter/filter.page.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header ion-toolbar ion-buttons {\n  margin-right: 10px;\n  border-radius: 50px;\n  background: #FFFFFF;\n  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);\n}\nion-header ion-toolbar ion-icon {\n  font-size: x-large;\n  font-weight: bold;\n}\nion-header ion-toolbar ion-text {\n  padding-left: 15px;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: x-large;\n}\nion-content .contain {\n  padding: 1px 10px;\n}\nion-content h6 {\n  text-transform: uppercase;\n  font-weight: bold;\n  text-align: left;\n  padding: unset;\n  color: #50555C;\n}\nion-content .white-btn {\n  padding: 0 15px;\n  height: 40px;\n  background: #fff;\n  border: 1px solid #646464;\n  box-sizing: border-box;\n  border-radius: 10px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  letter-spacing: -0.3px;\n  margin: 4px 5px;\n  color: #000000;\n}\nion-content .active {\n  background: #FF6000;\n  color: #fff;\n  border: solid 1px #fff;\n}\nion-item {\n  --background:unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQUZOO0FBS0k7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBSE47QUFNSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSk47QUFVRTtFQUNFLGlCQUFBO0FBUEo7QUFVRTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBUko7QUFXRTtFQUNNLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQVpSO0FBZ0JJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFkUjtBQWtCQTtFQUNFLGtCQUFBO0FBZkYiLCJmaWxlIjoiZmlsdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gIGlvbi10b29sYmFyIHtcclxuXHJcbiAgICBpb24tYnV0dG9uc3tcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLXRleHQge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLmNvbnRhaW4ge1xyXG4gICAgcGFkZGluZzogMXB4IDEwcHg7XHJcbiAgfVxyXG5cclxuICBoNiB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogdW5zZXQ7XHJcbiAgICBjb2xvcjogIzUwNTU1QztcclxuICB9XHJcblxyXG4gIC53aGl0ZS1idG57XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjQ2NDY0O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcclxuICAgICAgICBtYXJnaW46IDRweCA1cHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgICAuYWN0aXZle1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRjYwMDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuICAgIH1cclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgLS1iYWNrZ3JvdW5kOnVuc2V0O1xyXG59Il19 */");

/***/ }),

/***/ 1686:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter/filter.page.html ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"ion-text-left\">\r\n      <ion-text>Filter</ion-text>\r\n    </div>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [routerLink]=\"['/search']\" color=\"orange\" mode=\"ios\">\r\n        <ion-icon name=\"close-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <div class=\"contain\">\r\n          <h6>Gender</h6>\r\n          <button class=\"white-btn\">Men</button>\r\n          <button class=\"white-btn\">Female</button>\r\n          <button class=\"white-btn active\">Unisex</button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <div class=\"contain\">\r\n          <h6>AMENITIES</h6>\r\n          <button class=\"white-btn active\">Parking</button>\r\n          <button class=\"white-btn\">AC</button>\r\n          <button class=\"white-btn\">Wifi</button>\r\n          <button class=\"white-btn\">Fridge</button>\r\n          <button class=\"white-btn active\">CCTV</button>\r\n          <button class=\"white-btn active\">HouseKepping</button>\r\n          <button class=\"white-btn\">Security</button>\r\n          <button class=\"white-btn active\">Lift</button>\r\n          <button class=\"white-btn active\">Drinking Water</button>\r\n          <button class=\"white-btn active\">Power Backup</button>\r\n          <button class=\"white-btn\">Snacks</button>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <div class=\"contain\">\r\n          <h6>Newly Luanched</h6>\r\n          <ion-toggle color=\"orange\" mode=\"ios\"></ion-toggle>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <div class=\"contain\">\r\n          <h6>Ratings Above</h6>\r\n          <ion-list>\r\n            <ion-radio-group>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                </ion-label>\r\n                <ion-radio color=\"orange\" mode=\"md\" slot=\"end\" value=\"2\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                </ion-label>\r\n                <ion-radio color=\"orange\" mode=\"md\" slot=\"end\" value=\"3\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                </ion-label>\r\n                <ion-radio color=\"orange\" mode=\"md\" slot=\"end\" value=\"4\"></ion-radio>\r\n              </ion-item>\r\n\r\n              <ion-item lines=\"none\">\r\n                <ion-label>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                  <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                </ion-label>\r\n                <ion-radio color=\"orange\" mode=\"md\" slot=\"end\" value=\"5\"></ion-radio>\r\n              </ion-item>\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <div class=\"contain\">\r\n          <h6>Pricing Range</h6>\r\n          <ion-item lines=\"none\">\r\n            <ion-range id=\"dual-range\" color=\"orange\" dual-knobs pin min=\"7000\" max=\"20000\">\r\n            </ion-range>\r\n          </ion-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_filter_filter_module_ts.js.map