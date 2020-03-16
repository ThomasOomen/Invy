import CreateItemView from "../view/CreateItemView";

export default class CreateItemController{
    constructor(){
        console.log("item controller");
        this.view = new CreateItemView();
    }

    getElement() {
        return this.view.getElement();
    }
}