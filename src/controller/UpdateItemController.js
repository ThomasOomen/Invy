import UpdateItemView from "../view/UpdateItemView";

export default class UpdateItemController{
    constructor(){
        this.UpdateItemView = new UpdateItemView(this);
        let activeType = "";
    }

    buildFrom(type, extraProperties){
        this.UpdateItemView.deleteColumn();
        this.UpdateItemView.buildColumn(this.getType(), this.getExtraProperties());

        this.newProperty = this.newProperty.bind(this);
        this.UpdateItemView.setEventListenerAddProperty(this.newProperty)

        this.saveChanges = this.saveChanges.bind(this);
        this.UpdateItemView.setEventListenerSave(this.saveChanges);

        this.deleteItem = this.deleteItem.bind(this);
        this.UpdateItemView.setEventListenerDelete(this.deleteItem)
    }

    newProperty(event){
        this.updateExtraProperties();
        this.buildFrom();
    }

    saveChanges(event){
        console.log("veranderingen zijn opgeslagen");
    }

    deleteItem(event){
        console.log("geselecteerde item is verwijderd");
    }

    setExtraProperties(value){
        this.extraProperties = value;
    }

    updateExtraProperties(){
        this.extraProperties++;
    }

    getExtraProperties(){
        return this.extraProperties;
    }

    setType(value){
        this.activeType = value;
    }

    getType(){
        return this.activeType;
    }
}