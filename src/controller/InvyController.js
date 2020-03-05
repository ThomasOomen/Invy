export default class InvyController{
    constructor(){
        this.initialize();
    }

    async initialize(){
        const root = document.createElement("div")
        root.innerHTML = `<p>Hello Webpack.</p>`
        document.body.appendChild(root)
        const root2 = document.createElement("div")
        root2.innerHTML = `<p>Hasdfasdasdaddd</p>`
        document.body.appendChild(root2)
        // andere controllers aanroepen.
    }
}