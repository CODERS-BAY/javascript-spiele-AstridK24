/*Zahlenraten */
let _upperLimit =0; //Obergrenze
let _guessNumber =0; //Geheimzahl
let _counter =0; //Rundenzähler

function guessGame() {
    if(_counter <= 0){ //Erste Runde - hole Obergrenze und Runden aus Benutzeingabe und generiere Geheimzahl
        
        _upperLimit = document.getElementById("grenze").value;
        _guessNumber = Math.random()*_upperLimit;
        _guessNumber = Math.ceil(_guessNumber);
        _counter = document.getElementById("runden").value;
    }
    let userNumber = document.getElementById("zahl").value;
    _counter--; 

    if (userNumber < _guessNumber){ // Zahl ist zu klein
        document.getElementById("info").innerHTML="Die Zahl ist zu klein. Du hast noch "+_counter+" Versuch(e)";
        info2.setAttribute("src", "img/gr-kl/zr_zuklein.jpg");
    }
    else{
        if (userNumber > _guessNumber){ // Zahl ist zu groß
            document.getElementById("info").innerHTML="Die Zahl ist zu groß. Du hast noch "+_counter+" Versuch(e)";
            info2.setAttribute("src", "img/gr-kl/zr_zugross.jpg");
        }
        else{ // Die Zahl ist richtig
            document.getElementById("info").innerHTML="Du hast gewonnen";
            info2.setAttribute("src", "img/gr-kl/zr_richtig.jpg");
            _counter = 0;
        }
    }
    
    if (_counter <= 0) //Spielende? TryAgain erscheint, Los verschwindet
    {
        document.getElementById('tryAgain').style.display = 'inline';
        document.getElementById('guessGame').style.display = 'none';
    }
}

info2.onload = function () { // Scrolle zum Seitenende wenn das Bild fertig geladen ist.  
    window.scrollTo(0, document.body.scrollHeight);
}

function tryAgain(){ //TryAgain verschwindet - Los erscheint - Bild verschwindet - Info wird gelöscht
document.getElementById('tryAgain').style.display = 'none';
document.getElementById('guessGame').style.display = 'inline';
info2.setAttribute("src", "");
document.getElementById("info").innerHTML="";
}



/*< 5 />
03 - ZAHLEN RATEN
Errate eine ausgedachte Zahl
• Der User legt eine obere Grenze der Zahl fest und der Computer 
wählt eine beliebige Zahl zwischen 0 und der vom User definierten 
oberen Grenze.
• Für dieses Spiel brauchst du nur drei Variablen:
• let upperLimit;
• let guessNumber;
• let counter;
• Die Anzahl der Versuche soll der User ebenfalls selbst festlegen 
können
• Du benötigst für dieses Spiel insgesamt:
• Vier if-Verzweigungen
• Drei Variablen
Weitere hilfreiche Angaben
• Math.round()
rundet eine Zahl
• Math.random()
legt eine zufällige Zahl fest-->*/