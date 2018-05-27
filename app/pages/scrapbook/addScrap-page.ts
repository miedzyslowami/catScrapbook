import * as frameModule from "ui/frame";
import { ShownModallyData, NavigatedData, Page, EventData } from "ui/page";
import { View } from "ui/core/view";
import { AddScrapViewModel } from "./addScrap-view-model";
import { TextField } from "ui/text-field";
import { TextView  } from "ui/text-view";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import * as imagepicker from "nativescript-imagepicker";

let closeCallback: Function;

export function onShownModally(args: ShownModallyData) {
    const page = args.object as Page;
    page.bindingContext = new AddScrapViewModel();
    closeCallback = args.closeCallback;
}

export function doneTap(args: EventData) {
    const view = args.object as View;
    const model = view.bindingContext;
    closeCallback();
}

export function firstTfLoaded(args: EventData) {
    const firstTextfield = args.object as TextField;
    setTimeout(() => {
        firstTextfield.focus(); // Shows the soft input method, ususally a soft keyboard.
    }, 100);
}
export function onReturnPress(args: EventData) {
    const textField = args.object as TextField;
    const model = textField.bindingContext as AddScrapViewModel;
   
    setTimeout(() => {
        textField.dismissSoftInput(); // Hides the soft input method, ususally a soft keyboard.
    }, 100);
}

export function onFocus(args: EventData) {
    // focus event will be triggered when the users enters the input
    const textView = args.object as TextView;
console.log(textView.page);
    // const page = args.object as TextField;
    // const model = textField.bindingContext as AddScrapViewModel;
  
    // model.set('backButtonVisibility','collapse');

    // console.log("onFocus event", model.backButtonVisibility);
}
export function onFocusTextView(args: EventData) {
    const textView = args.object as TextView;
    const page = args.object as Page;
    const model = page.bindingContext as AddScrapViewModel;
    model.set('backButtonVisibility','collapse');
    // textField.dismissSoftInput();
    console.log("onBlur event");
}
export function onBlurTextField(args: EventData) {
   
}
export function onBlurTextView(args: EventData) {
    // blur event will be triggered when the user leaves the TextField
    const textView = args.object as TextView;
    const page = args.object as Page;
    const model = page.bindingContext as AddScrapViewModel;
    model.set('backButtonVisibility','visible');
    // textField.dismissSoftInput();
    console.log("onBlur event");
}

export function setScrapDate(args: EventData){
    const datePicker = args.object as DatePicker;
    console.log(datePicker);
}

