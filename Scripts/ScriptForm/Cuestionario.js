id = 0;
idcalc=0;
itemAIR = [];
console.log("eveevaev");

$(document).ready(function () {

    CuestionarioCharge();
    id = GetURLParameter("id");
    type = GetURLParameter("type");
    idtype = GetURLParameter("idtype");
    idpr = GetURLParameter("idpr");

    var idOrdenamiento = $("#cboOrdenamiento").select2("data");

    if (idOrdenamiento.id == 6) {

        $("#comentarioOrden").show();

    }

    $(".formsave").validate({
        highlight: function (element) {
            jQuery(element).closest('.form-control').addClass('error');
        },
        success: function (element) {
            jQuery(element).closest('.form-control').removeClass('error');
        },
        onfocusout: false,
        invalidHandler: function (form, validator) {
            var error = validator.numberOfInvalids();

            if (error) {
                validator.errorList[0].element.focus();
            }
        },


    });

    
    if (id === undefined) {
        id = 0;
    }
    if (type === undefined) {
        type = 0;
    }
    if (id != 0)
    {
        $.ajax({
            type: "GET",
            async: true,
            url: "Handlers/AIRHandler.ashx",
            data: { method: "ObtenerAIRid", args: { id: id } },
            complete: function (data2) {

                itemAIR = data2.responseJSON;
                console.log(itemAIR);
                if (itemAIR.TipoTramite == 3) {

                if (itemAIR.Codigo != 0) {

                    if ((itemAIR.Estatus =="EN VALIDACION " )) {

                        $("#btnAceptar,#btnInfo").show();
                        $("#btnRegresar").hide();
                        clase = "";

                    }

                }


                $.ajax({
                    type: "GET",
                    async: false,
                    url: "Handlers/CuestionarioHandler.ashx",
                    data: { method: "ObtenerRespuestasCuestionario", args: { id: itemAIR.Codigo } },
                    complete: function (data) {

                        var Cuestionario = data.responseJSON.Cuestionario;
                        if (Cuestionario.length != 0) {
                          

                            $("#idanteproyecto").show();
                            $("#idCuestionario").show();

                            if(itemAIR.AltoImpacto){

                                $("#idCuestionario").prop("href", "CuestionarioAltoImpacto.aspx?id=" + id + "&idcalc=" + Cuestionario[0].Codigo);
                                

                            }else{

                                $("#idCuestionario").prop("href", "CuestionarioImpactoMedio.aspx?id=" + id + "&idcalc=" + Cuestionario[0].Codigo);
                            };
                           
                            if ((itemAIR.Estatus == "RECHAZADO") || (itemAIR.Estatus =="SOLICITA MAS INFORMACIÓN")) {
                                $(".rb").prop("disabled", false);
                                $("#btnGuardar").show();
                            } else {


                                $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);
                                if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                    $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                }
                                $("input").prop("disabled", true);
                                $("#btnGuardar").hide();
                            }
                           
                            for (var i = 1; i <= 10; i++) {

                                var inputs = $(".inrespuesta" + i);
                                $(inputs).each(function () {

                                    var _thisinput = $(this);
                                    if (_thisinput.val() == Cuestionario[0]["pregunta" + i].trim()) {

                                        var padre1 = _thisinput[0].parentNode;
                                        var hermano = padre1.nextSibling;
                                        var hijo = hermano.children;
                                        console.log(hijo[0].id);
                                        hijo[0].checked = true;

                                        var n = Cuestionario[0]["pregunta" + i].trim().search(/anteriores/i);

                                        if (n != -1) {
                                            var padre2 = padre1.parentNode;
                                            var hermanopadre = padre2.nextSibling;
                                            var hijo2 = hermanopadre.children;
                                            var hijoreal = $("#" + hijo2[0].children[0].id);
                                            hijoreal.val(Cuestionario[0]["Comentario" + i].trim());
                                            hijoreal.show();

                                            if ((itemAIR.Estatus == "RECHAZADO") || (itemAIR.Estatus == "SOLICITA MAS INFORMACIÓN")) {

                                                hijoreal.prop("disabled", false);
                                            } else {
                                                hijoreal.prop("disabled", true);
                                            }
                                            
                                        }

                                    }

                                });

                            };
                        }

                    }
                });
            }
            }});

    }
});



/*SE LLAMA AL HANDLER QUE NOS OBTENDRA LOS DATOS DEL CUESTIONARIO*/
function CuestionarioCharge() {
    console.log("mro");
    showProcessing("Cargando...");

    $.ajax({
        type: "GET",
        async: false,
        url: "Handlers/CuestionarioHandler.ashx",
        data: { method: "ObtenerCuestionario" },
        complete: function (data) {

            
            var cuestionario = "";
            var apartado     = "";
            var pregunta     = "";
            var opcion       = "";
            var impacto      = "";
            apartadocont     = 0;
            cont = 0;
            contpregunta =0 ;
            /*EN BASE AL ARREGLO QUE NOS REGRESE DEL CUESTIONARIO, SE RECORRERA PARA SEPARARLO EN SUS APARTADOS Y PREGUNTAS*/
            $(data.responseJSON.Cuestionario).each(function (e) {

                var _this = $(this)[0];
                opcion  = _this.OpcionPreguntaCuestionario;
                impacto =_this.Altoimpacto;
              
                /*ESTE IF NOS GENERA LOS APARTADOS DE LAS PREGUNTAS Y LO AGREGA A LA VISTA */
                if(_this.ApartadoCuestionario != apartado){
                    apartado = _this.ApartadoCuestionario;
                    apartadocont++;
                    $("<div>", { 'class': 'form-group', 'id': 'fgroup' + apartadocont }).appendTo('#CuestionarioDiv');

                    $("<div>", { 'class': 'row'}).append( 
                        $('<div>', {'class': 'col-lg-12'}).append(
                            $('<label>', {
                               'class': 'text-uppercase strong ', 'id': 'apartado' + e,
                               'name': 'apartado' + e, 'html': apartado
                            }))).appendTo('#fgroup' + apartadocont);

                }

                /*ESTE IF NOS GENERA LAS  PREGUNTAS Y LO AGREGA A LA VISTA */
                if (_this.PreguntaCuestionario != pregunta) {
                    pregunta = _this.PreguntaCuestionario;
                   

                    cont++;
                    $("<div>", { 'class': 'row' }).append(
                        $('<div>', { 'class': 'col-lg-12' }).append(
                            $('<textarea>', {
                                'class': 'form-control mediumbold resumen  ', 'id': 'apartado' + e,
                                'name': 'apartado' + e, 'disabled': 'true', 'html': cont + ') ' + pregunta, 'rows': '4'
                            }))).appendTo('#fgroup' + apartadocont);

                }
              
                /*SE AGREGA CADA OPCION A SU PREGUNTA Y APARTADO CORRESPONDIENTE, ASI COMO EL RADIO BUTTON QUE DETERMINA EL RESULTADO DE LA CALCULADORA*/




                $("<div>", { 'class': 'row' }).append(
                    $('<div>', { 'class': 'col-lg-8' }).append(
                         $('<input>', {
                             'type': 'text', 'class': 'form-control resumen inrespuesta' + cont, 'id': 'opcion' + e,
                             'name': 'opcion' + e, 'disabled': 'true', 'value': opcion,
                         })
                    ),
                    /*AQUI SE CREA EL RADIO BUTTON, EN LA PROPIEDAD NOMBRE SE LE ASIGNA LA PREGUNTA A LA QUE PERTENECE PARA CREAR UN GRUPO DE RADIO BUTTONS */
                    $('<div>', { 'class': 'col-lg-4' }).append(
                        $('<input>', { 'type': 'radio', 'class': 'custom-control-input rb', 'id': 'idradio' + e, 'name': pregunta, 'value': impacto, })
                    )
                ).appendTo('#fgroup' + apartadocont);

                $("#idradio" + e).prop('required', true);

                var n = opcion.search(/anteriores/i);
                $("#idradio" + e).click(rbChecked);
                
                if (n != -1) {

                    $("<div>", { 'class': 'row' }).append(
                        $('<div>', { 'class': 'col-lg-8' }).append(
                            $('<textarea>', {
                                'class': 'form-control  resumen ', 'id': 'comentariosidradio' + e,
                                'name': 'comentarios' + e, 'rows': '4', 'placeholder': 'Por favor Argumente Su Elección',
                            }))).appendTo('#fgroup' + apartadocont);

                    $("#comentariosidradio" + e).hide();
                    $("#comentariosidradio" + e).prop('required', true);
                   


                }

            });


        },
        unblockMessage: true
    });
    hideProcessing();
}

//FUNCION QUE VERFICA EL RADIO BUTTON SELECCIONADO PARA DETERMINAR ESCONDER EL TEXT AREA DE CIERTAS OPCIONES
function rbChecked(e){
    
    //REVISA QUE EXISTA UN COMPONENTE COMENTARIO CON EL ID QUE TIENE EL COMPONENTE (THIS)
    //DE SER VERDADERO, MUESTRA EL TEXT AREA EN PANTALLA PARA QUE SE PUEDA REALIZAR UN COMENTARIO
    var pregunta = $(this)[0].name;
    if ($("#comentarios" + $(this)[0].id).length) {

        $("#comentarios" + $(this)[0].id).show();
        $("#comentarios" + $(this)[0].id).focus();

    } else {
//DE SER FALSO, BUSCAMOS EL TEXT AREA RECORRIENDO HIJOS Y HERMANOS PARA VERIFICAR QUE ESTE EN PANTALLA Y ESCONDERLO
        var padre  = document.getElementById($(this)[0].id).parentNode;
        var padre1 = padre.parentNode;
        var padre2 = padre1.parentNode;
        var hijos = padre2.children;

        $(hijos).each(function (index) {

            var nietos = $(this)[0].children;
            var siblingsAnterior = $(this)[0].previousSibling;

            $(nietos).each(function () {

                var comentario = $(this)[0].children[0].id;
                var n = comentario.search(/comentarios/i);
                if (n != -1) {
                   
                    var radiobuttonChecked = siblingsAnterior.children[1].children[0].id;
                    var preguntacomentario = siblingsAnterior.children[1].children[0].name;

                    if (!(radiobuttonChecked.checked)) {

                        if (pregunta == preguntacomentario) {
                            $("#" + comentario).hide();
                        }
                       
                    }

                }

            });
        });
        
    }
}






$("#btnGuardar").on("click", function () {

    if (!$(".formsave").valid()) {
        warningMessage("Información incompleta");
        return;
    }

    if ($('#comentarioOrden').is(':visible')) {

        if ($("#comentarioOrden").val().trim() == "") {
            warningMessage("Información incompleta");
            $("#comentarioOrden").focus().addClass("error");
            return;
        }
    }
    //showProcessing("Guardando...");
    //OBTENEMOS TODOS LOS RADIO BUTTONS DEL CUESTIONARIO
    var radiobuttons = $(".rb");
    var altoimpacto = 0;
    var impactomedio = 0;
    //LO RECORREMOS PARA REVISAR LOS QUE ESTAN SELECCIONADOS Y EMPEZARLOS A SUMAR EN CATEGORIAS DE ALTO IMPACTO E IMPACTO MEDIO
    var item = [];
    var cont = 0;
    var respuesta2 = "";
    $(radiobuttons).each(function () {
        
        var _this = $(this)[0];

        if (_this.checked) {
            cont++;
            if (cont == 2) {
                respuesta2 = _this.value;
            };
            var padre1 = _this.parentNode;
            var hermano = padre1.previousSibling;
            var hijo = hermano.children;

            item["pregunta" + cont] = $("#" + hijo[0].id).val();

            var n =  item["pregunta" + cont].search(/anteriores/i);

            if (n != -1) {
                item["Comentario" + cont] = $("#comentarios" + _this.id).val();
            } else {
                item["Comentario" + cont] ="";
            };
           
            //REVISAMOS EL VALOR INTERNO QUE DETERMINA SI ES DE ALTO IMPACO O IMPACTO MEDIO Y SE LO AGREGAMOS A LA VARIABLE CORRESPONDIENTE
            //SOLO EN CASO DE HABER SIDO SELECCIONADO
            _this.value=='true' ? altoimpacto++ : impactomedio++;

        }
    });
    // Console.log(item);

    if ((altoimpacto + impactomedio) != 10) {

        warningMessage("Restan Preguntas Por Contestar");
        return;
    }
    //validar empate 5 y 5
    /*EN CASO DE NO CUMPLIR LA CONDICION QUE ALGUNO DE LOS DOS TENGA MENOS DE 6, REGRESAMOS UN ERROR*/
    if (!((altoimpacto >= 6) || (impactomedio >= 6))) {
       
        if (respuesta2=="true") {
            altoimpacto++;
        } else {
            impactomedio++
        }

    }
    //crea antes el objeto para que exista su id

    var textomodal = "";

    if (itemAIR.TipoTramite != 3) {
        itemAIR.Codigo = 0
    }

    if (itemAIR.Codigo == 0) {
        itemAIR = {
            Codigo: 0,
            CodigoAnteproyecto: id,
            TipoRegulacion: parseInt($("#cboRegulacion").select2('data').id),
            TipoOrdenamiento: parseInt($("#cboOrdenamiento").select2('data').id),
            ComentarioOrdenamiento: $("#comentarioOrden").val(),
            TipoTramite: 3,
            CodigoTramite: 0,
            Estatus: 0,
            AltoImpacto : altoimpacto >= 6 ? true:false,
            UsuarioActual: 3,
            ConsultaPublica: false,

        };

    } else {

        itemAIR.AltoImpacto = altoimpacto >= 6 ? true : false;
        itemAIR.UsuarioActual = 3;
        itemAIR.TipoTramite = 3;
        itemAIR.Estatus = 0;
        itemAIR.TipoRegulacion = parseInt($("#cboRegulacion").select2('data').id);
        itemAIR.TipoOrdenamiento = parseInt($("#cboOrdenamiento").select2('data').id);
        itemAIR.ComentarioOrdenamiento = $("#comentarioOrden").val();

    }

    console.log(JSON.stringify(itemAIR));
    var paramAIR1 = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/AIRProceso",
        data: "{ item:" + JSON.stringify(itemAIR) + " }",
        method: function (data2) {

            $.ajax({
                type: "GET",
                async: false,
                url: "Handlers/AIRHandler.ashx",
                data: { method: "ObtenerAIRid", args: { id: id } },
                complete: function (data2) {

                    itemAIR = data2.responseJSON;
                    console.log(itemAIR);



                    var itemcalculadora = {
                        CodigoAIR: itemAIR.Codigo,
                        pregunta1: item.pregunta1,
                        pregunta2: item.pregunta2,
                        pregunta3: item.pregunta3,
                        pregunta4: item.pregunta4,
                        pregunta5: item.pregunta5,
                        pregunta6: item.pregunta6,
                        pregunta7: item.pregunta7,
                        pregunta8: item.pregunta8,
                        pregunta9: item.pregunta9,
                        pregunta10: item.pregunta10,
                        Comentario1: item.Comentario1,
                        Comentario2: item.Comentario2,
                        Comentario3: item.Comentario3,
                        Comentario4: item.Comentario4,
                        Comentario5: item.Comentario5,
                        Comentario6: item.Comentario6,
                        Comentario7: item.Comentario7,
                        Comentario8: item.Comentario8,
                        Comentario9: item.Comentario9,
                        Comentario10: item.Comentario10,
                    };

                    console.log(JSON.stringify(itemcalculadora));
                    console.log(itemcalculadora);

                    var param = {
                        type: "POST",
                        async: false,
                        url: "OpcionCalculadora.aspx/GuardarCalculadora",
                        data: "{item:" + JSON.stringify(itemcalculadora) + "}",
                        method: function (data) {

                            if (data.Message != undefined && data.Message.length > 0) {
                                hideProcessing();
                                errorMessage(data.Message);
                                return false;
                            }

                            idcalc =  data.idCalculadora;
                            itemAIR.CodigoTramite = data.idCalculadora;
                            itemAIR.Estatus = 0;
                            console.log(JSON.stringify(itemAIR));
                            var paramAIR = {
                                type: "POST",
                                async: false,
                                url: "AIRList.aspx/AIRProceso",
                                data: "{ item:" + JSON.stringify(itemAIR) + " }",
                                method: function (data2) {

                                    if (data2.Message != undefined && data2.Message.length > 0) {
                                        hideProcessing();
                                        errorMessage(data2.Message);
                                        return false;
                                    }

                                    hideProcessing();
                                    successMessage();
                                    if (altoimpacto >= 6) {
                                        impacto = true;
                                        textomodal = "SU PROYECTO ES CONSIDERADO DE ALTO IMPACTO, SERA REDIRECCIONADO AL CUESTIONARIO CORRESPONDIENTE";
                                        $("#btnCuestionarioImpacto").attr("href", "CuestionarioAltoImpacto.aspx?id=" + id + "&idcalc=" + idcalc);
                                    } else {
                                        textomodal = "SU PROYECTO ES CONSIDERADO DE  IMPACTO MODERADO, SERA REDIRECCIONADO AL CUESTIONARIO CORRESPONDIENTE";
                                        $("#btnCuestionarioImpacto").attr("href", "CuestionarioImpactoMedio.aspx?id=" + id + "&idcalc=" + idcalc);
                                    }
                                    $('#modalImpacto').modal({
                                        backdrop: 'static',
                                        keyboard: false
                                    })
                                    $('.modal-body').html(textomodal);
                                    $('#modalImpacto').modal('show');
                                }
                            };
                            ajaxRequest(paramAIR);

                        }
                    };
                    ajaxRequest(param);



                }
            });

    hideProcessing();
    successMessage();
        }
    };
    ajaxRequest(paramAIR1);



   
});


$("#btnInfo").on("click", function () {

    $("#btnmodalRechazo").hide();
    $("#titulo2").hide();
    $("#btnEnviarComent").show();
    $("#titulo1").show();

    $('#modalRechazo').modal({
        backdrop: 'static',
        keyboard: false
    })
    $('#modalRechazo').modal('show');
    itemAIR.UsuarioActual = 3;

});

$("#btnRechazar").on("click", function () {

    $("#btnmodalRechazo").show();
    $("#titulo2").show();
    $("#btnEnviarComent").hide();
    $("#titulo1").hide();

    $('#modalRechazo').modal({
        backdrop: 'static',
        keyboard: false
    })
    $('#modalRechazo').modal('show');


});



$("#btnAceptar").on("click", function () {

    if (!$(".formsave").valid()) {
        warningMessage("Información incompleta");
        return;
    }
    showProcessing("Guardando...");

    itemAIR.UsuarioActual = 1;
    itemAIR.Estatus = 0;

    var paramAIR = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/AIRProcesoDictamen",
        data: "{ item:" + JSON.stringify(itemAIR) + " }",
        method: function (data2) {

            if (data2.Message != undefined && data2.Message.length > 0) {
                hideProcessing();
                errorMessage(data2.Message);
                return false;
            }


            successMessage();
            setTimeout(function () {
                window.location.replace("Default.aspx");
            }, 2000)
        }
    };
    ajaxRequest(paramAIR);

});

$("#btnmodalRechazo").on("click", function () {

    if ($(ComentarioRechazo).val().trim() == "") {
        $('#modalRechazo').modal('hide');
        $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        $('.modal-backdrop').remove();//
        warningMessage("El comentario asignado no puede ser un comentario en blanco");
        return;
    };

    $('#modalRechazo').modal('hide');




    /*MODIFICACION DE ESTATUS DEL ANTEPROYECTO PARA PERMITIR MODIFICAR EL ANTEPROYECTO*/
    /*por el momento siempre es true, si se desea modificar, pasar la variable a false*/
    var item = {
        codigo: id,
        Autorizado: true,
    };
    var param = {
        type: "POST",
        async: false,
        url: "AnteproyectoEdit.aspx/ActualizarEstatus",
        data: "{ item:" + JSON.stringify(item) + " }",
        method: function (data) {


            /*APARTADO ENVIO Y GUARDADO DE COMENTARIO CORRESPONDIENTE A ANTEPROYECTO*/
            comentarioUMR = $("#ComentarioRechazo").val();
            var itemComentario = {

                CodigoAIR: itemAIR.Codigo,
                Comentario: comentarioUMR,

            };
            var paramComentario = {
                type: "POST",
                async: false,
                url: "AIRList.aspx/GuardarComentario",
                data: "{ item:" + JSON.stringify(itemComentario) + " }",
                method: function (data) {

                    if (data.Message != undefined && data.Message.length > 0) {
                        hideProcessing();
                        errorMessage(data.Message);
                        return false;
                    }
                    /*ACTUALIZACION DE LOS DATOS DEL MIR PARA CONTINUAR CON EL PROCESO*/
                    itemAIR.UsuarioActual = 3;
                    itemAIR.Estatus = 0;
                    var paramAIR = {
                        type: "POST",
                        async: false,
                        url: "AIRList.aspx/AIRRechazado",
                        data: "{ item:" + JSON.stringify(itemAIR) + " }",
                        method: function (data2) {

                            if (data2.Message != undefined && data2.Message.length > 0) {
                                hideProcessing();
                                errorMessage(data2.Message);
                                return false;
                            }
                            successMessage();
                            setTimeout(function () {
                                window.location.replace("ValidarList.aspx");
                            }, 2000)
                        }
                    };
                    ajaxRequest(paramAIR);

                }
            };
            ajaxRequest(paramComentario);
        }
    };
    ajaxRequest(param);




});
$("#btnRegresar").on("click", function () {
    window.history.back();
})
$("#btnEnviarComent").on("click", function () {

    if ($(ComentarioRechazo).val().trim() == "") {
        $('#modalRechazo').modal('hide');
        $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        $('.modal-backdrop').remove();//
        warningMessage("El comentario asignado no puede ser un comentario en blanco");
        return;
    };
    $('#modalRechazo').modal('hide');
    /*MODIFICACION DE ESTATUS DEL ANTEPROYECTO PARA PERMITIR MODIFICAR EL ANTEPROYECTO*/


    /*APARTADO ENVIO Y GUARDADO DE COMENTARIO CORRESPONDIENTE A ANTEPROYECTO*/
    comentarioUMR = $("#ComentarioRechazo").val();
    var itemComentario = {

        CodigoAIR: itemAIR.Codigo,
        Comentario: comentarioUMR,
        CodigoAnteproyecto: id

    };
    var paramComentario = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/GuardarComentario",
        data: "{ item:" + JSON.stringify(itemComentario) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }
            /*ACTUALIZACION DE LOS DATOS DEL MIR PARA CONTINUAR CON EL PROCESO*/
            itemAIR.UsuarioActual = 3;
            itemAIR.Estatus = 0;
            var paramAIR = {
                type: "POST",
                async: false,
                url: "AIRList.aspx/AIRInformacion",
                data: "{ item:" + JSON.stringify(itemAIR) + " }",
                method: function (data2) {

                    if (data2.Message != undefined && data2.Message.length > 0) {
                        hideProcessing();
                        errorMessage(data2.Message);
                        return false;
                    }
                    successMessage();
                    setTimeout(function () {
                        window.location.replace("ValidarList.aspx");
                    }, 2000)
                }
            };
            ajaxRequest(paramAIR);

        }
    };
    ajaxRequest(paramComentario);





});