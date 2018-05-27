import * as frameModule from "ui/frame";
import { NavigatedData, Page, EventData } from 'ui/page';
import { View } from "ui/core/view";
import { ScrapbookViewModel } from "./scrapbook-view-model";

export function navigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    page.bindingContext = new ScrapbookViewModel();
}

export function backTap(args: NavigatedData) {
    frameModule.topmost().goBack();
}

export function addNew(args: EventData){
    const page = args.object as Page;
    const context = "some custom context";
    page.showModal(
        "pages/scrapbook/addScrap-page",
        context,
        ()=>{},
        true,
        false,
    );
}
