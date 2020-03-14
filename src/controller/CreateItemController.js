import CreateItemView from "../view/CreateItemView";

export default class CreateItemController{
    constructor(){
        this.createProduct = this.createProduct.bind(this);

        this.view = new CreateItemView();
        this.view.setEventListenerCreateClothes(this.createProduct); 
    }

    getElement() {
        this.view.getElement();
    }

    createClothesProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock){
        let colorC = document.getElementById("color").value;
        let size = document.getElementById("size").value;
        console.log("kleding " + name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock, colorC, size);
    }

    createTierlantinProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock){
        let weight = document.getElementById("weight").value;
        console.log("tierlantijn " + name, description, purchase_price,selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock, weight);
    }

    createDecorationProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock){
        let colorD = document.getElementById("color").value;
        let sizeInCM = document.getElementById("sizeInCM").value;
        let numberInBox = document.getElementById("numberInBox").value;
        console.log("Decoration " + name, description, purchase_price,selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock, colorD, sizeInCM, numberInBox);
    }

    createProduct(event) {
        let name = document.getElementById("name").value;
        let description = document.getElementById("description").value;
        let purchase_price = document.getElementById("purchase_price").value;
        let selling_price_exc_btw = document.getElementById("selling_price_exc_btw").value;
        let selling_price_inc_btw = document.getElementById("selling_price_inc_btw").value;
        let minimum_stock = document.getElementById("minimum_stock").value;
        let current_stock = document.getElementById("current_stock").value;
        let typeChooser = document.getElementById("typeChooser");
        //createClothesProduct(event, name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock);
        console.log(typeChooser.value);
        switch(typeChooser.value) {
            case "clothes":
                this.createClothesProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock);
                break;
            case "tierlantin":
                this.createTierlantinProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock);
                break;
            case "decoration":
                this.createDecorationProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock);
                break;
        }
    }
}