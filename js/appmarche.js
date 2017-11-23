/*function addition(a,b){
	return a+b;
}

function soustraction(a,b){
	return a-b;
}

function multiplication(a,b){
	return a*b;
}

function division(a,b){
	if (b>0) {
		return a/b;
		}	
	else {alert("Impossible de diviser par 0")}
}
*/

function zero(){
	var x = document.getElementById("zero").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}

function un(){
	var x = document.getElementById("un").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}

function deux(){
	var x = document.getElementById("deux").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}
function trois(){
	var x = document.getElementById("trois").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}

function quatre(){
	var x = document.getElementById("quatre").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}

function cinq(){
	var x = document.getElementById("cinq").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}
function six(){
	var x = document.getElementById("six").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}

function sept(){
	var x = document.getElementById("sept").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}

function huit(){
	var x = document.getElementById("huit").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}

function neuf(){
	var x = document.getElementById("neuf").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}


/* La fonction del permet de supprimer le dernier caractère entré dans le champ
de texte. Cependant, si le dernier caractère est un opérateur, il y a un espace
juste après (pour la lisibilité, voir le code des fonctions ci-dessus). Il faut
alors supprimer les deux dernier caractères (l'espace et l'opérateur) */

function del(){
	var valeur = document.getElementById("ecran").value;
	var longueur = valeur.length;
	var fin = longueur - 1;
	valeur = valeur.substring(0, fin);
	document.getElementById("ecran").value = valeur;
}

/*-------------------------les signes-----------------------------------------*/

function plus(){
	var x = document.getElementById("plus").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;
}

function moins(){
	var x = document.getElementById("moins").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + " " + x + " ";
}

function mult(){
	var x = document.getElementById("mult").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + " " + x + " ";
}

function divi(){
	var x = document.getElementById("divi").value;
	var valeur = document.getElementById("ecran").value;
	document.getElementById("ecran").value = valeur + x;

}

/* Cette fonction permet de calculer le résultat du calcul en utilisant la fonction
eval() disponible de base en JavaScript. Cette fonction va faire un calcul à
partir d'une chaîne de caractères contenant des opérateurs mathématiques. */

function egal(){

	var valeur = document.getElementById("ecran").value;
	var resultatFinal = eval(valeur);
	document.getElementById("ecran").value = valeur + " = " + resultatFinal;
	if(resultatFinal == Infinity){
		document.getElementById("ecran").value = "Impossible de diviser par 0";
	}
}