export default class CreateItemView{
    constructor(){
        console.log("item view");
        // this.buildElement();
    }

    buildElement(){
        // let containerElement = document.getElementById("root");
        // let rowElement = document.createElement("row");
        // let colElement = document.createElement("col-sm");
        // let label = document.createElement("label");
        // label.innerText = "doe iets laten zien zodat ik weet dat dit werkt :)"

        // containerElement.append(rowElement, colElement, label);
        // this.element = containerElement;
        // console.log("build element");
        // return this.element;
        let x = document.getElementById("root");
        let btn = document.createElement("BUTTON");   // Create a <button> element
        btn.innerHTML = "CLICK ME";                   // Insert text
        x.append(btn);               // Append <button> to <body>
    }

    getElement(){
        console.log("return element");
        // console.log(this.buildElement());
        return this.buildElement();
    }
}