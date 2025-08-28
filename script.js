
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

    subtitulo.style.color = (subtitulo.style.color === "darkblue") ? "black" : "darkblue";
    texto.style.color = (texto.style.color === "darkblue") ? "black" : "darkblue";
}