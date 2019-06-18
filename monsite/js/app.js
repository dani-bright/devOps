var app = (function app() {
    "use strict";
//dans ce fichier il est important de savoir à quel moment sont definit les element sur lesquel on veut agir
    var backToMenu, stop, stopStars, startStars, observerPhp, chargerPage, chargerPagePhp, goBack, reloadLvl, back, 
    observerItem2, observerItem, chargerLvl, choisirLevel, navMain, navStart, navMainItems, 
    contentMain, observer, observerStart, startItems, startLvl, observerLvl, restartLvl;

    window.onload = function start(e) {
        navMainItems = selectAll("#nav_main .item");
        stop =byId("start_stop");
        stop.style.backgroundColor = "rgba(240, 27, 39, .7)";
        stop.innerHTML="STOP";
        stop.onclick =stopStars;
        var logo= byId("logo");
           
        var stars =byId("stars");
        var stars2 =byId("stars2");
        var board = selectAll("#nav_main #board");
        navMain = select("#nav_main");
        navStart = select("#nav_start");
        var footer = byId("footer");
        observer();
        observerPhp();
    };
    startStars = function startStars(){
        stop.style.backgroundColor = "rgba(240, 27, 39, .7)";
        stop.innerHTML="STOP";
        stars.classList.add("galaxy");
        stars2.classList.add("galaxy2");
        stop.onclick = stopStars; 

    }
    stopStars = function stopStars(){
        stop.style.backgroundColor = "rgba(14, 202, 19, .7)";
        stop.innerHTML="START MOVING";
        stars.classList.remove("galaxy");
        stars2.classList.remove("galaxy2");
        stop.onclick = startStars;

    }


    observerPhp = function observerPhp() {
            board.onclick = chargerPagePhp;

    }
    observer = function observer() {
        navMainItems.forEach(function (item) {
            item.onclick = chargerPage;
        });
    }

    
    observerItem = function observerItem() {
        var startItems = selectAll("#nav_start .item");
        startItems.forEach(function (item) {
            item.onclick = chargerLvl;
        });

        
    }


    observerItem2 = function observerItem2() {
        
        main_menu.onclick= chargerPage;
    }
 
    
    chargerLvl = function chargerLvl() {
        var url2, lvl;
        
        lvl = this.getAttribute("data-level");
        url2 = "views/ajax/" + lvl + ".html";

        
        $.get(url2, function getHTML2(html) {
            
            byId("main_content").innerHTML = html;
            
            if (lvl === "easy") {
                memoryGame(2, 4);
                var reloadLvl = byId("restart");
                reloadLvl.onclick =chargerLvl;
                var forward = byId("forward");
    			forward.onclick =chargerLvl;
    			goBack = byId("go-back");
    			goBack.onclick = chargerPage;
                var board_access = byId("board_access");
                board_access.onclick = chargerPagePhp;

            }
            else if (lvl === "medium") {
                memoryGame(2, 6);
                var reloadLvl = byId("restart");
                reloadLvl.onclick =chargerLvl;
                var forward = byId("forward");
    			forward.onclick =chargerLvl;
                goBack = byId("go-back");
                goBack.onclick = chargerPage;
                var board_access = byId("board_access");
                board_access.onclick = chargerPagePhp;
            }else{
                memoryGame(3,6);
                var reloadLvl = byId("restart");
                reloadLvl.onclick =chargerLvl;
                goBack = byId("go-back");
                goBack.onclick = chargerPage;
                var board_access = byId("board_access");
                board_access.onclick = chargerPagePhp;
                stars.style.position= "sticky";

            }
            
            
        })  
    
    };


    chargerPagePhp = function chargerPagePhp() {
        var url, cible;
        
        cible = this.getAttribute("data-php");
        url = "views/ajax/" + cible + ".php";

        
        $.get(url, function getHTML(html) {
            
            byId("main_content").innerHTML = html;
            if(cible == "board"){
                nav_main.classList.remove("hide");
                footer.classList.add("hide");
                stars.style.position= "sticky";
                logo.classList.add("hide");

                stop.classList.add("hide");
                

            }
            
        })
    
    };

    chargerPage = function chargerPage() {
        var url, cible;
        
        cible = this.getAttribute("data-cible");
        url = "views/ajax/" + cible + ".html";

        
        $.get(url, function getHTML(html) {
            
            byId("main_content").innerHTML = html;
            
            if (cible === "start") {
            	footer.classList.add("hide");
                navMain.classList.add("hide");
                observerItem();
                var main_menu = byId("#main_menu");
                observerItem2();
                logo.classList.add("hide");
                stop.classList.add("hide");
                stars.style.position= "absolute";
                
            }
            if(cible ==="home"){
                navMain.classList.remove("hide");
                observer();
                observerPhp();
                footer.classList.remove("hide");
                stars.style.position= "absolute";
                logo.classList.remove("hide");
                stop.classList.remove("hide");
            }
            
            
        })
    
    };

}());