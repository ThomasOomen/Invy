import CreateItemView from "../view/CreateItemView";

export default class CreateItemController{
    constructor(){
        console.log("item controller");
        this.view = new CreateItemView(this);
    }

    getElement() {
        this.view.getElement();
    }

    createClothesProduct() {
            alert("new kledingstuk");
            console.log("We kunnen controller bereiken!");
    }
}