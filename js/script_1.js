
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function() {
        if ( xmlhttp.status == 200) {
            responseObj = JSON.parse(xmlhttp.responseText);

            var newItem = ""


            for (var i = 0; i < responseObj.veckomeny.length; i++) {
                newItem += "<div >";
                newItem += "<h2>"+responseObj.veckomeny[i].dag + "</h2><br/>";
                newItem +="<p> Recept :  "+ responseObj.veckomeny[i].recept + " |  Tid :  "+responseObj.veckomeny[i].tid+"</p><br  />";
                newItem += "</div>";
            }




document.getElementById("Veckomeny").innerHTML=newItem;
        }
    };
    xmlhttp.open("GET", "data/veckomeny.json", true);
    xmlhttp.send(null);