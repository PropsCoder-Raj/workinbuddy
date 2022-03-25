(self["webpackChunkworkinbuddy"] = self["webpackChunkworkinbuddy"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 222:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Facebook": () => (/* binding */ Facebook)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);




var Facebook = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Facebook, _super);
    function Facebook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EVENTS = {
            EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
            EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
            EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
            EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
            EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
            EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
            EVENT_NAME_SEARCHED: 'fb_mobile_search',
            EVENT_NAME_RATED: 'fb_mobile_rate',
            EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
            EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
            EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
            EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
            EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
            EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
            EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
            EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
            EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
            EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
            EVENT_PARAM_CURRENCY: 'fb_currency',
            EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
            EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
            EVENT_PARAM_CONTENT_ID: 'fb_content_id',
            EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
            EVENT_PARAM_SUCCESS: 'fb_success',
            EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
            EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
            EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
            EVENT_PARAM_LEVEL: 'fb_level',
            EVENT_PARAM_DESCRIPTION: 'fb_description',
            EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
            EVENT_PARAM_VALUE_YES: '1',
            EVENT_PARAM_VALUE_NO: '0',
        };
        return _this;
    }
    Facebook.prototype.getApplicationId = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getApplicationId", {}, arguments); };
    Facebook.prototype.setApplicationId = function (id) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setApplicationId", {}, arguments); };
    Facebook.prototype.getApplicationName = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getApplicationName", {}, arguments); };
    Facebook.prototype.setApplicationName = function (name) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setApplicationName", {}, arguments); };
    Facebook.prototype.login = function (permissions) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "login", {}, arguments); };
    Facebook.prototype.loginWithLimitedTracking = function (permissions) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "loginWithLimitedTracking", {}, arguments); };
    Facebook.prototype.checkHasCorrectPermissions = function (permissions) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "checkHasCorrectPermissions", {}, arguments); };
    Facebook.prototype.isDataAccessExpired = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isDataAccessExpired", {}, arguments); };
    Facebook.prototype.reauthorizeDataAccess = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "reauthorizeDataAccess", {}, arguments); };
    Facebook.prototype.logout = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "logout", {}, arguments); };
    Facebook.prototype.getLoginStatus = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getLoginStatus", {}, arguments); };
    Facebook.prototype.getAccessToken = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getAccessToken", {}, arguments); };
    Facebook.prototype.getCurrentProfile = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getCurrentProfile", {}, arguments); };
    Facebook.prototype.showDialog = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showDialog", {}, arguments); };
    Facebook.prototype.api = function (requestPath, permissions, httpMethod) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "api", {}, arguments); };
    Facebook.prototype.logEvent = function (name, params, valueToSum) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "logEvent", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    Facebook.prototype.setAutoLogAppEventsEnabled = function (enabled) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setAutoLogAppEventsEnabled", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Facebook.prototype.setAdvertiserIDCollectionEnabled = function (enabled) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setAdvertiserIDCollectionEnabled", {}, arguments); };
    Facebook.prototype.setAdvertiserTrackingEnabled = function (enabled) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setAdvertiserTrackingEnabled", {}, arguments); };
    Facebook.prototype.logPurchase = function (value, currency, params) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "logPurchase", {}, arguments); };
    Facebook.prototype.getDeferredApplink = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "getDeferredApplink", {}, arguments); };
    Facebook.prototype.activateApp = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "activateApp", {}, arguments); };
    Facebook.pluginName = "Facebook";
    Facebook.plugin = "cordova-plugin-facebook-connect";
    Facebook.pluginRef = "facebookConnectPlugin";
    Facebook.repo = "https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect";
    Facebook.install = "ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\"";
    Facebook.installVariables = ["APP_ID", "APP_NAME"];
    Facebook.platforms = ["Android", "iOS", "Browser"];
Facebook.ɵfac = /*@__PURE__*/ function () { var ɵFacebook_BaseFactory; return function Facebook_Factory(t) { return (ɵFacebook_BaseFactory || (ɵFacebook_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Facebook)))(t || Facebook); }; }();
Facebook.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Facebook, factory: function (t) { return Facebook.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Facebook, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return Facebook;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmFjZWJvb2svbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBRVEsSUE4R3NCLDRCQUFpQjtBQUFDO0FBRXJDO0FBQ3NCLFFBRi9CLFlBQU0sR0FBRztBQUNYLFlBQUksd0JBQXdCLEVBQUUsd0JBQXdCO0FBQ3RELFlBQUksMEJBQTBCLEVBQUUsMEJBQTBCO0FBQzFELFlBQUksZ0NBQWdDLEVBQUUsNkJBQTZCO0FBQ25FLFlBQUksZ0NBQWdDLEVBQUUsaUNBQWlDO0FBQ3ZFLFlBQUksaUNBQWlDLEVBQUUsaUNBQWlDO0FBQ3hFLFlBQUkseUJBQXlCLEVBQUUsd0JBQXdCO0FBQ3ZELFlBQUksbUJBQW1CLEVBQUUsa0JBQWtCO0FBQzNDLFlBQUksZ0JBQWdCLEVBQUUsZ0JBQWdCO0FBQ3RDLFlBQUksNkJBQTZCLEVBQUUsK0JBQStCO0FBQ2xFLFlBQUksOEJBQThCLEVBQUUsNkJBQTZCO0FBQ2pFLFlBQUksd0JBQXdCLEVBQUUsdUJBQXVCO0FBQ3JELFlBQUksNEJBQTRCLEVBQUUsMkJBQTJCO0FBQzdELFlBQUksNkJBQTZCLEVBQUUsOEJBQThCO0FBQ2pFLFlBQUksNkJBQTZCLEVBQUUsNEJBQTRCO0FBQy9ELFlBQUksb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzlDLFlBQUkseUJBQXlCLEVBQUUsMEJBQTBCO0FBQ3pELFlBQUksK0JBQStCLEVBQUUsZ0NBQWdDO0FBQ3JFLFlBQUksd0JBQXdCLEVBQUUseUJBQXlCO0FBQ3ZELFlBQUksb0JBQW9CLEVBQUUsYUFBYTtBQUN2QyxZQUFJLCtCQUErQixFQUFFLHdCQUF3QjtBQUM3RCxZQUFJLHdCQUF3QixFQUFFLGlCQUFpQjtBQUMvQyxZQUFJLHNCQUFzQixFQUFFLGVBQWU7QUFDM0MsWUFBSSx5QkFBeUIsRUFBRSxrQkFBa0I7QUFDakQsWUFBSSxtQkFBbUIsRUFBRSxZQUFZO0FBQ3JDLFlBQUksNEJBQTRCLEVBQUUscUJBQXFCO0FBQ3ZELFlBQUksa0NBQWtDLEVBQUUsMkJBQTJCO0FBQ25FLFlBQUkscUJBQXFCLEVBQUUsY0FBYztBQUN6QyxZQUFJLGlCQUFpQixFQUFFLFVBQVU7QUFDakMsWUFBSSx1QkFBdUIsRUFBRSxnQkFBZ0I7QUFDN0MsWUFBSSw4QkFBOEIsRUFBRSx5QkFBeUI7QUFDN0QsWUFBSSxxQkFBcUIsRUFBRSxHQUFHO0FBQzlCLFlBQUksb0JBQW9CLEVBQUUsR0FBRztBQUM3QixTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFLbkIsbUNBQWdCO0FBTWQsSUFJRixtQ0FBZ0IsYUFBQyxFQUFVO0FBS1AsSUFLcEIscUNBQWtCO0FBTWhCLElBSUYscUNBQWtCLGFBQUMsSUFBWTtBQUtULElBbUJ0Qix3QkFBSyxhQUFDLFdBQXFCO0FBSTdCLElBbUJFLDJDQUF3QixhQUFDLFdBQXFCO0FBS25DLElBTVgsNkNBQTBCLGFBQUMsV0FBcUI7QUFLcEIsSUFLNUIsc0NBQW1CO0FBS2MsSUFLakMsd0NBQXFCO0FBS0QsSUFNcEIseUJBQU07QUFLaUIsSUF5QnZCLGlDQUFjO0FBS2lCLElBSy9CLGlDQUFjO0FBS2MsSUFLNUIsb0NBQWlCO0FBS2lCLElBaUJsQyw2QkFBVSxhQUFDLE9BQVk7QUFLUixJQWNmLHNCQUFHLGFBQUMsV0FBbUIsRUFBRSxXQUFxQixFQUFFLFVBQW1CO0FBSzNELElBV1IsMkJBQVEsYUFBQyxJQUFZLEVBQUUsTUFBZSxFQUFFLFVBQW1CO0FBS1YsSUFRakQsNkNBQTBCLGFBQUMsT0FBZ0I7QUFPakMsSUFHVixtREFBZ0MsYUFBQyxPQUFnQjtBQUtiLElBS3BDLCtDQUE0QixhQUFDLE9BQWdCO0FBS2IsSUFRaEMsOEJBQVcsYUFBQyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxNQUFlO0FBSzVDLElBSWhCLHFDQUFrQjtBQUtjLElBSWhDLDhCQUFXO0FBSXNCO0FBQXNDO0FBQXlEO0FBQWtEO0FBQTBHO0FBQXlKO0FBQXdEOzRDQWpWOWUsVUFBVTs7OzswQkFDTDtBQUFDLG1CQWxIUDtBQUFFLEVBa0g0QixpQkFBaUI7QUFDOUMsU0FEWSxRQUFRO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGYWNlYm9va0xvZ2luUmVzcG9uc2Uge1xuICBzdGF0dXM6IHN0cmluZztcblxuICBhdXRoUmVzcG9uc2U6IHtcbiAgICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xuXG4gICAgZGF0YV9hY2Nlc3NfZXhwaXJhdGlvbl90aW1lOiBzdHJpbmc7XG5cbiAgICBleHBpcmVzSW46IG51bWJlcjtcblxuICAgIHVzZXJJRDogc3RyaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIEZhY2Vib29rXG4gKiBAZGVzY3JpcHRpb25cbiAqIFVzZSB0aGUgRmFjZWJvb2sgQ29ubmVjdCBwbHVnaW4gdG8gb2J0YWluIGFjY2VzcyB0byB0aGUgbmF0aXZlIEZCIGFwcGxpY2F0aW9uIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3RgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRmFjZWJvb2sgQ29ubmVjdF0oaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QvY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdCkuXG4gKlxuICogIyMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiAgVG8gdXNlIHRoZSBGQiBwbHVnaW4sIHlvdSBmaXJzdCBoYXZlIHRvIGNyZWF0ZSBhIG5ldyBGYWNlYm9vayBBcHAgaW5zaWRlIG9mIHRoZSBGYWNlYm9vayBkZXZlbG9wZXIgcG9ydGFsIGF0IFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcykuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC0xXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzEucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBSZXRyaWV2ZSB0aGUgYEFwcCBJRGAgYW5kIGBBcHAgTmFtZWAuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC0yXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzIucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBUaGVuIHR5cGUgaW4gdGhlIGZvbGxvd2luZyBjb21tYW5kIGluIHlvdXIgVGVybWluYWwsIHdoZXJlIEFQUF9JRCBhbmQgQVBQX05BTUUgYXJlIHRoZSB2YWx1ZXMgZnJvbSB0aGUgRmFjZWJvb2sgRGV2ZWxvcGVyIHBvcnRhbC5cbiAqXG4gKiBgYGBiYXNoXG4gKiAgaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QgLS12YXJpYWJsZSBBUFBfSUQ9XCIxMjM0NTY3ODlcIiAtLXZhcmlhYmxlIEFQUF9OQU1FPVwibXlBcHBsaWNhdGlvblwiXG4gKiBgYGBcbiAqXG4gKiBBZnRlciwgeW91J2xsIG5lZWQgdG8gYWRkIHRoZSBuYXRpdmUgcGxhdGZvcm1zIHlvdSdsbCBiZSB1c2luZyB0byB5b3VyIGFwcCBpbiB0aGUgRmFjZWJvb2sgRGV2ZWxvcGVyIHBvcnRhbCB1bmRlciB5b3VyIGFwcCdzIFNldHRpbmdzOlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtM10oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay8zLnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICogQ2xpY2sgYCdBZGQgUGxhdGZvcm0nYC5cbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTRdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNC5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIEF0IHRoaXMgcG9pbnQgeW91J2xsIG5lZWQgdG8gb3BlbiB5b3VyIHByb2plY3QncyBbYGNvbmZpZy54bWxgXShodHRwczovL2NvcmRvdmEuYXBhY2hlLm9yZy9kb2NzL2VuL2xhdGVzdC9jb25maWdfcmVmL2luZGV4Lmh0bWwpIGZpbGUsIGZvdW5kIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB5b3VyIHByb2plY3QuXG4gKlxuICogVGFrZSBub3RlIG9mIHRoZSBgaWRgIGZvciB0aGUgbmV4dCBzdGVwOlxuICogYGBgXG4gKiA8d2lkZ2V0IGlkPVwiY29tLm15Y29tcGFueS50ZXN0YXBwXCIgdmVyc2lvbj1cIjAuMC4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy9ucy93aWRnZXRzXCIgeG1sbnM6Y2R2PVwiaHR0cDovL2NvcmRvdmEuYXBhY2hlLm9yZy9ucy8xLjBcIj5cbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gYWxzbyBlZGl0IHRoZSBgaWRgIHRvIHdoYXRldmVyIHlvdSdkIGxpa2UgaXQgdG8gYmUuXG4gKlxuICogIyMjIyBpT1MgSW5zdGFsbFxuICogVW5kZXIgJ0J1bmRsZSBJRCcsIGFkZCB0aGUgYGlkYCBmcm9tIHlvdXIgYGNvbmZpZy54bWxgIGZpbGU6XG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC01XSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzUucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKlxuICogIyMjIyBBbmRyb2lkIEluc3RhbGxcbiAqIFVuZGVyICdHb29nbGUgUGxheSBQYWNrYWdlIE5hbWUnLCBhZGQgdGhlIGBpZGAgZnJvbSB5b3VyIGBjb25maWcueG1sYCBmaWxlOlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtNl0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay82LnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICpcbiAqIEFuZCB0aGF0J3MgaXQhIFlvdSBjYW4gbm93IG1ha2UgY2FsbHMgdG8gRmFjZWJvb2sgdXNpbmcgdGhlIHBsdWdpbi5cbiAqXG4gKiAjIyBFdmVudHNcbiAqXG4gKiBBcHAgZXZlbnRzIGFsbG93IHlvdSB0byB1bmRlcnN0YW5kIHRoZSBtYWtldXAgb2YgdXNlcnMgZW5nYWdpbmcgd2l0aCB5b3VyIGFwcCwgbWVhc3VyZSB0aGUgcGVyZm9ybWFuY2Ugb2YgeW91ciBGYWNlYm9vayBtb2JpbGUgYXBwIGFkcywgYW5kIHJlYWNoIHNwZWNpZmljIHNldHMgb2YgeW91ciB1c2VycyB3aXRoIEZhY2Vib29rIG1vYmlsZSBhcHAgYWRzLlxuICpcbiAqIC0gW2lPU10gW2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9pb3MvYXBwLWV2ZW50c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2lvcy9hcHAtZXZlbnRzKVxuICogLSBbQW5kcm9pZF0gW2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hbmRyb2lkL2FwcC1ldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hbmRyb2lkL2FwcC1ldmVudHMpXG4gKiAtIFtKU10gRG9lcyBub3QgaGF2ZSBhbiBFdmVudHMgQVBJLCBzbyB0aGUgcGx1Z2luIGZ1bmN0aW9ucyBhcmUgZW1wdHkgYW5kIHdpbGwgcmV0dXJuIGFuIGF1dG9tYXRpYyBzdWNjZXNzXG4gKlxuICogQWN0aXZhdGlvbiBldmVudHMgYXJlIGF1dG9tYXRpY2FsbHkgdHJhY2tlZCBmb3IgeW91IGluIHRoZSBwbHVnaW4uXG4gKlxuICogRXZlbnRzIGFyZSBsaXN0ZWQgb24gdGhlIFtpbnNpZ2h0cyBwYWdlXShodHRwczovL3d3dy5mYWNlYm9vay5jb20vaW5zaWdodHMvKS5cbiAqXG4gKiBGb3IgdHJhY2tpbmcgZXZlbnRzLCBzZWUgYGxvZ0V2ZW50YCBhbmQgYGxvZ1B1cmNoYXNlYC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZhY2Vib29rLCBGYWNlYm9va0xvZ2luUmVzcG9uc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZhY2Vib29rL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRmFjZWJvb2spIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmIubG9naW4oWydwdWJsaWNfcHJvZmlsZScsICd1c2VyX2ZyaWVuZHMnLCAnZW1haWwnXSlcbiAqICAgLnRoZW4oKHJlczogRmFjZWJvb2tMb2dpblJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZygnTG9nZ2VkIGludG8gRmFjZWJvb2shJywgcmVzKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIGxvZ2dpbmcgaW50byBGYWNlYm9vaycsIGUpKTtcbiAqXG4gKlxuICogdGhpcy5mYi5sb2dFdmVudCh0aGlzLmZiLkVWRU5UUy5FVkVOVF9OQU1FX0FEREVEX1RPX0NBUlQpO1xuICpcbiAqIGBgYFxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGYWNlYm9vaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QnLFxuICBwbHVnaW5SZWY6ICdmYWNlYm9va0Nvbm5lY3RQbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QvY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdCcsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0IC0tdmFyaWFibGUgQVBQX0lEPVwiMTIzNDU2Nzg5XCIgLS12YXJpYWJsZSBBUFBfTkFNRT1cIm15QXBwbGljYXRpb25cIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0lEJywgJ0FQUF9OQU1FJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhY2Vib29rIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBFVkVOVFMgPSB7XG4gICAgRVZFTlRfTkFNRV9BQ1RJVkFURURfQVBQOiAnZmJfbW9iaWxlX2FjdGl2YXRlX2FwcCcsXG4gICAgRVZFTlRfTkFNRV9ERUFDVElWQVRFRF9BUFA6ICdmYl9tb2JpbGVfZGVhY3RpdmF0ZV9hcHAnLFxuICAgIEVWRU5UX05BTUVfU0VTU0lPTl9JTlRFUlJVUFRJT05TOiAnZmJfbW9iaWxlX2FwcF9pbnRlcnJ1cHRpb25zJyxcbiAgICBFVkVOVF9OQU1FX1RJTUVfQkVUV0VFTl9TRVNTSU9OUzogJ2ZiX21vYmlsZV90aW1lX2JldHdlZW5fc2Vzc2lvbnMnLFxuICAgIEVWRU5UX05BTUVfQ09NUExFVEVEX1JFR0lTVFJBVElPTjogJ2ZiX21vYmlsZV9jb21wbGV0ZV9yZWdpc3RyYXRpb24nLFxuICAgIEVWRU5UX05BTUVfVklFV0VEX0NPTlRFTlQ6ICdmYl9tb2JpbGVfY29udGVudF92aWV3JyxcbiAgICBFVkVOVF9OQU1FX1NFQVJDSEVEOiAnZmJfbW9iaWxlX3NlYXJjaCcsXG4gICAgRVZFTlRfTkFNRV9SQVRFRDogJ2ZiX21vYmlsZV9yYXRlJyxcbiAgICBFVkVOVF9OQU1FX0NPTVBMRVRFRF9UVVRPUklBTDogJ2ZiX21vYmlsZV90dXRvcmlhbF9jb21wbGV0aW9uJyxcbiAgICBFVkVOVF9OQU1FX1BVU0hfVE9LRU5fT0JUQUlORUQ6ICdmYl9tb2JpbGVfb2J0YWluX3B1c2hfdG9rZW4nLFxuICAgIEVWRU5UX05BTUVfQURERURfVE9fQ0FSVDogJ2ZiX21vYmlsZV9hZGRfdG9fY2FydCcsXG4gICAgRVZFTlRfTkFNRV9BRERFRF9UT19XSVNITElTVDogJ2ZiX21vYmlsZV9hZGRfdG9fd2lzaGxpc3QnLFxuICAgIEVWRU5UX05BTUVfSU5JVElBVEVEX0NIRUNLT1VUOiAnZmJfbW9iaWxlX2luaXRpYXRlZF9jaGVja291dCcsXG4gICAgRVZFTlRfTkFNRV9BRERFRF9QQVlNRU5UX0lORk86ICdmYl9tb2JpbGVfYWRkX3BheW1lbnRfaW5mbycsXG4gICAgRVZFTlRfTkFNRV9QVVJDSEFTRUQ6ICdmYl9tb2JpbGVfcHVyY2hhc2UnLFxuICAgIEVWRU5UX05BTUVfQUNISUVWRURfTEVWRUw6ICdmYl9tb2JpbGVfbGV2ZWxfYWNoaWV2ZWQnLFxuICAgIEVWRU5UX05BTUVfVU5MT0NLRURfQUNISUVWRU1FTlQ6ICdmYl9tb2JpbGVfYWNoaWV2ZW1lbnRfdW5sb2NrZWQnLFxuICAgIEVWRU5UX05BTUVfU1BFTlRfQ1JFRElUUzogJ2ZiX21vYmlsZV9zcGVudF9jcmVkaXRzJyxcbiAgICBFVkVOVF9QQVJBTV9DVVJSRU5DWTogJ2ZiX2N1cnJlbmN5JyxcbiAgICBFVkVOVF9QQVJBTV9SRUdJU1RSQVRJT05fTUVUSE9EOiAnZmJfcmVnaXN0cmF0aW9uX21ldGhvZCcsXG4gICAgRVZFTlRfUEFSQU1fQ09OVEVOVF9UWVBFOiAnZmJfY29udGVudF90eXBlJyxcbiAgICBFVkVOVF9QQVJBTV9DT05URU5UX0lEOiAnZmJfY29udGVudF9pZCcsXG4gICAgRVZFTlRfUEFSQU1fU0VBUkNIX1NUUklORzogJ2ZiX3NlYXJjaF9zdHJpbmcnLFxuICAgIEVWRU5UX1BBUkFNX1NVQ0NFU1M6ICdmYl9zdWNjZXNzJyxcbiAgICBFVkVOVF9QQVJBTV9NQVhfUkFUSU5HX1ZBTFVFOiAnZmJfbWF4X3JhdGluZ192YWx1ZScsXG4gICAgRVZFTlRfUEFSQU1fUEFZTUVOVF9JTkZPX0FWQUlMQUJMRTogJ2ZiX3BheW1lbnRfaW5mb19hdmFpbGFibGUnLFxuICAgIEVWRU5UX1BBUkFNX05VTV9JVEVNUzogJ2ZiX251bV9pdGVtcycsXG4gICAgRVZFTlRfUEFSQU1fTEVWRUw6ICdmYl9sZXZlbCcsXG4gICAgRVZFTlRfUEFSQU1fREVTQ1JJUFRJT046ICdmYl9kZXNjcmlwdGlvbicsXG4gICAgRVZFTlRfUEFSQU1fU09VUkNFX0FQUExJQ0FUSU9OOiAnZmJfbW9iaWxlX2xhdW5jaF9zb3VyY2UnLFxuICAgIEVWRU5UX1BBUkFNX1ZBTFVFX1lFUzogJzEnLFxuICAgIEVWRU5UX1BBUkFNX1ZBTFVFX05POiAnMCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBJRFxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGN1cnJlbnQgYXBwbGljYXRpb24gSURcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QXBwbGljYXRpb25JZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGFwcGxpY2F0aW9uIElEXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaWQgYXBwbGljYXRpb24gSURcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QXBwbGljYXRpb25JZChpZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBuYW1lXG4gICAqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBuYW1lXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFwcGxpY2F0aW9uTmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGFwcGxpY2F0aW9uIG5hbWVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9ICBuYW1lIGFwcGxpY2F0aW9uIG5hbWVcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QXBwbGljYXRpb25OYW1lKG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dpbiB0byBGYWNlYm9vayB0byBhdXRoZW50aWNhdGUgdGhpcyBhcHAuXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICoge1xuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCcsXG4gICAqICAgYXV0aFJlc3BvbnNlOiB7XG4gICAqICAgICBhY2Nlc3NUb2tlbjogJ2tna2gzZzQya2g0ZzIza2g0ZzJraDM0ZzJrZzRrMmg0Z2toM2c0azJoNGdrMjNoNGdrMmgzNGdrMjM0Z2syaDM0QW5kU29PbicsXG4gICAqICAgICBkYXRhX2FjY2Vzc19leHBpcmF0aW9uX3RpbWU6ICcxNjIzNjgwMjQ0JyxcbiAgICogICAgIGV4cGlyZXNJbjogNTE4Mzk3OSxcbiAgICogICAgIHVzZXJJRDogJzYzNDU2NTQzNSdcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119ICBwZXJtaXNzaW9ucyBMaXN0IG9mIFtwZXJtaXNzaW9uc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2ZhY2Vib29rLWxvZ2luL3Blcm1pc3Npb25zKSB0aGlzIGFwcCBoYXMgdXBvbiBsb2dnaW5nIGluLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGYWNlYm9va0xvZ2luUmVzcG9uc2U+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMgb2JqZWN0IGlmIGxvZ2luIHN1Y2NlZWRzLCBhbmQgcmVqZWN0cyBpZiBsb2dpbiBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9naW4ocGVybWlzc2lvbnM6IHN0cmluZ1tdKTogUHJvbWlzZTxGYWNlYm9va0xvZ2luUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTG9naW4gdG8gRmFjZWJvb2sgdXNpbmcgTGltaXRlZCBMb2dpbiAoaU9TIE9ubHkpXG4gICAqXG4gICAqIGBgYHR5cGVzY3JpcHRcbiAgICoge1xuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCcsXG4gICAqICAgYXV0aFJlc3BvbnNlOiB7XG4gICAqICAgICBhdXRoZW50aWNhdGlvblRva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcbiAgICogICAgIG5vbmNlOiAnZm9vJyxcbiAgICogICAgIHVzZXJJRDogJzYzNDU2NTQzNSdcbiAgICogICB9XG4gICAqIH1cbiAgICpcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nW119ICBwZXJtaXNzaW9ucyBMaXN0IG9mIFtwZXJtaXNzaW9uc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2ZhY2Vib29rLWxvZ2luL2xpbWl0ZWQtbG9naW4vcGVybWlzc2lvbnMpIHRoaXMgYXBwIGhhcyB1cG9uIGxvZ2dpbmcgaW4uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHN0YXR1cyBvYmplY3QgaWYgbG9naW4gc3VjY2VlZHMsIGFuZCByZWplY3RzIGlmIGxvZ2luIGZhaWxzLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dpbldpdGhMaW1pdGVkVHJhY2tpbmcocGVybWlzc2lvbnM6IHN0cmluZ1tdKTogUHJvbWlzZTxGYWNlYm9va0xvZ2luUmVzcG9uc2U+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIHVzZXIgaGFzIGFwcHJvdmVkIGFsbCBuZWNlc3NhcnkgcGVybWlzc2lvbnNcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIHRvIGNoZWNrIGZvclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdWNjZXNzIHN0cmluZyBpZiBhbGwgcGFzc2VkIHBlcm1pc3Npb25zIGFyZSBncmFudGVkLCBvciBhbiBlcnJvciBzdHJpbmcgaWYgYW55IHBlcm1pc3Npb25zIGFyZSBub3QgZ3JhbnRlZFxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBjaGVja0hhc0NvcnJlY3RQZXJtaXNzaW9ucyhwZXJtaXNzaW9uczogc3RyaW5nW10pOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBkYXRhIGFjY2VzcyBoYXMgZXhwaXJlZCBmb3IgdGhlIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3VjY2VzcyBzdHJpbmcgaWYgZGF0YSBhY2Nlc3MgaXMgZXhwaXJlZCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzRGF0YUFjY2Vzc0V4cGlyZWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVhdXRob3JpemUgZGF0YSBhY2Nlc3MgYWZ0ZXIgaXQgaGFzIGV4cGlyZWRcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3RhdHVzIG9iamVjdCBpZiBsb2dpbiBzdWNjZWVkcywgYW5kIHJlamVjdHMgaWYgbG9naW4gZmFpbHMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlYXV0aG9yaXplRGF0YUFjY2VzcygpOiBQcm9taXNlPEZhY2Vib29rTG9naW5SZXNwb25zZT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dvdXQgb2YgRmFjZWJvb2suXG4gICAqXG4gICAqIEZvciBtb3JlIGluZm8gc2VlIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L0ZCLmxvZ291dClcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBhIHN1Y2Nlc3NmdWwgbG9nb3V0LCBhbmQgcmVqZWN0cyBpZiBsb2dvdXQgZmFpbHMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZXRlcm1pbmUgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiB0byBGYWNlYm9vayBhbmQgaGFzIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHAuICBUaGVyZSBhcmUgdGhyZWUgcG9zc2libGUgc3RhdGVzIGZvciBhIHVzZXI6XG4gICAqXG4gICAqIDEpIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbnRvIEZhY2Vib29rIGFuZCBoYXMgYXV0aGVudGljYXRlZCB5b3VyIGFwcGxpY2F0aW9uIChjb25uZWN0ZWQpXG4gICAqIDIpIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbnRvIEZhY2Vib29rIGJ1dCBoYXMgbm90IGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiAobm90X2F1dGhvcml6ZWQpXG4gICAqIDMpIHRoZSB1c2VyIGlzIGVpdGhlciBub3QgbG9nZ2VkIGludG8gRmFjZWJvb2sgb3IgZXhwbGljaXRseSBsb2dnZWQgb3V0IG9mIHlvdXIgYXBwbGljYXRpb24gc28gaXQgZG9lc24ndCBhdHRlbXB0IHRvIGNvbm5lY3QgdG8gRmFjZWJvb2sgYW5kIHRodXMsIHdlIGRvbid0IGtub3cgaWYgdGhleSd2ZSBhdXRoZW50aWNhdGVkIHlvdXIgYXBwbGljYXRpb24gb3Igbm90ICh1bmtub3duKVxuICAgKlxuICAgKiBSZXNvbHZlcyB3aXRoIGEgcmVzcG9uc2UgbGlrZTpcbiAgICpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcbiAgICogICAgIHVzZXJJRDogJzEyMzQ1Njc4OTEyMzQ1JyxcbiAgICogICAgIGFjY2Vzc1Rva2VuOiAna2draDNnNDJraDRnMjNraDRnMmtoMzRnMmtnNGsyaDRna2gzZzRrMmg0Z2syM2g0Z2syaDM0Z2syMzRnazJoMzRBbmRTb09uJyxcbiAgICogICAgIGRhdGFfYWNjZXNzX2V4cGlyYXRpb25fdGltZTogJzE2MjM2ODAyNDQnLFxuICAgKiAgICAgZXhwaXJlc0luOiAnNTE4MzczOCdcbiAgICogICB9LFxuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L0ZCLmdldExvZ2luU3RhdHVzKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMb2dpblN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBGYWNlYm9vayBhY2Nlc3MgdG9rZW4gZm9yIHVzaW5nIEZhY2Vib29rIHNlcnZpY2VzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYWNjZXNzIHRva2VuLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHByb2ZpbGUgaW5mb3JtYXRpb24gZm9yIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHVzZXJcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHN1Y2Nlc3MgZGF0YSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEN1cnJlbnRQcm9maWxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgb25lIG9mIHZhcmlvdXMgRmFjZWJvb2sgZGlhbG9ncy4gRXhhbXBsZSBvZiBvcHRpb25zIGZvciBhIFNoYXJlIGRpYWxvZzpcbiAgICpcbiAgICogYGBgXG4gICAqIHtcbiAgICogICBtZXRob2Q6ICdzaGFyZScsXG4gICAqICAgaHJlZjogJ2h0dHA6Ly9leGFtcGxlLmNvbScsXG4gICAqICAgY2FwdGlvbjogJ1N1Y2ggY2FwdGlvbiwgdmVyeSBmZWVkLicsXG4gICAqICAgZGVzY3JpcHRpb246ICdNdWNoIGRlc2NyaXB0aW9uJyxcbiAgICogICBwaWN0dXJlOiAnaHR0cDovL2V4YW1wbGUuY29tL2ltYWdlLnBuZydcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgb3B0aW9ucyBzZWUgdGhlIFtDb3Jkb3ZhIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdC9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0I3Nob3ctYS1kaWFsb2cpIGFuZCB0aGUgW0ZhY2Vib29rIGRvY3NdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9qYXZhc2NyaXB0L3JlZmVyZW5jZS9GQi51aSlcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgVGhlIGRpYWxvZyBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBzdWNjZXNzIGRhdGEsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93RGlhbG9nKG9wdGlvbnM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYSBjYWxsIHRvIEZhY2Vib29rIEdyYXBoIEFQSS4gQ2FuIHRha2UgYWRkaXRpb25hbCBwZXJtaXNzaW9ucyBiZXlvbmQgdGhvc2UgZ3JhbnRlZCBvbiBsb2dpbi5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlOlxuICAgKlxuICAgKiAgQ2FsbGluZyB0aGUgR3JhcGggQVBJIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLmFwaVxuICAgKiAgR3JhcGggRXhwbG9yZXIgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL3Rvb2xzL2V4cGxvcmVyXG4gICAqICBHcmFwaCBBUEkgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZ3JhcGgtYXBpXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgcmVxdWVzdFBhdGggR3JhcGggQVBJIGVuZHBvaW50IHlvdSB3YW50IHRvIGNhbGxcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gIHBlcm1pc3Npb25zIExpc3Qgb2YgW3Blcm1pc3Npb25zXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stbG9naW4vcGVybWlzc2lvbnMpIGZvciB0aGlzIHJlcXVlc3QuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgaHR0cE1ldGhvZCBIVFRQIG1ldGhvZCBmb3IgdGhlIHJlcXVlc3QsIG9uZSBvZiBcIkdFVFwiLCBcIlBPU1RcIiwgb3IgXCJERUxFVEVcIiAoZGVmYXVsdCBpcyBcIkdFVFwiKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlc3VsdCBvZiB0aGUgcmVxdWVzdCwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFwaShyZXF1ZXN0UGF0aDogc3RyaW5nLCBwZXJtaXNzaW9uczogc3RyaW5nW10sIGh0dHBNZXRob2Q/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2cgYW4gZXZlbnQuICBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gIG5hbWUgTmFtZSBvZiB0aGUgZXZlbnRcbiAgICogQHBhcmFtIHtPYmplY3R9ICBbcGFyYW1zXSBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge251bWJlcn0gIFt2YWx1ZVRvU3VtXSBhbnkgdmFsdWUgdG8gYmUgYWRkZWQgdG8gYWRkZWQgdG8gYSBzdW0gb24gZWFjaCBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICB9KVxuICBsb2dFdmVudChuYW1lOiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCwgdmFsdWVUb1N1bT86IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIHRoZSBhdXRvIGxvZyBhcHAgZXZlbnQgZmVhdHVyZSAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hcHAtZXZlbnRzL2dkcHItY29tcGxpYW5jZS9cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDEsXG4gICAgZXJyb3JJbmRleDogMixcbiAgfSlcbiAgc2V0QXV0b0xvZ0FwcEV2ZW50c0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBjb2xsZWN0aW9uIG9mIGFkdmVydGlzZXItaWRcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QWR2ZXJ0aXNlcklEQ29sbGVjdGlvbkVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBhZHZlcnRpc2VyIHRyYWNraW5nIChpT1MgT25seSlcbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSAgZW5hYmxlZCB2YWx1ZSB0byBiZSBzZXRcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0QWR2ZXJ0aXNlclRyYWNraW5nRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhIHB1cmNoYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gIHZhbHVlIFZhbHVlIG9mIHRoZSBwdXJjaGFzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICBjdXJyZW5jeSBUaGUgY3VycmVuY3ksIGFzIGFuIFtJU08gNDIxNyBjdXJyZW5jeSBjb2RlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT180MjE3KVxuICAgKiBAcGFyYW0ge09iamVjdH0gIHBhcmFtcyBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dQdXJjaGFzZSh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWZlcnJlZCBhcHAgbGlua1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREZWZlcnJlZEFwcGxpbmsoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgbG9nIGFjdGl2YXRpb24gZXZlbnRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlQXBwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 9362:
/*!*************************************************************************!*\
  !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOtpInputComponent": () => (/* binding */ NgOtpInputComponent),
/* harmony export */   "NgOtpInputModule": () => (/* binding */ NgOtpInputModule),
/* harmony export */   "ɵa": () => (/* binding */ KeysPipe),
/* harmony export */   "ɵb": () => (/* binding */ NumberOnlyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8583);








function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onKeyDown($event); })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onKeyUp($event, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
} }
function NgOtpInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
} }
class KeysPipe {
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'keys'
            }]
    }], null, null); })();

class Config {
}

class NgOtpInputComponent {
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
        }
        this.otpForm.valueChanges.subscribe((v) => {
            this.keysPipe.transform(this.otpForm.controls).forEach((k) => {
                var val = this.otpForm.controls[k].value;
                if (val && val.length > 1) {
                    if (val.length >= this.config.length) {
                        this.setValue(val);
                    }
                    else {
                        this.rebuildValue();
                    }
                }
            });
        });
        this.inputType = this.getInputType();
    }
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (evt) => this.handlePaste(evt));
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    ifKeyCode(event, targetCode) {
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    onKeyDown($event) {
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    onKeyUp($event, inputIdx) {
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        const isBackspace = this.ifBackspaceOrDelete($event);
        if (isBackspace && !$event.target.value) {
            this.setSelected(prevInputId);
            this.rebuildValue();
            return;
        }
        if (!$event.target.value) {
            return;
        }
        if (this.ifValidEntry($event)) {
            this.setSelected(nextInputId);
        }
        this.rebuildValue();
    }
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    setSelected(eleId) {
        this.focusTo(eleId);
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout(() => {
                ele.setSelectionRange(0, 1);
            }, 0);
        }
    }
    ifValidEntry(event) {
        const inp = String.fromCharCode(event.keyCode);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    focusTo(eleId) {
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        });
        if (!this.config.disableAutoFocus) {
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
            let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
            if (ele && ele.focus) {
                ele.focus();
            }
        }
        this.rebuildValue();
    }
    rebuildValue() {
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach(k => {
            if (this.otpForm.controls[k].value) {
                let ctrlVal = this.otpForm.controls[k].value;
                let isLengthExceed = ctrlVal.length > 1;
                let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
                ctrlVal = ctrlVal[0];
                let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
                if (isCaseTransformEnabled && transformedVal == ctrlVal) {
                    isCaseTransformEnabled = false;
                }
                else {
                    ctrlVal = transformedVal;
                }
                val += ctrlVal;
                if (isLengthExceed || isCaseTransformEnabled) {
                    this.otpForm.controls[k].setValue(ctrlVal);
                }
            }
        });
        this.onInputChange.emit(val);
    }
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    handlePaste(e) {
        // Get pasted data via clipboard API
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) { return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe)); };
NgOtpInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOtpInputComponent, selectors: [["ng-otp-input"]], inputs: { config: "config" }, outputs: { onInputChange: "onInputChange" }, decls: 1, vars: 1, consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]], template: function NgOtpInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective]; }, pipes: function () { return [KeysPipe]; }, styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"] });
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" \r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"one-time-code\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
            }]
    }], function () { return [{ type: KeysPipe }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

class NumberOnlyDirective {
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NumberOnlyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumberOnlyDirective, selectors: [["", "numberOnly", ""]], inputs: { disabledNumberOnly: "disabledNumberOnly" } });
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[numberOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, { disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class NgOtpInputModule {
}
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) { return new (t || NgOtpInputModule)(); };
NgOtpInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgOtpInputModule });
NgOtpInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [KeysPipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, { declarations: function () { return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]; }, exports: function () { return [NgOtpInputComponent]; } }); })();

/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ng-otp-input.js.map

/***/ }),

/***/ 2276:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signin/signin.component */ 3267);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 4309);
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ 3039);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ 3966);







const routes = [
    {
        path: 'signin',
        component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_0__.SigninComponent
    },
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent
    },
    {
        path: 'welcome',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__.WelcomeComponent
    },
    {
        path: 'splash-screen',
        component: _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__.SplashScreenComponent
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], AuthRoutingModule);



/***/ }),

/***/ 1674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 2276);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin/signin.component */ 3267);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 4309);
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome/welcome.component */ 3966);
/* harmony import */ var _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./splash-screen/splash-screen.component */ 3039);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 9342);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 222);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-otp-input */ 9362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 476);













let AuthModule = class AuthModule {
};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _signin_signin_component__WEBPACK_IMPORTED_MODULE_1__.SigninComponent,
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent,
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__.WelcomeComponent,
            _splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_4__.SplashScreenComponent,
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_11__.NgOtpInputModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule
        ],
        providers: [
            _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__.GooglePlus,
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_6__.Facebook
        ]
    })
], AuthModule);



/***/ }),

/***/ 3267:
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SigninComponent": () => (/* binding */ SigninComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signin.component.html */ 1247);
/* harmony import */ var _signin_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signin.component.scss */ 6664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ 7841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1543);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 9342);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ 5041);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ 222);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 1841);















let SigninComponent = class SigninComponent {
    constructor(LoadingController, platform, router, toastController, auth, googlePLus, appC, userS, firestore, fb, http) {
        this.LoadingController = LoadingController;
        this.platform = platform;
        this.router = router;
        this.toastController = toastController;
        this.auth = auth;
        this.googlePLus = googlePLus;
        this.appC = appC;
        this.userS = userS;
        this.firestore = firestore;
        this.fb = fb;
        this.http = http;
        this.number = null;
        this.sendOtp = false;
        this.phoneNumber = '';
        this.loadingSendOTP = false;
        this.loadingVirifyOTP = false;
        this.contryCode = '+971';
        this.config = {
            length: 6,
            allowNumbersOnly: true,
            inputStyles: {
                'width': '35px',
                'height': '35px',
                'border-color': '#fc853b',
            }
        };
        this.googleLoader = false;
        this.facebookLoader = false;
    }
    ngOnInit() {
    }
    clearFields() {
        this.sendOtp = false;
        this.number = null;
        this.otp = '';
        this.loadingSendOTP = false;
        this.loadingVirifyOTP = false;
    }
    signUp() {
        this.router.navigate(['/auth/signup']);
    }
    onOtpChange(ev) {
        this.otp = ev;
    }
    upComming() {
        this.presentToast("Coming Soon");
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.recaptchaVerifire = yield new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
        });
    }
    ionViewDidLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.recaptchaVerifire = yield new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
        });
    }
    loginWithGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.init();
            if (this.platform.is("android")) {
                this.googleLoader = true;
                let googleUser = yield _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuth.signIn();
                const credential = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth.GoogleAuthProvider.credential(googleUser.authentication.idToken);
                this.auth.signInAndRetrieveDataWithCredential(credential).then(res => {
                    this.router.navigate(['/home']);
                    this.googleLoader = false;
                    console.log(res);
                });
            }
            else {
                this.googleLoader = true;
                this.auth.signInWithPopup(new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth.GoogleAuthProvider()).then(success => {
                    console.log('success in google login', success);
                    this.user = success.user;
                    console.log(this.user);
                    this.router.navigate(['/home']);
                    this.googleLoader = false;
                }).catch(err => {
                    console.log(err.message, 'error in google login');
                });
            }
        });
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
            });
            toast.present();
        });
    }
    successPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'success'
            });
            toast.present();
        });
    }
    errorPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    verify_otp() {
        if (this.otp.length === 6) {
            this.loadingVirifyOTP = true;
            this.otpConfirmationResult.confirm(this.otp.toString())
                .then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                this.userS.getData();
                this.appC.ngOnInit();
                setTimeout(() => {
                    this.clearFields();
                    this.loadingVirifyOTP = true;
                    this.router.navigate(['/home']);
                }, 1000);
            }))
                .catch(err => {
                this.loadingVirifyOTP = true;
                console.log('err2', err);
            });
        }
        else {
            this.errorPresentToast("Enter OTP 6 digit number");
        }
    }
    send_otp() {
        let length = new String(this.number);
        if (this.number !== null) {
            this.firestore.collection("users", ref => ref.where("phoneNumber", "==", this.contryCode + this.number)).get().subscribe(result => {
                if (result.size > 0) {
                    this.loadingSendOTP = true;
                    const num = this.contryCode + this.number;
                    const appVerifier = this.recaptchaVerifire;
                    this.auth.signInWithPhoneNumber(num, appVerifier)
                        .then(result => {
                        this.otpConfirmationResult = result;
                        this.successPresentToast("OTP Send");
                        this.sendOtp = true;
                        this.loadingSendOTP = false;
                    }).catch(err => {
                        console.log('err1', err);
                        this.errorPresentToast("Something went wrong");
                        this.loadingSendOTP = false;
                    });
                }
                else {
                    this.errorPresentToast("This mobile number not register. Please! 1st signup");
                }
            });
        }
        else {
            this.errorPresentToast("Please! Enter Mobile Number");
        }
    }
    loginWithFacebook() {
        // TODO: Apply Validations and loader on complete sign in page
        this.fb.getLoginStatus().then((res) => {
            this.facebookLoader = true;
            if (res.status === 'connected') {
                // Already logged in to FB so pass credentials to provider (in my case firebase)
                let provider = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                console.log("Access Toekn : " + res.authResponse.accessToken);
                firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth().signInWithCredential(provider).then((authToken) => {
                    console.log("Auth Token:" + authToken);
                    this.router.navigate(['/home']);
                    this.facebookLoader = false;
                }).catch((err) => {
                    this.errorPresentToast("Error logging into Facebook : " + err);
                    console.log('Error logging into Facebook', err);
                });
            }
            else {
                this.fb.login(['public_profile', 'user_friends', 'email']).then((res) => {
                    console.log("Access Toekn : " + res.authResponse.accessToken);
                    if (res.status === 'connected') {
                        const facebookCredential = firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                        firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth().signInWithCredential(facebookCredential).then((userResponse) => {
                            console.log("UserResponse:" + userResponse);
                            this.router.navigate(['/home']);
                            this.facebookLoader = false;
                        });
                    }
                }).catch(err => {
                    this.facebookLoader = false;
                    this.errorPresentToast("Error logging into Facebook : " + err);
                    console.log('Error logging into Facebook', err);
                });
            }
        });
    }
};
SigninComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuth },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__.GooglePlus },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestore },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_7__.Facebook },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient }
];
SigninComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-signin',
        template: _raw_loader_signin_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signin_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SigninComponent);



/***/ }),

/***/ 4309:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./signup.component.html */ 7920);
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss */ 3283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/app */ 7841);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ 9342);
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.component */ 5041);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/push-notifications */ 8748);













let SignupComponent = class SignupComponent {
    constructor(LoadingController, platform, router, toastController, auth, googlePLus, appC, userS, firestore) {
        this.LoadingController = LoadingController;
        this.platform = platform;
        this.router = router;
        this.toastController = toastController;
        this.auth = auth;
        this.googlePLus = googlePLus;
        this.appC = appC;
        this.userS = userS;
        this.firestore = firestore;
        this.number = null;
        this.sendOtp = false;
        this.phoneNumber = '';
        this.loadingSendOTP = false;
        this.loadingVirifyOTP = false;
        this.contryCode = '+971';
        this.config = {
            length: 6,
            allowNumbersOnly: true,
            inputStyles: {
                'width': '35px',
                'height': '35px',
                'border-color': '#fc853b',
            }
        };
        this.userName = '';
        this.userEmail = '';
        this.tokenId = '';
    }
    ngOnInit() {
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__.PushNotifications.requestPermissions().then(result => {
            if (result.receive === 'granted') {
                _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__.PushNotifications.register();
            }
            else {
            }
        });
        _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_6__.PushNotifications.addListener('registration', (token) => {
            this.tokenId = token.value;
        });
    }
    clearFields() {
        this.sendOtp = false;
        this.number = null;
        this.userName = '';
        this.userEmail = '';
        this.otp = '';
        this.loadingSendOTP = false;
        this.loadingVirifyOTP = false;
    }
    signin() {
        this.router.navigate(['/auth/signin']);
    }
    onOtpChange(ev) {
        this.otp = ev;
    }
    upComming() {
        this.presentToast("Coming Soon");
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.recaptchaVerifire = yield new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
        });
    }
    ionViewDidLoad() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.recaptchaVerifire = yield new firebase_compat_app__WEBPACK_IMPORTED_MODULE_2__.default.auth.RecaptchaVerifier('recaptcha-container', { 'size': 'invisible' });
        });
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
            });
            toast.present();
        });
    }
    successPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'success'
            });
            toast.present();
        });
    }
    errorPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
    verify_otp() {
        if (this.otp.length === 6) {
            this.loadingVirifyOTP = true;
            this.otpConfirmationResult.confirm(this.otp.toString())
                .then((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                this.firestore.collection("users", ref => ref.where("uid", '==', result.user.uid)).get().subscribe(resultUser => {
                    if (resultUser.size === 0) {
                        const newId = this.firestore.createId();
                        let refCode = this.makeid(6);
                        this.firestore.collection('users').doc(newId).set({
                            docId: newId,
                            name: this.userName,
                            phoneNumber: result.user.phoneNumber,
                            provider: 'phone',
                            uid: result.user.uid,
                            address: '',
                            photoURL: "",
                            email: this.userEmail,
                            timestamp: new Date(),
                            token: this.tokenId,
                            referalCode: refCode,
                            balance: 0
                        }).then(res => {
                            this.userS.userName = this.userName;
                            this.userS.userEmail = this.userEmail;
                            this.userS.userPhotoUrl = "assets/img/profilePhoto.png";
                            this.userS.userProvider = 'phone';
                            this.userS.userPhoneNumber = result.user.phoneNumber;
                            this.userS.userUID = result.user.uid;
                            this.userS.userReferalCode = refCode;
                            setTimeout(() => {
                                this.successPresentToast("User Register");
                                this.loadingVirifyOTP = true;
                                this.clearFields();
                                this.router.navigate(['/home']);
                            }, 1000);
                        });
                    }
                    else {
                        this.loadingVirifyOTP = true;
                        this.errorPresentToast("Your Already Register");
                    }
                });
            }))
                .catch(err => {
                this.loadingVirifyOTP = true;
                console.log('err2', err);
            });
        }
        else {
            this.errorPresentToast("Enter OTP 6 digit number");
        }
    }
    send_otp() {
        if (this.userName !== '' && this.userEmail !== '' && this.number !== null) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (re.test(this.userEmail) == false) {
                this.errorPresentToast("Please! Enter valid email.");
            }
            else {
                this.loadingSendOTP = true;
                const num = this.contryCode + this.number;
                const appVerifier = this.recaptchaVerifire;
                this.auth.signInWithPhoneNumber(num, appVerifier)
                    .then(result => {
                    this.otpConfirmationResult = result;
                    this.successPresentToast("OTP Send");
                    this.sendOtp = true;
                    this.loadingSendOTP = false;
                }).catch(err => {
                    console.log('err1', err);
                    this.errorPresentToast("Something went wrong");
                    this.loadingSendOTP = false;
                });
            }
        }
        else {
            this.errorPresentToast("All fields medatory");
        }
    }
};
SignupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_10__.AngularFireAuth },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_3__.GooglePlus },
    { type: src_app_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_11__.AngularFirestore }
];
SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-signup',
        template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SignupComponent);



/***/ }),

/***/ 3039:
/*!***************************************************************!*\
  !*** ./src/app/auth/splash-screen/splash-screen.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SplashScreenComponent": () => (/* binding */ SplashScreenComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_splash_screen_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./splash-screen.component.html */ 6798);
/* harmony import */ var _splash_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./splash-screen.component.scss */ 2929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let SplashScreenComponent = class SplashScreenComponent {
    constructor() { }
    ngOnInit() { }
};
SplashScreenComponent.ctorParameters = () => [];
SplashScreenComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-splash-screen',
        template: _raw_loader_splash_screen_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_splash_screen_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SplashScreenComponent);



/***/ }),

/***/ 3966:
/*!***************************************************!*\
  !*** ./src/app/auth/welcome/welcome.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WelcomeComponent": () => (/* binding */ WelcomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./welcome.component.html */ 8718);
/* harmony import */ var _welcome_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome.component.scss */ 7640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let WelcomeComponent = class WelcomeComponent {
    constructor(router) {
        this.router = router;
        this.count = 0;
    }
    ngOnInit() {
    }
    slideChanged() {
        let currentIndex = this.slides.getActiveIndex().then(res => {
            this.count = res;
        });
    }
    swipeNext() {
        this.slides.slideNext();
    }
    home() {
        this.router.navigate(['/auth/signin']);
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
WelcomeComponent.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slider',] }]
};
WelcomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-welcome',
        template: _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_welcome_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WelcomeComponent);



/***/ }),

/***/ 6664:
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-button ion-icon {\n  font-size: xx-large;\n  font-weight: bold;\n}\nion-content .google-button {\n  --border-radius: 10px;\n  height: 50px;\n  line-height: normal;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n}\nion-content .google-button img {\n  margin: 10px;\n}\nion-content .facebook-button {\n  --border-radius: 10px;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  height: 50px;\n  line-height: normal;\n  --background: #3b5998;\n}\nion-content .facebook-button i {\n  color: white;\n  font-size: 20px;\n  margin: 10px;\n}\nion-content .container {\n  text-align: center;\n  position: linear;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .bgTop {\n  position: fixed;\n  top: -15%;\n  height: auto;\n  z-index: -1;\n}\nion-content .logo1 {\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  height: 120px;\n  z-index: 0;\n}\nion-content .logo2 {\n  position: fixed;\n  bottom: 1%;\n  right: 0%;\n  height: auto;\n  z-index: 0;\n}\nion-content .bgBottom {\n  position: fixed;\n  bottom: 0%;\n  height: auto;\n  z-index: -1;\n}\nion-content .MainContain {\n  padding: 0 30px;\n}\nion-content .MainContain h1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: xx-large;\n  line-height: 45px;\n  color: #FF6000;\n}\nion-content .MainContain label {\n  font-style: normal;\n  font-weight: normal;\n  font-size: small;\n  line-height: 18px;\n  color: #FF6000;\n}\nion-content .MainContain input {\n  width: 100%;\n  border: 1px solid #FF6000;\n  border-radius: 10px;\n  margin-top: 5px;\n  font-size: small;\n  padding: 10px;\n  outline: unset;\n}\nion-content .MainContain .forgot-password {\n  font-size: small;\n  color: #FF6000;\n  float: right;\n  background: transparent;\n}\nion-content .MainContain .btn-icons {\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n}\nion-content .OTP {\n  width: 100%;\n  padding-left: 15px;\n  letter-spacing: 42px;\n  border: 0;\n  text-align: center;\n  background-position: bottom;\n  background-size: 50px 1px;\n  background-repeat: repeat-x;\n  background-position-x: 35px;\n}\nion-content .ionButton {\n  text-align: center;\n}\nion-content .ionButton ion-button {\n  width: auto;\n  --background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  color: #fff;\n  border-radius: 15px;\n  box-shadow: unset;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0FBQUo7QUFFSTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFBTjtBQVNJO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQU5SO0FBT1E7RUFDSSxZQUFBO0FBTFo7QUFTSTtFQUNJLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVBSO0FBUVE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFOWjtBQVVJO0VBQ0ksa0JBQUE7RUFFQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBVFI7QUFhSTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFYUjtBQWNJO0VBQ0ksZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFaUjtBQWVJO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFiUjtBQWdCSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFkUjtBQWlCSTtFQUNJLGVBQUE7QUFmUjtBQWdCUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQWZaO0FBa0JRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0FBakJaO0FBb0JRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQWxCWjtBQXFCUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQW5CWjtBQXNCUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFwQlo7QUF3Qkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBdkJSO0FBMEJJO0VBQ0ksa0JBQUE7QUF4QlI7QUF5QlE7RUFDSSxXQUFBO0VBQ0EsNkRBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF2QloiLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG5cclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgaW9uLWJ1dHRvbiB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5pb24tY29udGVudCB7XHJcblxyXG4gICAgLmdvb2dsZS1idXR0b257XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mYWNlYm9vay1idXR0b257XHJcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGxpbmVhcjtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIC5iZ1RvcHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAtMTUlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nbzF7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMCU7XHJcbiAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dvMntcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgYm90dG9tOiAxJTtcclxuICAgICAgICByaWdodDogMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmJnQm90dG9te1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBib3R0b206IDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAuTWFpbkNvbnRhaW57XHJcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cclxuICAgICAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjYwMDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9yZ290LXBhc3N3b3Jke1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4taWNvbnN7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLk9UUHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDQycHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgYmxhY2sgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAzNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pb25CdXR0b257XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNGRjYwMDAsICNmOTk5NTgpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0dlb21ldHJpYSc7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9ICAgIFxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 3283:
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-button ion-icon {\n  font-size: xx-large;\n  font-weight: bold;\n}\nion-content .google-button {\n  height: 50px;\n  line-height: normal;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n}\nion-content .google-button img {\n  margin: 10px;\n}\nion-content .facebook-button {\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  height: 50px;\n  line-height: normal;\n  --background: #3b5998;\n}\nion-content .facebook-button i {\n  color: white;\n  font-size: 20px;\n  margin: 10px;\n}\nion-content .container {\n  text-align: center;\n  position: linear;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .bgTop {\n  position: fixed;\n  top: -15%;\n  height: auto;\n  z-index: -1;\n}\nion-content .logo1 {\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  height: 120px;\n  z-index: 0;\n}\nion-content .logo2 {\n  position: fixed;\n  bottom: 1%;\n  right: 0%;\n  height: auto;\n  z-index: 0;\n}\nion-content .bgBottom {\n  position: fixed;\n  bottom: 0%;\n  height: auto;\n  z-index: -1;\n}\nion-content .MainContain {\n  padding: 0 30px;\n}\nion-content .MainContain h1 {\n  font-style: normal;\n  font-weight: bold;\n  font-size: xx-large;\n  line-height: 45px;\n  color: #FF6000;\n}\nion-content .MainContain label {\n  font-style: normal;\n  font-weight: normal;\n  font-size: small;\n  line-height: 18px;\n  color: #FF6000;\n}\nion-content .MainContain input {\n  width: 100%;\n  border: 1px solid #FF6000;\n  border-radius: 10px;\n  margin-top: 5px;\n  font-size: small;\n  padding: 10px;\n  outline: unset;\n}\nion-content .MainContain .forgot-password {\n  font-size: small;\n  color: #FF6000;\n  float: right;\n  background: transparent;\n}\nion-content .MainContain .btn-icons {\n  padding: 5px;\n  margin: 5px;\n  border-radius: 5px;\n}\nion-content .OTP {\n  width: 100%;\n  padding-left: 15px;\n  letter-spacing: 42px;\n  border: 0;\n  text-align: center;\n  background-position: bottom;\n  background-size: 50px 1px;\n  background-repeat: repeat-x;\n  background-position-x: 35px;\n}\nion-content .ionButton {\n  text-align: center;\n}\nion-content .ionButton ion-button {\n  width: auto;\n  --background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  color: #fff;\n  border-radius: 15px;\n  box-shadow: unset;\n  font-size: large;\n}\nion-content .bottomDiv {\n  align-items: flex-start;\n  display: flex;\n  box-flex: 0;\n  flex-grow: 0;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}\nion-content .bottomDiv button {\n  text-align: center;\n  height: 50px;\n  width: 30%;\n  margin: 0 10%;\n  color: #fff;\n  background: #FF6000;\n  border: solid 1px #fff;\n  border-radius: 10px;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0FBQUo7QUFHTTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQVdNO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFSVjtBQVNVO0VBQ0ksWUFBQTtBQVBkO0FBV007RUFDSSwyQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBVFY7QUFVVTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVJkO0FBWUk7RUFDRSxrQkFBQTtFQUVBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFYTjtBQWVJO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWJOO0FBZ0JJO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFkTjtBQWlCSTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBZk47QUFrQkk7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBaEJOO0FBbUJJO0VBQ0UsZUFBQTtBQWpCTjtBQW1CTTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQWxCUjtBQXFCTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQXBCUjtBQXVCTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFyQlI7QUF3Qk07RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUF0QlI7QUF5Qk07RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBdkJSO0FBMkJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFFQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtBQTFCTjtBQTZCSTtFQUNFLGtCQUFBO0FBM0JOO0FBNkJNO0VBQ0UsV0FBQTtFQUNBLDZEQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBM0JSO0FBZ0NJO0VBRUUsdUJBQUE7RUFHQSxhQUFBO0VBRUEsV0FBQTtFQUVBLFlBQUE7RUFFQSxlQUFBO0VBRUEsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUE5Qk47QUFnQ007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQTlCUiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBpb24tY29udGVudCB7XHJcbiAgXHJcbiAgICAgIFxyXG4gICAgICAuZ29vZ2xlLWJ1dHRvbntcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZmFjZWJvb2stYnV0dG9ue1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAtLWJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbiAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgICBwb3NpdGlvbjogbGluZWFyO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiA1MCU7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgIC5iZ1RvcCB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgdG9wOiAtMTUlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmxvZ28xIHtcclxuICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICB0b3A6IDAlO1xyXG4gICAgICBsZWZ0OiAwJTtcclxuICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxuICBcclxuICAgIC5sb2dvMiB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiAxJTtcclxuICAgICAgcmlnaHQ6IDAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYmdCb3R0b20ge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMCU7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuTWFpbkNvbnRhaW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgXHJcbiAgICAgIGgxIHtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDVweDtcclxuICBcclxuICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICBcclxuICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNjAwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgLmJ0bi1pY29ucyB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgLk9UUCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiA0MnB4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGJsYWNrIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDFweDtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDM1cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW9uQnV0dG9uIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCB0b3AsICNGRjYwMDAsICNmOTk5NTgpO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICBcclxuICAgIC5ib3R0b21EaXYge1xyXG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMDtcclxuICAgICAgYm94LWZsZXg6IDA7XHJcbiAgICAgIC13ZWJraXQtZmxleC1ncm93OiAwO1xyXG4gICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICBcclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwJTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkY2MDAwO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 2929:
/*!*****************************************************************!*\
  !*** ./src/app/auth/splash-screen/splash-screen.component.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content .text {\n  font-size: x-large;\n  font-weight: bold;\n  color: #FF6000;\n  text-align: center;\n  position: absolute;\n  bottom: 5%;\n  width: 100%;\n}\nion-content .container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-content .container ion-item {\n  padding: 0 30px;\n}\nion-content .container ion-item .animate__zoomIn {\n  height: 5rem;\n  margin-right: 10px;\n}\nion-content .container ion-item ion-label {\n  text-align: center;\n}\nion-footer ion-item {\n  padding: 10px 5px;\n}\nion-footer ion-item ion-icon {\n  font-size: xx-large;\n}\nion-footer ion-item .getPackage {\n  text-align: center;\n  height: 50px;\n  width: 100%;\n  color: #fff;\n  background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  border: solid 1px #fff;\n  border-radius: 10px;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGFzaC1zY3JlZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFSO0FBR0k7RUFDSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFGUjtBQUlRO0VBQ0ksZUFBQTtBQUZaO0FBR1k7RUFDSSxZQUFBO0VBQWEsa0JBQUE7QUFBN0I7QUFFWTtFQUNJLGtCQUFBO0FBQWhCO0FBT0k7RUFDSSxpQkFBQTtBQUpSO0FBS1E7RUFDSSxtQkFBQTtBQUhaO0FBTVE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJEQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKWiIsImZpbGUiOiJzcGxhc2gtc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAudGV4dHtcclxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNGRjYwMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDUlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgICAgICAuYW5pbWF0ZV9fem9vbUlue1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO21hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlcntcclxuICAgIGlvbi1pdGVte1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICAuZ2V0UGFja2FnZXtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI0ZGNjAwMCwgI2Y5OTk1OCk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 7640:
/*!*****************************************************!*\
  !*** ./src/app/auth/welcome/welcome.component.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-toolbar {\n  --background: transparent;\n}\nion-toolbar ion-button ion-icon {\n  font-size: xx-large;\n  font-weight: bold;\n}\nion-content .title-slider-content {\n  font-style: normal;\n  font-weight: bold;\n  font-size: large;\n  line-height: 30px;\n  color: #FF6000;\n}\nion-content .slider-content {\n  padding: 20px 0;\n  font-style: normal;\n  font-weight: normal;\n  font-size: medium;\n  line-height: 28px;\n}\nion-footer ion-button {\n  width: 120px;\n  --background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  color: #fff;\n  border-radius: 10px;\n  margin: 15px;\n  float: right;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKO0FBRVE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FBQVo7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQUpSO0FBT0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQVdJO0VBQ0ksWUFBQTtFQUNBLDZEQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUlIiLCJmaWxlIjoid2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIC50aXRsZS1zbGlkZXItY29udGVudHtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICBjb2xvcjogI0ZGNjAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2xpZGVyLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tZm9vdGVye1xyXG5cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI0ZGNjAwMCwgI2Y5OTk1OCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWEnO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 1247:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signin/signin.component.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen=\"true\">\r\n\r\n  <div id=\"recaptcha-container\" style=\"display: none;\"></div>\r\n\r\n  <div id=\"TopMainBG\"\r\n    style=\"background: url(assets/img/topShape.png); background-repeat: no-repeat; background-position-y: -6rem;min-height: 830px;\">\r\n    <div id=\"TopMainImg\"\r\n      style=\"background: url(assets/svg/whiteLogo.svg); background-repeat: no-repeat;background-position: left top;min-height: 830px\">\r\n      <div style=\"padding-top: 11rem;position: relative;\">\r\n        <ion-grid class=\"MainContain\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <div>\r\n                <h1 style=\"margin: 0;\">Sign in</h1>\r\n              </div>\r\n              <div style=\"margin-bottom: 2px;\">\r\n                <label>Enter your Mobile No.</label>\r\n                <ion-row>\r\n                  <ion-col size=\"3\">\r\n                    <input type=\"text\" [(ngModel)]=\"contryCode\" placeholder=\"Enter Contry Code\">\r\n                  </ion-col>\r\n                  <ion-col size=\"9\">\r\n                    <input type=\"number\" [(ngModel)]=\"number\" placeholder=\"Enter Mobile No.\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n              <div class=\"animate__animated animate__fadeInUp animate__faster\" *ngIf=\"sendOtp\"\r\n                style=\"margin-bottom: 2px;\">\r\n                <div>\r\n                  <label>Enter OTP</label>\r\n                </div>\r\n                <div class=\"ion-text-center\" style=\"margin-top: 10px;\">\r\n                  <ng-otp-input (onInputChange)=\"onOtpChange($event)\" [config]=\"config\"></ng-otp-input>\r\n                </div>\r\n              </div>\r\n              <div class=\"ionButton\">\r\n                <ion-button expand=\"block\" mode=\"ios\" *ngIf=\"!sendOtp\" (click)=\"send_otp()\">\r\n                  <ng-container *ngIf=\"!loadingSendOTP\">\r\n                    Send OTP\r\n                  </ng-container>\r\n                  <ion-spinner *ngIf=\"loadingSendOTP\"></ion-spinner>\r\n                </ion-button>\r\n                <ion-button expand=\"block\" mode=\"ios\" *ngIf=\"sendOtp\" (click)=\"verify_otp()\">\r\n                  <ng-container *ngIf=\"!loadingVirifyOTP\">\r\n                    Verify OTP\r\n                  </ng-container>\r\n                  <ion-spinner *ngIf=\"loadingVirifyOTP\"></ion-spinner>\r\n                </ion-button>\r\n              </div>\r\n              <p class=\"ion-text-center\"> New here ? <ion-text (click)=\"signUp()\" color=\"orange\"><b>Sign Up</b></ion-text>\r\n              </p>\r\n              <div class=\"ion-text-center\" style=\"padding: 15 px 0;font-size: large;\">\r\n                <ion-text><b>OR</b></ion-text>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col size=\"6\">\r\n              <ion-button mode=\"ios\" expand=\"block\" color=\"white\" class=\"google-button\" [disabled]=\"googleLoader\" (click)=\"loginWithGoogle()\">\r\n                <img src=\"assets/img/google.svg\" alt=\"\" style=\"height: 1.6rem;\" *ngIf=\"!googleLoader\">\r\n                <ion-spinner color=\"orange\" *ngIf=\"googleLoader\"></ion-spinner>\r\n              </ion-button>\r\n            </ion-col>\r\n            <ion-col size=\"6\">\r\n              <ion-button mode=\"ios\" expand=\"block\" class=\"facebook-button\" [disabled]=\"facebookLoader\" (click)=\"loginWithFacebook()\">\r\n                <i class=\"fa fa-facebook\" aria-hidden=\"true\" *ngIf=\"!facebookLoader\"></i>\r\n                <ion-spinner color=\"white\" *ngIf=\"facebookLoader\"></ion-spinner>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>");

/***/ }),

/***/ 7920:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content fullscreen=\"true\">\r\n\r\n  <div id=\"recaptcha-container\" style=\"display: none;\"></div>\r\n\r\n  <div id=\"TopMainBG\"\r\n    style=\"background: url(assets/img/topShape.png); background-repeat: no-repeat; background-position-y: -7.5rem;height: 830px;\">\r\n    <div id=\"TopMainImg\"\r\n      style=\"background: url(assets/svg/whiteLogo.svg); background-repeat: no-repeat;background-position: left top;height: 830px;\">\r\n      <div style=\"padding-top: 9rem;position: relative;\">\r\n        <ion-grid class=\"MainContain\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <div>\r\n                <h1 style=\"margin: unset;\">Sign up</h1>\r\n              </div>\r\n              <div class=\"inputs\">\r\n                <div class=\"inputGroup\" style=\"margin-bottom: 7px;\">\r\n                  <label>Name</label>\r\n                  <input type=\"text\" [(ngModel)]=\"userName\" placeholder=\"Enter Name\">\r\n                </div>\r\n                <div class=\"inputGroup\" style=\"margin-bottom: 7px;\">\r\n                  <label>Email</label>\r\n                  <input type=\"email\" [(ngModel)]=\"userEmail\" placeholder=\"Enter Email\">\r\n                </div>\r\n              </div>\r\n              <div style=\"margin-bottom: 8px;\">\r\n                <label>Mobile No.</label>\r\n                <ion-row>\r\n                  <ion-col size=\"3\">\r\n                    <input type=\"text\" [(ngModel)]=\"contryCode\" placeholder=\"Enter Contry Code\">\r\n                  </ion-col>\r\n                  <ion-col size=\"9\">\r\n                    <input type=\"number\" [(ngModel)]=\"number\" placeholder=\"Enter Mobile No.\">\r\n                  </ion-col>\r\n                </ion-row>\r\n              </div>\r\n              <div class=\"animate__animated animate__fadeInUp animate__faster\" *ngIf=\"sendOtp\"\r\n                style=\"margin-bottom: 8px;\">\r\n                <div>\r\n                  <label>Enter OTP</label>\r\n                </div>\r\n                <div class=\"ion-text-center\" style=\"margin-top: 8px;\">\r\n                  <ng-otp-input (onInputChange)=\"onOtpChange($event)\" [config]=\"config\"></ng-otp-input>\r\n                </div>\r\n              </div>\r\n              <div class=\"ionButton\">\r\n                <ion-button mode=\"ios\" expand=\"block\" *ngIf=\"!sendOtp\" (click)=\"send_otp()\">\r\n                  <ng-container *ngIf=\"!loadingSendOTP\">\r\n                    Send OTP\r\n                  </ng-container>\r\n                  <ion-spinner *ngIf=\"loadingSendOTP\"></ion-spinner>\r\n                </ion-button>\r\n                <ion-button mode=\"ios\" expand=\"block\" *ngIf=\"sendOtp\" (click)=\"verify_otp()\">\r\n                  <ng-container *ngIf=\"!loadingVirifyOTP\">\r\n                    Verify OTP\r\n                  </ng-container>\r\n                  \r\n\r\n                  <ion-spinner *ngIf=\"loadingVirifyOTP\"></ion-spinner>\r\n                </ion-button>\r\n              </div>\r\n              <p class=\"ion-text-center\"> Already Account ? <ion-text (click)=\"signin()\" color=\"orange\"><b>Sign In</b></ion-text>\r\n              </p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 6798:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/splash-screen/splash-screen.component.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n<ion-content>\r\n\r\n  <div class=\"container\">\r\n    <!-- <img src=\"assets/img/logo1.gif\" alt=\"\"> -->\r\n    <ion-item color=\"transparent\" lines=\"none\">\r\n      <img slot=\"start\" src=\"assets/img/mainLogo.png\" class=\"animate__animated animate__zoomIn\" alt=\"\">\r\n      <ion-label>\r\n        <img src=\"assets/svg/WORKINBUDDY.svg\" class=\"animate__animated animate__fadeInLeft animate__delay-1s\" alt=\"\">\r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n  <div class=\"text\">A coworking space for your business</div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n    <button class=\"getPackage\" [routerLink]=\"['/auth/welcome']\">Get Started</button>\r\n  </ion-item>\r\n</ion-footer>");

/***/ }),

/***/ 8718:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/welcome/welcome.component.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [routerLink]=\"['/auth/signin']\" color=\"orange\" mode=\"ios\">\r\n        <ion-text>Skip</ion-text>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n  <ion-slides (ionSlideDidChange)=\"slideChanged()\" class=\"orangeSlide\" pager=\"true\" #slider>\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <img src=\"assets/img/onboard one-01.png\" alt=\"\">\r\n        </ion-row>\r\n        <ion-row style=\"padding: 20px;\">\r\n          <ion-col>\r\n            <div class=\"title-slider-content ion-text-left\">Choose the venue</div>\r\n            <div class=\"slider-content ion-text-left\">\r\n              We have 100+ work spaces, choose your work space according to your comfort and all our work space was managed well.\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <img src=\"assets/img/onboard two-01.png\" alt=\"\">\r\n        </ion-row>\r\n        <ion-row style=\"padding: 20px;\">\r\n          <ion-col>\r\n            <div class=\"title-slider-content ion-text-left\">Choose payment type</div>\r\n            <div class=\"slider-content ion-text-left\">\r\n              Copy Our payments are secure. Choose you comfort way of payment and book your venue without hassale of present payment\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n\r\n\r\n    <ion-slide>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <img src=\"assets/img/onboard three-01.png\" alt=\"\">\r\n        </ion-row>\r\n        <ion-row style=\"padding: 20px;\">\r\n          <ion-col>\r\n            <div class=\"title-slider-content ion-text-left\">Start your work</div>\r\n            <div class=\"slider-content ion-text-left\">\r\n              Once if you have booked your workspace, start your work at your lovable workspace with world class interiors.\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <div class=\"swiper-pagination-bullet\"></div>\r\n  <ion-button *ngIf=\"2 > count\" style=\"background: linear-gradient(to left bottom, #ff6000, #ffaa70);\" mode=\"ios\" size=\"small\" (click)=\"swipeNext()\">Next</ion-button>\r\n  <ion-button *ngIf=\"count === 2\" style=\"background: linear-gradient(to left bottom, #ff6000, #ffaa70);\" mode=\"ios\" size=\"small\" (click)=\"home()\">Next</ion-button>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map