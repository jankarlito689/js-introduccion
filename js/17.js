//funciones que retorna valores
function sumar(n1,n2){
    return n1 + n2;
}
const resultado = sumar(2,3)


let total = 0
function agregarcarrito(precio){
    return total += precio;
}

function calimpuesto(total){
    return 1.15 * total;
}

total = agregarcarrito(200);


console.log(total)
const totalApagar = calimpuesto(total);
console.log(totalApagar);