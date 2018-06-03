import * as frameModule from "ui/frame";
import { NavigatedData, Page, EventData } from 'ui/page';
import { View } from "ui/core/view";
import { ScrapbookViewModel } from "./scrapbook-view-model";
import { submitTap } from '../../../platforms/android/app/src/main/assets/app/pages/scrapbook/addScrap-page';


export function navigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    page.bindingContext = new ScrapbookViewModel();
    page.bindingContext.pages.push({title: "Przykładowy tytuł", info: "Przykładowa notka"});
    page.bindingContext.pages.push({title: "2", info: "test"});
    page.bindingContext.pages.push({title: "3", info: "test"});
    page.bindingContext.pages.push({title: "4", info: "test"});
    page.bindingContext.pages.push({title: "5", info: "test"});
    page.bindingContext.pages.push({title: "6", info: "test"}); 
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
        page.bindingContext.submitTap.bind(page.bindingContext),
        true,
        false,
    );
}
