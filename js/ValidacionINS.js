const Datos = document.getElementById('floatingInput')
const contraseña = document.getElementById('floatingPassword')
const Entrar =document.getElementById('Entrar')

Entrar.addEventListener('click',()=>{
    if(Datos.value.length == 0){
        Swal.fire({
            title: '¡Error!',
            text: 'No puede haber campos vacíos.',
            icon: 'error',
            timer: 3000,
            timerProgressBar: true,
        });
    }
    else if(contraseña.value.length == 0){
        Swal.fire({
            title: '¡Error!',
            text: 'No puede haber campos vacíos.',
            icon: 'error',
            timer: 3000,
            timerProgressBar: true,
        });
    }
    else {
        alert('Inicio de sesion correcto')
    }
}) 