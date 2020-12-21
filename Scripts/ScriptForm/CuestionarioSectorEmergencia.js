var itemAIR = [];
var id = 0;
var idtype = 0;
var comentarioUMR ="";

$(document).ready(function () {

    console.log("dvsec");
    showProcessing("Cargando...");
    var idOrdenamiento = $("#cboOrdenamiento").select2("data");

    if (idOrdenamiento.id == 6) {

        $("#comentarioOrden").show();

    }
    $(".int-format, .cp-format").val("");

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
        ignore: 'input[type=hidden]',
        messages: {

        },

    });


    var param = {
        type: "GET",
        url: "Handlers/EmergenciaHandler.ashx",
        data: { method: "ObtenerCombos" },
        method: function (data) {


            var cboSector = $("#cboSector");

            LoadSelects(cboSector, data.Sectores, true);

            cboSector.select2("val", "");

            append = "";
        }, 
        unblockMessage: true
    };
    ajaxRequest(param);


    id = GetURLParameter("id");

    if (id === undefined) {
        id = 0;
    }
    if (id != 0) {

        var paramAIRget = {
            type: "GET",
            url: "Handlers/AIRHandler.ashx",
            data: { method: "ObtenerAIRid", args: { id: id } },
            method: function (data2) {

                itemAIR = data2;
                if (itemAIR.TipoTramite == 1) {
                    if (itemAIR.Codigo != 0) {

                        idtype = itemAIR.CodigoTramite;

                        switch (itemAIR.Estatus) {

                            case "EN VALIDACION ":
                                if (itemAIR.UsuarioActual == 2) {

                                    $("#btnInfo,#btnRechazar,#btnAceptar").hide();
                                }
                                if (itemAIR.UsuarioActual == 1) {

                                    $("#btnValidado").hide();
                                }

                                break;
                            case "PROCESO DE DICTAMINADO":
                                $("#btnRegresar").prop("href", "DictaminarList.aspx")
                                break;
                            case "VALIDADO":
                                estatus = itemAIR.Estatus;
                                break;
                            default:

                        }




                    }


                    if (idtype != 0) {

                        var param2 = {
                            type: "GET",
                            url: "Handlers/EmergenciaHandler.ashx",
                            data: { method: "ObtenerEmergencia", args: { id: idtype } },
                            method: function (data2) {

                                $("#textPoblacion").val(data2.pregunta1);
                                $("#textJustificacion").val(data2.pregunta2);
                                $("#cboSector").val(data2.Sector);
                            }
                        };
                        ajaxRequest(param2);

                    };
                }
            }
        };
        ajaxRequest(paramAIRget);
    };


    
    hideProcessing();
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
        codigo: idpr,
        Autorizado: true,
        TipoTramite: itemAIR.TipoTramite
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
                TipoTramite: itemAIR.TipoTramite

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
                TipoTramite: itemAIR.TipoTramite

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
                    itemAIR.UsuarioActual=3;
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

$("#btnEnviar").on("click", function () {

    if (!$(".formsave").valid()) {
        warningMessage("Información incompleta");
        return;
    }

    var Sectores = $("#cboSector").val();
    var poblacion = $("#textPoblacion").val();
    var justificacion = $("#textJustificacion").val();

    if ($('#comentarioOrden').is(':visible')) {

        if ($("#comentarioOrden").val().trim() == "") {
            warningMessage("Información incompleta");
            $("#comentarioOrden").focus().addClass("error");
            return;
        }
    }



    showProcessing("Guardando...");

    var item = {
        Codigo: idtype,
        CodigoAnteproyecto: id,
        Sector: Sectores,
        pregunta1: poblacion,
        pregunta2: justificacion,
    };


    var param = {
        type: "POST",
        url: "OpcionCalculadora.aspx/GuardarEmergencia",
        data: "{ item:" + JSON.stringify(item) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }


            if (itemAIR.TipoTramite != 1) {
                itemAIR.Codigo = 0
            }
            if (itemAIR.Codigo == 0) {
                itemAIR = {
                    Codigo: 0,
                    CodigoAnteproyecto: id,
                    TipoRegulacion: parseInt($("#cboRegulacion").select2('data').id),
                    TipoOrdenamiento: parseInt($("#cboOrdenamiento").select2('data').id),
                    ComentarioOrdenamiento: $("#comentarioOrden").val(),
                    TipoTramite: 1,
                    CodigoTramite: data.idemergencia,
                    AltoImpacto: false,
                    UsuarioActual: 2,
                    ConsultaPublica: false,
                    Estatus:0,

                };

            } else {

                itemAIR.UsuarioActual = 2;
                itemAIR.TipoRegulacion = parseInt($("#cboRegulacion").select2('data').id);
                itemAIR.TipoOrdenamiento = parseInt($("#cboOrdenamiento").select2('data').id);
                itemAIR.ComentarioOrdenamiento = $("#comentarioOrden").val();
                itemAIR.TipoTramite = 1;
                itemAIR.CodigoTramite = data.idemergencia;
                itemAIR.Estatus = 0;

            }


            var paramAIR = {
                type: "POST",
                async: false,
                url: "AIRList.aspx/AIRValidacion",
                data: "{ item:" + JSON.stringify(itemAIR) + " }",
                method: function (data2) {

                    if (data2.Message != undefined && data2.Message.length > 0) {
                        hideProcessing();
                        errorMessage(data2.Message);
                        return false;
                    }

                    LimpiarControles();
                    successMessage();
                    setTimeout(function () {
                        window.location.replace("Default.aspx");
                    }, 2000)
                }
            };
            ajaxRequest(paramAIR);

        }
    };

    ajaxRequest(param);

});

$("#btnValidado").on("click", function () {


            if (itemAIR.Codigo == 0) {
                itemAIR = {
                    Codigo: 0,
                    CodigoAnteproyecto: id,
                    TipoRegulacion: parseInt($("#cboRegulacion").select2('data').id),
                    TipoOrdenamiento: parseInt($("#cboOrdenamiento").select2('data').id),
                    ComentarioOrdenamiento: $("#comentarioOrden").val(),
                    TipoTramite: 1,
                    Estatus:0,
                    AltoImpacto: false,
                    UsuarioActual: 1,
                    ConsultaPublica: false,
                    ConsultaDependencia: false,
                    publicidad: false,

                };

            } else {

                itemAIR.UsuarioActual = 1;
                itemAIR.TipoRegulacion = parseInt($("#cboRegulacion").select2('data').id);
                itemAIR.TipoOrdenamiento = parseInt($("#cboOrdenamiento").select2('data').id);
                itemAIR.ComentarioOrdenamiento = $("#comentarioOrden").val();
                itemAIR.TipoTramite = 1;
                itemAIR.Estatus = 0;

            }


            var paramAIR = {
                type: "POST",
                async: false,
                url: "AIRList.aspx/AIRValidacion",
                data: "{ item:" + JSON.stringify(itemAIR) + " }",
                method: function (data2) {

                    if (data2.Message != undefined && data2.Message.length > 0) {
                        hideProcessing();
                        errorMessage(data2.Message);
                        return false;
                    }

                    LimpiarControles();
                    successMessage();
                    setTimeout(function () {
                        window.location.replace("Default.aspx");
                    }, 2000)
                }
            };
            ajaxRequest(paramAIR);

    

});

$("#btnAceptar").on("click", function () {

    if (!$(".formsave").valid()) {
        warningMessage("Información incompleta");
        return;
    }

    var Sectores = $("#cboSector").val();
    var poblacion = $("#textPoblacion").val();
    var justificacion = $("#textJustificacion").val();


    showProcessing("Guardando...");

    itemAIR.UsuarioActual = 3;
    itemAIR.Estatus = 0;
    var paramAIR = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/AIRValidado",
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


function LimpiarControles() {

    $("input:text").val("");
    $("textarea").val("");
    $(".form-control.error").removeClass("error");
    $(".message.error").css("display", "none");

    $("#cboSector").select2("val", "");
    id = 0;

}