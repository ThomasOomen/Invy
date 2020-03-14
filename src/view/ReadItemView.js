export default class ReadItemView{
    constructor(){
        this.buildNavBar();
    }

    buildNavBar(){
        let navbarDiv = document.createElement("div");
        navbarDiv.setAttribute("class", "navbarDiv text-center")
        let buttonDiv = document.createElement("div");
        buttonDiv.setAttribute("class", "buttonDiv")

        
        this.clothesButton = document.createElement("button");
        this.clothesButton.id = "clothesButton";
        this.clothesButton.innerText = "Kleding";
        this.clothesButton.type = "button;"

        this.tierlantinButton = document.createElement("button");
        this.tierlantinButton.id = "tierlantinButton";
        this.tierlantinButton.innerText = "Tierlantijn";
        this.tierlantinButton.type = "button";

        this.decorationButton = document.createElement("button");
        this.decorationButton.id = "decorationButton";
        this.decorationButton.innerHTML = "Decoratie"
        this.decorationButton.type = "button";        


        buttonDiv.append(this.clothesButton, this.tierlantinButton, this.decorationButton);
        navbarDiv.append(buttonDiv);
        mainReadItemDiv.append(navbarDiv);
        return mainReadItemDiv;
    }

    buildGrid(name){
        let readItemDiv = document.createElement("div");
        readItemDiv.setAttribute("id", "readItemDiv");
        readItemDiv.setAttribute("class", "class", "col text-center");
        let cols = 15;
        let rows = 15;
        readItemDiv.style.setProperty('--grid-rows', rows);
        readItemDiv.style.setProperty('--grid-cols', cols);
        for(let c = 0; c< (rows * cols); c++) {
            let cell = document.createElement("div");
            cell.innerText = (name + 1);
            readItemDiv.appendChild(cell).className = "grid-item";
        }
        mainReadItemDiv.append(readItemDiv);
        return mainReadItemDiv;
    }

    deleteGrid(){
        var element = document.getElementById("readItemDiv");
        if(typeof(element) != 'undedined' && element != null){
            document.getElementById("readItemDiv").remove();
        }
    }

    setEventListenerClothes(callback){
        this.clothesButton.addEventListener("click", callback);

    }

    setEventListenerTierlantin(callback){
        this.tierlantinButton.addEventListener("click", callback);
    }

    setEventListenerDecoration(callback){
        this.decorationButton.addEventListener("click", callback);
    }
}