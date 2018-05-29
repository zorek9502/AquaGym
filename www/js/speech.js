function verificaReconocimiento() {
    alert("verificando si reconocimiento esta disponible");
    // Verify if recognition is available
    window.plugins.speechRecognition.isRecognitionAvailable(function (available) {
        if (!available) {
            alert("Reconocimiento no disponible");
        }

        // Check if has permission to use the microphone
        alert("viendo si se tienen permisos");
        window.plugins.speechRecognition.hasPermission(function (isGranted) {
            if (isGranted) {
                alert("se tienen permisos, iniciando reconocimiento");
                iniciaRecon();
            } else {
                // Request the permission
                alert("pidiendo permisos");
                window.plugins.speechRecognition.requestPermission(function () {
                    // Request accepted, start recognition
                    alert("se otorgaron permisos, iniciando reconocimiento");
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

        alert(minusculas);

        if (minusculas.includes('unete')) {
            $("#Unete").trigger('click');
        } else if (minusculas.includes('inscripcion')) {
            $("#Unete").trigger('click');
        } else if (minusculas.includes('inicio')) {
            $("#Inicio").trigger('click');
        } else if (minusculas.includes('disciplinas')) {
            $("#Inicio").trigger('click');
        } else if (minusculas.includes('principal')) {
            $("#Inicio").trigger('click');
        } else if (minusculas.includes('info')) {
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
            alert("Hubo un problema al detener. " + err);
        });
    }
}