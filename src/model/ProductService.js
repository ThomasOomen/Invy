export default class ProductService {
    constructor() {
        this.products = [];
        this.setIndex();
    }

    addClothesProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock, colorC, size) {
        let clothesProduct = {
            "category" : "clothes",
            "name" : name,
            "description" : description,
            "purchase_price" : purchase_price,
            "selling_price_exc_btw" : selling_price_exc_btw,
            "selling_price_inc_btw" : selling_price_inc_btw,
            "minimum_stock" : minimum_stock,
            "current_stock" : current_stock,
            "colorC" : colorC,
            "size" : size,
            "isPlacedOnField" : false
        }
        this.products.push(clothesProduct);
        console.log(this.products);
        let index = localStorage.getItem("index")
        localStorage.setItem(index, JSON.stringify(clothesProduct));
        index = parseInt(index) + 1;
        localStorage.setItem("index", index);
    }

    addTierlantinProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock, weight) {
        let tierlantinProduct = {
            "category" : "tierlantin",
            "name" : name,
            "description" : description,
            "purchase_price" : purchase_price,
            "selling_price_exc_btw" : selling_price_exc_btw,
            "selling_price_inc_btw" : selling_price_inc_btw,
            "minimum_stock" : minimum_stock,
            "current_stock" : current_stock,
            "weight" : weight,
            "isPlacedOnField" : false
        }
        this.products.push(tierlantinProduct);
        console.log(this.products);
        let index = localStorage.getItem("index")
        localStorage.setItem(index.toString(), JSON.stringify(tierlantinProduct));
        index = parseInt(index) + 1;
        localStorage.setItem("index", index);
    }

    addDecorationProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock, colorD, sizeInCM, numberInBox) {
        let decorationProduct = {
            "category" : "decoration",
            "name" : name,
            "description" : description,
            "purchase_price" : purchase_price,
            "selling_price_exc_btw" : selling_price_exc_btw,
            "selling_price_inc_btw" : selling_price_inc_btw,
            "minimum_stock" : minimum_stock,
            "current_stock" : current_stock,
            "colorD" : colorD,
            "sizeInCM" : sizeInCM,
            "numbersInBox" : numberInBox,
            "isPlacedOnField" : false
        }
        this.products.push(decorationProduct);
        console.log(this.products);
        let index = localStorage.getItem("index")
        localStorage.setItem(index.toString(), JSON.stringify(decorationProduct));
        index = parseInt(index) + 1;
        localStorage.setItem("index", index);
    }

    getProducts() {
        return this.products;
    }

    getIndex() {
        return localStorage.getItem("index");
    }

    getLastProduct(index) {
        return localStorage.getItem(index - 1);
    }

    setIndex() {
        if(localStorage.getItem("index") === null) {
            localStorage.setItem("index", 0);
        }
    }
}