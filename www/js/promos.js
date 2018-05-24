function getCode(id) {
    var promos=["promo1","promo2","promo3","promo5","promo6"]
    var code = new String(document.getElementById(id).getAttribute("codigo").toString());
    document.getElementById("inputCupon").value = code;
    if(code==""){
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
        case "promo3": //NATACION
            document.getElementById("sel-waterpolo").removeAttribute("selected");
            document.getElementById("sel-natacion").setAttribute("selected", true);
            break;
        case "promo5": //WATERPOLO
            document.getElementById("sel-natacion").removeAttribute("selected");
            document.getElementById("sel-waterpolo").setAttribute("selected", true);            
            break;
        default:
            document.getElementById("sel-default").selected = true;
            break;
    }
}
