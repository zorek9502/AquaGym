function getCode(id) {
    var promos=["promo1","promo2","promo3","promo5"]
    var code = new String(document.getElementById(id).getAttribute("codigo").toString());
    document.getElementById("inputCupon").value = code;
    if(code==""){
        alert("entre");
        document.getElementById("cupon-modal").innerHTML = code;
        document.getElementById("cupon-applied").innerHTML = "";
        document.getElementById("cupon-instructions").innerHTML = "Ésta imagen no contiene ningún cupón o promoción asociados";
    }
    
    if (promos.includes(id.toString())){
        document.getElementById("cupon-modal").innerHTML = code;
        document.getElementById("cupon-applied").innerHTML = "Cupón aplicado.";
        document.getElementById("cupon-instructions").innerHTML = "Encuentre el cupón aplicado en la sección de inscripciones";
    }
    switch (id.toString()) {
        case "promo1": //GYM
            document.getElementById("sel-gym").setAttribute("selected", true);
            break;
        case "promo2": //GYM
            document.getElementById("sel-gym").setAttribute("selected", true);
            break;
        case "promo3": //NATACION
            document.getElementById("sel-natacion").setAttribute("selected", true);
            break;
        case "promo5": //WATERPOLO
            document.getElementById("sel-waterpolo").setAttribute("selected", true);
            break;
        default:
            alert("some");
            document.getElementById("sel-default").selected = true;
            break;
    }
}