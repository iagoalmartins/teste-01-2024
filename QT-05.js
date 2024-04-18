//Questão 5
function stringReverse(texto) {
    let textoReverso = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        textoReverso += texto[i];
    }
    return textoReverso;
}

const texto = "Tecnologia para muitos";
console.log(stringReverse(texto));