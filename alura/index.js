function criaLista() {
  let numeros = [1];
  while (numeros.length < 100) {
    numeros.push(numeros.length + 1);
    //if (numeros.length === 100) {
    //  console.log(numeros);
    //}
  }
  return numeros;
}

const lista = criaLista();

function multiplos() {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 3 === 0 && lista[i] % 5 === 0) {
      console.log(lista[i] + " deezNuts");
    } else if (lista[i] % 3 === 0) {
      console.log(lista[i] + " deez");
    } else if (lista[i] % 5 === 0) {
      console.log(lista[i] + " Nuts");
    } else {
      console.log(`${lista[i]}`);
    }
  }
}

multiplos();
