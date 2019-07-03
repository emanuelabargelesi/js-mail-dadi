// dichiariamo i numeri random del dado
var risultato = Math.floor(Math.random() * 101);
var risultatodue = Math.floor(Math.random() * 101);

//dichiariamo la funzione di lancio
function lancio() {
  document.getElementById("risultato").innerHTML = "PlayerUno: " + risultato;
  document.getElementById("risultatodue").innerHTML = "PlayerDue: " + risultatodue;

  if (risultato > risultatodue) {
    alert("PlayerUno ha vinto con " + risultato);

  }

  else if (risultatodue > risultato) {
    alert("PlayerDue ha vinto con " + risultatodue);
  }

  else {
    alert("Pareggio!");
  }

}
