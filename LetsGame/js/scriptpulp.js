/* Pulp Fiction*/
let _counter = 0; // Zähler
let _pcNumber = 0; // Geheimzahl

function codeGame() {

    if (_counter == 0){ // Erste Runde, generiere Geheimzahl und hole Versuche aus EingabeFeld
        _counter = document.getElementById("versuche").value;
        _pcNumber = Math.ceil(Math.random() * 888 + 111);  

        
    }
    if (_counter > 0){ //Spiel noch nicht zu Ende? 
        _counter--; 
        let userNumber = document.getElementById("zahl").value;
        let pcString = _pcNumber.toString();
        let userString = userNumber.toString();
   

        let validNumber = 0; //Anzahl der richtigen Nummern
        let validPos = 0; //Anzahl der richtigen Positionen
        let rightNumber = new Array(userString.length);
        //vergleiche die Eingegbene Zahl mit der Geheimzahl und zähle die richtigen Nummern und Positionen
        for (let i = 0; i < pcString.length; i++){
            rightNumber[i]=0;
            
            for (let j = 0; j < userString.length; j++){
                if (pcString.charAt(i) == userString.charAt(j)){                  
                    rightNumber[j]=1;                   
                }
            }
            if (pcString.charAt(i) == userString.charAt(i)){
                validPos++;               
            }             
        }
        
        for (let i = 0; i< rightNumber.length; i++){
            if (rightNumber[i] == 1)
            {
                validNumber++;
            }
        }
        
        if ((validNumber == 3) && (validPos == 3)){ //richtige Zahlen und Positionen = 3 = gewonnen
            document.getElementById("infoText").innerHTML="Du hast gewonnen!!!";
            infoText2.setAttribute("src", "img/pulp/200.gif");
            document.getElementById('tryAgain').style.display = 'inline';
            _counter = 0;
        }
        else {
            if (_counter == 0){ //keine Versuche mehr = verloren
                document.getElementById("infoText").innerHTML="Du hast verloren!!!";
                infoText2.setAttribute("src", "img/pulp/100.gif");
                document.getElementById('tryAgain').style.display = 'inline';
            }
            else { //noch Versuche vorhanden - zeige Info an
                document.getElementById("infoText").innerHTML="Es sind "+validNumber+" Zahlen richtig<br>Es sind "+validPos+" Stellen richtig<br>Du hast noch "+_counter+" Versuch(e)";  
            }
        }
    }
    if (_hitTrys >= MAXTRYS){ //macht tryAgain knopf sichtbar
        document.getElementById('tryAgain').style.display = 'inline';
    }
}

infoText2.onload = function () { // Scrolle zum Seitenende wenn das Bild fertig geladen ist.
  
    window.scrollTo(0, document.body.scrollHeight);
}

function tryAgain(){ // macht tryAgain Knopf unsichtbar, lösche Bild und Infotext
    document.getElementById('tryAgain').style.display = 'none';
    infoText2.setAttribute("src", "");   
    document.getElementById("infoText").innerHTML="";
    _hitTrys = 0;  
}
        












/*In diesem Spiel sollst du einen 3 stelligen Zahlencode erraten
• Dafür hast du ein Input Feld mit einem mindestwert von 111 und einem Maximalwert von 999
• Der Zahlencode generiert sich automatisch
• Tipp: du generierst drei zahlen zwischen 1 und 9
• Im JavaScript
• du holst dir den Wert aus dem Inputfeld und speicherst  Werte in eine eigene Variable
• dazu benötigst du die Methode .charAt()
• du benötigst außerdem Variablen für:
• einen Zähler für die Versuche (maximal dürfen es 12 Versuche sein)
• die richtig geratene Stelle
• die richtig geratene Zahl
• du vergleichst die einzelnen geratenen Zahlen mit den einzelnen Zahlen des Geheimcodes
• folgende Ausgaben gibt es:
• die Runde
• wie viele Zahlen richtig geraten sind
• wie viele Stellen richtig geraten wurden*/