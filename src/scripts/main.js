class Model {
    constructor() {
    }
}

class View {
    constructor() {
        const root = document.createElement("div")
        root.innerHTML = `<p>dsfhdsfkdsfjklsdkljfsdkjlkldfjflk Thomas.</p>`
        document.body.appendChild(root)

        const clothesButton = document.createElement("button");
        clothesButton.innerHTML = "Kleding"
        document.body.appendChild(clothesButton)

        const tierlantinButton = document.createElement("button");
        tierlantinButton.innerHTML = "Tierlantijn"
        document.body.appendChild(tierlantinButton)

        const decorationButton = document.createElement("button");
        decorationButton.innerHTML = "Decoratie"
        document.body.appendChild(decorationButton)
    }
}

class Controller{
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}


const app = new Controller(new Model(), new View())