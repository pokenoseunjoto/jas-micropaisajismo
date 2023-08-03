//CLASES

class Terrario {
    constructor(id, titulo, precio, imagen) {
        this.id = id,
        this.titulo = titulo,
        this.precio = precio,
        this.imagen = imagen
    }
    mostrarData() {
        console.log(`El terrario es ${this.titulo}, y su precio es ${this.precio}`)
    }
}

//DIFERENTES TERRARIOS

const terrario1 = new Terrario (1, "Terrario Jar", 4500, "10.jpg")
const terrario2 = new Terrario (2, "Terrario Jug ", 7500, "12.jpg")
const terrario3 = new Terrario (3, "Terrario Low Vase", 9000, "1.jpg")
const terrario4 = new Terrario (4, "Terrario Cylinder", 12500, "0.jpg")

//ARRAY DE LOS TERRARIOS

let terrarios = []

if (localStorage.getItem("terrarios")) {
    terrarios = JSON.parse(localStorage.getItem("terrarios"))
}else{
    terrarios.push(terrario1, terrario2, terrario3, terrario4)
    localStorage.setItem("terrarios", JSON.stringify(terrarios))
}


