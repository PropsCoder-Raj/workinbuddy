(self["webpackChunkworkinbuddy"] = self["webpackChunkworkinbuddy"] || []).push([["src_app_support_support_module_ts"],{

/***/ 4276:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialSharing": () => (/* binding */ SocialSharing)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);




var SocialSharing = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharing.prototype.share = function (message, subject, file, url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharing.prototype.shareWithOptions = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareViaEmail = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToPhone = function (phone, message, fileOrFileArray, url) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "shareViaWhatsAppToPhone", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.pluginName = "SocialSharing";
    SocialSharing.plugin = "cordova-plugin-x-socialsharing";
    SocialSharing.pluginRef = "plugins.socialsharing";
    SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
SocialSharing.ɵfac = /*@__PURE__*/ function () { var ɵSocialSharing_BaseFactory; return function SocialSharing_Factory(t) { return (ɵSocialSharing_BaseFactory || (ɵSocialSharing_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](SocialSharing)))(t || SocialSharing); }; }();
SocialSharing.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SocialSharing, factory: function (t) { return SocialSharing.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](SocialSharing, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return SocialSharing;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc29jaWFsLXNoYXJpbmcvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBRzBCLElBcUNTLGlDQUFpQjtBQUFDO0FBRTlCO0FBQ3VDO0FBQzVELElBU0EsNkJBQUssYUFBQyxPQUFnQixFQUFFLE9BQWdCLEVBQUUsSUFBd0IsRUFBRSxHQUFZO0FBS2xDLElBTzlDLHdDQUFnQixhQUFDLE9BTWhCO0FBTUksSUFZTCxtQ0FBVyxhQUFDLE9BQWUsRUFBRSxPQUFnQixFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPckUsSUFTeEIsdUNBQWUsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFRN0QsSUFRQSx3Q0FBZ0IsYUFBQyxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPNUQsSUFVRiw0REFBb0MsYUFDbEMsT0FBZSxFQUNmLEtBQWMsRUFDZCxHQUFZLEVBQ1osZ0JBQXlCO0FBU1YsSUFLakIseUNBQWlCLGFBQUMsT0FBZSxFQUFFLEtBQWE7QUFNMUIsSUFVdEIsd0NBQWdCLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxHQUFZO0FBTWYsSUFXL0Msa0RBQTBCLGFBQUMsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFPckQsSUFNckMsbUNBQVcsYUFBQyxNQUFjLEVBQUUsV0FBbUI7QUFNckMsSUFLVix3Q0FBZ0I7QUFPQSxJQVloQixxQ0FBYSxhQUNYLE9BQWUsRUFDZixPQUFlLEVBQ2YsRUFBWSxFQUNaLEVBQWEsRUFDYixHQUFjLEVBQ2QsS0FBeUI7QUFPa0MsSUFZN0QsZ0NBQVEsYUFBQyxPQUFlLEVBQUUsT0FBZSxFQUFFLE9BQWdCLEVBQUUsS0FBYyxFQUFFLEdBQVk7QUFNckUsSUFNcEIsK0NBQXVCLGFBQUMsWUFBb0I7QUFJTCxJQU12Qyx3Q0FBZ0IsYUFBQyxlQUFrQztBQUtSLElBWTNDLCtDQUF1QixhQUNyQixLQUFhLEVBQ2IsT0FBZSxFQUNmLGVBQWtDLEVBQ2xDLEdBQVk7QUFLcUY7QUFBZ0Q7QUFBNkQ7QUFBdUQ7QUFBNEY7aURBMVFwVyxVQUFVOzs7OzBCQUNMO0FBQUMsd0JBMUNQO0FBQUUsRUEwQ2lDLGlCQUFpQjtBQUNuRCxTQURZLGFBQWE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFNvY2lhbCBTaGFyaW5nXG4gKiBAcHJlbWllciBzb2NpYWwtc2hhcmluZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBTaGFyZSB0ZXh0LCBmaWxlcywgaW1hZ2VzLCBhbmQgbGlua3MgdmlhIHNvY2lhbCBuZXR3b3Jrcywgc21zLCBhbmQgZW1haWwuXG4gKlxuICogRm9yIEJyb3dzZXIgdXNhZ2UgY2hlY2sgb3V0IHRoZSBXZWIgU2hhcmUgQVBJIGRvY3M6IGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9Tb2NpYWxTaGFyaW5nLVBob25lR2FwLVBsdWdpbiM1LXdlYi1zaGFyZS1hcGlcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNvY2lhbFNoYXJpbmcgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3NvY2lhbC1zaGFyaW5nL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzb2NpYWxTaGFyaW5nOiBTb2NpYWxTaGFyaW5nKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiAvLyBDaGVjayBpZiBzaGFyaW5nIHZpYSBlbWFpbCBpcyBzdXBwb3J0ZWRcbiAqIHRoaXMuc29jaWFsU2hhcmluZy5jYW5TaGFyZVZpYUVtYWlsKCkudGhlbigoKSA9PiB7XG4gKiAgIC8vIFNoYXJpbmcgdmlhIGVtYWlsIGlzIHBvc3NpYmxlXG4gKiB9KS5jYXRjaCgoKSA9PiB7XG4gKiAgIC8vIFNoYXJpbmcgdmlhIGVtYWlsIGlzIG5vdCBwb3NzaWJsZVxuICogfSk7XG4gKlxuICogLy8gU2hhcmUgdmlhIGVtYWlsXG4gKiB0aGlzLnNvY2lhbFNoYXJpbmcuc2hhcmVWaWFFbWFpbCgnQm9keScsICdTdWJqZWN0JywgWydyZWNpcGllbnRAZXhhbXBsZS5vcmcnXSkudGhlbigoKSA9PiB7XG4gKiAgIC8vIFN1Y2Nlc3MhXG4gKiB9KS5jYXRjaCgoKSA9PiB7XG4gKiAgIC8vIEVycm9yIVxuICogfSk7XG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTb2NpYWxTaGFyaW5nJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teC1zb2NpYWxzaGFyaW5nJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zb2NpYWxzaGFyaW5nJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9Tb2NpYWxTaGFyaW5nLVBob25lR2FwLVBsdWdpbicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSddLFxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTb2NpYWxTaGFyaW5nIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogU2hhcmVzIHVzaW5nIHRoZSBzaGFyZSBzaGVldFxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBUaGUgbWVzc2FnZSB5b3Ugd291bGQgbGlrZSB0byBzaGFyZS5cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ30gVGhlIHN1YmplY3RcbiAgICogQHBhcmFtIGZpbGUge3N0cmluZ3xzdHJpbmdbXX0gVVJMKHMpIHRvIGZpbGUocykgb3IgaW1hZ2UocyksIGxvY2FsIHBhdGgocykgdG8gZmlsZShzKSBvciBpbWFnZShzKSwgb3IgYmFzZTY0IGRhdGEgb2YgYW4gaW1hZ2UuIE9ubHkgdGhlIGZpcnN0IGZpbGUvaW1hZ2Ugd2lsbCBiZSB1c2VkIG9uIFdpbmRvd3MgUGhvbmUuXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gQSBVUkwgdG8gc2hhcmVcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDQsXG4gICAgZXJyb3JJbmRleDogNSxcbiAgfSlcbiAgc2hhcmUobWVzc2FnZT86IHN0cmluZywgc3ViamVjdD86IHN0cmluZywgZmlsZT86IHN0cmluZyB8IHN0cmluZ1tdLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgdXNpbmcgdGhlIHNoYXJlIHNoZWV0IHdpdGggYWRkaXRpb25hbCBvcHRpb25zIGFuZCByZXR1cm5zIGEgcmVzdWx0IG9iamVjdCBvciBhbiBlcnJvciBtZXNzYWdlIChyZXF1aXJlcyBwbHVnaW4gdmVyc2lvbiA1LjEuMCspXG4gICAqIEBwYXJhbSBvcHRpb25zIHtvYmplY3R9IFRoZSBvcHRpb25zIG9iamVjdCB3aXRoIHRoZSBtZXNzYWdlLCBzdWJqZWN0LCBmaWxlcywgdXJsIGFuZCBjaG9vc2VyVGl0bGUgcHJvcGVydGllcy5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVXaXRoT3B0aW9ucyhvcHRpb25zOiB7XG4gICAgbWVzc2FnZT86IHN0cmluZztcbiAgICBzdWJqZWN0Pzogc3RyaW5nO1xuICAgIGZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgdXJsPzogc3RyaW5nO1xuICAgIGNob29zZXJUaXRsZT86IHN0cmluZztcbiAgfSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB5b3UgY2FuIHNoYXJlIHZpYSBhIHNwZWNpZmljIGFwcC5cbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gQXBwIG5hbWUgb3IgcGFja2FnZSBuYW1lLiBFeGFtcGxlczogaW5zdGFncmFtIG9yIGNvbS5hcHBsZS5zb2NpYWwuZmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDUsXG4gICAgZXJyb3JJbmRleDogNixcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgY2FuU2hhcmVWaWEoYXBwTmFtZTogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nLCBzdWJqZWN0Pzogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIFR3aXR0ZXJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDMsXG4gICAgZXJyb3JJbmRleDogNCxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFUd2l0dGVyKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBGYWNlYm9va1xuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMyxcbiAgICBlcnJvckluZGV4OiA0LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYUZhY2Vib29rKG1lc3NhZ2U6IHN0cmluZywgaW1hZ2U/OiBzdHJpbmcsIHVybD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBGYWNlYm9vayB3aXRoIGEgcGFzdGUgbWVzc2FnZSBoaW50XG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBwYXN0ZU1lc3NhZ2VIaW50IHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA0LFxuICAgIGVycm9ySW5kZXg6IDUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhRmFjZWJvb2tXaXRoUGFzdGVNZXNzYWdlSGludChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdXJsPzogc3RyaW5nLFxuICAgIHBhc3RlTWVzc2FnZUhpbnQ/OiBzdHJpbmdcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIEluc3RhZ3JhbVxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gaW1hZ2Uge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWFJbnN0YWdyYW0obWVzc2FnZTogc3RyaW5nLCBpbWFnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIFdoYXRzQXBwXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHAobWVzc2FnZTogc3RyaW5nLCBpbWFnZT86IHN0cmluZywgdXJsPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmVzIGRpcmVjdGx5IHRvIGEgV2hhdHNBcHAgQ29udGFjdFxuICAgKiBAcGFyYW0gcmVjZWl2ZXIge3N0cmluZ30gUGFzcyBwaG9uZSBudW1iZXIgb24gQW5kcm9pZCwgYW5kIEFkZHJlc3Nib29rIElEIChhYmlkKSBvbiBpT1NcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gTWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBpbWFnZSB7c3RyaW5nfSBJbWFnZSB0byBzZW5kIChkb2VzIG5vdCB3b3JrIG9uIGlPU1xuICAgKiBAcGFyYW0gdXJsIHtzdHJpbmd9IExpbmsgdG8gc2VuZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogNCxcbiAgICBlcnJvckluZGV4OiA1LFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxuICB9KVxuICBzaGFyZVZpYVdoYXRzQXBwVG9SZWNlaXZlcihyZWNlaXZlcjogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZSB2aWEgU01TXG4gICAqIEBwYXJhbSBtZXNzZ2Uge3N0cmluZ30gbWVzc2FnZSB0byBzZW5kXG4gICAqIEBwYXJhbSBwaG9uZU51bWJlciB7c3RyaW5nfSBOdW1iZXIgb3IgbXVsdGlwbGUgbnVtYmVycyBzZXBlcmF0ZWQgYnkgY29tbWFzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhU01TKG1lc3NnZTogc3RyaW5nLCBwaG9uZU51bWJlcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHlvdSBjYW4gc2hhcmUgdmlhIGVtYWlsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIGNhblNoYXJlVmlhRW1haWwoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIEVtYWlsXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBzdWJqZWN0IHtzdHJpbmd9XG4gICAqIEBwYXJhbSB0byB7c3RyaW5nW119XG4gICAqIEBwYXJhbSBjYyB7c3RyaW5nW119IE9wdGlvbmFsXG4gICAqIEBwYXJhbSBiY2Mge3N0cmluZ1tdfSBPcHRpb25hbFxuICAgKiBAcGFyYW0gZmlsZXMge3N0cmluZ3xzdHJpbmdbXX0gT3B0aW9uYWwgVVJMIG9yIGxvY2FsIHBhdGggdG8gZmlsZShzKSB0byBhdHRhY2hcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgICBzdWNjZXNzSW5kZXg6IDYsXG4gICAgZXJyb3JJbmRleDogNyxcbiAgfSlcbiAgc2hhcmVWaWFFbWFpbChcbiAgICBtZXNzYWdlOiBzdHJpbmcsXG4gICAgc3ViamVjdDogc3RyaW5nLFxuICAgIHRvOiBzdHJpbmdbXSxcbiAgICBjYz86IHN0cmluZ1tdLFxuICAgIGJjYz86IHN0cmluZ1tdLFxuICAgIGZpbGVzPzogc3RyaW5nIHwgc3RyaW5nW11cbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hhcmUgdmlhIEFwcE5hbWVcbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gQXBwIG5hbWUgb3IgcGFja2FnZSBuYW1lLiBFeGFtcGxlczogaW5zdGFncmFtIG9yIGNvbS5hcHBsZS5zb2NpYWwuZmFjZWJvb2tcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ31cbiAgICogQHBhcmFtIHN1YmplY3Qge3N0cmluZ31cbiAgICogQHBhcmFtIGltYWdlIHtzdHJpbmd9XG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDUsXG4gICAgZXJyb3JJbmRleDogNixcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcbiAgfSlcbiAgc2hhcmVWaWEoYXBwTmFtZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcsIHN1YmplY3Q/OiBzdHJpbmcsIGltYWdlPzogc3RyaW5nLCB1cmw/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBkZWZpbmVzIHRoZSBwb3B1cCBwb3NpdGlvbiBiZWZvcmUgY2FsbCB0aGUgc2hhcmUgbWV0aG9kLlxuICAgKiBAcGFyYW0gdGFyZ2V0Qm91bmRzIHtzdHJpbmd9IGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxuICB9KVxuICBzZXRJUGFkUG9wdXBDb29yZGluYXRlcyh0YXJnZXRCb3VuZHM6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogU2F2ZSBhbiBhcnJheSBvZiBpbWFnZXMgdG8gdGhlIGNhbWVyYSByb2xsXG4gICAqIEBwYXJhbSAge3N0cmluZ3xzdHJpbmdbXX0gZmlsZU9yRmlsZUFycmF5IFNpbmdsZSBvciBtdWx0aXBsZSBmaWxlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+IH1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXG4gIH0pXG4gIHNhdmVUb1Bob3RvQWxidW0oZmlsZU9yRmlsZUFycmF5OiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNoYXJlcyBkaXJlY3RseSB0byBhIFdoYXRzQXBwIENvbnRhY3Qgd2l0aCBwaG9uZSBudW1iZXIuXG4gICAqIEBwYXJhbSBwaG9uZSB7c3RyaW5nfSBQYXNzIHBob25lIG51bWJlclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBNZXNzYWdlIHRvIHNlbmRcbiAgICogQHBhcmFtIGZpbGVPckZpbGVBcnJheSBmaWxlT3JGaWxlQXJyYXkgU2luZ2xlIG9yIG11bHRpcGxlIGZpbGVzXG4gICAqIEBwYXJhbSB1cmwge3N0cmluZ30gTGluayB0byBzZW5kXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiA1LFxuICAgIGVycm9ySW5kZXg6IDYsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXG4gIH0pXG4gIHNoYXJlVmlhV2hhdHNBcHBUb1Bob25lKFxuICAgIHBob25lOiBzdHJpbmcsXG4gICAgbWVzc2FnZTogc3RyaW5nLFxuICAgIGZpbGVPckZpbGVBcnJheTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgdXJsPzogc3RyaW5nXG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 3316:
/*!********************************************************!*\
  !*** ./src/app/support/about-us/about-us.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./about-us.component.html */ 7831);
/* harmony import */ var _about_us_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-us.component.scss */ 2797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AboutUsComponent = class AboutUsComponent {
    constructor() { }
    ngOnInit() { }
};
AboutUsComponent.ctorParameters = () => [];
AboutUsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-about-us',
        template: _raw_loader_about_us_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_about_us_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AboutUsComponent);



/***/ }),

/***/ 8004:
/*!************************************************************!*\
  !*** ./src/app/support/contact-us/contact-us.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./contact-us.component.html */ 7880);
/* harmony import */ var _contact_us_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.component.scss */ 386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);








let ContactUsComponent = class ContactUsComponent {
    constructor(firestore, userS, toastController, router) {
        this.firestore = firestore;
        this.userS = userS;
        this.toastController = toastController;
        this.router = router;
        this.loader = false;
        this.subject = '';
    }
    ionViewWillEnter() {
        try {
            let str = document.getElementById('chatbot-chat').style.display;
            if (str === 'none') {
                document.getElementById('chatbot-chat').style.display = 'block';
            }
        }
        catch (_a) {
            window.__be = window.__be || {};
            window.__be.id = "617b973c825682000749dc94";
            (function () {
                var be = document.createElement('script');
                be.type = 'text/javascript';
                be.async = true;
                be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
                var s = document.getElementsByTagName('script')[0];
                s.parentNode.insertBefore(be, s);
            })();
        }
    }
    ngOnInit() { }
    closeChatBot() {
        document.getElementById('chatbot-chat').style.display = 'none';
    }
    successPresentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                mode: 'ios',
                duration: 2000,
                color: 'danger'
            });
            toast.present();
        });
    }
    submit() {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.userS.userName !== '' && this.userS.userEmail !== '' && this.userS.userPhoneNumber !== '' && this.subject !== '') {
            if (re.test(this.userS.userEmail) == false) {
                this.errorPresentToast("User Email not valid");
            }
            else {
                this.loader = true;
                const newId = this.firestore.createId();
                this.firestore.collection("contactRequest").doc(newId).set({
                    docId: newId,
                    userName: this.userS.userName,
                    userEmail: this.userS.userEmail,
                    userMobileNumber: this.userS.userPhoneNumber,
                    subject: this.subject,
                    uid: this.userS.userUID,
                    timestamp: new Date(),
                    status: 0
                }).then(res => {
                    this.closeChatBot();
                    this.loader = false;
                    this.successPresentToast("Request Send");
                    this.router.navigate(['/home']);
                    this.firestore.collection("users").doc(this.userS.userDocId).update({
                        name: this.userS.userName,
                        email: this.userS.userEmail,
                        phoneNumber: this.userS.userPhoneNumber
                    });
                });
            }
        }
        else {
            this.errorPresentToast("All fields mendatory");
        }
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ContactUsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-contact-us',
        template: _raw_loader_contact_us_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contact_us_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ContactUsComponent);



/***/ }),

/***/ 5213:
/*!**********************************************!*\
  !*** ./src/app/support/faq/faq.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": () => (/* binding */ FaqComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_faq_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./faq.component.html */ 7285);
/* harmony import */ var _faq_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.component.scss */ 9062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FaqComponent = class FaqComponent {
    constructor() { }
    ngOnInit() { }
};
FaqComponent.ctorParameters = () => [];
FaqComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-faq',
        template: _raw_loader_faq_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faq_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FaqComponent);



/***/ }),

/***/ 8013:
/*!********************************************************************!*\
  !*** ./src/app/support/privacy-policy/privacy-policy.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_privacy_policy_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./privacy-policy.component.html */ 8415);
/* harmony import */ var _privacy_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.component.scss */ 9696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let PrivacyPolicyComponent = class PrivacyPolicyComponent {
    constructor() { }
    ngOnInit() { }
};
PrivacyPolicyComponent.ctorParameters = () => [];
PrivacyPolicyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-privacy-policy',
        template: _raw_loader_privacy_policy_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_privacy_policy_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrivacyPolicyComponent);



/***/ }),

/***/ 1379:
/*!****************************************************************!*\
  !*** ./src/app/support/referal-code/referal-code.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReferalCodeComponent": () => (/* binding */ ReferalCodeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_referal_code_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./referal-code.component.html */ 7176);
/* harmony import */ var _referal_code_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referal-code.component.scss */ 4046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/__helper/user.service */ 5875);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 4276);








let ReferalCodeComponent = class ReferalCodeComponent {
    constructor(socialSharing, firestore, userS, toastController) {
        this.socialSharing = socialSharing;
        this.firestore = firestore;
        this.userS = userS;
        this.toastController = toastController;
        this.historyStatus = false;
        this.historyArr = [];
        this.skeletonStatus = false;
    }
    ngOnInit() {
        this.firestore.collection('walletHistory', ref => ref.orderBy("timestamp", "desc").where("uid", '==', this.userS.userUID)).get().subscribe(result => {
            if (result.size > 0) {
                this.skeletonStatus = true;
                result.docs.map((docs) => {
                    let data = docs.data();
                    let userApplyUid = data.userApplyUid;
                    if (data.type === 'referalCodeApply') {
                        this.firestore.collection("users", ref => ref.where('uid', '==', userApplyUid)).valueChanges().subscribe(res => {
                            if (res.length > 0) {
                                this.historyStatus = false;
                                this.historyArr.push({ data: data, userData: res[0] });
                                this.skeletonStatus = false;
                            }
                        });
                    }
                });
            }
        });
    }
    share() {
        this.socialSharing.share("I’m inviting you to use Workinbuddy. Here’s my code ( " + this.userS.userReferalCode + " )");
    }
    copyMessage(val) {
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.presentToast("Referral Code Copied!");
    }
    presentToast(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 2000,
                mode: 'ios'
            });
            toast.present();
        });
    }
};
ReferalCodeComponent.ctorParameters = () => [
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_5__.AngularFirestore },
    { type: src_app_helper_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ReferalCodeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-referal-code',
        template: _raw_loader_referal_code_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_referal_code_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReferalCodeComponent);



/***/ }),

/***/ 185:
/*!***************************************************!*\
  !*** ./src/app/support/support-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportRoutingModule": () => (/* binding */ SupportRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-us/about-us.component */ 3316);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 8004);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq/faq.component */ 5213);
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ 8013);
/* harmony import */ var _referal_code_referal_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./referal-code/referal-code.component */ 1379);
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ 7687);









const routes = [
    {
        path: 'referral-code',
        component: _referal_code_referal_code_component__WEBPACK_IMPORTED_MODULE_4__.ReferalCodeComponent
    },
    {
        path: 'faq',
        component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__.FaqComponent
    },
    {
        path: 'terms-conditions',
        component: _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_5__.TermsConditionsComponent
    },
    {
        path: 'privacy-policy',
        component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_3__.PrivacyPolicyComponent
    },
    {
        path: 'about-us',
        component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_0__.AboutUsComponent
    },
    {
        path: 'contact-us',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_1__.ContactUsComponent
    }
];
let SupportRoutingModule = class SupportRoutingModule {
};
SupportRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
    })
], SupportRoutingModule);



/***/ }),

/***/ 6758:
/*!*******************************************!*\
  !*** ./src/app/support/support.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportModule": () => (/* binding */ SupportModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 185);
/* harmony import */ var _referal_code_referal_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./referal-code/referal-code.component */ 1379);
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq/faq.component */ 5213);
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ 7687);
/* harmony import */ var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./privacy-policy/privacy-policy.component */ 8013);
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/about-us.component */ 3316);
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-us/contact-us.component */ 8004);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 4276);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 476);













let SupportModule = class SupportModule {
};
SupportModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        declarations: [
            _referal_code_referal_code_component__WEBPACK_IMPORTED_MODULE_1__.ReferalCodeComponent,
            _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__.FaqComponent,
            _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_3__.TermsConditionsComponent,
            _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_4__.PrivacyPolicyComponent,
            _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__.AboutUsComponent,
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__.ContactUsComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule
        ],
        providers: [
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__.SocialSharing
        ]
    })
], SupportModule);



/***/ }),

/***/ 7687:
/*!************************************************************************!*\
  !*** ./src/app/support/terms-conditions/terms-conditions.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsConditionsComponent": () => (/* binding */ TermsConditionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_terms_conditions_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./terms-conditions.component.html */ 3044);
/* harmony import */ var _terms_conditions_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms-conditions.component.scss */ 6139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TermsConditionsComponent = class TermsConditionsComponent {
    constructor() { }
    ngOnInit() { }
};
TermsConditionsComponent.ctorParameters = () => [];
TermsConditionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-terms-conditions',
        template: _raw_loader_terms_conditions_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_terms_conditions_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TermsConditionsComponent);



/***/ }),

/***/ 2797:
/*!**********************************************************!*\
  !*** ./src/app/support/about-us/about-us.component.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content div {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQUFSIiwiZmlsZSI6ImFib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 386:
/*!**************************************************************!*\
  !*** ./src/app/support/contact-us/contact-us.component.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content h2 {\n  font-weight: bold;\n}\nion-content .packages .items {\n  padding: unset;\n}\nion-content .packages .items ion-card {\n  margin: 5px;\n  background: #FCF8F7;\n  box-shadow: unset;\n}\nion-content .packages .items ion-card ion-card-header {\n  padding: unset;\n}\nion-content .packages .items ion-card ion-card-header p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 16px;\n}\nion-content .packages .items ion-card ion-card-content {\n  padding: 5px;\n}\nion-content .packages .items ion-card ion-card-content p {\n  text-align: center;\n  color: #FF8010;\n  font-weight: 600;\n  font-size: 22px;\n}\nion-content .packages .items ion-card ion-card-content ion-row {\n  border-bottom: 1px solid #ffc299c4;\n}\nion-content .packages .items ion-card ion-card-content ion-row .col_1 {\n  padding: unset;\n}\nion-content .packages .items ion-card ion-card-content ion-row .col_1 ion-icon {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  left: 50%;\n}\nion-content .getPackage {\n  text-align: center;\n  height: 50px;\n  width: 100%;\n  color: #fff;\n  background: linear-gradient(to right top, #FF6000, #f99958);\n  font-family: \"Geometria\";\n  border: solid 1px #fff;\n  border-radius: 10px;\n  font-size: large;\n}\nion-content .inputs label {\n  font-style: normal;\n  font-weight: normal;\n  font-size: small;\n  line-height: 18px;\n  color: #FF6000;\n}\nion-content .inputs input {\n  outline: unset;\n  width: 100%;\n  border: 1px solid #FF6000;\n  border-radius: 10px;\n  margin-top: 5px;\n  font-size: small;\n  padding: 10px;\n}\nion-content .inputs textarea {\n  outline: unset;\n  width: 100%;\n  border: 1px solid #FF6000;\n  border-radius: 10px;\n  margin-top: 5px;\n  font-size: small;\n  padding: 10px;\n}\nion-content .inputs .inputGroup {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQUFSO0FBSU07RUFDRSxjQUFBO0FBRlI7QUFHUTtFQUNFLFdBQUE7RUFBWSxtQkFBQTtFQUFvQixpQkFBQTtBQUMxQztBQUFVO0VBQ0UsY0FBQTtBQUVaO0FBRFk7RUFDRSxrQkFBQTtFQUFtQixjQUFBO0VBQWUsZ0JBQUE7RUFBaUIsZUFBQTtBQU1qRTtBQUhVO0VBQ0UsWUFBQTtBQUtaO0FBSlk7RUFDRSxrQkFBQTtFQUFtQixjQUFBO0VBQWUsZ0JBQUE7RUFBaUIsZUFBQTtBQVNqRTtBQVBZO0VBQ0Usa0NBQUE7QUFTZDtBQVJjO0VBQ0UsY0FBQTtBQVVoQjtBQVRnQjtFQUNFLFNBQUE7RUFBVSxrQkFBQTtFQUFtQixRQUFBO0VBQVMsZ0NBQUE7RUFBaUMsU0FBQTtBQWV6RjtBQU5JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwyREFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBUVI7QUFKTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtBQUtSO0FBRk07RUFDRSxjQUFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBSVY7QUFETTtFQUNFLGNBQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFHVjtBQUFNO0VBQ0UsZ0JBQUE7QUFFUiIsImZpbGUiOiJjb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBoMntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAucGFja2FnZXN7XHJcbiAgICAgIC5pdGVtc3tcclxuICAgICAgICBwYWRkaW5nOiB1bnNldDtcclxuICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgIG1hcmdpbjogNXB4O2JhY2tncm91bmQ6ICNGQ0Y4Rjc7Ym94LXNoYWRvdzogdW5zZXQ7XHJcbiAgICAgICAgICBpb24tY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6dW5zZXQ7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjRkY4MDEwO2ZvbnQtd2VpZ2h0OiA2MDA7Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO2NvbG9yOiAjRkY4MDEwO2ZvbnQtd2VpZ2h0OiA2MDA7Zm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2ZmYzI5OWM0O1xyXG4gICAgICAgICAgICAgIC5jb2xfMXtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtwb3NpdGlvbjogYWJzb2x1dGU7dG9wOiA1MCU7dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7bGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nZXRQYWNrYWdle1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0IHRvcCwgI0ZGNjAwMCwgI2Y5OTk1OCk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHZW9tZXRyaWEnO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dHN7XHJcbiAgICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgICAgIGNvbG9yOiAjRkY2MDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dHtcclxuICAgICAgICBvdXRsaW5lOiB1bnNldDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGNjAwMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dGFyZWF7XHJcbiAgICAgICAgb3V0bGluZTogdW5zZXQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjYwMDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbnB1dEdyb3Vwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 9062:
/*!************************************************!*\
  !*** ./src/app/support/faq/faq.component.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content div {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7QUFBUiIsImZpbGUiOiJmYXEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGRpdntcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ 9696:
/*!**********************************************************************!*\
  !*** ./src/app/support/privacy-policy/privacy-policy.component.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content div {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtBQUFSIiwiZmlsZSI6InByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBkaXZ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ 4046:
/*!******************************************************************!*\
  !*** ./src/app/support/referal-code/referal-code.component.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-header {\n  background: linear-gradient(to left top, #ff6000, #ffaa70);\n}\n\nion-content .topSection {\n  background: linear-gradient(to left bottom, #ff6000, #ffaa70);\n}\n\nion-content .topSection ion-card {\n  border-radius: 10px;\n  box-shadow: unset;\n}\n\nion-content .topSection ion-card .referalCodeBox {\n  background: rgba(255, 96, 0, 0.1);\n  border-radius: 10px;\n}\n\nion-content .topSection ion-card .referalCodeBox ion-item {\n  --background: transparent;\n}\n\nion-content .topSection ion-card .referalCodeBox ion-item ion-label {\n  font-family: \"Geometria\";\n}\n\nion-content .dataSection ion-item h3 {\n  font-weight: 800;\n  color: black;\n}\n\nion-content .dataSection ion-item div {\n  font-size: x-small;\n  color: gray;\n}\n\nion-content ion-grid h3 {\n  font-weight: bold;\n}\n\nion-content ion-grid div h6 {\n  color: gray;\n  font-weight: bold;\n}\n\nion-content ion-grid h6 {\n  font-weight: bold;\n}\n\nion-content ion-grid ol li {\n  margin: 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZmVyYWwtY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBEQUFBO0FBQ0o7O0FBSUk7RUFDRSw2REFBQTtBQUROOztBQUdNO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQURSOztBQUVRO0VBQ0UsaUNBQUE7RUFDQSxtQkFBQTtBQUFWOztBQUVVO0VBQ0UseUJBQUE7QUFBWjs7QUFFWTtFQUNFLHdCQUFBO0FBQWQ7O0FBVVU7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUFSZDs7QUFVVTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQVJkOztBQWNNO0VBQ0UsaUJBQUE7QUFaUjs7QUFnQlE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFkVjs7QUFrQk07RUFDRSxpQkFBQTtBQWhCUjs7QUFvQlE7RUFDRSxhQUFBO0FBbEJWIiwiZmlsZSI6InJlZmVyYWwtY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICNmZjYwMDAsICNmZmFhNzApO1xyXG4gIH0gIFxyXG4gIFxyXG4gIGlvbi1jb250ZW50IHtcclxuICBcclxuICAgIC50b3BTZWN0aW9ue1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCBib3R0b20sICNmZjYwMDAsICNmZmFhNzApO1xyXG4gIFxyXG4gICAgICBpb24tY2FyZHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xyXG4gICAgICAgIC5yZWZlcmFsQ29kZUJveCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogI0ZGNjAwMCwgJGFscGhhOiAwLjEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgXHJcbiAgICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2VvbWV0cmlhJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgXHJcbiAgICAuZGF0YVNlY3Rpb257XHJcbiAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tZ3JpZCB7XHJcbiAgXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGg2IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBvbCB7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Il19 */");

/***/ }),

/***/ 6139:
/*!**************************************************************************!*\
  !*** ./src/app/support/terms-conditions/terms-conditions.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content div {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVIiLCJmaWxlIjoidGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgZGl2e1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ 7831:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/about-us/about-us.component.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">About Us</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" [scrollEvents]=\"true\" >\r\n  <div>\r\n    <p>It all started when Jijulal (JC) visited several cafes during the pandemic, where he was astonished to see low footfall during the day at key cafes &amp; hotel across UAE. JC understood that the greying office cubicle isn’t ideal grounds for a productive, engaged or happy working. <br><br> <strong>WorkinBuddy emerged from a basic idea and key principle to bridge the gap between restaurants &amp; members.</strong></p>\r\n    <p>\t\t\t\t\t\t\t\tWorkinBuddy not only provides the increased footfall in its locations, but also provides cost effective solutions to start ups, business owners, students & those workin from home during the pandemic. JC believes that coworking spaces are the future of workin where members can work productively, collaboratively and, most importantly, work happier.\t\t\t\t\t\t</p>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 7880:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/contact-us/contact-us.component.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\" (click)=\"closeChatBot()\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">Contact Us</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" [scrollEvents]=\"true\" >\r\n\r\n  <ion-grid class=\"packages\">\r\n    <ion-row>\r\n      <ion-col class=\"items\" size=\"12\">\r\n        <ion-card mode=\"ios\">\r\n          <ion-card-header>\r\n            <p>Contact Us Request</p>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <div class=\"inputs\">\r\n              <div class=\"inputGroup\">\r\n                <label>Name</label>\r\n                <input type=\"text\" [(ngModel)]=\"userS.userName\" placeholder=\"Enter Name\">\r\n              </div>\r\n              <div class=\"inputGroup\">\r\n                <label>Email</label>\r\n                <input type=\"email\" [disabled]=\"userS.userProvider === 'google'\" [(ngModel)]=\"userS.userEmail\" placeholder=\"Enter Email\">\r\n              </div>\r\n              <div class=\"inputGroup\">\r\n                <label>Mobile Number</label>\r\n                <input type=\"text\" [disabled]=\"userS.userProvider === 'phone'\" [(ngModel)]=\"userS.userPhoneNumber\" placeholder=\"Enter Mobile Number\">\r\n              </div>\r\n              <div class=\"inputGroup\">\r\n                <label>Subject</label>\r\n                <div><textarea name=\"subject\" [(ngModel)]=\"subject\" id=\"\" rows=\"10\"  placeholder=\"Subject\"></textarea></div>\r\n              </div>\r\n            </div>\r\n            <br>\r\n            <button [disabled]=\"loader\" class=\"getPackage\" (click)=\"submit()\">\r\n              <ng-container *ngIf=\"!loader\">Submit</ng-container>\r\n              <ion-spinner mode=\"md\" color=\"white\" *ngIf=\"loader\"></ion-spinner>\r\n            </button>\r\n          </ion-card-content>\r\n        </ion-card>  \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ 7285:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/faq/faq.component.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar #toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\" mode=\"ios\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title>FAQ</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\" [scrollEvents]=\"true\" >\r\n  <div>\r\n    \r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 8415:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/privacy-policy/privacy-policy.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">Privacy Policy</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <div>\r\n  <h1>Privacy Policy</h1>\r\n  <p>Last updated: September 29, 2021</p>\r\n  <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>\r\n  <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. </p>\r\n  <h1>Interpretation and Definitions</h1>\r\n  <h2>Interpretation</h2>\r\n  <p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>\r\n  <h2>Definitions</h2>\r\n  <p>For the purposes of this Privacy Policy:</p>\r\n  <ul>\r\n  <li>\r\n  <p><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to WorkinBuddy, 01 Jan 2021.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Country</strong> refers to:  United Arab Emirates</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Service</strong> refers to the Website.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Website</strong> refers to WorkinBuddy, accessible from <a href=\"https://workinbuddy.com\" rel=\"external nofollow noopener\" target=\"_blank\">https://workinbuddy.com</a></p>\r\n  </li>\r\n  <li>\r\n  <p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>\r\n  </li>\r\n  </ul>\r\n  <h1>Collecting and Using Your Personal Data</h1>\r\n  <h2>Types of Data Collected</h2>\r\n  <h3>Personal Data</h3>\r\n  <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>\r\n  <ul>\r\n  <li>\r\n  <p>Email address</p>\r\n  </li>\r\n  <li>\r\n  <p>First name and last name</p>\r\n  </li>\r\n  <li>\r\n  <p>Phone number</p>\r\n  </li>\r\n  <li>\r\n  <p>Address, State, Province, ZIP/Postal code, City</p>\r\n  </li>\r\n  <li>\r\n  <p>Usage Data</p>\r\n  </li>\r\n  </ul>\r\n  <h3>Usage Data</h3>\r\n  <p>Usage Data is collected automatically when using the Service.</p>\r\n  <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>\r\n  <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>\r\n  <p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>\r\n  <h3>Tracking Technologies and Cookies</h3>\r\n  <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:</p>\r\n  <ul>\r\n  <li><strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</li>\r\n  <li><strong>Flash Cookies.</strong> Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read &quot;Where can I change the settings for disabling, or deleting local shared objects?&quot; available at <a href=\"https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_\" rel=\"external nofollow noopener\" target=\"_blank\">https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_</a></li>\r\n  <li><strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</li>\r\n  </ul>\r\n  <p>Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies: <a href=\"https://www.freeprivacypolicy.com/blog/cookies/\" target=\"_blank\">Cookies: What Do They Do?</a>.</p>\r\n  <p>We use both Session and Persistent Cookies for the purposes set out below:</p>\r\n  <ul>\r\n  <li>\r\n  <p><strong>Necessary / Essential Cookies</strong></p>\r\n  <p>Type: Session Cookies</p>\r\n  <p>Administered by: Us</p>\r\n  <p>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Cookies Policy / Notice Acceptance Cookies</strong></p>\r\n  <p>Type: Persistent Cookies</p>\r\n  <p>Administered by: Us</p>\r\n  <p>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>Functionality Cookies</strong></p>\r\n  <p>Type: Persistent Cookies</p>\r\n  <p>Administered by: Us</p>\r\n  <p>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>\r\n  </li>\r\n  </ul>\r\n  <p>For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.</p>\r\n  <h2>Use of Your Personal Data</h2>\r\n  <p>The Company may use Personal Data for the following purposes:</p>\r\n  <ul>\r\n  <li>\r\n  <p><strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</p>\r\n  </li>\r\n  <li>\r\n  <p><strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</p>\r\n  </li>\r\n  </ul>\r\n  <p>We may share Your personal information in the following situations:</p>\r\n  <ul>\r\n  <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>\r\n  <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>\r\n  <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>\r\n  <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>\r\n  <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>\r\n  <li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>\r\n  </ul>\r\n  <h2>Retention of Your Personal Data</h2>\r\n  <p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>\r\n  <p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>\r\n  <h2>Transfer of Your Personal Data</h2>\r\n  <p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>\r\n  <p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>\r\n  <p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>\r\n  <h2>Disclosure of Your Personal Data</h2>\r\n  <h3>Business Transactions</h3>\r\n  <p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>\r\n  <h3>Law enforcement</h3>\r\n  <p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>\r\n  <h3>Other legal requirements</h3>\r\n  <p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>\r\n  <ul>\r\n  <li>Comply with a legal obligation</li>\r\n  <li>Protect and defend the rights or property of the Company</li>\r\n  <li>Prevent or investigate possible wrongdoing in connection with the Service</li>\r\n  <li>Protect the personal safety of Users of the Service or the public</li>\r\n  <li>Protect against legal liability</li>\r\n  </ul>\r\n  <h2>Security of Your Personal Data</h2>\r\n  <p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>\r\n  <h1>Detailed Information on the Processing of Your Personal Data</h1>\r\n  <p>The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies.</p>\r\n  <h2>Usage, Performance and Miscellaneous</h2>\r\n  <p>We may use third-party Service Providers to provide better improvement of our Service.</p>\r\n  <ul>\r\n  <li>\r\n  <p><strong>Google Places</strong></p>\r\n  <p>Google Places is a service that returns information about places using HTTP requests. It is operated by Google</p>\r\n  <p>Google Places service may collect information from You and from Your Device for security purposes.</p>\r\n  <p>The information gathered by Google Places is held in accordance with the Privacy Policy of Google: <a href=\"https://www.google.com/intl/en/policies/privacy/\" rel=\"external nofollow noopener\" target=\"_blank\">https://www.google.com/intl/en/policies/privacy/</a></p>\r\n  </li>\r\n  </ul>\r\n  <h1>Children's Privacy</h1>\r\n  <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>\r\n  <p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>\r\n  <h1>Links to Other Websites</h1>\r\n  <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>\r\n  <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>\r\n  <h1>Changes to this Privacy Policy</h1>\r\n  <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>\r\n  <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>\r\n  <p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>\r\n  <h1>Contact Us</h1>\r\n  <p>If you have any questions about this Privacy Policy, You can contact us:</p>\r\n  <ul>\r\n  <li>By visiting this page on our website: <a href=\"https://workinbuddy.com/contact\" rel=\"external nofollow noopener\" target=\"_blank\">https://workinbuddy.com/contact</a></li>\r\n  </ul>\r\n</div>\r\n</ion-content>\r\n");

/***/ }),

/***/ 7176:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/referal-code/referal-code.component.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"transparent\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"white\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"white\" mode=\"md\" class=\"ion-text-center\">Referral Code</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n\r\n  \r\n  <ion-grid class=\"topSection\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <div class=\"ion-text-center\">\r\n          <img src=\"assets/img/refer.png\" alt=\"\" style=\"height: 18rem;width: 19rem;\">\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\">\r\n        <ion-card>\r\n          <div class=\"referalCodeBox\">\r\n            <ion-item lines=\"none\">\r\n              <ion-label>{{userS.userReferalCode}}</ion-label>\r\n              <ion-icon (click)=\"copyMessage(userS.userReferalCode)\" name=\"copy-outline\" slot=\"end\" color=\"orange\"></ion-icon>\r\n              <ion-icon (click)=\"share()\" name=\"share-social-outline\" slot=\"end\" color=\"orange\"></ion-icon>\r\n            </ion-item>\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <h6>How to use referral code:</h6>\r\n        <div style=\"padding-right: 5px;\">\r\n          <ol>\r\n            <li>Using this refer code you and your friend will get benifited</li>\r\n            <li>Share this code to friend</li>\r\n            <li>If he/she reedemed you will get </li>\r\n          </ol>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"dataSection\">\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ng-container *ngIf=\"skeletonStatus\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <h3><ion-skeleton-text style=\"height: 13px;\" animated></ion-skeleton-text></h3>\r\n                  <div><ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text></div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item lines=\"full\">\r\n            <ion-label>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <h3><ion-skeleton-text style=\"height: 13px;\" animated></ion-skeleton-text></h3>\r\n                  <div><ion-skeleton-text style=\"height: 7px;margin-top: 5px;\" animated></ion-skeleton-text></div>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!skeletonStatus && !historyStatus && historyArr.length !== 0\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label class=\"ion-text-center\">User Apply Referral Code List</ion-label>\r\n          </ion-item>\r\n          <ng-container *ngFor=\"let item of historyArr\">\r\n            <ion-item lines=\"full\" *ngIf=\"item.data.type === 'referalCodeApply'\">\r\n              <ion-label>\r\n                <ion-row>\r\n                  <ion-col size=\"6\">\r\n                    <h3><ion-text color=\"orange\">{{item.userData.name}}</ion-text></h3>\r\n                    <div>{{item.data.timestamp.toDate() | date : 'dd/MM/yyyy hh:mm a'}}</div>\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    <h3 class=\"ion-text-right\">AED {{item.data.amount}}</h3>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ng-container>\r\n        </ng-container>  \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 3044:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/support/terms-conditions/terms-conditions.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\r\n  <ion-toolbar mode=\"ios\" color=\"white\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"orange\" text=\"\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-buttons>\r\n    <ion-title color=\"orange\" mode=\"md\">Terms & Conditions</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n<div>\r\n<p>Last updated: September 29, 2021</p>\r\n<p>Please read these terms and conditions carefully before using Our Service.</p>\r\n<h1>Interpretation and Definitions</h1>\r\n<h2>Interpretation</h2>\r\n<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>\r\n<h2>Definitions</h2>\r\n<p>For the purposes of these Terms and Conditions:</p>\r\n<ul>\r\n<li>\r\n<p><strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</p>\r\n</li>\r\n<li>\r\n<p><strong>Country</strong> refers to:  United Arab Emirates</p>\r\n</li>\r\n<li>\r\n<p><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to WorkinBuddy, 01 Jan 2021.</p>\r\n</li>\r\n<li>\r\n<p><strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</p>\r\n</li>\r\n<li>\r\n<p><strong>Service</strong> refers to the Website.</p>\r\n</li>\r\n<li>\r\n<p><strong>Terms and Conditions</strong> (also referred as &quot;Terms&quot;) mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</p>\r\n</li>\r\n<li>\r\n<p><strong>Third-party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.</p>\r\n</li>\r\n<li>\r\n<p><strong>Website</strong> refers to WorkinBuddy, accessible from <a href=\"https://workinbuddy.com\" rel=\"external nofollow noopener\" target=\"_blank\">https://workinbuddy.com</a></p>\r\n</li>\r\n<li>\r\n<p><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</p>\r\n</li>\r\n</ul>\r\n<h1>Acknowledgment</h1>\r\n<p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.</p>\r\n<p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>\r\n<p>By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.</p>\r\n<p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>\r\n<p>Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.</p>\r\n<h1>Links to Other Websites</h1>\r\n<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.</p>\r\n<p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>\r\n<p>We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.</p>\r\n<h1>Termination</h1>\r\n<p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>\r\n<p>Upon termination, Your right to use the Service will cease immediately.</p>\r\n<h1>Limitation of Liability</h1>\r\n<p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>\r\n<p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.</p>\r\n<p>Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.</p>\r\n<h1>&quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h1>\r\n<p>The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.</p>\r\n<p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.</p>\r\n<p>Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.</p>\r\n<h1>Governing Law</h1>\r\n<p>The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>\r\n<h1>Disputes Resolution</h1>\r\n<p>If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.</p>\r\n<h1>For European Union (EU) Users</h1>\r\n<p>If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.</p>\r\n<h1>United States Legal Compliance</h1>\r\n<p>You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>\r\n<h1>Severability and Waiver</h1>\r\n<h2>Severability</h2>\r\n<p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>\r\n<h2>Waiver</h2>\r\n<p>Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall be the waiver of a breach constitute a waiver of any subsequent breach.</p>\r\n<h1>Translation Interpretation</h1>\r\n<p>These Terms and Conditions may have been translated if We have made them available to You on our Service.\r\nYou agree that the original English text shall prevail in the case of a dispute.</p>\r\n<h1>Changes to These Terms and Conditions</h1>\r\n<p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.</p>\r\n<p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.</p>\r\n<h1>Contact Us</h1>\r\n<p>If you have any questions about these Terms and Conditions, You can contact us:</p>\r\n<ul>\r\n<li>By visiting this page on our website: <a href=\"https://workinbuddy.com/contact\" rel=\"external nofollow noopener\" target=\"_blank\">https://workinbuddy.com/contact</a></li>\r\n</ul>\r\n</div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_support_support_module_ts.js.map