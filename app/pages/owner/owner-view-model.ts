import { Observable } from "data/observable";

export class OwnerViewModel extends Observable {
    public ownerName: string;

    constructor() {
        super();
        this.ownerName = "";
    }
}
