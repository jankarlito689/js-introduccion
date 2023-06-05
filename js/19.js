// arrow functions
const sumar2 = (num1,num2) =>{
    console.log(num1 + num2)
};
sumar2(7,7);

const aprendiendo = tecnoligia =>console.log(`tecnonologia ${tecnoligia}`)

aprendiendo('javaScript')




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
meses.forEach(mes => {
    if(mes == 'marzo'){
        console.log("marzo si exite");
    }
});

//some ideal para arreglo de multiples objetos

resultado = carrito.some( NombreDelProducto => NombreDelProducto.mobre == 'moto');

//reduce
resultado = carrito.reduce( (total,PrecioDelProducto) => total + NombreDelProducto.PrecioDelProducto,0);

//filter
resultado = carrito.filter( PrecioDelProducto => NombreDelProducto.PrecioDelProducto > 400)
console.log(resultado)