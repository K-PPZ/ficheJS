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
    return num >= 0;
}
console.log(positive(15));


age = parseInt(age);
console.log(age);

let verifier_nombre = isNaN(age);
console.log(verifier_nombre);
// verifier_nombre me retourne false avec 42 et me retourne true avec "hello" et me retourne true si je ne met rien et que j'appuis sur ok et pareil pour si j'appuis sur annuler.

function isValid(userInput) {
    return parseInt(userInput) && userInput > 12 && userInput < 90;
}

let resultat = isValid(age);
console.log(resultat);
let resultatInverse = !resultat;
console.log(resultatInverse);
// Si dans age je met 42 resultat m'affiche true et resultatInverse m'affiche false, Si je met "hello" resultat m'affiche NaN et reultatIverse m'affiche true, Si je ne met rien et que j'appuis sur ok c'est la même chose et pareil si j'appuis sur annuler.

console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);

let i = 0;
while (i <= 4) {
    console.log(i);
    i++;
}

i = 99;
while (i >= 3) {
    console.log(i);
    i -= 3;
}

i = "0";
let result = "";
while (i <= 100) {
    if (i >= "0" && i <= "10" || i >= "90" && i <= "100") {
        result += i;
    }
    i ++;
}
console.log(result);