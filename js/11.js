//objeto
const productos = {
    nombreProductos: "consola de videojuegos",
    precio: 300,
    disponible: true
}

const medidas = {
    ancho: "1m",
    peso: "3kg"
}

//uniendo objetos
const nuevoProducto ={...productos,medidas};