let btnDesencriptar = document.getElementById("btnDesencriptar");
btnDesencriptar.addEventListener("click", Desencriptar);

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let buscando = document.getElementById("buscando"); 

    let textoCifrado = texto
       .replace(/e/gi, "enter")
       .replace(/i/gi, "imes")
       .replace(/a/gi, "ai")
       .replace(/o/gi, "ober")
       .replace(/u/gi, "ufat"); 
    
  if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    parrafo.textContent = "";
    buscando.src = "./img/encriptado.jpg";
  } else{
    buscando.src = "./img/buscando.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
  }
}

function Desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let buscando = document.getElementById("buscando"); 

  let textoCifrado = texto 
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u"); 

  if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    document.getElementById("titulo-mensaje").textContent = "Texto desencriptado con éxito";
    document.getElementById("parrafo").textContent = "";
    document.getElementById("buscando").src = "./img/desencriptado.png";
  } else {
    buscando.src = "./img/buscando.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Debes ingresar algún texto");
  }
}
