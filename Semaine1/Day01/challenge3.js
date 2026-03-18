const personne = {
    nom: 'mohammed',
    prenom: 'oughlane',
    age: 23,
    ville: 'marrakech',
    email: 'mohammed@gmail.com'
}
console.log('ville ancienne : ', personne.ville);
personne.ville = 'youssofia'
console.log('la ville apres la modification : ', personne.ville);

personne.tele = '06';
console.log("ce ci le numero de tele apres ajoute le : ", personne.tele);

console.log("affichage des cle value de objet personne ")
for(const pers in personne){
    console.log(pers, ":", personne[pers]);
}