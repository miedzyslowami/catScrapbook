"use strict";
/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var frameModule = require("ui/frame");
var main_view_model_1 = require("./main-view-model");
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    var page = args.object;
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new main_view_model_1.MainViewModel();
    if (page.navigationContext) {
        page.bindingContext.set("ownerName", " " + page.navigationContext.ownerName);
    }
    // page.getViewById('animated-cat').animate({
    // });
}
exports.navigatingTo = navigatingTo;
function goOwnerPage(args) {
    frameModule.topmost().navigate({
        moduleName: "pages/owner/owner-page",
        transition: { name: "flip" },
    });
}
exports.goOwnerPage = goOwnerPage;
function goCatsPage(args) {
    frameModule.topmost().navigate({
        moduleName: "pages/cats/cats-page",
        transition: { name: "flip" },
    });
}
exports.goCatsPage = goCatsPage;
function goScrapbookPage(args) {
    frameModule.topmost().navigate({
        moduleName: "pages/scrapbook/scrapbook-page",
        transition: { name: "flip" },
    });
}
exports.goScrapbookPage = goScrapbookPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLHNDQUF3QztBQUl4QyxxREFBa0Q7QUFFbEQsd0VBQXdFO0FBQ3hFLHNCQUE2QixJQUFlO0lBQ3hDOzs7O01BSUU7SUFDRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBYyxDQUFDO0lBRS9COzs7Ozs7Ozs7TUFTRTtJQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7SUFFMUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUEsQ0FBQztRQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsTUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBVyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELDZDQUE2QztJQUc3QyxNQUFNO0FBQ1YsQ0FBQztBQTVCRCxvQ0E0QkM7QUFFRCxxQkFBNEIsSUFBZTtJQUN2QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQzNCLFVBQVUsRUFBRSx3QkFBd0I7UUFDcEMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtLQUMvQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBTEQsa0NBS0M7QUFFRCxvQkFBMkIsSUFBZTtJQUN0QyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQzNCLFVBQVUsRUFBRSxzQkFBc0I7UUFDbEMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtLQUMvQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBTEQsZ0NBS0M7QUFFRCx5QkFBZ0MsSUFBZTtJQUMzQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1FBQzNCLFVBQVUsRUFBRSxnQ0FBZ0M7UUFDNUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtLQUMvQixDQUFDLENBQUM7QUFDUCxDQUFDO0FBTEQsMENBS0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuSW4gTmF0aXZlU2NyaXB0LCBhIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIGFuIFhNTCBmaWxlIGlzIGtub3duIGFzXG5hIGNvZGUtYmVoaW5kIGZpbGUuIFRoZSBjb2RlLWJlaGluZCBpcyBhIGdyZWF0IHBsYWNlIHRvIHBsYWNlIHlvdXIgdmlld1xubG9naWMsIGFuZCB0byBzZXQgdXAgeW91ciBwYWdl4oCZcyBkYXRhIGJpbmRpbmcuXG4qL1xuXG5pbXBvcnQgKiBhcyBmcmFtZU1vZHVsZSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgTWFpblZpZXdNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcblxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSBcIm5hdmlnYXRpbmdUb1wiIGV2ZW50IGF0dGFjaGVkIGluIG1haW4tcGFnZS54bWxcbmV4cG9ydCBmdW5jdGlvbiBuYXZpZ2F0aW5nVG8oYXJnczogRXZlbnREYXRhKSB7XG4gICAgLypcbiAgICBUaGlzIGdldHMgYSByZWZlcmVuY2UgdGhpcyBwYWdl4oCZcyA8UGFnZT4gVUkgY29tcG9uZW50LiBZb3UgY2FuXG4gICAgdmlldyB0aGUgQVBJIHJlZmVyZW5jZSBvZiB0aGUgUGFnZSB0byBzZWUgd2hhdOKAmXMgYXZhaWxhYmxlIGF0XG4gICAgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYXBpLXJlZmVyZW5jZS9jbGFzc2VzL191aV9wYWdlXy5wYWdlLmh0bWxcbiAgICAqL1xuICAgIGxldCBwYWdlID0gYXJncy5vYmplY3QgYXMgUGFnZTtcbiAgICBcbiAgICAvKlxuICAgIEEgcGFnZeKAmXMgYmluZGluZ0NvbnRleHQgaXMgYW4gb2JqZWN0IHRoYXQgc2hvdWxkIGJlIHVzZWQgdG8gcGVyZm9ybVxuICAgIGRhdGEgYmluZGluZyBiZXR3ZWVuIFhNTCBtYXJrdXAgYW5kIFR5cGVTY3JpcHQgY29kZS4gUHJvcGVydGllc1xuICAgIG9uIHRoZSBiaW5kaW5nQ29udGV4dCBjYW4gYmUgYWNjZXNzZWQgdXNpbmcgdGhlIHt7IH19IHN5bnRheCBpbiBYTUwuXG4gICAgSW4gdGhpcyBleGFtcGxlLCB0aGUge3sgbWVzc2FnZSB9fSBhbmQge3sgb25UYXAgfX0gYmluZGluZ3MgYXJlIHJlc29sdmVkXG4gICAgYWdhaW5zdCB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IGNyZWF0ZVZpZXdNb2RlbCgpLlxuXG4gICAgWW91IGNhbiBsZWFybiBtb3JlIGFib3V0IGRhdGEgYmluZGluZyBpbiBOYXRpdmVTY3JpcHQgYXRcbiAgICBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9jb3JlLWNvbmNlcHRzL2RhdGEtYmluZGluZy5cbiAgICAqL1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgTWFpblZpZXdNb2RlbCgpO1xuICBcbiAgICBpZihwYWdlLm5hdmlnYXRpb25Db250ZXh0KXtcbiAgICAgICAgcGFnZS5iaW5kaW5nQ29udGV4dC5zZXQoXCJvd25lck5hbWVcIiwgYCAke3BhZ2UubmF2aWdhdGlvbkNvbnRleHQub3duZXJOYW1lfWApO1xuICAgIH1cblxuICAgIC8vIHBhZ2UuZ2V0Vmlld0J5SWQoJ2FuaW1hdGVkLWNhdCcpLmFuaW1hdGUoe1xuICAgIFxuXG4gICAgLy8gfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnb093bmVyUGFnZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL293bmVyL293bmVyLXBhZ2VcIixcbiAgICAgICAgdHJhbnNpdGlvbjogeyBuYW1lOiBcImZsaXBcIiB9LFxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ29DYXRzUGFnZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL2NhdHMvY2F0cy1wYWdlXCIsXG4gICAgICAgIHRyYW5zaXRpb246IHsgbmFtZTogXCJmbGlwXCIgfSxcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdvU2NyYXBib29rUGFnZShhcmdzOiBFdmVudERhdGEpIHtcbiAgICBmcmFtZU1vZHVsZS50b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL3NjcmFwYm9vay9zY3JhcGJvb2stcGFnZVwiLFxuICAgICAgICB0cmFuc2l0aW9uOiB7IG5hbWU6IFwiZmxpcFwiIH0sXG4gICAgfSk7XG59XG4iXX0=