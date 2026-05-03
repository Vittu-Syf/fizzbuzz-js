const s = "as";

function maiorSubstring(s) {
  let record = 1;

  for (let i = 0; i < s.length; i++) {
    let maiorSequencia = [s[i]];
    //console.log(`Maior sequencia = ${maiorSequencia}`);
    for (let j = i + 1; j < s.length; j++) {
      //console.log(`Comparando com ${s[j]}`);
      if (maiorSequencia.includes(s[j])) {
        //console.log(`${maiorSequencia} inclui ${s[j]}`);

        if (maiorSequencia.length > record) {
          record = maiorSequencia.length;
          //console.log(`Recorde = ${record}`);
        }
        maiorSequencia = [];
        //console.log(`Maior sequencia = ${maiorSequencia}`);

        break;
      } else {
        maiorSequencia.push(s[j]);
        if (record < maiorSequencia.length) {
          record = maiorSequencia.length;
        }
        //console.log(`Sequencia atual = ${maiorSequencia} = ${record}`);
      }
    }
  }
  if (s != "") {
    return record;
  } else {
    return 0;
  }
}

maiorSubstring(s);
