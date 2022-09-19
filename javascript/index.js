window.addEventListener("DOMContentLoaded", () =>{

    // La variable raceNumber est affectée à l'objet Math qui permet de fournir un numéro aléatoire entre 0 et 1000.
    let raceNumber = Math.floor(Math.random()*1000);

    // La variable inscription est modifiable. Si je saisi true -> inscription avant 9h30. Si je saisi false -> inscription après 11h30.
    let inscription = true; //true = avant 9h30 et false = après 11h30.

    // La variable age est modifiable.
    let age = 18;

    if(age > 18 && inscription === true){
        raceNumber += 1000;
    }

    if(age > 18 && inscription === true){
        console.log(`Les adultes à l'heure courent à 9h30. Le numéro de course est: ${raceNumber}!`);
    } else if(age > 18 && inscription === false) {
        console.log(`Les adultes en retard courent à 11h00. Le numéro de course est: ${raceNumber} !`);
    } else if(age < 18) {
        console.log(`Les jeunes inscrits courent à 12h30 (quelle que soit l'inscription). Le numéro de course est: ${raceNumber}`);
    }
    else {
        console.log(`Les coureurs de 18 ans doivent se rendre au bureau d'inscription au plus vite.`);
    }
});