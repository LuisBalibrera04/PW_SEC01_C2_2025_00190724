
function cambiarColumnas() {
    const contenido = document.querySelector(".contenido_libro");
    contenido.classList.toggle("columnas");
}

function cambiarTitulo() {
    const titulo = document.querySelector("h1");
    if (titulo.textContent === "La divina comedia") {
        titulo.textContent = "HTML & CSS: Curso práctico avanzado";
    } else {
        titulo.textContent = "La divina comedia";
    }
}

function cambiarColor() {
    const subtitulo = document.querySelector(".nombre_descripcion_libro h2");
    const texto = document.querySelector(".descripcion_libro p");

    if (subtitulo.style.color === "darkblue") {
        subtitulo.style.color = "black";
        texto.style.fontFamily = "times new roman";
    } else {
        subtitulo.style.color = "darkblue";
        texto.style.fontFamily = "'Courier New', monospace";
    }
}

function anadirImagen() {
    const url = prompt("Ingresa la URL de la imagen que deseas añadir:");

    if (url) {
        let img = document.querySelector(".imagen_libro");
        if (img) {
            img.src = url;
        } else {
            img = document.createElement("img");
            img.src = url;
            img.alt = "";
            img.classList.add("imagen_libro");
            const datosLibro = document.querySelector(".datos_libro");
            datosLibro.insertAdjacentElement("afterend", img);
        }
    }
}