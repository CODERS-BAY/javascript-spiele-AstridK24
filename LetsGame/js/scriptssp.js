/* Schere Stein Papier*/
let _userPoint = 0; //Benutzerpunkte
let _pcPoint = 0; //Pc-Punkte
let _roundsToPlay = 0; //Rundenzähler

function playSSP(humanPlayer){

    if (_roundsToPlay == 0){ //Erste Runde - hole Max.Runden
        _roundsToPlay = document.getElementById("counterInput").value;
    }
    let computerPlayer = Math.floor(Math.random()*2); //Pc - wählt Schere, Stein oder Papier
    let winner = 0;
    
    //Zeigt Wahl vom Benutzer an
    if (humanPlayer == 0){
        userImg.setAttribute("src", "img/ssp/schere.gif");
    }
    else if (humanPlayer == 1){
        userImg.setAttribute("src", "img/ssp/stein.gif");
    }
    else {
        userImg.setAttribute("src", "img/ssp/papier.gif");
    }
    //Zeigt Wahl vom PC an
    if (computerPlayer == 0){
        pcImg.setAttribute("src", "img/ssp/schere.gif");
    }
    if (computerPlayer == 1){
        pcImg.setAttribute("src", "img/ssp/stein.gif");
    }
    if (computerPlayer == 2){
        pcImg.setAttribute("src", "img/ssp/papier.gif");
    }   

    //Pc und Benutzer haben verschiedene Symbole
    if (humanPlayer != computerPlayer){
        winner = 2;
        if ((humanPlayer == 0) && (computerPlayer == 2)){//Schere schlägt Papier
            winner = 1;
        }
        if ((humanPlayer == 1) && (computerPlayer == 0)){//Stein schlägt Schere
            winner = 1;
        }
        if ((humanPlayer == 2) && (computerPlayer == 1)){//Papier schlägt Stein
            winner = 1;
        }
    }
    if (winner == 1){//Benutzer hat die Runde gewonnen
        _userPoint = _userPoint+1;
    }
    if (winner == 2){//Pc hat die Runde gewonnen
        _pcPoint = _pcPoint+1;
    }
    _roundsToPlay--;
    document.getElementById("infoText").innerHTML="Du: "+_userPoint+"  :  "+_pcPoint+" : Computer<br>Noch "+_roundsToPlay+" Runde(n)";
      
    if (_roundsToPlay < 1){ //Spielende? 
        if (_userPoint > _pcPoint){//Benutzer hat gewonnen
            document.getElementById("infoText").innerHTML="Du: "+_userPoint+"  :  "+_pcPoint+" : Computer<br>Du hast gewonnen. GAME OVER";
        }
        if (_pcPoint > _userPoint){//Pc hat gewonnen
            document.getElementById("infoText").innerHTML="Du: "+_userPoint+"  :  "+_pcPoint+" : Computer<br>Der PC hat gewonnen. GAME OVER";
        }
        if (_pcPoint == _userPoint){//Unentschieden
            document.getElementById("infoText").innerHTML="Du: "+_userPoint+"  :  "+_pcPoint+" : Computer<br>Unentschieden. GAME OVER";
        }
        _userPoint = 0;
        _pcPoint = 0;        
    }

}

