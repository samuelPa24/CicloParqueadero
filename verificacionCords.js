    const latA = 4.601025504132103; // Coordenadas de referencia (Universidad del Rosario)
    const lngA = -74.07303884639771;
    const rangoMaximo = 0.01; // 10 metros = 0.01 km
    let mapa, marcadorA, marcadorB;

    function iniciarMap() {
        mapa = L.map('map').setView([latA, lngA], 13); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapa);

        marcadorA = L.marker([latA, lngA]).addTo(mapa)
            .bindPopup('Universidad')
            .openPopup();
    }

    function calcularDistancia(lat1, lon1, lat2, lon2) {
        const radioTierra = 6371; // Radio de la Tierra
        const dLat = deg2rad(lat2 - lat1);
        const dLon = deg2rad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return radioTierra * c; // Distancia en km
    }

    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }

    function obtenerUbicacion() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(mostrarUbicacion, manejarError);
        } else {
            alert("La geolocalización no es soportada por este navegador.");
        }
    }

    function mostrarUbicacion(position) {
        const latB = position.coords.latitude;
        const lngB = position.coords.longitude;

        console.log(`Latitud: ${latB}, Longitud: ${lngB}`);

        // Calcular la distancia entre la ubicación del usuario y la referencia
        const distancia = calcularDistancia(latA, lngA, latB, lngB);

        // Si ya existe un marcador, lo eliminamos para agregar el nuevo
        if (marcadorB) {
            mapa.removeLayer(marcadorB); 
        }

        // Colocar el marcador de la ubicación del usuario
        marcadorB = L.marker([latB, lngB]).addTo(mapa)
            .bindPopup('Tu ubicación')
            .openPopup();

        mapa.setView([latB, lngB], 15);

        // Verificar si la distancia es menor o igual a 10 metros (0.01 km)
        if (distancia <= rangoMaximo) {
            alert('¡Ubicación válida! Estás dentro del rango.');
            realizarAccion(true);
        } else {
            alert('Error: Estás fuera del rango permitido.');
            realizarAccion(false);
        }
    }

    function realizarAccion(ubicacionValida) {
        if (ubicacionValida) {
            alert("Redirigiéndote a la siguiente página...");
            // Aquí puedes redirigir al usuario al login exitoso o realizar otra acción
            window.location.href = "pagina_de_exito.html"; // Cambia esta URL según lo necesario
        } else {
            alert("Por favor, acércate a la Universidad y vuelve a intentarlo.");
            // Puedes recargar la página para intentarlo de nuevo
            location.reload();
        }
    }

    function manejarError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("El usuario ha denegado el acceso a la ubicación.");
                break;  
            case error.POSITION_UNAVAILABLE:
                alert("La ubicación no está disponible.");
                break;
            case error.TIMEOUT:
                alert("Se agotó el tiempo para obtener la ubicación.");
                break;
            case error.UNKNOWN_ERROR:
                alert("Ocurrió un error desconocido.");
                break;
        }
    }

    window.onload = iniciarMap;
