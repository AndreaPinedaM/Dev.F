let cuenta1 ={
    nombre: "Andy",
    psw: "pass123",
    cuenta: 09876980,
    saldo: 102,
    correo: "andy@hotmail.com"
}

let cuenta2 ={
    nombre: "Leonardo",
    psw: "pass9070",
    cuenta: 87856780,
    saldo: 537,
    correo: "leo@hotmail.com"
}

let cuenta3 ={
    nombre: "Elizabeth",
    psw: "pass0088",
    cuenta: 19576483,
    saldo: 67,
    correo: "eli@hotmail.com"
}

let cuentas=[cuenta1, cuenta2, cuenta3]

let form= document.getElementById('formulario')
let tittle= document.getElementById('titulo')

const reset=()=>{
    tittle.innerHTML= 'Intentalo de nuevo'
    document.getElementById('user').value= ""
    document.getElementById('password').value= ""
}

const validar =(user, password) => {
    let member= cuentas.find( (persona) => persona.correo == user)
    let send=document.getElementById('Send')
    let error=0;

    if(member != undefined){
        console.log(member)
        if(user=="" || password==""){
            Swal.fire("Ingresa tus datos")
        }else if(password==member.psw){
            sessionStorage.setItem("nombre", member.nombre)
            sessionStorage.setItem("correo", member.correo)
            sessionStorage.setItem("saldo", member.saldo)
            Swal.fire(
                'Bienvenid@ ' + member.nombre,
                'Has ingresado a tu cuenta!',
                'success'
            )
            setTimeout(()=>{
                location.href='./bank2.html'
            }, 2000)
        }else if(password!=member.psw){
            errorPassword.classList.remove('hide')
            setTimeout(()=>{
                errorPassword.classList.add('hide')
                reset();
            }, 2000)
            error++
        }
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ese correo no existe!'
        })
    }
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    console.log('Me diste click')
    let user= document.getElementById('user').value
    let password= document.getElementById('password').value
    validar(user, password);
})


