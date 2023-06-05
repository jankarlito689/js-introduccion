//Declaracion de funcion
function sumar(){
    console.log(10 + 10)
}
sumar();

// exprecion de la funcion
const sumar2 = function(){
    console.log(3 + 6)
};
sumar2();

//iife
(function(){
    console.log("esto es una funcion")
})();