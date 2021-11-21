/*Space Jam*/
let _hitTrys = 0 
// Zähler für Versuche (globale Variable, zur Kennzeichnung ein "_" im Variablennamen , muss aber nicht gemacht werden )
let _monsterDistance = 0; 
// Distanz vom Monster vom Werfer, wird von der Funktion "hitMonster" beim ersten Versuch mit Zufallszahl belegt

let _planet = "Erde";

function choose(choice){
    _planet = choice;
    switch(_planet){
              //Planetenauswahl
        case "Pluto":document.getElementById("planet2").src="img/spacejam/pluto2.jpg";
        break;
        case "Neptun":document.getElementById("planet2").src="img/spacejam/neptun.jpg";
        break;
        case "Saturn":document.getElementById("planet2").src="img/spacejam/saturn.jpg";
        break;
        case "Merkur":document.getElementById("planet2").src="img/spacejam/merkur.jpg";
        break;
    }
}
function choose2(choice){// Spielerauswahl
    switch(choice){
        case "Lola":document.getElementById("planet").src="img/spacejam/lola.jpg";
        break;
        case "Bugs":document.getElementById("planet").src="img/spacejam/bugs.jpg";
        break;
        case "Michael":document.getElementById("planet").src="img/spacejam/jordan.jpg";
        break;
        case "Taz":document.getElementById("planet").src="img/spacejam/taz.png";
        break;
    }
}
 
function hitMonster(){ 

    let fallingSpeed=0.66;//Pluto = Standart
    switch(_planet){
        case "Neptun": fallingSpeed=10.15;
        break;
        case "Saturn": fallingSpeed=10.4;
        break;
        case "Merkur": fallingSpeed=3.7;
        break;
    }
     
    
       const MAXTRYS = 3; 
       // Maximale Anzahl der möglichen Versuche
       if (_hitTrys < MAXTRYS)
       {     
            if (_hitTrys == 0) 
            // Noch keine Versuche gemacht? -> Erzeuge erstmal Zufallszahl
            {
              _monsterDistance = Math.round(Math.random() * 90 + 10); 
              // Zufallszahl gerundet, zwischen 10 und 100
            }

            let speed = document.getElementById("speed").value; 
            // Übernimm Wurfkraft aus input "force" in Variable

            let angle = document.getElementById("angle").value; 
            // Übernimm Winkel aus input "angle" in Variable
            angle = angle * ( Math.PI / 180 );
            let throwingDistance = Math.round(((speed * speed) * Math.sin(2 * angle)) / fallingSpeed);
            
            // Berechne Wurfweite vom schiefen Wurf --> Formel von https://physikunterricht-online.de/jahrgang-10/schiefer-wurf/

            ++_hitTrys; 
            // Erhöhe Versuchszähler um 1

            if (throwingDistance == _monsterDistance)
            {       
                alert("GEWONNEN!!! Du hast die Erde gerettet!")
            }   
            if (throwingDistance < _monsterDistance)
            {
                alert("Du hast um "+(_monsterDistance - throwingDistance)+"m zu kurz geworfen! Noch "+ (MAXTRYS - _hitTrys) +" Versuch(e)!")
            }

            if (throwingDistance > _monsterDistance)

            {
                alert("Du hast um "+(throwingDistance - _monsterDistance)+"m zu weit geworfen! Noch "+ (MAXTRYS - _hitTrys) +" Versuch(e)!")
            }
        }
        else
        {
            alert("Zu viele Versuche, starte Spiel neu (Seite neu laden!)");
    }
}