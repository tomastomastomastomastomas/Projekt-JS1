function zobrazObrazek() {
    var vyska = document.getElementById("vyska").value;
    document.getElementById("obrazek").innerHTML = '<img src="tower.jpg" alt="věž" height="200"> Výška věže je ' + vyska + ' m';
}

function reseni() {
    let vyska = document.getElementById("vyska").value;
    let h = vyska;
    let c = 4200;
    let g = 10;
    let deltaT = "△t = ?";
    let rovnice = "m · g · h = m · c · t";
    let t = g * h / c;
    let druharovnice = "t = g · h / c";
    let vztah = "t = " + g + " · " + h + " / " + c + " = " + t.toFixed(2) + " °C";
    document.getElementById("vysledek").innerHTML = "h = " + h + " m" + "<br>" + "c = " + c + " J · kg⁻¹ · K⁻¹" + "<br>" + "g ≐ " + g + " N/kg" + "<br>" + deltaT + "<br>" + "<hr>" + rovnice + "<br>" + druharovnice + "<br>" + vztah;
  }


