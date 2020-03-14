import ReadItemView from "../view/ReadItemView";

export default class ReadItemController{
    constructor(){
        this.ReadItemView = new ReadItemView();

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
    }

    openDecoration(event){
        this.buildGrid("D");
    }

    openClothes(event){
        this.buildGrid("k");
    }
}