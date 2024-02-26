function encriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let textoEncriptado = document.getElementById("texto-encriptado");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        textoEncriptado.textContent = "";
        muñeco.src = "./imagenes-Challenge/diamod.png";
    }   else {
        muñeco.src = "./imagenes-Challenge/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        textoEncriptado.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("Debe ingresar un texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let textoEncriptado = document.getElementById("texto-encriptado");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        textoEncriptado.textContent = "";
        muñeco.src = "./imagenes-Challenge/Frame 6.png";
    }   else {
        muñeco.src = "./imagenes-Challenge/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        textoEncriptado.textContent = "Ingrese el texto que desea encriptar o desencriptar";
        alert("Debe ingresar un texto");
    }
}

