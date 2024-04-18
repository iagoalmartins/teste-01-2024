//Questao numero 2
function verFibonacci(valor) {
    let a = 0;
    let b = 1;
    while (a <= valor) {
      if (a == numero) {
        return `O número ${valor} pertence à sequência de Fibonacci.`;
      }
      let aux = a;
      a = b;
      b = aux + b;
    }
    return `O número ${valor} não pertence à sequência de Fibonacci.`;
}

const numero = 5;
console.log(verFibonacci(numero));
