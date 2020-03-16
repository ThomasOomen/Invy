import UpdateItemView from "../view/UpdateItemView";

export default class UpdateItemController{
    constructor(){
        this.UpdateItemView = new UpdateItemView(this);
    }

    buildFrom(type){
        this.UpdateItemView.deleteColumn();
        this.UpdateItemView.buildColumn(type);
        this.newProperty = this.newProperty.bind(this);
        this.UpdateItemView.setEventListenerAddProperty(this.newProperty)

        this.saveChanges = this.saveChanges.bind(this);
        this.UpdateItemView.setEventListenerSave(this.saveChanges);

        this.deleteItem = this.deleteItem.bind(this);
        this.UpdateItemView.setEventListenerDelete(this.deleteItem)
    }

    newProperty(event){
        console.log("nieuw eigenschap is toegevoegd");
    }

    saveChanges(event){
        console.log("veranderingen zijn opgeslagen");
    }

    deleteItem(event){
        console.log("geselecteerde item is verwijderd");
    }

}