import ReadItemView from "../view/ReadItemView";
import UpdateItemController from "../controller/UpdateItemController";

export default class ReadItemController{
    constructor(){
        this.ReadItemView = new ReadItemView();
        this.UpdateItemController = new UpdateItemController();

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
    }
    
    openTierlantin(event){
        this.buildGrid("T");
        this.UpdateItemController.buildFrom("Tierlantin");
    }

    openDecoration(event){
        this.buildGrid("D");
        this.UpdateItemController.buildFrom("Decoration");
    }

    openClothes(event){
        this.buildGrid("k");
        this.UpdateItemController.buildFrom("Clothes");
    }
}