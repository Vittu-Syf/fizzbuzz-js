const numeros = [3, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 34, 4, 5, 6, 7, 8];

function verificaMaior(numero) {
  let maior = numero[0];

  for (let i = 1; i < numero.length; i++) {
    if (numero[i] > maior) {
      maior = numero[i];
    }
  }
  console.log(maior);
}

verificaMaior(numeros);
