let productosEnCarrito = []

if (localStorage.getItem("carrito")) {
    productosEnCarrito = JSON.parse(localStorage.getItem("carrito"))
} else {
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}



function buscarTerrarios () {
    return fetch("../data.json").then(response => response.json())
}



//Buscador

function buscarInfo(buscado, array) {
    let busqueda = array.filter(
        (terrario) => terrario.titulo.toLowerCase().includes(buscado.toLowerCase())
    )

    if (busqueda.length == 0) {
        coincidencia.innerHTML = ""
        let nuevoDiv = document.createElement("div")
        nuevoDiv.innerHTML = `<p> No hay coincidencias</p>`
        nuevoDiv.style.color = "white"
        coincidencia.appendChild(nuevoDiv)
        mostrarCatalogo(array)
    } else {
        coincidencia.innerHTML = ""
        mostrarCatalogo(busqueda)
    }
}

//Ordenar por:

function ordenarMayorMenor(array) {
    let mayorMenor = [].concat(array)
    mayorMenor.sort((a, b) => (b.precio - a.precio))
    mostrarCatalogo(mayorMenor)
}

function ordenarMenorMayor(array) {
    let menorMayor = [].concat(array)
    menorMayor.sort((a, b) => (a.precio - b.precio))
    mostrarCatalogo(menorMayor)
}

function ordenarAlfabeticamente(array) {
    let alfabeticamente = [].concat(array)
    alfabeticamente.sort((a, b) => {
        if (a.titulo < b.titulo) return -1
        if (a.titulo > b.titulo) return 1
        return 0;
    })
    mostrarCatalogo(alfabeticamente)
}



//GLOBALES:

let divProductos = document.getElementById("productos")
let buscador = document.getElementById("buscador")
let modalBody = document.getElementById("modal-body")
let botonCarrito = document.getElementById("botonCarrito")
let coincidencia = document.getElementById("coincidencia")
let selectOrden = document.getElementById("selectOrden")



//Funcion para mostrar los productos:

function mostrarCatalogo(array) {
    divProductos.innerHTML = ""

    for (const terrario of array) {
        let nuevoTerrario = document.createElement("div")
        nuevoTerrario.classList.add("col-12", "col-md-6", "col-lg-4", "my-4")
        nuevoTerrario.innerHTML = 
        `<div id="${terrario.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 350px;"src="../img/terrarios-propios/${terrario.imagen}" alt="${terrario.titulo}">
        <div class="card-body">
            <h4 class="card-title">${terrario.titulo}</h4>
            <p class="">Precio: ${terrario.precio}</p>
        <button id="agregarBtn${terrario.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
        </div>`
        divProductos.appendChild(nuevoTerrario)
        let btnAgregar = document.getElementById(`agregarBtn${terrario.id}`)

        btnAgregar.addEventListener("click", () => {
            agregarAlCarrito(terrario)
            Swal.fire(
                'Excelente!',
                `Has agregado ${terrario.titulo} al carrito`,
                'success'
                )
        })
    }
}

//AGREGAR AL CARRITO

function agregarAlCarrito(terrario) {
    productosEnCarrito.push(terrario)
    localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
}

function cargarProductosCarrito(array) {
    modalBody.innerHTML = ""

    array.forEach(productoCarrito => {
        modalBody.innerHTML += 
    `<div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 450px;">
        <img class="card-img-top" height="550px" src="../img/terrarios-propios/${productoCarrito.imagen}" alt="${productoCarrito.titulo}">
        <div class="card-body">
            <h4 class="card-title">
                ${productoCarrito.titulo}
            </h4>
            <p class="card-text">
            ${productoCarrito.precio}
            </p> 
            <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
        </div>    
    </div>`
    });

    array.forEach((productoCarrito, indice) => {
        document.getElementById(`botonEliminar${productoCarrito.id}`).addEventListener("click", () => {
            let cardProducto = document.getElementById(`productoCarrito${productoCarrito.id}`)
            Swal.fire({
                title: `¿Estas seguro que quieres eliminar ${productoCarrito.titulo} del carrito?`,
                text: "En caso de eliminarlo, podras volver a agregarlo si lo vuelves a solicitar",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, descartar',
                cancelButtonText: 'Cancelar'
                }).then((result) => {
                if (result.isConfirmed) {
                cardProducto.remove()
                Swal.fire(
                    'Eliminado!',
                    `Has sacado ${productoCarrito.titulo} del carrito!`,
                    'success'
                )
                }
            })
            productosEnCarrito.splice(indice, 1)
            localStorage.setItem("carrito", JSON.stringify(productosEnCarrito))
        })
    });
}



buscador.addEventListener("input", () => {
    buscarTerrarios().then(productos => {
        buscarInfo(buscador.value, productos)
    })
})

botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosEnCarrito)
})

selectOrden.addEventListener("change", () => {
    if (selectOrden.value == 1) {
        buscarTerrarios().then(productos => {
            ordenarMayorMenor(productos)
        })
    }

    else if (selectOrden.value == 2) {
        buscarTerrarios().then(productos => {
            ordenarMenorMayor(productos)
        })
    }

    else if (selectOrden.value == 3) {
        buscarTerrarios().then(productos => {
            ordenarAlfabeticamente(productos)
        })
    }
    else {
        buscarTerrarios().then(productos => {
            mostrarCatalogo(productos)
        })
    }
})


buscarTerrarios().then(productos => {
    mostrarCatalogo(productos)
})