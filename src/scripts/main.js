class Model {
    constructor() {
    }
}

class View {
    constructor() {
        const root = document.createElement("div")
        root.innerHTML = `<p>dsfhdsfkdsfjklsdkljfsdkjlkldfjflk Thomas.</p>`
        document.body.appendChild(root)
    }
}

class Controller{
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
}


const app = new Controller(new Model(), new View())