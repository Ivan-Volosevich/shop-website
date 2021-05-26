(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zoA":
/*!*******************************************************!*\
  !*** ./src/app/components/slider/slider.component.ts ***!
  \*******************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-drag-scroll */ "i7Yu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["nav"];
const _c1 = function (a1) { return ["details", a1]; };
function SliderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c1, item_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](14, 6, item_r2.price, "EUR"));
} }
class SliderComponent {
    constructor() {
        this.slides = [];
        this.header = '';
    }
    ngOnInit() { }
    moveLeft() {
        this.ds.moveLeft();
    }
    moveRight() {
        this.ds.moveRight();
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["app-slider"]], viewQuery: function SliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_0__["DragScrollComponent"]);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ds = _t.first);
    } }, inputs: { slides: "slides", header: "header" }, decls: 11, vars: 2, consts: [[1, "header"], [1, "header-text"], [1, "items-btn"], [1, "btn-left", 3, "click"], [1, "btn-right", 3, "click"], [1, "items"], ["nav", ""], ["drag-scroll-item", "", "class", "item", 4, "ngFor", "ngForOf"], ["drag-scroll-item", "", 1, "item"], [3, "routerLink"], [1, "top"], [1, "size"], [1, "color"], [1, "img"], ["alt", "photo", 3, "src"], [1, "bottom"], [1, "name"], [1, "price"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_5_listener() { return ctx.moveLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_6_listener() { return ctx.moveRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "drag-scroll", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SliderComponent_div_10_Template, 15, 11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.slides);
    } }, directives: [ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_0__["DragScrollComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_0__["DragScrollItemDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".header[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  margin: 0 100px;\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%]   .header-text[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 10em;\n  text-transform: uppercase;\n}\n.header[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #cccccc;\n}\n.items-counter[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 100px;\n  color: #a99b77;\n  font-weight: bold;\n  font-size: 16px;\n}\n.items-btn[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-bottom: 17px;\n  margin-right: 100px;\n}\n.items-btn[_ngcontent-%COMP%]   .btn-left[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: solid #a99b77;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 8px;\n  margin-right: 5px;\n  transform: rotate(135deg);\n  -webkit-transform: rotate(135deg);\n  background-color: #fff;\n}\n.items-btn[_ngcontent-%COMP%]   .btn-right[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: solid #a99b77;\n  border-width: 0 5px 5px 0;\n  display: inline-block;\n  padding: 8px;\n  transform: rotate(-45deg);\n  -webkit-transform: rotate(-45deg);\n  background-color: #fff;\n}\n.items[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0 100px;\n  height: 400px;\n}\n.items[_ngcontent-%COMP%]   drag-scroll[_ngcontent-%COMP%] {\n  height: 400px;\n}\n.items[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #000;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 306px;\n  height: 378px;\n  text-transform: uppercase;\n  border: 7px solid transparent;\n  background-color: #f5f6f7;\n  border-radius: 3px;\n  font-weight: 600;\n  margin: 0 32px;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], .items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 250px;\n  padding: auto;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  height: auto;\n  width: auto;\n  max-height: 100%;\n  margin: auto;\n  max-width: 240px;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 25px 18px;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: #aa9b77;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  border: 7px solid #a99b77;\n}\n  .drag-scroll-content {\n  margin-left: -30px;\n  margin-right: -30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUFSO0FBSUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKO0FBSUE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUdJO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBQUZSO0FBTUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFISjtBQUtJO0VBQ0ksYUFBQTtBQUhSO0FBY0k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QUFaUjtBQWVJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQWJSO0FBZVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FBYlo7QUFnQlE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBZFo7QUFnQlk7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQWRoQjtBQWtCUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBaEJaO0FBa0JZO0VBQ0ksY0FBQTtBQWhCaEI7QUFvQlE7RUFDSSx5QkFBQTtBQWxCWjtBQXVCQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFwQkoiLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBtYXJnaW46IDAgMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuaGVhZGVyLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB3aWR0aDogMTBlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaXRlbXMtY291bnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBjb2xvcjogI2E5OWI3NztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaXRlbXMtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTdweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcblxyXG4gICAgLmJ0bi1sZWZ0IHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAjYTk5Yjc3O1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogMCA1cHggNXB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tcmlnaHQge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IHNvbGlkICNhOTliNzc7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDVweCA1cHggMDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pdGVtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwIDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICBkcmFnLXNjcm9sbHtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG5cclxuICAgICAgICAvLyA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAvLyAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0ge1xyXG4gICAgICAgIHdpZHRoOiAzMDZweDtcclxuICAgICAgICBoZWlnaHQ6IDM3OHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgYm9yZGVyOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmNztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDAgMzJweDtcclxuXHJcbiAgICAgICAgLnRvcCwgLmJvdHRvbSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm90dG9tIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDE4cHg7XHJcblxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2FhOWI3NztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogN3B4IHNvbGlkICNhOTliNzc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmRyYWctc2Nyb2xsLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMzBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Ivan Volosevich\shop-website\src\main.ts */"zUnb");


/***/ }),

/***/ "5RIZ":
/*!*****************************************************!*\
  !*** ./src/app/services/catalog/catalog.service.ts ***!
  \*****************************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class CatalogService {
    constructor(http) {
        this.http = http;
    }
    getMenSlides() {
        return this.http.get('assets/mocks/menSlides.json');
    }
    getWomenSlides() {
        return this.http.get('assets/mocks/womenSlides.json');
    }
    getChildrenSlides() {
        return this.http.get('assets/mocks/childrenSlides.json');
    }
    searchById(id) {
        const a = this.http.get('assets/mocks/menSlides.json');
        const b = this.http.get('assets/mocks/womenSlides.json');
        const c = this.http.get('assets/mocks/childrenSlides.json');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])([a, b, c])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((arr) => Array.prototype.concat(...arr).filter((el) => el.id === id)[0]));
    }
}
CatalogService.ɵfac = function CatalogService_Factory(t) { return new (t || CatalogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
CatalogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CatalogService, factory: CatalogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "5VAg":
/*!*********************************************!*\
  !*** ./src/app/selectors/selectors.cart.ts ***!
  \*********************************************/
/*! exports provided: selectCartFeature, selectCartCount, selectCartItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCartFeature", function() { return selectCartFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCartCount", function() { return selectCartCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCartItems", function() { return selectCartItems; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const selectCartFeature = (state) => state.cart;
const selectCartCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCartFeature, (state) => state.amount);
const selectCartItems = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectCartFeature, (state) => state.items);


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BXuq":
/*!*****************************************************************!*\
  !*** ./src/app/components/item-detail/item-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _actions_actions_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/actions.cart */ "L1Mb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/catalog/catalog.service */ "5RIZ");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart/cart.service */ "esXn");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ItemDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ItemDetailComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.addToCart(ctx_r1.details); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Add to cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Vendor code: ", ctx_r0.details.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.details.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 7, ctx_r0.details.price, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.details.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.details.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.details.desc, "");
} }
class ItemDetailComponent {
    constructor(route, catalogService, cart, store) {
        this.route = route;
        this.catalogService = catalogService;
        this.cart = cart;
        this.store = store;
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.catalogService.searchById(this.id).subscribe((data) => {
            this.details = data;
        });
    }
    addToCart(product) {
        this.store.dispatch(Object(_actions_actions_cart__WEBPACK_IMPORTED_MODULE_0__["addItemToCart"])(product));
    }
}
ItemDetailComponent.ɵfac = function ItemDetailComponent_Factory(t) { return new (t || ItemDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
ItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ItemDetailComponent, selectors: [["app-item-detail"]], decls: 1, vars: 1, consts: [["class", "item", 4, "ngIf"], [1, "item"], [1, "header"], [1, "name"], [1, "code"], [1, "content"], [1, "img"], ["alt", "photo", 3, "src"], [1, "description"], [1, "price"], [1, "btn-add", 3, "click"]], template: function ItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ItemDetailComponent_div_0_Template, 28, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.details);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: [".item[_ngcontent-%COMP%] {\n  margin-top: 156px;\n  padding: 50px;\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 40px;\n  text-transform: uppercase;\n}\n.item[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  min-height: 400px;\n  max-height: 480px;\n  min-width: 400px;\n  max-width: 420px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  min-height: 250px;\n  min-width: 250px;\n  padding: 10px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  min-width: 300px;\n  max-width: 400px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2px;\n  background-color: #cccccc;\n  opacity: 0.5;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  min-width: 200px;\n}\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .btn-add[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  border: none;\n  width: 200px;\n  height: 50px;\n  background-color: #aa9b77;\n  color: #fff;\n  cursor: pointer;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtBQUNSO0FBQ1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNaO0FBRVE7RUFDSSxlQUFBO0FBQVo7QUFJSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtBQUZSO0FBSVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUZaO0FBS1k7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUhoQjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUxaO0FBT1k7RUFDSSxhQUFBO0FBTGhCO0FBT2dCO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUxwQjtBQVFnQjtFQUNJLGVBQUE7QUFOcEI7QUFVWTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUmhCO0FBV1k7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFUaEIiLCJmaWxlIjoiaXRlbS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTZweDtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgICAgICBcclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29kZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcblxyXG4gICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ4MHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5wcmljZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBkaXYgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5idG4tYWRkIHtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYTliNzc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/catalog/catalog.service */ "5RIZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slider/slider.component */ "+zoA");





function HomeComponent_app_slider_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "men (" + ctx_r0.menSlides.length + ")")("slides", ctx_r0.menSlides);
} }
function HomeComponent_app_slider_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "women (" + ctx_r1.womenSlides.length + ")")("slides", ctx_r1.womenSlides);
} }
function HomeComponent_app_slider_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider", 11);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", "children (" + ctx_r2.childrenSlides.length + ")")("slides", ctx_r2.childrenSlides);
} }
class HomeComponent {
    constructor(catalogService) {
        this.catalogService = catalogService;
        this.menSlides = [];
        this.womenSlides = [];
        this.childrenSlides = [];
        this.isMenVisible = true;
        this.isWomenVisible = true;
        this.isChildrenVisible = true;
    }
    ngOnInit() {
        this.catalogService.getMenSlides().subscribe((data) => {
            this.menSlides = data;
        });
        this.catalogService.getWomenSlides().subscribe((data) => {
            this.womenSlides = data;
        });
        this.catalogService.getChildrenSlides().subscribe((data) => {
            this.childrenSlides = data;
        });
    }
    seeAllProducts() {
        this.isMenVisible = true;
        this.isWomenVisible = true;
        this.isChildrenVisible = true;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 31, vars: 6, consts: [[1, "hero"], [1, "scroll"], ["href", "#filter"], ["src", "../../../assets/chevron.png", "alt", "chevron"], ["id", "filter", 1, "filter"], [1, "filter-content"], ["type", "checkbox", 1, "custom-checkbox", 3, "ngModel", "ngModelChange"], [3, "click"], [1, "catalog"], [3, "header", "slides", 4, "ngIf"], [1, "about"], [3, "header", "slides"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Our clothing , your comfort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.isMenVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " men ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_14_listener($event) { return ctx.isWomenVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " women ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_input_ngModelChange_17_listener($event) { return ctx.isChildrenVisible = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " children ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_20_listener() { return ctx.seeAllProducts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "see all products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HomeComponent_app_slider_23_Template, 1, 2, "app-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, HomeComponent_app_slider_24_Template, 1, 2, "app-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HomeComponent_app_slider_25_Template, 1, 2, "app-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isMenVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isWomenVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.isChildrenVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMenVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isWomenVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isChildrenVisible);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _slider_slider_component__WEBPACK_IMPORTED_MODULE_4__["SliderComponent"]], styles: [".hero[_ngcontent-%COMP%] {\n  background-image: url('bg.png');\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #fff;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 800px;\n  font-size: 60px;\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 586px;\n  font-size: 20px;\n  line-height: 1.6;\n}\n.hero[_ngcontent-%COMP%]   .scroll[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n}\n.filter[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  display: flex;\n  justify-content: space-between;\n  background-color: #f5f6f7;\n  padding: 46px 95px;\n  max-height: 142px;\n}\n.filter[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n.filter[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0 40px 0 10px;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  border: none;\n  width: 200px;\n  height: 50px;\n  background-color: #aa9b77;\n  color: #fff;\n  cursor: pointer;\n}\n.catalog[_ngcontent-%COMP%] {\n  padding-bottom: 130px;\n  padding-top: 50px;\n}\n.about[_ngcontent-%COMP%] {\n  background-color: #aa9b77;\n  height: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: center;\n  align-items: center;\n}\n.about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #837659;\n  background-color: #aa9b77;\n  position: relative;\n  top: 28px;\n  padding: 0 13px;\n  margin: 0;\n  font-size: 20px;\n}\n.about[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #424242;\n  padding: 90px 120px;\n  border: 2px solid #837659;\n  max-width: 710px;\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQ1I7QUFFSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQVI7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQURSO0FBS0E7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUZKO0FBSUk7RUFDSSxjQUFBO0FBRlI7QUFPUTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7QUFMWjtBQVNJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUFI7QUFXQTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUFSSjtBQVdBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBUko7QUFVSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBUlI7QUFXSTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFUUiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlcm8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1heC13aWR0aDogNTg2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgICB9XHJcblxyXG4gICAgLnNjcm9sbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjc7XHJcbiAgICBwYWRkaW5nOiA0NnB4IDk1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNDJweDtcclxuXHJcbiAgICAuZmlsdGVyLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIC8vIGlucHV0e1xyXG4gICAgICAgIC8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWE5Yjc3O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNDBweCAwIDEwcHg7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWE5Yjc3O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmNhdGFsb2cge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5hYm91dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYTliNzc7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6ICM4Mzc2NTk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhOWI3NztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAyOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTNweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjNDI0MjQyO1xyXG4gICAgICAgIHBhZGRpbmc6IDkwcHggMTIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzgzNzY1OTtcclxuICAgICAgICBtYXgtd2lkdGg6IDcxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "IGZg":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _reducers_reducers_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/reducers.cart */ "fPdi");


const reducers = {
    cart: _reducers_reducers_cart__WEBPACK_IMPORTED_MODULE_1__["cartReducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "L1Mb":
/*!*****************************************!*\
  !*** ./src/app/actions/actions.cart.ts ***!
  \*****************************************/
/*! exports provided: incrementItemInCart, decrementItemInCart, addItemToCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementItemInCart", function() { return incrementItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementItemInCart", function() { return decrementItemInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItemToCart", function() { return addItemToCart; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const incrementItemInCart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('incrementItemInCart');
const decrementItemInCart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('decrementItemInCart');
const addItemToCart = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('addItemToCart', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "QWKc":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _actions_actions_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/actions.cart */ "L1Mb");
/* harmony import */ var _selectors_selectors_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../selectors/selectors.cart */ "5VAg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/catalog/catalog.service */ "5RIZ");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cart/cart.service */ "esXn");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function CartComponent_div_4_button_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_4_button_11_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.decrement(item_r2.value.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function CartComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CartComponent_div_4_button_11_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CartComponent_div_4_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const item_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.increment(item_r2.value.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r2.value.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 6, item_r2.value.price, "EUR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r2.value.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 9, ctx_r0.cartAmount$), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 11, item_r2.value.amount * item_r2.value.price, "EUR"));
} }
function CartComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Field is requiered");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(route, catalogService, cart, store) {
        this.route = route;
        this.catalogService = catalogService;
        this.cart = cart;
        this.store = store;
        this.orderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
            paymentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''),
        });
        this.items$ = this.store.select(_selectors_selectors_cart__WEBPACK_IMPORTED_MODULE_2__["selectCartItems"]);
        this.counter = 0;
        this.cartAmount$ = this.store.select(_selectors_selectors_cart__WEBPACK_IMPORTED_MODULE_2__["selectCartCount"]);
    }
    ngOnInit() {
        // this.items = this.cart.getCartItems();
        this.store.subscribe((v) => console.log('from store ', v));
    }
    onSubmit() {
        let result = Object.assign(this.orderForm.value, { items: this.cart.getCartItems() });
        console.log(result);
    }
    sumOfItem() { }
    decrement(id) {
        this.store.dispatch(Object(_actions_actions_cart__WEBPACK_IMPORTED_MODULE_1__["decrementItemInCart"])());
    }
    increment(id) {
        this.store.dispatch(Object(_actions_actions_cart__WEBPACK_IMPORTED_MODULE_1__["incrementItemInCart"])());
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_6__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 47, vars: 8, consts: [[1, "cart"], [1, "cart-container"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "form-body"], [1, "name"], ["type", "text", "formControlName", "name", "required", ""], ["class", "error", 4, "ngIf"], [1, "address"], ["type", "text", "formControlName", "address"], [1, "payment"], [1, "payment-type"], ["type", "radio", "formControlName", "paymentType", "value", "cash", "id", "cash"], ["for", "cash"], [1, "payment-icon"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "viewBox", "0 0 462.085 462.085", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 462.085 462.085"], ["d", "M452.585,98.818H58.465c-5.247,0-9.5,4.253-9.5,9.5v14.98h-14.98c-5.247,0-9.5,4.253-9.5,9.5v14.979H9.5   c-5.247,0-9.5,4.253-9.5,9.5v196.49c0,5.247,4.253,9.5,9.5,9.5h394.117c5.247,0,9.5-4.253,9.5-9.5v-14.98h14.978   c5.247,0,9.5-4.253,9.5-9.5v-14.98h14.99c5.247,0,9.5-4.253,9.5-9.5v-196.49C462.085,103.071,457.832,98.818,452.585,98.818z    M46.808,166.777C43.341,180.385,32.607,191.118,19,194.586v-27.809H46.808z M394.117,194.586   c-13.609-3.467-24.343-14.201-27.811-27.809h27.811V194.586z M346.917,166.777c4.027,24.105,23.095,43.173,47.201,47.199v83.09   c-24.107,4.026-43.175,23.095-47.201,47.201H66.198C62.172,320.162,43.105,301.094,19,297.067v-83.091   c24.105-4.028,43.171-23.094,47.198-47.199H346.917z M19,316.457c13.608,3.468,24.342,14.202,27.808,27.811H19V316.457z    M366.306,344.267c3.467-13.609,14.202-24.344,27.811-27.811v27.811H366.306z M418.595,319.787h-5.478v-162.51   c0-5.247-4.253-9.5-9.5-9.5H43.484v-5.479h375.11V319.787z M443.085,295.307h-5.49v-162.51c0-5.247-4.253-9.5-9.5-9.5H67.965v-5.48   h375.12V295.307z"], ["d", "M161.564,311.56c11.817,15.934,27.797,24.708,44.994,24.708c17.198,0,33.178-8.775,44.995-24.708   c11.187-15.083,17.347-34.984,17.347-56.038c0-21.055-6.16-40.956-17.347-56.038c-11.817-15.934-27.797-24.708-44.995-24.708   c-17.197,0-33.177,8.775-44.994,24.708c-11.187,15.082-17.347,34.983-17.347,56.038   C144.218,276.576,150.378,296.478,161.564,311.56z M206.559,317.268c-9.053,0-17.463-3.981-24.423-10.77   c1.486-12.161,11.868-21.612,24.423-21.612c12.556,0,22.938,9.451,24.424,21.612C224.022,313.287,215.612,317.268,206.559,317.268z    M206.562,265.49c-8.022,0-14.549-6.526-14.549-14.548c0-8.022,6.526-14.549,14.549-14.549c8.021,0,14.548,6.526,14.548,14.549   C221.109,258.963,214.583,265.49,206.562,265.49z M206.559,193.776c23.898,0,43.342,27.699,43.342,61.747   c0,11.458-2.209,22.189-6.042,31.396c-3.208-5.279-7.508-9.82-12.579-13.322c5.479-5.973,8.83-13.929,8.83-22.655   c0-18.499-15.05-33.549-33.548-33.549c-18.499,0-33.549,15.05-33.549,33.549c0,8.725,3.35,16.68,8.829,22.653   c-5.072,3.502-9.374,8.044-12.582,13.324c-3.833-9.206-6.042-19.938-6.042-31.396C163.218,221.475,182.66,193.776,206.559,193.776z   "], ["type", "radio", "formControlName", "paymentType", "value", "card", "id", "card"], ["for", "card"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "id", "Capa_1", "x", "0px", "y", "0px", "width", "25px", "height", "25px", "viewBox", "0 0 25 25", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 25 25"], ["d", "M23,4H2C0.9,4,0,4.9,0,6v2.096h25V6C25,4.9,24.1,4,23,4z"], ["d", "M0,19c0,1.1,0.9,2,2,2h21c1.1,0,2-0.9,2-2v-4.188H0V19z"], ["y", "8.813", "width", "5.282", "height", "5.282"], ["d", "M6.282,14.096H25V8.814H6.282V14.096z M23,10.377c0.596,0,1.077,0.482,1.077,1.077c0,0.595-0.481,1.077-1.077,1.077    s-1.077-0.482-1.077-1.077C21.923,10.859,22.404,10.377,23,10.377z"], [1, "btn-submit"], ["type", "submit", 3, "disabled"], [1, "cart-item"], [1, "cart-item--desc"], [1, "img"], ["alt", "photo", 3, "src"], [1, "cart-item--quantity"], [3, "click", 4, "ngIf"], [3, "click"], [1, "sum-item"], [1, "error"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, CartComponent_div_4_Template, 20, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function CartComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "1. Enter your name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, CartComponent_div_13_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "2. Enter your address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "3. Choose your payment type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "rect", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 6, ctx.items$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.orderForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.orderForm.controls["name"].errors && ctx.orderForm.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.orderForm.valid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RadioControlValueAccessor"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["CurrencyPipe"]], styles: [".cart[_ngcontent-%COMP%] {\n  margin-top: 156px;\n  padding: 50px;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 15px;\n  justify-content: space-between;\n  border: 1px solid #000;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--desc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--desc[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--desc[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100px;\n  max-height: 100px;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--desc[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--quantity[_ngcontent-%COMP%] {\n  line-height: 50%;\n  display: flex;\n  align-items: center;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--quantity[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  margin: 15px;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--quantity[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--quantity[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 100px;\n  color: #000;\n}\n.cart[_ngcontent-%COMP%]   .cart-item[_ngcontent-%COMP%]   .cart-item--quantity[_ngcontent-%COMP%]   .sum-item[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding: 30px;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 100%;\n  padding: 15px;\n  margin: auto;\n  text-align: center;\n  border: 8px outset #aa9b77;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 50px;\n  font-size: 24px;\n  border: 4px inset #aa9b77;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  color: green;\n  font-weight: bold;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100px;\n  height: 2px;\n  color: green;\n  background-color: green;\n  margin-top: 25px;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  align-items: center;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover, .cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:active, .cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:focus {\n  color: green;\n  font-weight: bold;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover::after, .cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:active::after, .cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:focus::after {\n  content: \"\";\n  position: absolute;\n  width: 100px;\n  height: 2px;\n  color: green;\n  background-color: green;\n  margin-top: 25px;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .payment-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .payment[_ngcontent-%COMP%]   .payment-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-left: 20px;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #000;\n  border: 4px double #aa9b77;\n  border-radius: 2px;\n  width: 120px;\n  height: 44px;\n  font-size: 28px;\n  font-weight: bold;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active, .cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-body[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  color: green;\n}\n.cart[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .error[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQUNSO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDWjtBQUNZO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFDaEI7QUFDZ0I7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBQ3BCO0FBS2dCO0VBQ0ksZ0JBQUE7QUFIcEI7QUFRUTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTlo7QUFRWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5oQjtBQVNZO0VBQ0ksYUFBQTtBQVBoQjtBQVNnQjtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVBwQjtBQVdZO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBVGhCO0FBY0k7RUFDSSxZQUFBO0FBWlI7QUFjUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FBWlo7QUFjWTtFQUNJLGlCQUFBO0FBWmhCO0FBZVk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWJoQjtBQWtCb0I7RUFDSSxhQUFBO0FBaEJ4QjtBQWtCd0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFoQjVCO0FBaUI0QjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFmaEM7QUFvQm9CO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBbEJ4QjtBQW9Cd0I7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUFsQjVCO0FBbUI0QjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFqQmhDO0FBcUJ3QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBbkI1QjtBQXNCd0I7RUFDSSxrQkFBQTtBQXBCNUI7QUEwQlk7RUFDSSxnQkFBQTtBQXhCaEI7QUF5QmdCO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBdkJwQjtBQXlCb0I7RUFDSSxZQUFBO0FBdkJ4QjtBQTZCUTtFQUNJLFVBQUE7QUEzQloiLCJmaWxlIjoiY2FydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0IHtcclxuICAgIG1hcmdpbi10b3A6IDE1NnB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuXHJcbiAgICAuY2FydC1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcblxyXG4gICAgICAgIC5jYXJ0LWl0ZW0tLWRlc2Mge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcnQtaXRlbS0tcXVhbnRpdHkge1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdW0taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG5cclxuICAgICAgICAuZm9ybS1ib2R5IHtcclxuICAgICAgICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXI6IDhweCBvdXRzZXQgI2FhOWI3NztcclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogNHB4IGluc2V0ICNhYTliNzc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wYXltZW50IHtcclxuICAgICAgICAgICAgICAgIC5wYXltZW50LXR5cGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Y2hlY2tlZCtsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmhvdmVyLCAmOmFjdGl2ZSwgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucGF5bWVudC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmJ0bi1zdWJtaXQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDRweCBkb3VibGUgI2FhOWI3NztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIsICY6YWN0aXZlLCAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _selectors_selectors_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors/selectors.cart */ "5VAg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = function () { return ["cart"]; };
class AppComponent {
    constructor(store) {
        this.store = store;
        this.title = 'shop-website';
        this.cartCounter$ = this.store.select(_selectors_selectors_cart__WEBPACK_IMPORTED_MODULE_0__["selectCartCount"]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 43, vars: 5, consts: [[1, "logo"], ["src", "../assets/logo.png", "alt", "logo"], ["routerLink", "/"], ["href", "#filter"], [3, "routerLink"], ["src", "../assets/cart.png", "alt", ""], [1, "quantity"], [1, "twitter-text"], [1, "img"], ["src", "../assets/logo-twitter.png", "alt", "logo-twitter"], [1, "info"], [1, "text"], [1, "contacts"], [1, "nav"], ["href", "#"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "\u201C E-commerce psd theme available \u201D");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "trekking");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "credits");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Design by gianluca cosetta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 2, ctx.cartCounter$));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 50px 64px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  color: #fff;\n  background: rgba(41, 80, 131, 0.3);\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin: 5px 0px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: flex;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0 15px;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .quantity[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 58px;\n  right: 70px;\n  background-color: #aa9b77;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  text-align: center;\n  font-size: 11px;\n  font-weight: bold;\n  color: #000;\n}\nfooter[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n}\nfooter[_ngcontent-%COMP%]   .twitter-text[_ngcontent-%COMP%] {\n  height: 70px;\n  background-color: #535253;\n  display: flex;\n  align-items: center;\n  padding-left: 65px;\n}\nfooter[_ngcontent-%COMP%]   .twitter-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: none;\n  font-weight: bold;\n}\nfooter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  height: 350px;\n  background-color: #424242;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 65px;\n}\nfooter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  max-width: 317px;\n}\nfooter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n}\nfooter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\nfooter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\nfooter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\nfooter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  font-size: 14px;\n  margin: 0 5px;\n}\nfooter[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .contacts[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-transform: none;\n  font-weight: bold;\n  font-size: 18px;\n  line-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0FBQ1I7QUFJUTtFQUNJLGFBQUE7QUFGWjtBQUlZO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FBRmhCO0FBSWdCO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0FBRnBCO0FBS2dCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUhwQjtBQVVBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0FBUEo7QUFTSTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBUFI7QUFTUTtFQUNJLG9CQUFBO0VBQ0EsaUJBQUE7QUFQWjtBQVdJO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBVFI7QUFXUTtFQUNJLGdCQUFBO0FBVFo7QUFXWTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQVRoQjtBQVlZO0VBQ0ksZUFBQTtBQVZoQjtBQWtCZ0I7RUFDSSxjQUFBO0FBaEJwQjtBQW1CZ0I7RUFDSSxlQUFBO0FBakJwQjtBQW9CZ0I7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQWxCcEI7QUFzQlk7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBcEJoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDUwcHggNjRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg0MSwgODAsIDEzMSwgMC4zKTtcclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG5hdiB7XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYTliNzc7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mb290ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIC50d2l0dGVyLXRleHQge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTM1MjUzO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDY1cHg7XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiAwIDY1cHg7XHJcblxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMTdweDtcclxuXHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3RzIHtcclxuXHJcbiAgICAgICAgICAgIC5uYXYge1xyXG5cclxuICAgICAgICAgICAgICAgIDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-drag-scroll */ "i7Yu");
/* harmony import */ var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/slider/slider.component */ "+zoA");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/item-detail/item-detail.component */ "BXuq");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./reducers */ "IGZg");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_5__["DragScrollModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_11__["reducers"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_11__["metaReducers"]
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_6__["SliderComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_8__["ItemDetailComponent"],
        _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_5__["DragScrollModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "esXn":
/*!***********************************************!*\
  !*** ./src/app/services/cart/cart.service.ts ***!
  \***********************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _catalog_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../catalog/catalog.service */ "5RIZ");




class CartService {
    constructor(http, catalogService) {
        this.http = http;
        this.catalogService = catalogService;
        this.items = JSON.parse(localStorage.getItem("items")) || [];
        this.itemsInCart = this.calcItemsInCart(this.items);
        this.itemsInCart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.itemsInCart); // itemsInCartSubject = itemsInCart$ - наблюдение (поток, на который мы можем подписываться)
    }
    addItemInCart(item) {
        if (this.items.length === 0) {
            item.amount = 1;
            this.items.push(item);
        }
        else {
            for (let i of this.items) {
                if (i.id == item.id) {
                    i.amount ? i.amount++ : i.amount = 1;
                }
            }
        }
        let idsArray = this.items.map((item) => {
            return item.id;
        });
        if (!idsArray.includes(item.id)) {
            item.amount = 1;
            this.items.push(item);
        }
        this.itemsInCart = this.calcItemsInCart(this.items);
        localStorage.setItem("items", JSON.stringify(this.items));
        this.itemsInCart$.next(this.itemsInCart);
    }
    setItemsInCart(items) {
        this.items = [...items];
        this.itemsInCart = this.items.length;
        localStorage.setItem('items', JSON.stringify(this.items));
        this.itemsInCart$.next(this.itemsInCart);
    }
    getSubscription() {
        return this.itemsInCart$;
    }
    getCartItems() {
        return this.items;
    }
    calcItemsInCart(items) {
        let result = items.reduce((t, v) => {
            return v.amount ? t + v.amount : t + 1;
        }, 0);
        return result;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_catalog_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "fPdi":
/*!*******************************************!*\
  !*** ./src/app/reducers/reducers.cart.ts ***!
  \*******************************************/
/*! exports provided: cartState, cartReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartState", function() { return cartState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_actions_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/actions.cart */ "L1Mb");


const cartState = {
    amount: 0,
    items: {},
};
const _cartReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(cartState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_actions_cart__WEBPACK_IMPORTED_MODULE_1__["incrementItemInCart"], (state) => (Object.assign(Object.assign({}, state), { amount: state.amount + 1 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_actions_cart__WEBPACK_IMPORTED_MODULE_1__["decrementItemInCart"], (state) => (Object.assign(Object.assign({}, state), { amount: state.amount - 1 }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_actions_cart__WEBPACK_IMPORTED_MODULE_1__["addItemToCart"], (state, product) => {
    if (product.id in state.items) {
        return Object.assign(Object.assign({}, state), { items: Object.assign(Object.assign({}, state.items), { [product.id]: Object.assign(Object.assign({}, product), { amount: state.items[product.id].amount + 1 }) }) });
    }
    else {
        return Object.assign(Object.assign({}, state), { items: Object.assign(Object.assign({}, state.items), { [product.id]: Object.assign(Object.assign({}, product), { amount: 1 }) }) });
    }
    (Object.assign(Object.assign({}, state), { amount: state.amount + 1 }));
}));
function cartReducer(state = cartState, action) {
    return _cartReducer(state, action);
}
const calcItemsInCart = (items) => {
    let result = items.reduce((t, v) => {
        return v.amount ? t + v.amount : t + 1;
    }, 0);
    return result;
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/item-detail/item-detail.component */ "BXuq");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cart/cart.component */ "QWKc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    },
    {
        path: 'cart',
        component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
    },
    {
        path: 'details/:id',
        component: _components_item_detail_item_detail_component__WEBPACK_IMPORTED_MODULE_2__["ItemDetailComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map