$(document).ready(function () {
    /*Scripts relacionados con tab de Inicio y disciplinas*/
    var tMatutino_height = $("tMatutino").height();
    $("#touchSlider").touchSlider({
        roll: true,
        flexible: true
    });
    $('.tabGroup1').swichTab();
    $('.tabGroup2').swichTab({
        cahngePanel: 'fade',
        swiper: true,
        index: 0,
    });
    $("#touchSlider").on('swipeleft', function (e) {
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
    });
    $("#touchSlider").on('swiperight', function (e) {
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
    });
    if (screen.height <= 1024) {
        $("#Horarios").on('swipeup', function (e) {
            $("#tMatutino").animate({height: 0}, "fast");
        });
        $("#Horarios").on('swipedown', function (e) {
            if (screen.width < 700) {
                $("#tMatutino").animate({height: "344px"}, "fast");
            } else {
                $("#tMatutino").animate({height: "428px"}, "fast");
            }
        });
    }
    var a = screen.height - (screen.height * 0.10);
    $("#c_disciplina").attr("style", "height:" + a.toString());
    /*Scripts relacionados con tab Inicio c/u disciplinas*/
    console.log(screen.height - 100);
    $("#carouselGaleria").css({
        "width": screen.width,
        "height": screen.height - 100,
    });
    $("#carouselInfo").css({
        "width": screen.width,
        "height": screen.height - 60
    });
    $("#galVideo").css({
        "height": a
    })

    $("div img.w-100").css({
        "height": screen.height - 60
    })

    $("#Natacion").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/audio-natacion.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("¿Sabias que?");
        $("#content2_disciplina_ts").text("La natación es consistentemente una de las principales actividades recreativas públicas, y en algunos países, las lecciones de natación son una parte obligatoria del currículo educativo.")
        $("#content3_disciplina_ts").text("En nuestras instalaciones contamos con alberca olimpica, ven y aprende con nuestros mejores instructores los 4 estilos basicos de natacion: Crawl, Dorso, Pecho y Mariposa.");
        $("#disciplina_ts").text("Natacion");
        $("#img_disciplina_ts").attr("src", "assets/natacion.jpg");
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/natacion/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/natacion/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/natacion/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://www.youtube.com/embed/MMeXA-2xJEQ??rel=0&amp;showinfo=0&amp;start=5");
        $(".swichtab-controller>li").css("background", "rgb(15, 37, 88)");
        $("li.is-active>a").css("background", "rgb(12, 109, 181)");
        $("#touchSlider").css("background", "-webkit-linear-gradient(top, rgb(50, 63, 104) 0%,rgba(42, 77, 204, 0.84) 9%,rgba(0, 166, 234, 0.92) 100%)");
        $("#touchSlider").css("display", "flex");
    });


    $("#Waterpolo").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/audio-waterpolo.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("El waterpolo o polo acuático es un deporte que se practica en una piscina, en el cual se enfrentan dos equipos. ");
        $("#content2_disciplina_ts").text("El objetivo del juego es marcar el mayor número de goles en la portería del equipo contrario durante el tiempo que dura el partido.")
        $("#content3_disciplina_ts").text("Ven con nosotros y adentrate en un nuevo deporte, contamos con las adecuadas instalaciones y equipo se asistencia medica.");
        $("#disciplina_ts").text("Waterpolo");
        $("#img_disciplina_ts").attr("src", "assets/waterpolo_ts.jpg");
        //Cambio de contenido de galeria
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/waterpolo/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/waterpolo/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/waterpolo/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://www.youtube.com/embed/FpL5TwiMGP4?rel=0&amp;showinfo=0");
        //Cambio de estilos
        $(".swichtab-controller>li").css("background", "rgb(0, 61, 85)");
        $("li.is-active>a").css("background", "rgb(83, 185, 217)");
        $("#touchSlider").css("background", "-webkit-linear-gradient(top, rgba(6,123,219,1) 0%,rgba(5,171,224,1) 0%,rgba(5,171,224,1) 34%,rgba(83,203,241,1) 72%,rgba(135,224,253,1) 97%,rgba(151,228,252,1) 100%)");
        $("#touchSlider").css("display", "flex");
    });

    $("#Bodybuilding").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/audio-body.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("¿Sabias que?");
        $("#content2_disciplina_ts").text("Aunque en sus inicios fue un deporte exclusivamente para varones, en la década de 1980 comenzaron a surgir competiciones femeninas.")
        $("#content3_disciplina_ts").text("En nuestras instalaciones puedes encontrar todo el equipo necesario y entrenadores especialiados en bodybuilding.");
        $("#disciplina_ts").text("Bodybuilding");
        $("#img_disciplina_ts").attr("src", "assets/bodybuilding_ts.jpg");
        //Cambio de contenido de galeria
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/bodybuilding/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/bodybuilding/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/bodybuilding/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://www.youtube.com/embed/UYaZIAG9P8U?rel=0&amp;showinfo=0");

        $(".swichtab-controller>li").css("background", "black");
        $("li.is-active>a").css("background", "rgb(130, 122, 31)");
        $("#touchSlider").css("background", "-webkit-linear-gradient(top, rgb(0, 0, 0) 0%,rgba(45, 0, 0, 0.84) 9%,rgba(113, 0, 0, 0.92) 100%)");
        $("#touchSlider").css("display", "flex");
    });

    $("#Crossfit").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/audio-cross.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("Es una técnica de entrenamiento bastante reciente, nació en el 2001 de la mano de Greg Glasman, que usaba este entrenamiento para preparar a policías y gracias a los buenos resultados que se obtuvieron, se extendió a más áreas y sirvió para preparar bomberos y militares. ");
        $("#content2_disciplina_ts").text("CrossFit es un programa de acondicionamiento diseñado para ayudar a las personas a mejorar su condición física en su sentido más amplio")
        $("#content3_disciplina_ts").text("Te cansas rapido en las noches?, ¡venga! ven y empieza a hacer crossfit y adquiere la conficion fisica que te hace falta.");
        $("#disciplina_ts").text("Crossfit");
        $("#img_disciplina_ts").attr("src", "assets/crossfit_ts.jpg");
        //Cambio de contenido de galeria
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/crossfit/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/crossfit/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/crossfit/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://player.vimeo.com/video/257366224?title=0&byline=0&portrait=0");

        $(".swichtab-controller>li").css("background", "rgb(45, 44, 44)");
        $("li.is-active>a").css("background", "-webkit-linear-gradient(top, rgb(93, 4, 4) 1%, rgb(68, 5, 3) 100%)");
        $("#touchSlider").css("background", "-webkit-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(60, 59, 59, 0.84) 9%, rgba(193, 191, 189, 0.92) 100%)");
        $("#touchSlider").css("display", "flex");
    });

    $("#Gym").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').pause();
        $("#audio").attr("src", "assets/audio/audio-gym.mp3");
        $(".swichtab-contents").css("margin-bottom", "0px");
        $("#content1_disciplina_ts").text("¿Sabias que? ");
        $("#content2_disciplina_ts").text("Para los griegos, la educación física era tan importante como el aprendizaje cognitivo. Muchos de estos gimnasios griegos tenían bibliotecas que se podían utilizar después de un baño relajante.")
        $("#content3_disciplina_ts").text("¡Venga levanta e inscribete a a nuestro GYM! Contamos con una amplia variedad de maquinas e instructores calificados.");
        $("#disciplina_ts").text("GYM");
        $("#img_disciplina_ts").attr("src", "assets/gym2_ts.jpg");
        //Cambio de contenido de galeria
        $("#galImg1").css("background-image", "url('assets/TouchSlider_imgs/gym/gallery_img1.jpg')");
        $("#galImg2").css("background-image", "url('assets/TouchSlider_imgs/gym/gallery_img2.jpg')");
        $("#galImg3").css("background-image", "url('assets/TouchSlider_imgs/gym/gallery_img3.jpg')");
        $("#galVideo").attr("src", "https://www.youtube.com/embed/Wzb2Naz5LuU?rel=0&amp;showinfo=0");

        $(".swichtab-controller>li").css("background", "#221d1e");
        $("li.is-active>a").css("background", "#b51118");
        $("#touchSlider").css("background", " -webkit-linear-gradient(top, rgb(140, 21, 21) 0%, rgb(58, 41, 41) 100%)");
        $("#touchSlider").css("display", "flex");
    });

    $(".btn-back").on('tap', function () {
        $("#disciplinas").toggle(200);
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $(".swichtab-contents").css("margin-bottom", "60px");
        $("li.is-active>a").css("background", "rgba(0,183,234,1)");
        $(".swichtab-controller>li").css("background", " rgb(6, 0, 85)");
        $("#touchSlider").css("display", "none");
    });
    $("#Inicio").on('tap', function () {
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $("#Unete>a").removeAttr("style");
        $(".swichtab-contents").css("margin-bottom", "60px");
        $(".swichtab-contents").css("display", "flex");
        $("#touchSlider").css("display", "none");
    });

    /*Scripts relacionados con tab de Unete*/
    $("#Unete").on('tap', function () {
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $("li>a").removeAttr("style");
        $(".swichtab-controller>li").css("background", " rgb(6, 0, 85)");
        $(".swichtab-contents").css("margin-bottom", "auto");
        $("#touchSlider").css("display", "none");
    });
    $("#btnNextF0").on('click', function () {
        $("#Form0").css("display", "none");
        $(".bgFormulario").css("background-image", "url('assets/bg_form4.jpg ')",);
        $("#Form1").css("display", "block");
        $("#barraProgreso").attr("style", "width:25%");
        $("#Form1").animate({opacity: '1'});
    });

    $("#btnBackF1").on('click', function () {
        $("#Form1").css("display", "none");
        $(".bgFormulario").css("background-image", "url('assets/bg_form0.jpg ')");
        $("#Form0").css("display", "block");
        $("#barraProgreso").attr("style", "width:0%");
        $("#Form0").animate({opacity: '1'});
    });

    $("#btnNextF1").on('click', function () {
        $(".bgFormulario").css("background-image", "url('assets/bg_form2.jpg ')");
        $("#Form1").css("display", "none");
        $("#Form2").css("display", "block");
        $("#barraProgreso").attr("style", "width:50%");
        $("#Form2").animate({opacity: '1'});
    });

    $("#btnBackF2").on('click', function () {
        $(".bgFormulario").css("background-image", "url('assets/bg_form4.jpg ')");
        $("#Form2").css("display", "none");
        $("#Form1").css("display", "block");
        $("#barraProgreso").attr("style", "width:25%");
        $("#Form1").animate({opacity: '1'});
    });

    $("#btnNextF2").on('click', function () {
        $(".bgFormulario").css("background-image", "url('assets/bg_form6.jpg ')");
        datosPntConf();
        $("#Form2").css("display", "none");
        $("#Form3").css("display", "block");
        $("#head_inscripcion").text("Verifica tus datos");
        $("#barraProgreso").attr("style", "width:100%");
        $("#Form3").animate({opacity: '1'});

    });

    $("#btnBackF3").on('click', function () {
        $(".bgFormulario").css("background-image", "url('assets/bg_form2.jpg ')");
        $("#Form3").css("display", "none");
        $("#head_inscripcion").text("¡¡¡INSCRIBETE!!!");
        $("#Form2").css("display", "block");
        $("#barraProgreso").attr("style", "width:50%");
        $("#Form2").animate({opacity: '1'});
    });


    /*Scripts relacionados con tab de Info*/
    $("#Info").on('tap', function () {
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $("li>a").removeAttr("style");
        $(".swichtab-controller>li").css("background", " rgb(6, 0, 85)");
        $(".swichtab-contents").css("margin-bottom", "auto");
        $("#touchSlider").css("display", "none");
    });

    $("#Promos").on('tap', function () {
        document.getElementById('audio').currentTime = 0;
        document.getElementById('audio').pause();
        $("li>a").removeAttr("style");
        $(".swichtab-controller>li").css("background", " rgb(6, 0, 85)");
        $(".swichtab-contents").css("margin-bottom", "auto");
        $("#touchSlider").css("display", "none");
    });

    $("select").on("change", function () {
        var sindex = document.getElementById("select_disciplina").selectedIndex;
        var hindex = document.getElementById("select_horario").selectedIndex;
        var mindex = document.getElementById("select_meses").selectedIndex;

        if (this.id === "select_disciplina") {
            obtenerGruposHorarios();
        }

        if (sindex != 0 && hindex != 0 && mindex != 0) {
            $("#btnNextF0").prop('disabled', false);
        } else {
            $("#btnNextF0").prop('disabled', true);
        }
        if (sindex != 0) {
            $("#select_disciplina").addClass("okSelection");
            $("#select_disciplina").removeClass("errorSelection");
        }
        if (hindex != 0) {
            $("#select_horario").addClass("okSelection");
            $("#select_horario").removeClass("errorSelection");
        }
        if (mindex != 0) {
            $("#select_meses").addClass("okSelection");
            $("#select_meses").removeClass("errorSelection");
        }
        if (sindex == 0) {
            $("#select_disciplina").addClass("errorSelection");
            $("#select_disciplina").removeClass("okSelection");
        }
        if (hindex == 0) {
            $("#select_horario").addClass("errorSelection");
            $("#select_horario").removeClass("okSelection");
        }
        if (mindex == 0) {
            $("#select_meses").addClass("errorSelection");
            $("#select_meses").removeClass("okSelection");
        }
    });

    $("input").on("keypress", function () {
        var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        var nombre = document.getElementById("inputName").value;
        var apellido = document.getElementById("inputLastname").value;
        var email = document.getElementById("inputEmail").value;
        var telefono = document.getElementById("inputPhone").value;
        var f_nac = document.getElementById("inputf_nac").value;
        var calle = document.getElementById("inputCalle").value;
        var colonia = document.getElementById("inputColonia").value;
        var no_casa = document.getElementById("inputNumcasa").value;
        var cp = document.getElementById("inputCP").value;

        validarPromo();

        if (nombre != "" && apellido != "" && telefono != "" && f_nac != "") {
            $("#btnNextF1").prop('disabled', false);
        } else {
            $("#btnNextF1").prop('disabled', true);
        }
        if (this.id == "inputEmail") {
            if (email == "" || !expr.test(email)) {
                $("#btnNextF1").prop('disabled', true);
                $("#inputEmail").removeClass("okInput");
                $("#inputEmail").addClass("errorInput");
            } else {
                $("#btnNextF1").prop('disabled', false);
                $("#inputEmail").removeClass("errorInput");
                $("#inputEmail").addClass("okInput");
            }
        }
        if (calle != "" && colonia != "" && no_casa != "" && cp != "") {
            $("#btnNextF2").prop('disabled', false);
        } else {
            $("#btnNextF2").prop('disabled', true);
        }
    });
});

function datosPntConf() {
    _obtenerValorDisciplina();
    _obtenerValorCupon();
    _obtenerValorTotalMeses();

    var nombre = document.getElementById("inputName").value;
    var apellido = document.getElementById("inputLastname").value;
    var email = document.getElementById("inputEmail").value;
    var telefono = document.getElementById("inputPhone").value;
    var f_nac = document.getElementById("inputf_nac").value;
    var calle = document.getElementById("inputCalle").value;
    var colonia = document.getElementById("inputColonia").value;
    var no_casa = document.getElementById("inputNumcasa").value;
    var cp = document.getElementById("inputCP").value;
    var diciplina_code = document.getElementById("select_disciplina").selectedIndex;
    var d_selected = document.getElementById("select_disciplina")[diciplina_code].text;
    var hindex = document.getElementById("select_horario").selectedIndex;
    var h_selected = document.getElementById("select_horario")[hindex].text;
    var mindex = document.getElementById("select_meses").selectedIndex;
    var m_selected = document.getElementById("select_meses")[mindex].text;

    $("#C_nombre").text(nombre);
    $("#C_apellidos").text(apellido);
    $("#C_telefono").text(telefono);
    $("#C_email").text(email);
    $("#C_fnac").text(f_nac);
    $("#C_calle").text(calle);
    $("#C_colonia").text(colonia);
    $("#C_numcasa").text(no_casa);
    $("#C_cp").text(cp);
    $("#C_disciplina").text(d_selected);
    $("#C_horario").text(h_selected);
    $("#C_meses").text(m_selected);

    let promiseMembresia = _obtenerMembresia();
    let promiseDisciplina = _obtenerDisciplina();
    let promisePromo = _buscarPromo();

    Promise.all([promiseMembresia, promiseDisciplina, promisePromo]).then(function (values) {
        console.log("Se obtuvo la membresia: " + "\n" + JSON.stringify(values[0], undefined, 2));
        precioMembresia = values[0].Item.precio;

        console.log("Se obtuvo la disciplina: " + "\n" + JSON.stringify(values[1], undefined, 2));
        mensualidad = values[1].Item.mensualidad;

        if (values[2] === SIN_CUPON) {
            console.log("No se aplico cupon");
            cantidadPago = precioMembresia + (mensualidad * totalMeses);
        } else {
            console.log("Se obtuvo la promocion: " + "\n" + JSON.stringify(values[2], undefined, 2));
            descuento = values[2].Item.descuento;
            instrucciones = values[2].Item.instrucciones;
            cantidadPago = _aplicarPromo();
        }

        $("#C_membresia").text(precioMembresia);
        $("#C_mensualidad").text(mensualidad);
        $("#C_total").text(cantidadPago);
    });

    if (document.getElementById("inputCupon").value === "") {
        $("#inputCupon").text("");
    } else {
        $("#C_cupon").text($("#inputCupon").val());
    }
}

function verificaInputCupon(cuponValido) {
    if (cuponValido) {
        $("#btnNextF0").prop('disabled', false);
        $("#inputCupon").removeClass("errorInput");
        $("#inputCupon").addClass("okInput");
    } else {
        $("#btnNextF0").prop('disabled', true);
        $("#inputCupon").removeClass("okInput");
        $("#inputCupon").addClass("errorInput");
    }

}

function rellenaHorarios(mapa) {
    let select, option, i;
    select = document.getElementById("select_horario");
    $("#select_horario").empty();

    for (let llave in mapa) {
        option = document.createElement("option");
        option.value = llave;
        option.text = mapa[llave];
        select.add(option);
    }
}