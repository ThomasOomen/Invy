export default class CreateItemView{
    constructor(){
        //this.controller = createItemController;
    }

    buildElement(){
        let form = document.getElementById("create-product-form");
        let createButton = document.getElementById("add-product-btn");
        //let typeChooser = document.getElementById("typeChooser");
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

    getElement(){
        this.addFormModule();
        this.buildElement();
    }

    setEventListenerCreateClothes(callback){
        let createButton = document.getElementById("add-product-btn");
        createButton.addEventListener("click", callback)
    }
}