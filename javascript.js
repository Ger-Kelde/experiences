let currentValue = ""; // stocke ce qui est cliqué
let previousValue = ""; // stocke la valeur précédente
let operator = ""; // stocke l'opérateur +, -, etc.
let result; // pour stocker le résultat final

//page1
if (document.body.id ==="page1"){
	console.log("Exécution pour la page 1");


let buttonAll = document.querySelectorAll(".buttonall");

if (buttonAll.length > 0) {
    console.log(`${buttonAll.length} boutons trouvés !`);
} else {  // Si aucun élément n'existe
    console.log("Aucun bouton trouvé.");
}

// Fonction pour l'affichage
function updateDisplay(value) {
  document.getElementById("resultat").innerText = value; // Affiche la valeur dans l'élément "resultat"
}

// Fonction pour les boutons numériques
document.getElementById("button1").addEventListener("click", function() {
  currentValue += "1";
  updateDisplay(currentValue);
});
document.getElementById("button2").addEventListener("click", function() {
  currentValue += "2";
  updateDisplay(currentValue);
});
document.getElementById("button3").addEventListener("click", function() {
  currentValue += "3";
  updateDisplay(currentValue);
});
document.getElementById("button4").addEventListener("click", function() {
  currentValue += "4";
  updateDisplay(currentValue);
});
document.getElementById("button5").addEventListener("click", function() {
  currentValue += "5";
  updateDisplay(currentValue);
});
document.getElementById("button6").addEventListener("click", function() {
  currentValue += "6";
  updateDisplay(currentValue);
});
document.getElementById("button7").addEventListener("click", function() {
  currentValue += "7";
  updateDisplay(currentValue);
});
document.getElementById("button8").addEventListener("click", function() {
  currentValue += "8";
  updateDisplay(currentValue);
});
document.getElementById("button9").addEventListener("click", function() {
  currentValue += "9";
  updateDisplay(currentValue);
});

// Fonction pour le bouton +
document.getElementById("buttonplus").addEventListener("click", function() {
  previousValue = currentValue;
  currentValue = "";
  operator = "+";
  updateDisplay(currentValue);
});

// Fonction pour le bouton -
document.getElementById("buttonmoins").addEventListener("click", function() {
  previousValue = currentValue;
  currentValue = "";
  operator = "-";
  updateDisplay(currentValue);
});

}

// Fonction pour le bouton =
let buttonEgal = document.getElementById("buttonegal");

if (buttonEgal) {
    // Fonction pour le bouton =
    buttonEgal.addEventListener("click", function () {
        if (operator === "+") {
            result = parseInt(previousValue) + parseInt(currentValue);
        } else if (operator === "-") {
            result = parseInt(previousValue) - parseInt(currentValue);
        } else {
            console.log("Il y a une erreur dans l'opérateur.");
        }

        updateDisplay(result);
        currentValue = result.toString();
        previousValue = "";
    });
} else {
    console.log("Erreur : le bouton '=' est introuvable.");
}

document.addEventListener("DOMContentLoaded", function() {
    let buttonEgal = document.getElementById("buttonegal");

    if (buttonEgal) {
        buttonEgal.addEventListener("click", function() {
            console.log("Bouton égal cliqué !");
        });
    } else {
        console.log("Le bouton égal n'existe pas.");
    }
});


// page2

let time ="";

let timemin = 0;
let timemax = 24;

time = Math.floor(Math.random() * (timemax - timemin + 1)) + timemin;
document.getElementById("time").innerText = "l'heure aléatoire est :" + time;
console.log(time);


if (time >= 19 && time < 22) {
    alert("C'est le soir");
} else if ((time >= 22 && time <= 23) || (time >= 0 && time <= 4)) {
    alert("C'est la nuit");
} else if (time > 4 && time < 11) {
    alert("C'est le matin");
} else if (time == 12) {
    alert("Il est midi");
} else if (time > 12 && time < 19) {
    alert("C'est l'après-midi ! Bientôt le repos !");
} else {
    alert("Oh ! Une heure magique ! (En fait, c'est un bug, mais chutttt)");
}
