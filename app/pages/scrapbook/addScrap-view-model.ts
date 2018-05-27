import { Observable } from "data/observable";
import { DatePicker } from "tns-core-modules/ui/date-picker";

export class AddScrapViewModel extends Observable {
    public ownerName: string;
    public scrapDate: Date;
    public day: string;
    public month: string;
    public year: string;
    public eventName: string;
    public eventInfo: string;


    constructor() {
        super();
        this.ownerName = "";
        this.scrapDate = new Date();
        this.day = this.scrapDate.getDate().toString();
        this.month = (this.scrapDate.getMonth() + 1).toString();
        this.year = this.scrapDate.getFullYear().toString();
        this.eventName = "";
        this.eventInfo = "";
    }
}
