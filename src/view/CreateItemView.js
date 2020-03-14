export default class CreateItemView{
    constructor(createItemController){
        this.controller = createItemController;
        console.log("item view");
    }

    buildElement(){
        let form = document.getElementById("create-product-form");
        let createButton = document.getElementById("add-product-btn");
        let typeChooser = document.getElementById("typeChooser");
        createButton.addEventListener('click', function(e) {
            if (e.target && e.target.id == "add-product-btn") {
                e.preventDefault();
                let name = document.getElementById("name").value;
                let description = document.getElementById("description").value;
                let purchase_price = document.getElementById("purchase_price").value;
                let selling_price_exc_btw = document.getElementById("selling_price_exc_btw").value;
                let selling_price_inc_btw = document.getElementById("selling_price_inc_btw").value;
                let minimum_stock = document.getElementById("minimum_stock").value;
                let current_stock = document.getElementById("current_stock").value;
                switch(typeChooser.value) {
                    case "clothes":
                        let colorC = document.getElementById("color").value;
                        let size = document.getElementById("size").value;
                        this.controller.createClothesProduct();
                        break;
                    case tierlantin:
                        let weight = document.getElementById("weight").value;
                        controller.createTierlanTinProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock, 
                            weight);
                        break;
                    case decoration:
                        let colorD = document.getElementById("color").value;
                        let sizeInCM = document.getElementById("sizeInCM").value;
                        let numberInBox = document.getElementById("numberInBox").value;
                        controller.createDecorationProduct(name, description, purchase_price, selling_price_exc_btw, selling_price_inc_btw, minimum_stock, current_stock,
                            colorD, sizeInCM, numberInBox);
                        break;
                }
            }
        })

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

    //test
    liMaker(text) {
        
    }

    addFormModule() {
        const selectedElement = document.getElementById("typeChooser");
        let form = document.getElementById("create-product-form");
        let createButton = document.getElementById("add-product-btn");

        selectedElement.addEventListener('change', (event) => {
            if (event.target.value == "clothes") {
                this.makeClothesFields(form, createButton);
            } else if (event.target.value == "tierlantin") {
                this.makeTierlantinFields(form, createButton);
            } else if (event.target.value == "decoration") {
                this.makeDecorationFields(form, createButton);
            }
        })
    }

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

    removeTemp() {
        let element = document.getElementById("temp");
        element.parentNode.removeChild(element);
    }

    getElement(){
        console.log("return element");
        this.addFormModule();
        this.buildElement();
    }
}