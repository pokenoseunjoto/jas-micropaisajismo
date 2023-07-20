

let crearCuenta = false
let nombreUsuario = "";
let apellidoUsuario = "";


//CODIGO PARA INGRESAR NOMBRE Y APELLIDO

do {
    nombreUsuario = prompt("Ingrese su nombre");
    apellidoUsuario = prompt("Ingrese su apellido");
    if (nombreUsuario != "" && apellidoUsuario != "") {
        alert("Bienvenido/a" + " " + nombreUsuario + " " + apellidoUsuario)
    } else {
        alert("Por favor, ingresar el nombre de usuario");
    }
    crearCuenta = confirm("¿Deseas hacer algun cambio en los datos ingresados?")
} while (crearCuenta);


console.log("Bienvenido/a" + " " + nombreUsuario + " " + apellidoUsuario)


//CODIGO ESPECIFICANDO CADA TERRARIO

let terrarios = [
    {
        id: 1,
        nombreTerrario: "Jar",
        precio: 4500,
    },

    {
        id: 2,
        nombreTerrario: "Jug",
        precio: 7500,
    },

    {
        id: 3,
        nombreTerrario: "Low Vase",
        precio: 9000,
    },

    {
        id: 4,
        nombreTerrario: "Cylinder",
        precio: 12500,
    }
]

let producto = null
let carrito = [];


//FIND - CODIGO PARA ELEGIR TERRARIO

function buscarProducto() {
    let seleccion = prompt("Ingrese el nombre del terrario (Jar, Jug, Low Vase, Cylinder")
    for (let i = 0; i < terrarios.length; i++) {
        producto = terrarios.find((t) => t.nombreTerrario.toLowerCase() === seleccion.toLowerCase())
    }   
}



//CODIGO PARA INGRESAR LA CANTIDAD

function agregarCarrito() {
    if (producto) {
        let cantidad = parseInt(prompt("Ingrese la cantidad deseada"));
        carrito.push({
            producto: producto.nombreTerrario,
            cantidad: cantidad,
            subtotal: producto.precio * cantidad
        });
    } else {
        alert("El producto seleccionado no existe, por favor vuelva a intentarlo.");
    }
}


//SI LO ANTERIOR INGRESADO ES VERDADERO HACEMOS ESTE CODIGO PARA CONFIRMAR SI QUEREMOS AGREGAR OTRO PRODUCTO


function confirmarCarrito () {
    while (true) {
        buscarProducto();
        agregarCarrito();

        if(!confirm("¿Desea agregar otro producto al carrito?")) {
            break;
        }
    }
}



//CON ESTE CODIGO VACIAMOS EL CARRITO Y DAMOS LA OPORTUNIDAD A QUE VUELVA A CARGAR PRODUCTOS.


function vaciarCarrito() {
    carrito = [];
    alert("El carrito ha sido vaciado.");
}


do {
    producto = null; // Reiniciar el producto seleccionado
    confirmarCarrito();
    if (carrito.length > 0) {
        if (confirm("¿Desea vaciar el carrito?")) {
            vaciarCarrito();
        }
    }
} while (confirm("¿No quiere seguir comprando?"));



//REDUCE - CON ESTE CODIGO SUMAMOS EL TOTAL DE LOS PRODUCTOS SELECCIONADOS.


function calcularTotal() {
    let total = carrito.reduce((acu, item) => acu + item.subtotal, 0);

    console.log("Carrito de compras:");
    carrito.forEach((item) => {
        console.log(`- ${item.cantidad} ${item.producto}: ${item.subtotal}`);});
    console.log(`Total a pagar: ${total}`);
}



calcularTotal()

//FINAL DEL CODIGO SALUDANDO AL USUARIO


console.log("Gracias" + " " + nombreUsuario + " " + apellidoUsuario + " " + "por tu compra!")



