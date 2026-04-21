const numeros = [3, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 34, 4, 5, 6, 7, 8];

function verificaMaior(numero) {
  for (let i = 0; i < numero.length; i++) {
    let maior = [];
    if (numero[i] < numero[i + 1]) {
      maior = numero[i + 1];
    } else {
      maior = numero[i];
    }
    console.log(maior);
  }

  // console.log(numero[i] + " é menor que " + numero[i + 1]);

  //     }
  //   }
}
verificaMaior(numeros);
