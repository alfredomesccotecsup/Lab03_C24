
function convertir() {
    var valore= parseInt(document.getElementById("valor").value);
    var resultado= 0;
    var dolar = 3.81;
    var euro = 4.85;
    if(document.getElementById("uno").checked){
        resultado = valore / dolar;
        alert("El cambio del monto  de soles a dolares que ingroso es de : $ "+ resultado.toFixed(3));
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        alert("El cambio del monto de soles a Euros que ingroso es de : € "+ resultado.toFixed(3));
    }
    else{
        alert("TIENES QUE COMPLETAR TODO LOS CAMPOS")
    }
}