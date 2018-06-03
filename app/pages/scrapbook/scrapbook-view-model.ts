import { Observable } from "data/observable";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import * as fs from "tns-core-modules/file-system";
import { FileSystemEntity } from "tns-core-modules/file-system";
import { View } from "ui/core/view";
import { submitTap } from '../../../platforms/android/app/src/main/assets/app/pages/scrapbook/addScrap-page';

export class ScrapbookViewModel extends Observable {
    public pages = new ObservableArray<{title: string, info: string}>();
    constructor() {
        super();
    }
    public submitTap(title:string, info:string){
        this.pages.push({title: title, info:info});
    }
}
