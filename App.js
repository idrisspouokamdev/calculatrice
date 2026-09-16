// FONCTION ADDITION
function addition(nombreA,nombreB){
    return nombreA+nombreB;
}
// FONCTION MULTIPLICATION
function multiplication(nombreA,nombreB){
    return nombreA*nombreB;
}
// FONCTION SOUSTRACTION
function soustration(nombreA,nombreB){
    return nombreA-nombreB;
}
// FONCTION DIVISION
function division(nombreA,nombreB){
    if (nombreB == 0) {
        throw new Error("impossible de divise par zero");
    }
    return nombreA/nombreB ;
}

do {
    var choix = Number(prompt("Que souhaitez-vous faire?\n\n 1-Addition\n\n 2-Multiplication\n\n 3-Soustraction\n\n 4-Division"));
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);
do {
    var premierNombre  = Number(prompt("Entrez le premier nombre"));
    var deuxiemeNombre = Number(prompt("Entrez le deuxième nombre"));
} while (isNaN(premierNombre)|| isNaN(deuxiemeNombre));

try {
    switch(choix){
    case 1:
        var resultat = addition(premierNombre,deuxiemeNombre);
        break;
    case 2:
        var resultat = multiplication(premierNombre,deuxiemeNombre);
        break;
    case 3:
        var resultat = soustration(premierNombre,deuxiemeNombre);
        break;
    case 4:
        var resultat = division(premierNombre,deuxiemeNombre);
        break;
    default:
        throw new Error("choix invalide");
}
alert("Voici le resultat :" +resultat);
} 
catch (error) {
    alert("Erreur" +error.message);
}
