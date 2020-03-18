import ReadItemView from "../view/ReadItemView";
import UpdateItemController from "../controller/UpdateItemController";

export default class ReadItemController{
    constructor(createItemController){
        this.ReadItemView = new ReadItemView();
        this.UpdateItemController = new UpdateItemController();
        this.createItemController = createItemController;

        this.openClothes = this.openClothes.bind(this);
        this.ReadItemView.setEventListenerClothes(this.openClothes);

        this.openTierlantin = this.openTierlantin.bind(this);
        this.ReadItemView.setEventListenerTierlantin(this.openTierlantin);

        this.openDecoration = this.openDecoration.bind(this);
        this.ReadItemView.setEventListenerDecoration(this.openDecoration);
        
    }

    buildGrid(name){
        this.ReadItemView.deleteGrid();
        this.ReadItemView.buildGrid(name);
        this.setDragListeners();
    }
    
    openTierlantin(event){
        this.buildGrid("T");
        this.UpdateItemController.setExtraProperties(0);
        this.UpdateItemController.setType("Tierlantin");
        this.UpdateItemController.buildFrom("Tierlantin");
    }

    openDecoration(event){
        this.buildGrid("D");
        this.UpdateItemController.setExtraProperties(0);
        this.UpdateItemController.setType("Decoration");
        this.UpdateItemController.buildFrom("Decoration");
    }

    openClothes(event){
        this.buildGrid("k");
        this.UpdateItemController.setExtraProperties(0);
        this.UpdateItemController.setType("Clothes");
        this.UpdateItemController.buildFrom("Clothes");
    }

    setDragListeners() {
            this.dragOver = this.dragOver.bind(this);
            this.ReadItemView.setDragOverEventListener(this.dragOver); 
            this.dragEnter = this.dragEnter.bind(this);
            this.ReadItemView.setDragEnterEventListener(this.dragEnter);
            this.dragLeave = this.dragLeave.bind(this);
            this.ReadItemView.setDragLeaveEventListener(this.dragLeave);
            this.dragDrop = this.dragDrop.bind(this);
            this.ReadItemView.setDropEventListener(this.dragDrop);
    }

    dragOver(event) {
        console.log("over");
        console.log(event.target.firstElementChild);
        if(event.target.firstElementChild === null) {
            event.preventDefault();
        } else {
            return;
        }
    }

    dragEnter(event) {
        console.log("enter");
        event.preventDefault();
        event.target.className += ' hovered';
    }

    dragLeave(event) {
        event.target.className = "grid-item";
    }

    dragDrop(event) {
        let product = this.createItemController.getDrawnProduct();
        console.log(product); 
        console.log(product.hasChildNodes());
        console.log(product.children);

        let product1 = product.children[0];

        for(let i = 0; i < localStorage.length; i++) {
            if(localStorage.getItem(i) === product1.innerHTML) {
                let changeNeeded = localStorage.getItem(i);
                let product1 = JSON.parse(changeNeeded);
                product1.isPlacedOnField = true;
                localStorage.setItem(i, JSON.stringify(product1));
            }
        } 

        event.target.append(product);
        event.target.className = "grid-item";

        console.log(product);
        console.log(product.children.length);

        this.createItemController.setDrawnProductToZero();
    }
}