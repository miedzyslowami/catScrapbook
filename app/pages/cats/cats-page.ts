import * as frameModule from "ui/frame";
import { NavigatedData, Page } from "ui/page";
import { View } from "ui/core/view";
import { CatsViewModel } from "./cats-view-model";

export function navigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    page.bindingContext = new CatsViewModel();
}

export function backTap(args: NavigatedData) {
    frameModule.topmost().goBack();
}
