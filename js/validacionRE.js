document.getElementById("registrar").addEventListener("click", function(event) {
    event.preventDefault();  // Evitar la acción predeterminada del formulario

    // Obtener los valores de los campos
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("Correo").value;
    var celular = document.getElementById("celular").value;
    var autorizo = document.getElementById("autorizo").checked;

    // Validación simple
    if (nombre === "" || apellido === "" || correo === "" || celular === "") {
        Swal.fire({
            title: '¡Error!',
            text: 'No puede haber campos vacíos.',
            icon: 'error',
            timer: 3000,
            timerProgressBar: true,
        });
    }

    else if (!autorizo){ 
        Swal.fire({
            title: '¡Error!',
            text: 'Debes aceptar los terminos y condiciones!',
            icon: 'error',
            timer: 3000,
            timerProgressBar: true,
        });
        return;
    }
    
    else {(autorizo) 
        Swal.fire({
            title: '¡Registro exitoso!',
            text: 'Gracias por registrarte.',
            icon: 'success',
            timer: 3000,
            timerProgressBar: true,
            willClose: () => {
                window.location.href = 'PaginaPri.html'; 
            }
        });       
    }
});