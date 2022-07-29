document.getElementById("welcome").textContent = "Bienvenid@ " + sessionStorage.getItem('nombre')
let saldo=parseFloat(sessionStorage.getItem("saldo"))
let btn_dep=document.getElementById('dep');
let btn_ret=document.getElementById('ret')
let btn_con=document.getElementById('con')
let btn_out=document.getElementById('salir')


const depositar=()=>{
    let deposito=parseFloat(document.getElementById('deposito').value);
    if(deposito!=undefined || deposito!=NaN){
        if(deposito >=2000){
            Swal.fire("No se pueden hacer depositos mayores a $2,000")
        }else if(deposito<=0){
            Swal.fire("Cantidad no aceptada")
        }else if(deposito+saldo>990){
            Swal.fire("Has sobrepasado el limite de dinero a guardar en la cuenta")
        }else{
            saldo += deposito
            Swal.fire("Depositó $" +deposito,
            "Saldo actual: " + saldo)
        }
    }else{
        Swal.fire("Monto no aceptado")
    }
}

const retirar=()=>{
    let retiro=parseFloat(document.getElementById('retiro').value);
    if(retiro>saldo-10){
        Swal.fire("Fondos insuficientes")
    }else if(retiro<=0){
        Swal.fire("Cantidad no aceptada")
    }else{
        saldo -= retiro
        Swal.fire("Retiró $" + retiro,
        "Saldo actual: " + saldo)
    }
}

btn_dep.addEventListener('click', (evento) =>{
    evento.preventDefault()
    console.log('Diste click en depositar')
    depositar();
})

btn_ret.addEventListener('click', (evento) =>{
    evento.preventDefault()
    console.log('Diste click en retirar')
    retirar();
})

btn_con.addEventListener('click', (evento) =>{
    evento.preventDefault()
    console.log('Diste click en consultar')
    document.getElementById("monto").textContent= saldo;
})

btn_out.addEventListener('click', (evento) =>{
    console.log('Diste click en salir')
    location.href='./bank.html'
})