//arreglos
const numeros =[10,85,54];

const mese = ['año','meses','junio'];

const mixto = ['año',3443,false];

//accedesr a los areglos
console.log(mese[0]);

//conocer la extencion de los areglos
console.log(mixto.length);

//para agregar elementos al final del arreglo
numeros.push(20);

//para agregar elementos al inicio del arreglo
numeros.unshift(-2-4);

//elimina el ultimo elemento
mese.pop();
//elimina el primer elemento
mese.shift();

//rest operation
const nuevoArreglo = [...mese,'enero']
