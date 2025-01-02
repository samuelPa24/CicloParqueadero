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
        alert("Por favor, complete todos los campos.");
        return;
    }

    if (!autorizo) {
        alert("Debe autorizar los términos y condiciones.");
        return;
    }

    // Si la validación es exitosa, redirigir a PaginaPri.html
    window.location.href = "PaginaPri.html";
});
