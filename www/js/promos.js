function getCode(id) {
    var code = new String(document.getElementById(id).getAttribute("codigo").toString());
    document.getElementById("cupon-modal").innerHTML = code;
    document.getElementById("inputCupon").value = code;
    console.log();
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
    }
}