export default class CreateItemView{
    constructor(){
        console.log("item view");
        // this.buildElement();
    }

    buildElement(){
        let mainCreateItemDiv = document.getElementById("mainCreateItemDiv"); //pak hoofd div voor create item.
        let createItemDiv = document.createElement("div"); // maakt nieuw element van het type div
        createItemDiv.setAttribute("id", "createItemDiv"); // pakt het nieuwe gemaakte div en zet het id -> createItemDiv
        createItemDiv.setAttribute("class", "col text-center"); // pakt het nieuwe gemaakte div en zet de class -> col text-center (bootstrap kolom en zet alles in het het midden van die kolom)

        let btn = document.createElement("BUTTON");   // maak button
        btn.innerHTML = "CLICK ME";   // zet tekst
        createItemDiv.append(btn);    // voeg button toe aan de kolom waar alle onderdelen in moeten
        mainCreateItemDiv.append(createItemDiv); // voeg de gemaakte kolom toe aan de hoofdkolom
    }

    getElement(){
        console.log("return element");
        // console.log(this.buildElement());
        return this.buildElement();
    }
}