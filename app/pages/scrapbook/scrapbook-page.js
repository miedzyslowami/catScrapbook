"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frameModule = require("ui/frame");
var scrapbook_view_model_1 = require("./scrapbook-view-model");
function navigatingTo(args) {
    var page = args.object;
    page.bindingContext = new scrapbook_view_model_1.ScrapbookViewModel();
}
exports.navigatingTo = navigatingTo;
function backTap(args) {
    frameModule.topmost().goBack();
}
exports.backTap = backTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBib29rLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JhcGJvb2stcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3QztBQUd4QywrREFBNEQ7QUFFNUQsc0JBQTZCLElBQW1CO0lBQzVDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFjLENBQUM7SUFDakMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLHlDQUFrQixFQUFFLENBQUM7QUFDbkQsQ0FBQztBQUhELG9DQUdDO0FBRUQsaUJBQXdCLElBQW1CO0lBQ3ZDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNuQyxDQUFDO0FBRkQsMEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XHJcbmltcG9ydCB7IFNjcmFwYm9va1ZpZXdNb2RlbCB9IGZyb20gXCIuL3NjcmFwYm9vay12aWV3LW1vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBhcmdzLm9iamVjdCBhcyBQYWdlO1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBTY3JhcGJvb2tWaWV3TW9kZWwoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhY2tUYXAoYXJnczogTmF2aWdhdGVkRGF0YSkge1xyXG4gICAgZnJhbWVNb2R1bGUudG9wbW9zdCgpLmdvQmFjaygpO1xyXG59XHJcbiJdfQ==