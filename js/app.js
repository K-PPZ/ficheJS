console.log("hello");

let age;
age = 16;
//Le type de age est int.
console.log(typeof(age));

const prenom = "Korèn";
//Le type de prenom est une string.

let addition = 4 + 12;
console.log(addition);

let soustraction = 2 - 50;
console.log(soustraction);

let multiplication = 3 * 8;
console.log(multiplication);

let division = 7 / 2;
console.log(division);

let modulo = 5 % 2;
console.log(modulo);

let test = 3 > 5;
console.log(test);
console.log(typeof(test));
//Le type de test est un boolean.

//Les 8 operateurs de comparaison sont ==, ===, !=, !==, <=, >=, <, >.

let identity = "Bonjour" + " " + prenom + " " + "vous avez" + " " + age + " " + "ans";
//On addition des variables et des strings.
let majuscule = identity.toUpperCase();
console.log(identity);
//Identity affiche une phrase.
console.log(majuscule);
//Majuscule affiche identity mais en majuscule.