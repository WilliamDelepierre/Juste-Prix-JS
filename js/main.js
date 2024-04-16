const justePrix = Math.round(Math.random() * 500);

console.log(justePrix);

let tentatives = 0;
let continuerJeu = true;

while (continuerJeu) {
  const reponse = parseInt(prompt("Donnes-moi un nombre entre 0 et 500"));

  if (reponse === justePrix) {
    alert(`Bravo tu as gagné ! Tu as réussi en ${tentatives} tentatives ! 🎉`);
    break;
  } else if (reponse > justePrix) {
    const reponseConfirmee = confirm("C'est moins !");
    if (!reponseConfirmee) {
      alert("Vous avez quitté le jeu.");
      continuerJeu = false;
    }
    tentatives++;
  } else {
    const reponseConfirmee = confirm("C'est plus !");
    if (!reponseConfirmee) {
      alert("Vous avez quitté le jeu.");
      continuerJeu = false;
    }
    tentatives++;
  }
}
