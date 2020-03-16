import CreateItemController from "./CreateItemController";
import InventoryController from "./InventoryController";
import UpdateItemController from "./UpdateItemController";
import ReadItemController from "./ReadItemController";

export class InvyController{
    constructor(){
        this.initialize()
    }

    async initialize(){
        this.CreateItemController = new CreateItemController();
        this.ReadItemController = new ReadItemController();
    }
}