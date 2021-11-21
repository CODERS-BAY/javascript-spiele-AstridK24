/* Panzerknacker*/
let _counter = 0; //Versuche
let _pcNumber = new Array(3); //Geheimzahl
let _oldUserNumber = [1,1,1]; //Merker für vorherige Benutzereingabe

function codeGame() {

    if (_counter == 0){ //Erste Runde - Geheimzahl erstellen
        infoImg1.setAttribute("src", ""); 
        _counter = document.getElementById("versuche").value;
        _pcNumber[0] = Math.ceil(Math.random() * 8 + 1);
        _pcNumber[1] = Math.ceil(Math.random() * 9);
        _pcNumber[2] = Math.ceil(Math.random() * 9);
    }
    if (_counter > 0){   //Noch Runden vorhanden? -  lese Benutzeingabe ein    
        let userNumber = new Array(3);
        userNumber[0] = document.getElementById("zahl1").value;
        userNumber[1] = document.getElementById("zahl2").value;
        userNumber[2] = document.getElementById("zahl3").value;
        let tempNumber = (userNumber[0]*100)+(userNumber[1]*10)+(userNumber[2]*1);
  
        if (tempNumber< 111){ //Benutzereingabe falsch? Setze Eingabe zurück
            document.getElementById("zahl1").value=_oldUserNumber[0].toString();
            document.getElementById("zahl2").value=_oldUserNumber[1].toString();
            document.getElementById("zahl3").value=_oldUserNumber[2].toString();
        }else{ //Benutzereingabe richtig? Merke Benutzeingabe für nächste Runde
            _counter--;
            _oldUserNumber[0]= userNumber[0];
            _oldUserNumber[1]= userNumber[1];
            _oldUserNumber[2]= userNumber[2];
            //Vergleiche Benutzereingabe mit Geheimzahl
            let validNumbers = 0;
            if(userNumber[0]==_pcNumber[0]){
                document.getElementById("infoText1").innerHTML="Richtig"; 
                validNumbers++;
            }else{
                document.getElementById("infoText1").innerHTML="Falsch";
            }if(userNumber[1]==_pcNumber[1]){
                document.getElementById("infoText2").innerHTML="Richtig";
                validNumbers++; 
            }else{
                document.getElementById("infoText2").innerHTML="Falsch";
            }
            if(userNumber[2]==_pcNumber[2]){
                document.getElementById("infoText3").innerHTML="Richtig";
                validNumbers++; 
            }else{
                document.getElementById("infoText3").innerHTML="Falsch";
            }
            if(validNumbers==3){//Alles richtig - gewonnen
                _counter=0;
                document.getElementById("infoText4").innerHTML="Du hast gewonnen!!!";
                infoImg1.setAttribute("src", "img/pulp/win.jpg");
            }else{
                
                if(_counter==0){//keine Versuche mehr - verloren
                    document.getElementById("infoText4").innerHTML="Du hast verloren!!!";
                    infoImg1.setAttribute("src", "img/pulp/lost.jpg"); 
                }else{//noch Versuche vorhanen - zeige Info
                    document.getElementById("infoText4").innerHTML="Du hast noch "+_counter+" Versuch(e)";
                }
            }           

        }       
    }     
}

infoImg1.onload = function () { // Scrolle zum Seitenende wenn das Bild fertig geladen ist. 
    window.scrollTo(0, document.body.scrollHeight);
}


