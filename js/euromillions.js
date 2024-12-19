/* L'euromillions consiste à faire un tirage de 5 nombres entre 1 et 50 et deux numéros étoiles entre 1 et 12

liste de courses bien utiles :
Math.random()
while(**)
Math.ceil(**)
push(**)
includes(**)
setTimeout(**)

*/

/*creation du tableau*/
let boule = [];
let etoile = [];

const numeroGagnant = document.getElementById("resultat");

Euromillion.tableauBoule().forEach((numero, idx) => {
  const eurom = new Euromillion(numero,"boule");
  numeroGagnant.appendChild(eurom.getHtmlBoule());    
  setTimeout(() => eurom.setVisible(), (idx + 1) * 1000);
});
Euromillion.tableauEtoile().forEach((numero, idx) => {
    const eurom = new Euromillion(numero,"etoile");
    numeroGagnant.appendChild(eurom.getHtmlEtoile());   
    setTimeout(() => eurom.setVisible(), (idx + 6) * 1000);

  });


