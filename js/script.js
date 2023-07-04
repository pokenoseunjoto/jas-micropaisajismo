


let resultado = ""
let valor = 0
let nuevaOperacion = false
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






//CODIGO PARA INGRESAR QUE PRODUCTOS SE DESEA COMPRAR Y A QUE PRECIO


function hacerCarrito(){
    console.log("Productos en el carrito:");
    do {
        terrarios = prompt("¿Cual terrario deseas comprar? (JAR) (JUG) (LOW VASE) (CYLINDER)")
        valor = Number(prompt("¿Cuantos terrarios andas buscando?"))
        productos(4500,7500,9000,12500)
        nuevaOperacion = confirm("¿Queres comprar algo mas?")
    } while (nuevaOperacion);
}



// Terrario jar: $4500, Terrario jug: $7500, Terrario low vase: $9000, Terrario cylinder: $12500

function productos(jar, jug, lowVase, cylinder) {
    switch (terrarios.toUpperCase()) {
        case "JAR":
            resultado = valor * jar
            console.log("Compraste" + " " + valor + " " + "terrario/s jar a " + resultado + " ARS")
            break;

            case "JUG":
            resultado = valor * jug
            console.log("Compraste" + " " + valor + " " + "terrario/s jug a " + resultado + " ARS")
            break;

            case "LOW VASE":
            resultado = valor * lowVase
            console.log("Compraste" + " " + valor + " " + "terrario/s Low Vase a " + resultado + " ARS")
            break;

            case "CYLINDER":
            resultado = valor * cylinder
            console.log("Compraste" + " " + valor + " " + "terrario/s Cylinder a " + resultado + " ARS")
            break;
    
        default:
            alert("No existen esos terrarios")
            terrarios = 0
            break;
    }
}

//ACTIVANDO CARRITO Y SALUDO FINAL

hacerCarrito()

console.log("Gracias" + " " + nombreUsuario + " " + apellidoUsuario + " " + "por tu compra!")