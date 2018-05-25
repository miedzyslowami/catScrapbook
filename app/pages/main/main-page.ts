/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import * as frameModule from "ui/frame";
import { View } from "ui/core/view";
import { EventData } from 'data/observable';
import { NavigatedData, Page } from 'ui/page';
import { MainViewModel } from './main-view-model';

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    let page = args.object as Page;
    
    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and TypeScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = new MainViewModel();
  
    if(page.navigationContext){
        page.bindingContext.set("ownerName", ` ${page.navigationContext.ownerName}`);
    }

    // page.getViewById('animated-cat').animate({
    

    // });
}

export function goOwnerPage(args: EventData) {
    frameModule.topmost().navigate({
        moduleName: "pages/owner/owner-page",
        transition: { name: "flip" },
    });
}

export function goCatsPage(args: EventData) {
    frameModule.topmost().navigate({
        moduleName: "pages/cats/cats-page",
        transition: { name: "flip" },
    });
}

export function goScrapbookPage(args: EventData) {
    frameModule.topmost().navigate({
        moduleName: "pages/scrapbook/scrapbook-page",
        transition: { name: "flip" },
    });
}
