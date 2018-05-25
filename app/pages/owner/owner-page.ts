import * as frameModule from "ui/frame";
import { NavigatedData, Page, EventData } from "ui/page";
import { View } from "ui/core/view";
import { OwnerViewModel } from "./owner-view-model";
import { TextField } from "ui/text-field";

export function navigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    page.bindingContext = new OwnerViewModel();
}

export function backTap(args: NavigatedData) {
    const button = args.object as View;
    const page = button.page as Page;

    frameModule.topmost().navigate({
        moduleName: "pages/main/main-page",
        transition: { name: "flip" },
        context: {
            ownerName: page.bindingContext.ownerName,
        },
    });
}


export function firstTfLoaded(args: EventData) {
    const firstTextfield = args.object as TextField;
    setTimeout(() => {
        firstTextfield.focus(); // Shows the soft input method, ususally a soft keyboard.
    }, 100);
}
export function onReturnPress(args: EventData) {
    const textField = args.object as TextField;
    const model = textField.bindingContext as OwnerViewModel;
    model.set("ownerName", textField.text);

    setTimeout(() => {
        textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
}

export function onFocus(args: EventData) {
    // focus event will be triggered when the users enters the TextField
    console.log("onFocus event");
}

export function onBlur(args: EventData) {
    // blur event will be triggered when the user leaves the TextField
    const textField = args.object as TextField;
    textField.dismissSoftInput();
    console.log("onBlur event");
}
