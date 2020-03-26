import CreateItemController from "../controller/CreateItemController";

export default class CreateItemView{
    constructor(createItemController){
        this.createItemController = createItemController;

        this.buildColum();
    }

    buildElement(form){
        let createButton = document.getElementById("add-product-btn");
        let tempgroup = document.createElement("div");

        tempgroup.setAttribute("id", "temp");
        tempgroup.setAttribute("class", "form-group");

        let colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", "color");
        colorLabel.innerHTML = "kleur:";

        let colorInput = document.createElement("input");
        colorInput.setAttribute("id", "color");
        colorInput.setAttribute("type", "text");
        colorInput.setAttribute("class", "form-control form-control-sm");
        colorInput.setAttribute("placeholder", "kleur");

        let sizeLabel = document.createElement("label");
        sizeLabel.setAttribute("for", "size");
        sizeLabel.innerHTML = "maat:";

        let sizeInput = document.createElement("input");
        sizeInput.setAttribute("id", "size");
        sizeInput.setAttribute("type", "text");
        sizeInput.setAttribute("class", "form-control form-control-sm");
        sizeInput.setAttribute("placeholder", "maat");
        
        tempgroup.appendChild(colorLabel);
        tempgroup.appendChild(colorInput);
        tempgroup.appendChild(sizeLabel);
        tempgroup.appendChild(sizeInput);

        form.insertBefore(tempgroup, createButton);
    }

    // veranderd layout van het form.
    addFormModule(selectedElement, form) {
        let createButton = document.getElementById("add-product-btn");

        selectedElement.addEventListener('change', (event) => {
            if (event.target.value == "clothes") {
                this.makeClothesFields(form, createButton);
            } else if (event.target.value == "tierlantin") {
                this.makeTierlantinFields(form, createButton);
            } else if (event.target.value == "decoration") {
                this.makeDecorationFields(form, createButton);
            }
        });
    }

    //alle velden voor kleren.
    makeClothesFields(form, createButton) {
        this.removeTemp();
        let tempgroup = document.createElement("div");
        tempgroup.setAttribute("id", "temp");
        tempgroup.setAttribute("class", "form-group");

        let colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", "color");
        colorLabel.innerHTML = "kleur:";

        let colorInput = document.createElement("input");
        colorInput.setAttribute("id", "color");
        colorInput.setAttribute("type", "text");
        colorInput.setAttribute("class", "form-control form-control-sm");
        colorInput.setAttribute("placeholder", "kleur");

        let sizeLabel = document.createElement("label");
        sizeLabel.setAttribute("for", "size");
        sizeLabel.innerHTML = "maat:";

        let sizeInput = document.createElement("input");
        sizeInput.setAttribute("id", "size");
        sizeInput.setAttribute("type", "text");
        sizeInput.setAttribute("class", "form-control form-control-sm");
        sizeInput.setAttribute("placeholder", "maat");
    
        tempgroup.appendChild(colorLabel);
        tempgroup.appendChild(colorInput);
        tempgroup.appendChild(sizeLabel);
        tempgroup.appendChild(sizeInput);

        form.insertBefore(tempgroup, createButton);
    }
    //alle velden voor tierlantijn.
    makeTierlantinFields(form, createButton) {
        this.removeTemp();
        let tempgroup = document.createElement("div");
        tempgroup.setAttribute("id", "temp");
        tempgroup.setAttribute("class", "form-group");

        let weightLabel = document.createElement("label");
        weightLabel.setAttribute("for", "weight");
        weightLabel.innerHTML = "gewicht:";

        let weightInput = document.createElement("input");
        weightInput.setAttribute("id", "weight");
        weightInput.setAttribute("type", "text");
        weightInput.setAttribute("class", "form-control form-control-sm");
        weightInput.setAttribute("placeholder", "gewicht");

        tempgroup.appendChild(weightLabel);
        tempgroup.appendChild(weightInput);

        form.insertBefore(tempgroup, createButton);
    }
    //alle velden voor decoratie.
    makeDecorationFields(form, createButton) {
        this.removeTemp();
        let tempgroup = document.createElement("div");
        tempgroup.setAttribute("id", "temp");
        tempgroup.setAttribute("class", "form-group");

        let sizeLabel = document.createElement("label");
        sizeLabel.setAttribute("for", "sizeInCM");
        sizeLabel.innerHTML = "maat in CM:";

        let sizeInput = document.createElement("input");
        sizeInput.setAttribute("id", "sizeInCM");
        sizeInput.setAttribute("type", "text");
        sizeInput.setAttribute("class", "form-control form-control-sm");
        sizeInput.setAttribute("placeholder", "maat in CM");

        let colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", "color");
        colorLabel.innerHTML = "kleur:";

        let colorInput = document.createElement("input");
        colorInput.setAttribute("id", "color");
        colorInput.setAttribute("type", "text");
        colorInput.setAttribute("class", "form-control form-control-sm");
        colorInput.setAttribute("placeholder", "kleur");

        let numberInBoxLabel = document.createElement("label");
        numberInBoxLabel.setAttribute("for", "numberInBox");
        numberInBoxLabel.innerHTML = "Aantal in verpakking:";

        let numberInBoxInput = document.createElement("input");
        numberInBoxInput.setAttribute("id", "numberInBox");
        numberInBoxInput.setAttribute("type", "text");
        numberInBoxInput.setAttribute("class", "form-control form-control-sm");
        numberInBoxInput.setAttribute("placeholder", "aantal");
        
        tempgroup.appendChild(colorLabel);
        tempgroup.appendChild(colorInput);
        tempgroup.appendChild(sizeLabel);
        tempgroup.appendChild(sizeInput);
        tempgroup.appendChild(numberInBoxLabel);
        tempgroup.appendChild(numberInBoxInput);

        form.insertBefore(tempgroup, createButton);
    }
    // verwijderd tijdelijke velden.
    removeTemp() {
        let element = document.getElementById("temp");
        element.parentNode.removeChild(element);
    }

    setEventListenerCreateClothes(callback) {
        let createButton = document.getElementById("add-product-btn");
        createButton.addEventListener("click", callback)
    }

    updateProductList() {
        let ul = document.getElementById("product-list");
        let li = document.createElement("li");
        let node = this.createItemController.getNewProduct();
        let text = node.name;
        let textnode = document.createTextNode(text);
        li.appendChild(textnode);
        ul.appendChild(li);
        this.clearForm();
    }

    clearForm() {
        let form = document.getElementById("create-product-form");
        while(form.hasChildNodes()) {
            form.removeChild(form.firstChild);
        }
        this.buildCreateForm();
    }

    buildColum() {
        this.buildCreateForm();
        this.buildProductList();
    }

    buildProductList() {
        let section = document.getElementById("add-product-module");

        let title = document.createElement("h4");
        title.innerHTML = "Products: ";

        let ul = document.createElement("ul");
        ul.id = "product-list";

        this.getCurrentProducts(ul);

        section.append(title, ul);
    }

    getCurrentProducts(ul) {
        let products = this.createItemController.getProductNames();
        for(let i = 0; i < products.length; i++) {
            let li = document.createElement("li")
            let textnode = products[i];
            li.append(textnode);
            ul.append(li);
        }
    }

    buildCreateForm() {
        let form = document.getElementById("create-product-form")

        let title = document.createElement("h4");
        title.innerHTML = "Add product";

        let typeChooser = document.createElement("select");
        typeChooser.id = "typeChooser";
        typeChooser.className = "form-control form-control-sm";

        let clothesOption = document.createElement("option");
        clothesOption.value = "clothes";
        clothesOption.innerHTML = "kleding";
        
        let tierlantinOption = document.createElement("option");
        tierlantinOption.value = "tierlantin";
        tierlantinOption.innerHTML = "tierlantijn";

        let decorationOption = document.createElement("option");
        decorationOption.value = "decoration";
        decorationOption.innerHTML = "decoratie";

        typeChooser.append(clothesOption, tierlantinOption, decorationOption);

        form.append(title, typeChooser, this.createNameDiv(), this.createDescriptionDiv(), this.createPriceRow(), this.createStockRow(),this.createLocationSelector(), this.createLocationInformation(), this.createSubmitButton());
        this.buildElement(form);
        this.addFormModule(typeChooser, form);
    }

    createNameDiv() {
        let nameDiv = document.createElement("div");
        nameDiv.className = "form-group";

        let nameLabel = document.createElement("label");
        nameLabel.innerHTML = "Naam";
        nameLabel.for = "name";

        let nameInput = document.createElement("input");
        nameInput.id = "name";
        nameInput.className = "form-control form-control-sm"; 
        nameInput.type = "text";
        nameInput.placeholder = "naam";

        nameDiv.append(nameLabel, nameInput);
        return nameDiv;
    }

    createDescriptionDiv() {
        let descriptionDiv = document.createElement("div");
        descriptionDiv.className = "form-group";

        let descriptionLabel = document.createElement("label");
        descriptionLabel.innerHTML = "Description";
        descriptionLabel.for = "desc";

        let descriptionInput = document.createElement("textarea");
        descriptionInput.id = "description";
        descriptionInput.className = "form-control";
        descriptionInput.rows = 2;

        descriptionDiv.append(descriptionLabel, descriptionInput); 
        return descriptionDiv;
    }

    createPriceRow() {
        let row = document.createElement("div");
        row.className = "form-row";

        row.append(this.createPurchaseCol(), this.createSellExcCol(), this.createSellIncCol());
        return row;
    }

    createPurchaseCol() {
        let col = document.createElement("div");
        col.className = "col";

        let label = document.createElement("label");
        label.for = "purchase_price";
        label.innerHTML = "inkoopprijs: ";

        let input = document.createElement("input");
        input.id = "purchase_price";
        input.className = "form-control form-control-sm";
        input.type = "text";
        input.placeholder = "inkoopprijs";

        col.append(label, input);
        return col;
    }

    createSellExcCol() {
        let col = document.createElement("div");
        col.className = "col";

        let label = document.createElement("label");
        label.for = "selling_price_exc_btw";
        label.innerHTML = "verkoopprijs exc. btw: ";

        let input = document.createElement("input");
        input.id = "selling_price_exc_btw";
        input.className = "form-control form-control-sm";
        input.type = "text";
        input.placeholder = "verkoopprijs";
        input.disabled = true;

        col.append(label, input);
        return col;
    }

    createSellIncCol() {
        let col = document.createElement("div");
        col.className = "col";

        let label = document.createElement("label");
        label.for = "selling_price_inc_btw";
        label.innerHTML = "verkoopprijs inc. btw: ";

        let input = document.createElement("input");
        input.id = "selling_price_inc_btw";
        input.className = "form-control form-control-sm";
        input.type = "text";
        input.placeholder = "verkoopprijs";
        input.disabled = true;

        col.append(label, input);
        return col;
    }

    createStockRow() {
        let row = document.createElement("div");
        row.className = "form-row";

        row.append(this.createMinStockCol(), this.createCurStockCol());
        return row;
    }

    createMinStockCol() {
        let col = document.createElement("div");
        col.className = "col";

        let label = document.createElement("label");
        label.for = "minimum_stock";
        label.innerHTML = "minimale voorraad:";

        let input = document.createElement("input");
        input.id = "minimum_stock";
        input.className = "form-control form-control-sm";
        input.type = "text";
        input.placeholder = "minimale voorraad";

        col.append(label, input);
        return col;
    }

    createCurStockCol() {
        let col = document.createElement("div");
        col.className = "col";

        let label = document.createElement("label");
        label.for = "current_stock";
        label.innerHTML = "huidige voorrraad:";

        let input = document.createElement("input");
        input.id = "current_stock";
        input.className = "form-control form-control-sm";
        input.type = "text";
        input.placeholder = "huidige voorrraad";

        col.append(label, input);
        return col;
    }

    createSubmitButton() {
        let button = document.createElement("button");
        button.id = "add-product-btn";
        button.type = "button";
        button.className = "btn btn-primary";
        button.innerHTML = "Submit";
        return button;
    }

    setEventListenerSalesPrice(callback){
        let purchaseInput = document.getElementById("purchase_price");
        purchaseInput.addEventListener("keyup", callback);
    }

    fillSalePrice(excBtw, incBtw){
        console.log("view " + excBtw + " " + incBtw);
        let salePriceExcBtw = document.getElementById("selling_price_exc_btw");
        salePriceExcBtw.value = excBtw
        let salePriceIncBtw = document.getElementById("selling_price_inc_btw");
        salePriceIncBtw.value = incBtw;

    }

    createLocationSelector(){
        let locationDiv = document.createElement("div");
        locationDiv.className = "form-group";

        let locationChooser = document.createElement("select");
        locationChooser.id = "locationChooser";
        locationChooser.className = "form-control form-control-sm";

        let defaultOption = document.createElement("option");
        defaultOption.value = "default";
        defaultOption.innerHTML = "-- Kies een locatie --";

        let DbOption = document.createElement("option");
        DbOption.value = "Den Bosch";
        DbOption.innerHTML = "Den Bosch";
        
        let NmOption = document.createElement("option");
        NmOption.value = "Nijmegen";
        NmOption.innerHTML = "Nijmegen";

        let VwOption = document.createElement("option");
        VwOption.value = "Valkenswaard";
        VwOption.innerHTML = "Valkenswaard";

        let VvOption = document.createElement("option");
        VvOption.value = "Vladivostok";
        VvOption.innerHTML = "Vladivostok";

        let BjOption = document.createElement("option");
        BjOption.value = "Beijing";
        BjOption.innerHTML = "Beijing";

        let kltOption = document.createElement("option");
        kltOption.value = "Kugluktuk";
        kltOption.innerHTML = "Kugluktuk";

        locationChooser.append(defaultOption, DbOption, NmOption, VwOption, VvOption, BjOption, kltOption);
        locationDiv.append(locationChooser);
        return locationDiv;
    }

    createLocationInformation(){
        let locInfoDiv = document.createElement("div");
        locInfoDiv.className = "form-group text-center";

        let ImgDiv = document.createElement("div");
        ImgDiv.className = "col";

        let img = document.createElement("img");
        img.id = "locationImg";
        let src = "../src/assest/default.jpg";
        locInfoDiv.id = "locatinInfoDiv";
        img.src = src

        let tempDiv = document.createElement("div");
        tempDiv.id = "temperatureText";
        tempDiv.className = "centered";
        tempDiv.innerHTML ="";

        ImgDiv.append(img, tempDiv);
        locInfoDiv.append(ImgDiv);
        return locInfoDiv;
    }

    updateLocationInformation(imgSrc, temp){
        let img = document.getElementById("locationImg");
        let tempDiv = document.getElementById("temperatureText");
        img.src = imgSrc;
        tempDiv.innerHTML = temp;

    }

    setEventListenerCitySelect(callback){
        let locationChooser = document.getElementById("locationChooser");
        locationChooser.addEventListener("click", callback);
    }
}