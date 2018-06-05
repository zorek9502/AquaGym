const TITULO_ALERT_DOMICILIO = "Puedes encontrarnos en...";
const MENSAJE_ALERT_DOMICILIO = "Av. Heroe de Nacozari #2301";
const TITULO_ALERT_TELEFONO = "Este es nuestro numero";
const MENSAJE_ALERT_TELEFONO = "(449) 912-49-40";
const TITULO_ALERT_CORREO = "Puedes enviarnos un correo a...";
const MENSAJE_ALERT_CORREO = "aquagymAPP@outlook.com";


function verificaReconocimiento() {
    // Verify if recognition is available
    window.plugins.speechRecognition.isRecognitionAvailable(function (available) {
        if (!available) {
            alert("Reconocimiento no disponible");
        }

        // Check if has permission to use the microphone
        window.plugins.speechRecognition.hasPermission(function (isGranted) {
            if (isGranted) {
                iniciaRecon();
            } else {
                // Request the permission
                window.plugins.speechRecognition.requestPermission(function () {
                    // Request accepted, start recognition
                    iniciaRecon();
                }, function (err) {
                    alert(err);
                });
            }
        }, function (err) {
            alert(err);
        });
    }, function (err) {
        alert(err);
    });
}

// Handle results
function iniciaRecon() {
    window.plugins.speechRecognition.startListening(function (result) {
        let minusculas = [];
        for (let i = 0; i < result.length; i++) {
            minusculas.push(result[i].toLowerCase());
        }

        if (minusculas.includes('unete')) {
            $("#Unete").trigger('click');
        } else if (minusculas.includes('inscripcion')) {
            $("#Unete").trigger('click');
        } else if (minusculas.includes('inscribeme')) {
            $("#Unete").trigger('click');
        } else if (minusculas.includes('inicio')) {
            $("#Inicio").trigger('click');
        } else if (minusculas.includes('disciplinas')) {
            $("#Inicio").trigger('click');
        } else if (minusculas.includes('principal')) {
            $("#Inicio").trigger('click');
        } else if (minusculas.includes('info')) {
            $("#Info").trigger('click');
        } else if (minusculas.includes('informacion')) {
            $("#Info").trigger('click');
        } else if (minusculas.includes('conocenos')) {
            $("#Info").trigger('click');
        } else if (minusculas.includes('promos')) {
            $("#Promos").trigger('click');
        } else if (minusculas.includes('promociones')) {
            $("#Promos").trigger('click');
        } else if (minusculas.includes('descuentos')) {
            $("#Promos").trigger('click');
        } else if (minusculas.includes('avisos')) {
            $("#Promos").trigger('click');
        } else if (minusculas.includes('natacion')) {
            $("#Inicio").trigger('click');
            $("#Natacion").trigger('tap');
        } else if (minusculas.includes('waterpolo')) {
            $("#Inicio").trigger('click');
            $("#Waterpolo").trigger('tap');
        } else if (minusculas.includes('bodybuilding')) {
            $("#Inicio").trigger('click');
            $("#Bodybuilding").trigger('tap');
        } else if (minusculas.includes('crossfit')) {
            $("#Inicio").trigger('click');
            $("#Crossfit").trigger('tap');
        } else if (minusculas.includes('gym')) {
            $("#Inicio").trigger('click');
            $("#Gym").trigger('tap');
        } else if (minusculas.includes('gimnasio')) {
            $("#Inicio").trigger('click');
            $("#Gym").trigger('tap');
        } else if (minusculas.includes('calle')) {
            direccion();
        } else if (minusculas.includes('direccion')) {
            direccion();
        } else if (minusculas.includes('domicilio')) {
            direccion();
        } else if (minusculas.includes('donde estan')) {
            direccion();
        } else if (minusculas.includes('telefono')) {
            cel();
        } else if (minusculas.includes('cual es su numero')) {
            cel();
        } else if (minusculas.includes('contacto')) {
            cel();
        } else if (minusculas.includes('celular')) {
            cel();
        } else if (minusculas.includes('correo')) {
            correo();
        } else if (minusculas.includes('correo electronico')) {
            correo();
        } else if (minusculas.includes('mail')) {
            correo();
        } else if (minusculas.includes('email')) {
            correo();
        } else if (minusculas.includes('cual es su correo')) {
            correo();
        }
    }, function (err) {
        alert(err);
    }, {
        language: "es-MX",
        showPopup: false
    });


    if (device.platform.toLowerCase() == "ios") {
        window.plugins.speechRecognition.stopListening(function () {
            alert("Se detuvo el reconocimiento");
        }, function (err) {
            alert("Hubo un problema al detener reconocimiento");
        });
    }
}

function direccion() {
    let audio = new Audio("assets/audio/direccion.mp3");
    audio.play();
    navigator.notification.alert(MENSAJE_ALERT_DOMICILIO, alertDismissed, TITULO_ALERT_DOMICILIO, 'Ok');
}

function cel() {
    let audio = new Audio("assets/audio/celular.mp3");
    audio.play();
    navigator.notification.alert(MENSAJE_ALERT_TELEFONO, alertDismissed, TITULO_ALERT_TELEFONO, 'Ok');
}

function correo() {
    let audio = new Audio("assets/audio/correo.mp3");
    audio.play();
    navigator.notification.alert(MENSAJE_ALERT_CORREO, alertDismissed, TITULO_ALERT_CORREO, 'Ok');
}

function alertDismissed() {
    // do something
}