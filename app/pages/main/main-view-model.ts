import { Observable } from "data/observable";

export class MainViewModel extends Observable {
    public ownerName: string;

    constructor() {
        super();
        this.ownerName = "";
    }
}
