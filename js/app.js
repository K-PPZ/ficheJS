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

age = prompt("Entrer age");
console.log(age);

if (age <= 0) {
    console.log("Vous etes un poisson");
}
if (age > 0 && age < 120) {
    console.log("Votre age est valide");
} else {
    console.log("Je ne suis pas d'accord");
}

if (age >= 21) {
    console.log("Vous etes majeur");
}
if (age < 21 && age >= 18) {
    console.log("Vous etes majeur mais pas aux USA");
}
if (age < 18) {
    console.log("Vous etes mineur");
}
//Les 3 operateurs booleens sont ||, &&, !


function direBonjour() {
    console.log("Bonjour");
}
direBonjour();

function direBonjourAkelkain(name) {
    console.log("Bonjour" + " " + name);
}
direBonjourAkelkain("Korèn");

function hello(name, city) {
    if (city) {
        console.log("Bonjour" + " " + name + " " + "Vous habitez" + " " + city);
    } else {
        console.log("Bonjour" + " " + name + " " + "Vous habitez Lyon");
    }
}
hello("Korèn", "Brignais");

function add(a, b) {
    return a + b;
}
console.log(add(1, 2));

function div(a, b) {
    return a / b;
}
console.log(div(10, 2));

function positive(num) {
    if (num >= 0) {
        return true;
    } else {
        return false;
    }
}
console.log(positive(15));

