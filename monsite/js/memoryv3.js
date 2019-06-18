
var memoryGame = function memoryGame(x, y) {
    "use strict";
    var dom, back, matrice, flipcard, genererCarte, carteRetournee, compterCarte, 
    carteFound, carte, ok, rand;

    console.log("start");
    

    matrice = document.getElementById("matrice");
    dom = {};
    dom.flippedCards = null;
    var move = document.querySelector(".move");
    var control =[];//sert a verifier si les 2 cartes cliqué ont la même id
    var found =document.querySelectorAll(".found");
    var matchFound=[];
    var level=null;
    var nbmove =0;//on definit le nombre de move à 0
    var infoJoueur=document.querySelector("#infojoueur");
    
    //CRONOMETRE

  var sp = document.getElementsByTagName("span");
  var btn_start=document.getElementById("start");
  var btn_stop=document.getElementById("stop");
  var btn_reset=document.getElementById("reset");
  var t;
  var ms=0,s=0,mn=0,h=0;
   
   
  var run = function run(){
   t =setInterval(update_chrono,100);
   btn_start.disabled=true;
  
  }
btn_start.onclick= run;
  function update_chrono(){
    ms+=1;
       if(ms==10){
        ms=1;
        s+=1;
       }
       /*afficher les nouvelle valeurs*/
        sp[0].innerHTML=s+" s";
       

  }
  
    var stop = function stop(){
    clearInterval(t);
    btn_start.disabled=false;
        
    }
    btn_stop.onclick=stop;
  var reset = function reset(){
   clearInterval(t);
    btn_start.disabled=false;
    ms=0,s=0,mn=0,h=0;
    sp[0].innerHTML=s+" s";
      }
    btn_reset.onclick=reset;
    var goBack= byId("go-back");
    goBack.onmouseup=reset;
    //FIN DU CHRONOMETRE

    
    function postViaAjaxFormData(){
    var nomJoueurValue=document.querySelector("#nom-joueur").value;//important de le redéfinir pour bien récupéré la valeur  
        var xhr, fd;
        var gameEnd=(nbmove+s)/2;
        log(gameEnd);
        xhr = new XMLHttpRequest();
            if(nomJoueurValue!=""){//si l'utilisateur ne rentre pas de pseudo les donnée ne sont pas envoyé 
            xhr.open("post", "api.php");
            fd = new FormData();
            fd.append("lvl",level);
            fd.append("name",nomJoueurValue);
            fd.append("score",gameEnd);
            xhr.send(fd);
            }
        }

        var postUtilisateur = function postUtilisateur(){
        var nomJoueurValue=document.querySelector("#nom-joueur").value;
        var xhr, fd;
        xhr = new XMLHttpRequest();
        xhr.onload = function() {
        var rowcount = this.responseText;
            if (rowcount !== "0") {
            var nomJoueur = document.querySelector("#nom-joueur");
            nomJoueur.style.backgroundColor = "rgba(240, 27, 39, .7)";
            var warning= document.querySelector(".warning");
            warning.style.visibility ="visible";
            warning.style.backgroundImage ="url(styles/img/warn.png)";

            var msg = document.querySelector(".msg");
            msg.style.visibility="visible";
            }
            else{
                var nomJoueur = document.querySelector("#nom-joueur");
               nomJoueur.style.backgroundColor = "rgba(14, 202, 19, .7)";
               var warning= document.querySelector(".warning");
               warning.style.visibility ="hidden"; 
               var msg = document.querySelector(".msg");
            msg.style.visibility="hidden";
            }
        };

        xhr.open("post", "api.php",true);
        fd = new FormData();
        fd.append("name",nomJoueurValue);
        xhr.send(fd);
        
        

        }
        postUtilisateur();
        var nomJoueur = document.querySelector("#nom-joueur");
        nomJoueur.onkeyup = postUtilisateur;
        

    
    

    var fondCarte =["interstelar_key", "blux_shield", "energy_frag", "k65_pistol", "savitar_sword", "cosmic_cloak" ,"snix_goggles", "phantom_blades","star_vanisher"];
    if(x*y===8){
        fondCarte=["interstelar_key", "phantom_blades", "energy_frag", "snix_goggles"];
        level="easy";
    }
    else if(x*y===12){
        fondCarte=["interstelar_key", "phantom_blades", "energy_frag", "snix_goggles", "savitar_sword", "star_vanisher"];
        level="medium";
    }
    else {
        level="hard";
    }
    
        
    genererCarte = function genererCarte() {
        "use strict";
        var i, j, f, ligne, figure1, figure2, frontCard;
        var passedRands ={};
        for (i = 1; i < (x * y); i += y) {
            ligne = document.createElement("div");
            ligne.className = "ligne";
            var figure3 = document.createElement("figure");
             figure3.className = "front2";
            var figure4 = document.createElement("figure");
             figure4.className = "front3";
            var figure5 = document.createElement("figure");
             figure5.className = "front4";
            var figure6 = document.createElement("figure");
             figure6.className = "front5";
            var figure7 = document.createElement("figure");
             figure7.className = "front6";
            var figure8 = document.createElement("figure");
            figure8.className = "front7";
            var figure9 = document.createElement("figure");
            figure9.className = "front8";
            var figure10 = document.createElement("figure");
            figure10.className = "front9";
            for (j = i; j < (y + i); j += 1) {
                carte = document.createElement("div");
                carte.className = "carte";
                figure2 = document.createElement("figure");
                figure2.className = "front10";//back
                figure1 = document.createElement("figure");
                figure1.className = "front";
                
                var figure11 = document.createElement("figure");
                figure11.className = "back";
                var figure12 = document.createElement("figure");
                figure12.className = "front11";
                var figure13 = document.createElement("figure");
                figure13.className = "front12";
                var figure14 = document.createElement("figure");
                figure14.className = "front13";
                
                var figure15 = document.createElement("figure");
                figure15.className = "front14";
                var figure16 = document.createElement("figure");
                figure16.className = "front15";
                var figure17 = document.createElement("figure");
                figure17.className = "front17";
                var figure18 = document.createElement("figure");
                figure18.className = "front18";
                var figure19 = document.createElement("figure");
                figure19.className = "front19";
                carte.onclick = flipcard;
                //console.log(carte); //afficher les cartes
                ligne.appendChild(carte);
                for (f = j; f <= j; f++) { //f pour figure
                    //screw youuuu
                    carte.appendChild(figure5);
                    carte.appendChild(figure4);
                    carte.appendChild(figure1);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    carte.appendChild(figure13);
                    
                    carte.appendChild(figure8);
                    carte.appendChild(figure10);
                    carte.appendChild(figure2);
                    carte.appendChild(figure19);
                    carte.appendChild(figure18);
                    carte.appendChild(figure3);
                    carte.appendChild(figure6);
                    carte.appendChild(figure7);
                    carte.appendChild(figure9);
                    carte.appendChild(figure11);
                    carte.appendChild(figure12);
                    carte.appendChild(figure14);
                    carte.appendChild(figure15);
                    carte.appendChild(figure16);
                    carte.appendChild(figure17);

                    



                } 
                
                function attribuerBackground(){

                    rand = Math.floor(Math.random() * fondCarte.length);
                    //console.log("ICI",rand,passedRands);

                    if(!passedRands[rand]){//si le background choisi n'est pas déjà utlisé
                        passedRands[rand] = 1;
                        frontCard=carte.id+=fondCarte[rand];//on applique le background

                    }else if(passedRands[rand] == 1){//si il est appliqué une fois 
                        passedRands[rand]++;
                        frontCard=carte.id+=fondCarte[rand];//on peut le reutilisé
                    }
                    else {attribuerBackground();}//si le rand est appliqué plus de 2 fois on relance la function pour trouver un rand valide
                    

                }

                    
                   attribuerBackground();
                   
                   
                
                
                
            }

            matrice.appendChild(ligne);
        }
    };
        var ok = function ok(e) {
       var nomJoueurValue=document.querySelector("#nom-joueur").value;
        e.preventDefault();
        infoJoueur.classList.add("hide");
        var cache = document.querySelector(".cache");
        cache.classList.remove("cache");
        run();
        window.setTimeout(function() {
                if(level=="easy" || level=="medium" || level=="hard"){
                log(ms);
                if(ms==2){
                  genererCarte();  
                }
                
                }
        }, 250);
    }
    
    
    byId("submit_player_name").onclick = ok;
    byId("quit").onclick=ok;

    flipcard = function flipcard(evt){
        "use strict";
        //console.log((x*y)/2);
        var h,i;
        
    //console.log(matchFound);
    //console.log(matchFound.length);
        if(this.className === "carte found"){//au clique on verifie si la carte fait partie d'une paire déja trouvé si non on passe dans le else if
            console.log("carte déjà trouver");
        }
        else if (carteRetournee() != 2 && this.className != "carte fliped") {//la2eme partie de l'instruction permet d'empecher l'utilasteur recliqué sur une carte déjà retourné
            
            this.classList.toggle('fliped');
            //console.log(this);
            
            for(i=0; i<carteRetournee(); i++){
                control.push(this.id);
            }
            //console.log(control);
            
            
            
            if(carteRetournee() == 2){
                nbmove+=1;//a chaque fois que le nombre carte retourné vaudra 2 on va incrementer le nb de move
                move.innerHTML = nbmove;//puis l'afficher
                
                
 
                //console.log(control);
                if(control[0]==control[1]){//on verifie le contenu du tableau control
                    
                    compterCarte().forEach(function(elem){
                    window.setTimeout(function() {
                    elem.classList.remove("fliped");
                    elem.classList.toggle("found");
                    }, 800);
                    });
                    matchFound.push(this.id);//on ajoute les paires trouvé dans le tableau matchFound
                    //console.log(matchFound);
                    
                    if(matchFound.length===((x*y)/2)){//si toute les paires ont été trouvé              
                        postViaAjaxFormData();
                        stop();
                        var gameEnd= (s+nbmove)/2;
                        //log(gameEnd);
                  
                    window.setTimeout(function() {
                        var resultat = document.querySelector(".resultat");
                        var text = document.querySelector(".text");
                        var nomJoueurValue=document.querySelector("#nom-joueur").value;
                        resultat.classList.toggle("appear");
                        if(x*y===8 || x*y===12){
                        text.innerHTML="Congratulations <span style='color:#ffff01;'>"+nomJoueurValue +"</span> you've completed the level in "+ nbmove+" moves and "+s+" second your score is "+gameEnd+" try to improve it or move forward";
                        }
                        else{

                        text.innerHTML="Congratulations <span style='color:#ffff01;'>"+ nomJoueurValue +"</span> you've completed the level in "+ nbmove+" moves and "+s+" second your score is "+gameEnd+" try to improve it ";
                        }
                    }, 1400);//on attend que l'animation se finisse pour afficher le message
                        
                    }
                }
                else{
                    compterCarte().forEach(function(elem){
                    window.setTimeout(function() {
                    elem.classList.remove("fliped");
                    }, 800);
                    });
                }
                control=[];//reinitialsié le tableau
                    
            }
        }   
                  
               
    };
    

    compterCarte = function compterCarte(){
        return dom.flippedCards = document.querySelectorAll(".fliped");
    }
    
    carteRetournee = function carteRetournee(){
        return compterCarte().length;
    };
    
    carteFound = function carteFound(){
        return dom.carteTrouvee = document.querySelectorAll(".found");
    };


    //genererCarte();
    
    return {
        ok:ok
    }

};