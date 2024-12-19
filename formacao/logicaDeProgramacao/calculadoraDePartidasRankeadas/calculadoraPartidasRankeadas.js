let win = 22;
let lose = 8;

let saldoDeVitorias = saldoDeVitoria(win, lose);
let nivel = verificaRanking(saldoDeVitorias);

function saldoDeVitoria(win, lose) {
   let saldoDeVitoria = win - lose;
   return saldoDeVitoria;
}

function verificaRanking(saldoDeVitorias) {
   if (saldoDeVitorias > 0 && saldoDeVitorias <= 10) {
      let ranking = "Ferro";
      return ranking
   } else if (saldoDeVitorias > 10 && saldoDeVitorias <= 20) {
      let ranking = "Bronze";
      return ranking
   } else if (saldoDeVitorias > 20 && saldoDeVitorias <= 50) {
      let ranking = "Prata";
      return ranking
   } else if (saldoDeVitorias > 50 && saldoDeVitorias <= 80) {
      let ranking = "Ouro";
      return ranking
   } else if (saldoDeVitorias > 80 && saldoDeVitorias <= 90) {
      let ranking = "Diamante";
      return ranking
   } else if (saldoDeVitorias > 90 && saldoDeVitorias <= 100) {
      let ranking = "Lendário";
      return ranking
   } else if (saldoDeVitorias > 100) {
      let ranking = "Imortal";
      return ranking
   } else {
      let ranking = "Perdedor";
      return ranking
   }
}

console.log(`O Herói tem de saldo ${saldoDeVitorias} e está no nível de "${nivel}"`)