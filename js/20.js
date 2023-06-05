//estructuras de control js
// const puntaje = 100;
//  if(puntaje !== 100)
//  {
//     console.log("el puntaje es 100");
//  }else
//  {
//     console.log("no esta correcto");
//  }

const rol = 'EDITOR';
if (rol === 'admin'){
    console.log("tienes acceso admin");
}else if (rol == 'EDITOR'){
    console.log("tines permisos de EDITOR")
}else{
    console.log("no tines acceso bro");
}