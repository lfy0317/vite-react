import { makeAutoObservable } from "mobx";

export default class Store {
    public title: string = "";

    constructor() {
        makeAutoObservable(this);
        // super();
    }

    public setTitle(title: string) {
        this.title = title;
    }
}
// const store = new Store();

// export default store;
