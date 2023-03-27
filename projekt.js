function zobrazObrazek() {
    var vyska = document.getElementById("vyska").value;
    document.getElementById("obrazek").innerHTML = '<img src="tower.jpg" alt="věž" height="200"> Výška věže je ' + vyska + ' m';
}

