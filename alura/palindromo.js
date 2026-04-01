const palavraV = ["ovo"];

function verificaPalindromo(palavra) {
  const arryOrg = palavra[0].split("");

  const arryRvs = [...arryOrg].reverse();
  console.log(arryOrg, arryRvs);

  if (JSON.stringify(arryOrg) === JSON.stringify(arryRvs)) {
    console.log(`${palavraV} é um palindromo`);
  } else {
    console.log(`${palavraV} não é um palindromo`);
  }
}
verificaPalindromo(palavraV);
