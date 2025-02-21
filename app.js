const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');

// Instancia QRCode correctamente (qrcode.js lo requiere de esta forma en el navegador)
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Evita que la página se recargue
  
  // Obtiene el valor del input
  const texto = document.getElementById('input').value;

  // Limpia el contenedor antes de generar un nuevo QR
  contenedorQR.innerHTML = "";

  if (texto.trim() !== "") {
    new QRCode(contenedorQR, {
      text: texto,
      width: 200,
      height: 200
    });
  } else {
    alert("Por favor ingresa un texto o enlace válido.");
  }
});
