function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const score = [];
let affichage = score.join("");

function play() {
  const game = {
    searchedNumber: randomNumber(10, 20),
    attempts: 1,
  };

  let enteredNumber = parseInt(prompt("Donnes-moi un nombre entre 10 et 20 !"));

  while (enteredNumber !== game.searchedNumber) {
    game.attempts++;

    if (!enteredNumber) {
      break;
    }
    if (enteredNumber < game.searchedNumber) {
      enteredNumber = parseInt(prompt("C'est plus"));
    } else {
      enteredNumber = parseInt(prompt("C'est moins"));
    }
  }

  if (enteredNumber) {
    score.push(game.attempts);
    alert(
      `Bravo ! C'était bien ${enteredNumber} ! - Nombre d'essais : ${game.attempts}`
    );
  } else {
    alert("Vous abandonnez ? Dommage...");
  }

  const restart = confirm("Veux-tu rejouer ?");
  if (restart) {
    play();
  } else {
    for (let i = 0; i < score.length; i++) {
      affichage = `Partie ${i + 1} : ${score[i]} essai(s)`;
    }
    alert(`Fin du jeu. Tableau des scrores : ${affichage}`);
  }
}

play();
