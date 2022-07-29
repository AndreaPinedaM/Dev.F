/*const usuario= "Andy";
const contraseña= "123devf";

const user=prompt("Ingresa tu usuario");
const password=prompt("Ingresa tu contraseña");

function validar(){
    if(user=="Andy" && password=="123devf"){
        alert("Bienvenido, has iniciado sesión")
    }else if(user !="Andy"){
        alert("Usuario incorrecto");
    }else if(password !="123devf"){
        alert("Contraseña incorrecta");
    }else{
        alert("Datos incorrectos");
    }
}

validar()

let nombre= prompt("Ingrese su nombre");
let edad= prompt("Ingrese su edad:");
let examen= prompt("Ingrese el estado de su examen A/R").toLowerCase();                                        

if(edad>=18 && examen=="a"){
    alert("Felicidades " + nombre + " obtuviste tu licencia");
}else if (edad<18){
    alert("No obtuviste tu licencia, eres menor de edad ");
}else if(examen=="r"){
    alert("Licencia denegada. Examen de vista no aprobado");
}else{
    alert("Error");
}*/

// Crear un programa para evaluar si tenemos covid
// 1.- Solicitar al usuario si tiene los siguientes sintomas
// a.- dolor de cabeza
// b.- Dificultad para respirar
// c.- temperatura mayor a 37grados
// d.- Dolor de cuerpo
// e.- Si tengo vacunas aplicadas
// 2 a- Debo evaluar si  tengo 3 de los sintomas
// (dolor de cabeza, disficultad al respirar, temperatura)
// y no tengo vacunas tengo un 70% de tener covid
// 2,b Si presento 3 sintomas y tengo mis vacunas tendre un 40% de tener covid
//2.c - si presento todos los sintomas pues tengo 100% aunque tenga las vacunas


let head=document.getElementById('head');
let res=document.getElementById('respirar');
let temp=document.getElementById('temp');
let cuerpo=document.getElementById('cuerpo');
let btn=document.getElementById('send')
let vacuna=document.getElementById('vacuna')
let sinVacunar=document.getElementById('vacuna_no')
let msg=document.getElementById('mensaje')
let sintomas=0;

btn.addEventListener('click', (evento) => {
    evento.preventDefault()
    if(head.checked) {
        console.log('El elemento cabeza está marcado');
        sintomas++
    }
    if(res.checked){
        console.log('El elemento repiracion está marcado');
        sintomas++
    }
    if(temp.checked){
        console.log('El elemento temperatura está marcado');
        sintomas++
    }
    if(cuerpo.checked){
        console.log('El elemento cuerpo está marcado');
        sintomas++
    }

    const select = document.getElementById('vacuna')
    let vac=select.value
    console.log(vac)

    // select.onchange = (evento) => { //onchange es como un addEventListener para un Select
    //     let cambio=evento.target.value
    //     console.log(cambio)
    // }

    if(sintomas>=3 && vac=='no'){
        msg.innerHTML="Tienes un 70% de posibilidades de tener covid"
    }else if(sintomas==3 && vac=='si'){
        msg.innerHTML="Tienes un 40% de posibilidades de tener covid"
    }else if(sintomas>3){
        msg.innerHTML="Las posibilidades de tener covid son altas"
    }else{
        msg.innerHTML="Las posibilidades de tener covid son bajas"
    }

  });
