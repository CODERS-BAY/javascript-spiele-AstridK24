/*monster*/
let _hitTrys = 0;
// Zähler für Versuche 
let _monsterDistance = 0; 
// Distanz vom Monster vom Werfer, wird von der Funktion "hitMonster" beim ersten Versuch mit Zufallszahl belegt
let _planet = "Erde";

function choose(choice){
    _planet = choice;//Planetenauswahl
    switch(_planet){
        case "Erde":document.getElementById("planet").src="img/monster/Erde_klein.jpg";
        break;
        case "Mond":document.getElementById("planet").src="img/monster/Mond.jpg";
        break;
        case "Mars":document.getElementById("planet").src="img/monster/Mars.jpg";
        break;
        case "Jupiter":document.getElementById("planet").src="img/monster/Jupiter.jpg";
        break;
    }
}
 
function hitMonster(){ 
    let fallingSpeed=9.81;//Erde = Standart
    switch(_planet){
        case "Mond": fallingSpeed=1.62;
        break;
        case "Mars": fallingSpeed=3.69;
        break;
        case "Jupiter": fallingSpeed=24.79;
        break;
    }    
    // Gravitition = Fallbeschleunigung, ist auf der Erde 9.81 m/s², am Mond z.B 1.62 m/s²
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
                alert("*POFF* Du hast das Monster mit dem Kind erwischt!")
            }   
            if (throwingDistance < _monsterDistance)
            {
                alert("Du hast das Kind um "+(_monsterDistance - throwingDistance)+"m zu kurz geworfen! Noch "+ (MAXTRYS - _hitTrys) +" Versuch(e)!")
            }

            if (throwingDistance > _monsterDistance)

            {
                alert("Du hast das Kind um "+(throwingDistance - _monsterDistance)+"m zu weit geworfen! Noch "+ (MAXTRYS - _hitTrys) +" Versuch(e)!")
            }
        }
        if (_hitTrys >= MAXTRYS)
        {
            //alert("Zu viele Versuche, starte Spiel neu (Seite neu laden!)");
            document.getElementById('tryAgain').style.display = 'inline';
            gameOver.setAttribute("src", "img/monster/GameOver.jpg");
        }
}
gameOver.onload = function () { // Scrolle zum Seitenende wenn das Bild fertig geladen ist.
  
    window.scrollTo(0, document.body.scrollHeight);
}


function tryAgain(){ // verstecke den tryAgain button und lösche das tryAgain Bild
    document.getElementById('tryAgain').style.display = 'none';
    gameOver.setAttribute("src", "");
    _hitTrys = 0;  //Count zurücksetzen
}


