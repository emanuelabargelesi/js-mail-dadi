var giocatore1, giocatore2, dado;


dado = Math.floor(Math.random() * 6 + 1);
giocatore1 = dado;
console.log('giocatore1: ' + giocatore1);

dado = Math.floor(Math.random() * 6 + 1);
giocatore2 = dado;
console.log('giocatore2: ' + giocatore2);

if (giocatore1 === giocatore2) {
  console.log('Pareggio!');
} else if (giocatore1 > giocatore2) {
  console.log('Giocatore1 vince!');
} else {
  console.log('Giocatore2 vince!');
}
