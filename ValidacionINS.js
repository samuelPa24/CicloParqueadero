const Datos = document.getElementById('floatingInput')
const contraseña = document.getElementById('floatingPassword')
const Entrar =document.getElementById('Entrar')

Entrar.addEventListener('click',()=>{
    if(Datos.value.length == 0){
        alert('No puede haber campos vacios');
    }
    else if(contraseña.value.length == 0){
        alert('No puede haber campos vacios')
    }
    else {
        alert('Inicio de sesion correcto')
    }
}) 