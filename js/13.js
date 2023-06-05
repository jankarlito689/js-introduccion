//areglo unidimencional
const meses = ['enero','febrero','marzo','mayo'];

//erreglo
const carrito = [
    {NombreDelProducto:"moto",PrecioDelProducto:100},
    {NombreDelProducto:"auto",PrecioDelProducto:200},
    {NombreDelProducto:"television",PrecioDelProducto:50},
    {NombreDelProducto:"celular",PrecioDelProducto:70},
    {NombreDelProducto:"xbox",PrecioDelProducto:150},
    {NombreDelProducto:"playstation",PrecioDelProducto:120},
]

//forEach
meses.forEach(function(mes){
    if(mes == 'marzo'){
        console.log("marzo si exite");
    }
});

//arry methods
//includes
let resultado = meses.includes('marzo');

//some ideal para arreglo de multiples objetos

resultado = carrito.some(function(NombreDelProducto){
    return NombreDelProducto.mobre == 'moto'
});

//reduce
resultado = carrito.reduce(function(total,PrecioDelProducto){
    return total + NombreDelProducto.PrecioDelProducto
},0);

//filter
resultado = carrito.filter(function(PrecioDelProducto){
    return NombreDelProducto.PrecioDelProducto > 400
})
console.log(resultado)