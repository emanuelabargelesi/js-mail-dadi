var mailconsentite = ['drmanhattan@gmail.com', 'thecomedian@gmail.com', 'silkspectre@gmail.com', 'rorschach@gmail.com', 'nightowl@gmail.com'];

var chiedimail = prompt("Inserisci il tuo indirizzo e-mail");

for (var i = 0; i < mailconsentite.length; i++) {
 if (mailconsentite[i] == chiedimail) {
 document.write("Non lo avete ancora capito? Non sono io rinchiuso qui con te... Sei tu rinchiuso qui con me!");
 } else {
    document.write("Un mondo in pace. Un sacrificio era necessario!");
   break;
 }
}
