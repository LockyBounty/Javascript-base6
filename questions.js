var CreationTableauLangages = function () {
    let langages = ["Html", "CSS", "Java", "PHP"];
    return langages;
}

var CreationTableauNombres = function () {
    let a = [0, 1, 2, 3, 4, 5];
    return a;
}

var RemplacementElement = function (langages) {
    langages2 = langages;
    langages2.splice(2, 1, "Javascript");
    console.log(langages2);
    return langages2;
}

var AjoutElementLangages = function (langages) {
    langages3 = langages;
    langages3.push("Ruby", "Python");
    return langages3;
}

var AjoutElementNombres = function (nombres) {
    nombres2 = nombres;
    nombres2.splice(0, 0, -2,-1); /*On ajoute les valeurs -2 et -1 � partir de l'index 0 */
    return nombres2;
}

var SuppressionPremierElement = function (langages) {
    langages4 = langages;
    langages4.splice(0, 1); /*Supprime le premier elem du tab*/
    return langages4;
}

var SuppressionDernierElement = function (langages) {
    langages5 = langages;
    langages5.splice(-1, 1); /*Supprime le dernier elem du tab*/
    console.log(langages5);
    return langages5;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
    let a = reseaux_sociaux_chaine;
    
    console.log(a);
    return a;
}

var ConversionTableauChaine = function (langages) {

}

var TriTableau = function (reseaux_sociaux) {

}

var InversionTableau = function (reseaux_sociaux) {

}

console.log(CreationTableauLangages);