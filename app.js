const contenedorQR = document.getElementById('contenedorQR');
const formulario = document.getElementById('formulario');
const QR = new QRCode(contenedorQR);

formulario.addEventListener('submit', (evento) => {
  evento.preventDefault()//previene que la página se actualice cuando se aprieta submit
  QR.makeCode(formulario.input.value)
})