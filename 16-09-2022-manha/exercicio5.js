//calcular volume de uma esfera
// formula: 
//v=4/3*pi*r**3



function calcularVolumeEsfera(diametro) {
    let raio = diametro / 2;
    let volume = (4 / 3 * Math.PI) * raio ** 3
    console.log(volume.toFixed(2));
}
calcularVolumeEsfera(4)