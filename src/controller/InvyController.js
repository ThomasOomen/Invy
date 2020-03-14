import CreateItemController from "./CreateItemController";
import InventoryController from "./InventoryController";
import UpdateItemController from "./UpdateItemController";

export class InvyController{
    constructor(){
        this.initialize()
    }

    async initialize(){
        this.CreateItemController = new CreateItemController();
        this.CreateItemController.getElement();
    }
}