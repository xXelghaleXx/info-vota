const partidosPoliticos = [
    {
        nombre: "Partido Político Nacional",
        postulante: {
            nombreCompleto: "César Acuña",
            edad: 60,
            infoPersonal: "Fundador del Partido Alianza para el Progreso.",
            cargo: "Presidente",
            estudios: "Administración de Empresas",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2mwJrhK4fQ6sXXwU0CHaAyQ7n1YPoznrKQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj2mwJrhK4fQ6sXXwU0CHaAyQ7n1YPoznrKQ&s" // Agrega la URL de la imagen
        }
    },
    {
        nombre: "Partido Aprista Peruano",
        postulante: {
            nombreCompleto: "Alfredo Barnechea",
            edad: 55,
            infoPersonal: "Economista y político peruano.",
            cargo: "Presidente",
            estudios: "Economía",
            imagen: "https://e.rpp-noticias.io/xlarge/2020/11/22/030503_1026009.jpg" // Agrega la URL de la imagen
        }
    },
    {
        nombre: "Fuerza Popular",
        postulante: {
            nombreCompleto: "Keiko Fujimori",
            edad: 48,
            infoPersonal: "Hija del ex-presidente Alberto Fujimori.",
            cargo: "Presidenta",
            estudios: "Administración de Empresas",
            imagen: "https://pbs.twimg.com/profile_images/1638663369853992966/CyJh2OZY_400x400.jpg" // Agrega la URL de la imagen
        }
    },
    {
        nombre: "Partido Morado",
        postulante: {
            nombreCompleto: "Julio Guzmán",
            edad: 44,
            infoPersonal: "Empresario y político peruano.",
            cargo: "Presidente",
            estudios: "Administración de Empresas",
            imagen: "https://pbs.twimg.com/profile_images/1687255646901542912/h8BDTnwd_400x400.jpg" // Agrega la URL de la imagen
        }
    },
    {
        nombre: "Acción Popular",
        postulante: {
            nombreCompleto: "Julio Chávez Chiong",
            edad: 50,
            infoPersonal: "Político y arquitecto peruano.",
            cargo: "Presidente",
            estudios: "Arquitectura",
            imagen: "https://portal.andina.pe/EDPfotografia3/Thumbnail/2018/10/08/000537199W.jpg" // Agrega la URL de la imagen
        }
    },
    // Agrega más partidos y postulantes según sea necesario
];


function llenarComparacion(partido1, partido2) {
    const body = document.getElementById('comparison-body');
    body.innerHTML = `
        <tr>
            <td>Nombre Completo</td>
            <td>${partido1.postulante.nombreCompleto}</td>
            <td>${partido2.postulante.nombreCompleto}</td>
        </tr>
        <tr>
            <td>Edad</td>
            <td>${partido1.postulante.edad}</td>
            <td>${partido2.postulante.edad}</td>
        </tr>
        <tr>
            <td>Información Personal</td>
            <td>${partido1.postulante.infoPersonal}</td>
            <td>${partido2.postulante.infoPersonal}</td>
        </tr>
        <tr>
            <td>Cargo</td>
            <td>${partido1.postulante.cargo}</td>
            <td>${partido2.postulante.cargo}</td>
        </tr>
        <tr>
            <td>Estudios</td>
            <td>${partido1.postulante.estudios}</td>
            <td>${partido2.postulante.estudios}</td>
        </tr>
        <tr>
            <td>Imagen</td>
            <td><img src="${partido1.postulante.imagen}" alt="${partido1.postulante.nombreCompleto}" style="width: 100px; height: auto;"></td>
            <td><img src="${partido2.postulante.imagen}" alt="${partido2.postulante.nombreCompleto}" style="width: 100px; height: auto;"></td>
        </tr>
    `;
}

function compararPartidos() {
    const partido1Index = document.getElementById('partido1-select').value;
    const partido2Index = document.getElementById('partido2-select').value;

    // Verificar si el usuario seleccionó el mismo partido
    if (partido1Index === partido2Index) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se puede elegir el mismo partido político',
        });
        return; // Salir de la función si se selecciona el mismo partido
    }

    const partido1 = partidosPoliticos[partido1Index];
    const partido2 = partidosPoliticos[partido2Index];

    llenarComparacion(partido1, partido2);
}

