export default class UpdateItemView{
    constructor(){
    }

    buildColumn(type, extraProperties){
        let updateItemDiv = document.createElement("div");
        updateItemDiv.id = "updateItemDiv";
        updateItemDiv.append(this.createCanvasDiv(), this.createForm(type, extraProperties), this.createButtonDiv());
        mainUpdateItemDiv.append(updateItemDiv);
    }
    
    deleteColumn(){
        var element = document.getElementById("updateItemDiv");
        if(typeof(element) != 'undedined' && element != null){
            document.getElementById("updateItemDiv").remove();
        }
    }

    createCanvasDiv(){
        let canvasDiv = document.createElement("div");
        canvasDiv.id = "canvasDiv";
        canvasDiv.className = "text-center"

        let canvas = document.createElement("canvas");
        canvas.id = "canvas";
        canvasDiv.append(canvas);

        return canvasDiv;
    }

    createForm(type, extraProperties){
        let inputFieldsDiv = document.createElement("div");
        inputFieldsDiv.id = "inputFieldsDiv";
        inputFieldsDiv.className = "form-group";
        if(extraProperties != 0 ){
            inputFieldsDiv.append(this.createNameDiv(), this.createDescriptionDiv(), this.createSalesDiv(), this.createStockDiv(), this.createSpecialFields(type), this.createExtraProperties(extraProperties),this.createPropertyDiv());
        }
        else {
            inputFieldsDiv.append(this.createNameDiv(), this.createDescriptionDiv(), this.createSalesDiv(), this.createStockDiv(), this.createSpecialFields(type),this.createPropertyDiv());
        }
        

        let form = document.createElement("form");
        form.append(inputFieldsDiv);
        return form;
    }

    createSpecialFields(type){
        switch (type){
            case "Clothes":
                return this.createClothesDiv();
                break;
            case "Tierlantin":
                return this.createTierlantinDiv();
                break;
            case "Decoration":
                return this.createDecorationDiv();
                break;
        }
    }

    createClothesDiv(){
        let clothesDiv = document.createElement("div");
        clothesDiv.className = "form-row";

        let colorDiv = document.createElement("div");
        colorDiv.className = "col";

        let colorLabel = document.createElement("label");
        colorLabel.innerHTML = "Kleur";
        colorLabel.for = "color";

        let colorInput = document.createElement("input");
        colorInput.id = "color";
        colorInput.className = "form-control form-control-sm";

        colorDiv.append(colorLabel ,colorInput);

        let sizeDiv = document.createElement("div");
        sizeDiv.className = "col";

        let sizeLabel = document.createElement("label");
        sizeLabel.innerHTML = "Maat";
        sizeLabel.for = "size";

        let sizeInput = document.createElement("input");
        sizeInput.id = "size";
        sizeInput.className = "form-control form-control-sm";

        sizeDiv.append(sizeLabel, sizeInput);

        clothesDiv.append(colorDiv, sizeDiv);
        return clothesDiv;
    }

    createTierlantinDiv(){
        let tierlantinDiv = document.createElement("div");
        tierlantinDiv.className = "form-group";

        let weightLabel = document.createElement("label");
        weightLabel.innerHTML = "Gewicht";
        weightLabel.for = "weight";

        let weightInput = document.createElement("input");
        weightInput.id = "weight";
        weightInput.className = "form-control form-control-sm";

        tierlantinDiv.append(weightLabel, weightInput);
        return tierlantinDiv;
    }

    createDecorationDiv(){
        let decorationDiv = document.createElement("div");
        decorationDiv.className = "form-row";

        let sizeDiv = document.createElement("div");
        sizeDiv.className = "col";

        let sizeLabel = document.createElement("label");
        sizeLabel.innerHTML = "Grootte in cm";
        sizeLabel.for = "size";

        let sizeInput = document.createElement("input");
        sizeInput.id = "size";
        sizeInput.className = "form-control form-control-sm";

        sizeDiv.append(sizeLabel, sizeInput);
 
        let colorDiv = document.createElement("div");
        colorDiv.className = "col";

        let colorLabel = document.createElement("label");
        colorLabel.innerHTML = "Kleur";
        colorLabel.for = "color";

        let colorInput = document.createElement("input");
        colorInput.id = "color";
        colorInput.className = "form-control form-control-sm";

        colorDiv.append(colorLabel ,colorInput);

        let amountDiv = document.createElement("div");
        amountDiv.className = "col";

        let amountLabel = document.createElement("label");
        amountLabel.innerHTML = "Aantal/verpakking";
        amountLabel.for = "amount";

        let amountInput = document.createElement("input");
        amountInput.id = "amount";
        amountInput.className = "form-control form-control-sm";

        amountDiv.append(amountLabel, amountInput);

        decorationDiv.append(sizeDiv, colorDiv, amountDiv);
        return decorationDiv;
    }

    createNameDiv(){
        let nameDiv = document.createElement("div");
        nameDiv.className = "form-group";

        let nameLabel = document.createElement("label");
        nameLabel.innerHTML = "Naam";
        nameLabel.for = "name";

        let nameInput = document.createElement("input");
        nameInput.id = "name";
        nameInput.className = "form-control form-control-sm"; 

        nameDiv.append(nameLabel, nameInput);
        return nameDiv;
    }

    createDescriptionDiv(){
        let descriptionDiv = document.createElement("div");
        descriptionDiv.className = "form-group";
        let descriptionLabel;
        descriptionLabel = document.createElement("label");
        descriptionLabel.innerHTML = "Description";
        descriptionLabel.for = "desc";
        let descriptionInput;
        descriptionInput= document.createElement("textarea");
        descriptionInput.id ="desc";
        descriptionInput.className = "form-control form-control-sm";
        descriptionDiv.append(descriptionLabel, descriptionInput); 
        return descriptionDiv;
    }

    createPurchaseDiv(){
        let purchaseDiv = document.createElement("div");
        purchaseDiv.className = "col";

        let purchasePriceLabel;
        purchasePriceLabel = document.createElement("label");
        purchasePriceLabel.innerHTML = "Inkoopprijs";
        purchasePriceLabel.for = "purchasePrice";

        let purchasePriceInput;
        purchasePriceInput = document.createElement("input");
        purchasePriceInput.id = "purchasePrice";
        purchasePriceInput.className = "form-control form-control-sm";

        purchaseDiv.append(purchasePriceLabel, purchasePriceInput); 
        return purchaseDiv; 
    }

    createExcBtwDiv(){
        let excBtwDiv = document.createElement("div");
        excBtwDiv.className = "col";

        let sellingPriceBtwLabel;
        sellingPriceBtwLabel = document.createElement("label");
        sellingPriceBtwLabel.innerHTML = "Verkoopprijs exc. btw";
        sellingPriceBtwLabel.for = "excBtw";

        let sellingPriceBtwInput;
        sellingPriceBtwInput = document.createElement("input");
        sellingPriceBtwInput.id = "excBtw";
        sellingPriceBtwInput.className = "form-control form-control-sm";

        excBtwDiv.append(sellingPriceBtwLabel, sellingPriceBtwInput);
        return excBtwDiv;
    }

    createIncBtw(){
        let incBtwDiv = document.createElement("div");
        incBtwDiv.className = "col";

        let sellingPriceBtwIncLabel;
        sellingPriceBtwIncLabel = document.createElement("label");
        sellingPriceBtwIncLabel.innerHTML = "Verkoopprijs inc. btw";
        sellingPriceBtwIncLabel.for = "incBtw";

        let sellingPriceBtwIncInput;
        sellingPriceBtwIncInput = document.createElement("input");
        sellingPriceBtwIncInput.id = "incBtw";
        sellingPriceBtwIncInput.className = "form-control form-control-sm";

        incBtwDiv.append(sellingPriceBtwIncLabel, sellingPriceBtwIncInput);
        return incBtwDiv;
    }

    createSalesDiv(){
        let salesDiv = document.createElement("div");
        salesDiv.className = "form-row";
        salesDiv.append(this.createPurchaseDiv(), this.createExcBtwDiv(), this.createIncBtw());
        return salesDiv;
    }

    createStockDiv(){
        let stockDiv = document.createElement("div");
        stockDiv.className = "form-row";
        stockDiv.append(this.createMinimunStockDiv(), this.createCurrentStockDiv());
        return stockDiv;
    }

    createMinimunStockDiv(){
        let minStockDiv = document.createElement("div");
        minStockDiv.className = "col";

        let minimumStockLabel;
        minimumStockLabel = document.createElement("label");
        minimumStockLabel.innerHTML ="Minimale voorraad";
        minimumStockLabel.for = "minStock";

        let minimumStockInput;
        minimumStockInput = document.createElement("input");
        minimumStockInput.id = "minStock";
        minimumStockInput.className = "form-control form-control-sm";

        minStockDiv.append(minimumStockLabel, minimumStockInput);
        return minStockDiv;
    }

    createCurrentStockDiv(){
        let currentStockDiv = document.createElement("div");
        currentStockDiv.className = "col";

        let currentStockLabel;
        currentStockLabel = document.createElement("label");
        currentStockLabel.innerHTML = "Huidige voorraad";
        currentStockLabel.for = "curStock";
        let currentStockInput;
        currentStockInput = document.createElement("input");
        currentStockInput.id = "curStock";
        currentStockInput.className = "form-control form-control-sm";

        currentStockDiv.append(currentStockLabel, currentStockInput);
        return currentStockDiv;
    }

    createPropertyDiv(){
        let propertyDiv = document.createElement("div");
        propertyDiv.className ="col text-center";

        let addProperty = document.createElement("button");
        addProperty.id = "addProperty";
        addProperty.type = "button";    
        addProperty.className = "fa fa-plus-circle"
        propertyDiv.append(addProperty);
        return propertyDiv;
    }

    createDeleteButton(){
        let deleteButtonDiv = document.createElement("div");
        deleteButtonDiv.className ="col";

        let deleteButton = document.createElement("button");
        deleteButton.id = "deleteButton";
        deleteButton.innerHTML = "Verwijderen"
        deleteButton.type = "button"; 
        deleteButton.className = "btn btn-danger"   
        deleteButtonDiv.append(deleteButton);
        return deleteButtonDiv;
    }

    createSaveButton(){
        let saveButtonDiv = document.createElement("div");
        saveButtonDiv.className ="col";

        let saveButton = document.createElement("button");
        saveButton.id = "saveButton";
        saveButton.innerHTML = "Opslaan"
        saveButton.type = "button";    
        saveButton.className = "btn btn-success";
        saveButtonDiv.append(saveButton);
        return saveButtonDiv;
    }

    createButtonDiv(){
        let buttonDiv = document.createElement("div");
        buttonDiv.id = "buttonDiv";
        buttonDiv.className = "text-center form-row";
        buttonDiv.append(this.createSaveButton(), this.createDeleteButton());
        return buttonDiv;
    }

    createExtraProperties(extraProperties){
        let extraPropertyDiv = document.createElement("div");
        extraPropertyDiv.className = "form-group";
        for(let i = 0; i < extraProperties; i++){
            let extraPropertyLabel = document.createElement("label");
            extraPropertyLabel.innerHTML ="Extra eigenschap";
            extraPropertyLabel.id = "extraProperty" + extraProperties;
            extraPropertyLabel.for = "extraProperty" + extraProperties;

            let extraPropertyInput;
            extraPropertyInput = document.createElement("input");
            extraPropertyInput.id = "extraProperty" + extraProperties;;
            extraPropertyInput.className = "form-control form-control-sm";

            extraPropertyDiv.append(extraPropertyLabel, extraPropertyInput);
        }
        return extraPropertyDiv;
    }

    setEventListenerAddProperty(callback){
        addProperty.addEventListener("click", callback);
    }

    setEventListenerSave(callback){
        saveButton.addEventListener("click", callback);
    }

    setEventListenerDelete(callback){
        deleteButton.addEventListener("click", callback);
    }
}