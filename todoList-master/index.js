

const balise = document.querySelectorAll('ul');
const bouton = document.body.querySelectorAll('button');

recup();

// -------------- fonction ajouter des éléments-----------
function ajoutElement(a){
    let ajout = document.createElement('li');
    let txt = document.createTextNode(a +'❎');
    ajout.appendChild(txt);
    let selection = document.getElementById('test');
    selection.appendChild(ajout);
}

/*------- fonctionnement le bouton --------------*/
// const bouton = document.body.querySelector('button');
ajouter = bouton[0]
function ajout(){
    let input = document.getElementById("liste").value;
    ajoutElement(input);
    save(input);
    document.getElementById("liste")
    document.getElementById("formulaire").reset(); 
}
ajouter.addEventListener('click',ajout);

/*-----------supprimer une tache -----------*/

addEventListener('click',function(e){
    let cible = e.target;
    if (cible.nodeName == 'LI') {
        cible.remove();
        supp(cible.innerText.substring(0,cible.innerText.length -1));  
        console.log(cible.innerText);      
    }
});

/*---------- sauvegarde local storage -------------*/
function save(texte) {
    let stockage = localStorage.getItem('sauvegarde');
    let liste = JSON.parse(stockage);
    if (liste === null) {
        liste = [];        
    }
    liste.push(texte);
    let strListe = JSON.stringify(liste);
    localStorage.setItem('sauvegarde', strListe); 
}

function recup() {
        let stockage = localStorage.getItem('sauvegarde');
        let tableau = JSON.parse(stockage);
        if (tableau === null) {
            tableau = [];        
        }
        for(let i = 0; i<tableau.length; i++){
            ajoutElement(tableau[i]);
        }
}

function supp(texte) {
    let stockage = localStorage.getItem('sauvegarde');
    let liste = JSON.parse(stockage);

    let myIndex = liste.indexOf(texte);
    liste.splice(myIndex,1);


    let strListe = JSON.stringify(liste);
    localStorage.setItem('sauvegarde', strListe); 
}
