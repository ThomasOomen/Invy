import CreateItemView from "../view/CreateItemView";
import ProductService from "../model/ProductService";

export default class CreateItemController{
    constructor(){
        this.view = new CreateItemView(this);
        this.productService = new ProductService();
        this.createProduct = this.createProduct.bind(this);
        this.view.setEventListenerCreateClothes(this.createProduct); 
    }

    getElement() {
        this.view.getElement();
    }

    createClothesProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock){
        let colorC = document.getElementById("color").value;
        let size = document.getElementById("size").value;
        if(this.validateColor(colorC) && this.validateSize(size)) {
            this.productService.addClothesProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock,
                colorC, size);
            this.view.updateProductList();
        }
    }

    createTierlantinProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock){
        let weight = document.getElementById("weight").value;
        if(this.validateWeight(weight)) {
            this.productService.addTierlantinProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, 
                current_stock, weight);
            this.view.updateProductList();
        }
    }

    createDecorationProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock){
        let colorD = document.getElementById("color").value;
        let sizeInCM = document.getElementById("sizeInCM").value;
        let numberInBox = document.getElementById("numberInBox").value;
        if(this.validateColor(colorD), this.validateSizeInCm(sizeInCM), this.validateNumber(numberInBox))
        this.productService.addDecorationProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock, 
            colorD, sizeInCM, numberInBox);
        this.view.updateProductList();
    }

    createProduct(event) {
        console.log("THomas idee")
        let name = document.getElementById("name").value;
        let description = document.getElementById("description").value;
        let purchase_price = document.getElementById("purchase_price").value;
        let selling_price_exc_btw = document.getElementById("selling_price_exc_btw").value;
        let selling_price_inc_btw = document.getElementById("selling_price_inc_btw").value;
        let minimum_stock = document.getElementById("minimum_stock").value;
        let current_stock = document.getElementById("current_stock").value;

        if(this.validateName(name) && this.validateCurrency(purchase_price) && this.validateCurrency(selling_price_exc_btw) && this.validateCurrency(selling_price_inc_btw) &&
            this.validateNumber(minimum_stock) && this.validateNumber(current_stock)) {
            let typeChooser = document.getElementById("typeChooser");
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

    validateName(name) {
        if(name === null || name === '') {
            alert("name can't be blank");
            return false;
        } else {
            return true;
        }
    }

    validateCurrency(currency) {
        if(/^[0-9]+(\.[0-9]{1,2})?$/.test(currency)) {
            return true;
        } else {
            alert("currency is not correct");
            return false;
        }
    }

    validateNumber(number) {
        if(number < 0 || number === null || number === '') {
            alert("number must be above 0");
            return false;
        } else {
            return true;
        }
    }

    validateColor(color) {
        if(color === null || color === '') {
            alert("color can't be blank");
            return false;
        } else {
            return true;
        }
    }

    validateSize(size) {
        if(size < 0 || size === null || size === '') {
            alert("size must be above 0");
            return false;
        } else {
            return true;
        }
    }

    validateWeight(weight) {
        if(weight < 0 || weight === null || weight === '') {
            alert("size must be above 0");
            return false;
        } else {
            return true;
        }
    }

    validateSizeInCm(sizeInCM) {
        if(sizeInCM < 0 || sizeInCM === null || sizeInCM === '') {
            alert("size must be a number in CM above 0");
            return false;
        } else {
            return true;
        }
    }

    getIndex() {
        return this.productService.getIndex();
    }

    getNewProduct() {
        let json = this.productService.getIndex();
        let index = parseInt(json);
        let obj = this.productService.getLastProduct(index);
        return JSON.parse(obj);
    }
}