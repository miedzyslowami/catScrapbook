"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var ScrapbookViewModel = /** @class */ (function (_super) {
    __extends(ScrapbookViewModel, _super);
    function ScrapbookViewModel() {
        var _this = _super.call(this) || this;
        _this.pages = new observable_array_1.ObservableArray();
        return _this;
    }
    ScrapbookViewModel.prototype.submitTap = function (title, info) {
        this.pages.push({ title: title, info: info });
    };
    return ScrapbookViewModel;
}(observable_1.Observable));
exports.ScrapbookViewModel = ScrapbookViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyYXBib29rLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY3JhcGJvb2stdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QywyRUFBeUU7QUFNekU7SUFBd0Msc0NBQVU7SUFFOUM7UUFBQSxZQUNJLGlCQUFPLFNBQ1Y7UUFITSxXQUFLLEdBQUcsSUFBSSxrQ0FBZSxFQUFpQyxDQUFDOztJQUdwRSxDQUFDO0lBQ00sc0NBQVMsR0FBaEIsVUFBaUIsS0FBWSxFQUFFLElBQVc7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFSRCxDQUF3Qyx1QkFBVSxHQVFqRDtBQVJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xyXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbVwiO1xyXG5pbXBvcnQgeyBGaWxlU3lzdGVtRW50aXR5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgc3VibWl0VGFwIH0gZnJvbSAnLi4vLi4vLi4vcGxhdGZvcm1zL2FuZHJvaWQvYXBwL3NyYy9tYWluL2Fzc2V0cy9hcHAvcGFnZXMvc2NyYXBib29rL2FkZFNjcmFwLXBhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjcmFwYm9va1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG4gICAgcHVibGljIHBhZ2VzID0gbmV3IE9ic2VydmFibGVBcnJheTx7dGl0bGU6IHN0cmluZywgaW5mbzogc3RyaW5nfT4oKTtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3VibWl0VGFwKHRpdGxlOnN0cmluZywgaW5mbzpzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMucGFnZXMucHVzaCh7dGl0bGU6IHRpdGxlLCBpbmZvOmluZm99KTtcclxuICAgIH1cclxufVxyXG4iXX0=