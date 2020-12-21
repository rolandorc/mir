var id = 0;
var tokenFile;
var tokenFileUbicacion;
var listFiles = [];
var orden = "";
var regulacion = "";
var id = 0;
var idtype = 0;
var itemAIR = [];

$(document).ready(function () {

    tokenFile = Math.floor(Math.random() * (999999 - 10000)) + 10000;

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
        ignore: 'input[type=hidden]',
        messages: {

        },

    });

    id = parseInt(GetURLParameter("id"));

    id = GetURLParameter("id");

    if (id === undefined) {
        id = 0;
    }


    if (id != 0) {

        console.log(id);
        if (idpr == 0) {
            idpr = id;
        }

        $.ajax({
            type: "GET",
            async: false,
            url: "Handlers/AIRHandler.ashx",
            data: { method: "ObtenerAIRid", args: { id: id } },
            complete: function (data2) {

                itemAIR = data2.responseJSON;

                console.log(itemAIR);
                if (itemAIR.TipoTramite == 2) {
                    var param2 = {
                        type: "GET",
                        url: "Handlers/ExencionHandler.ashx",
                        data: { method: "ObtenerExencion", args: { id: itemAIR.CodigoTramite } },
                        method: function (data2) {

                            var clase = "pointerCursor glyphicon glyphicon-remove";
                            idtype = data2.Exencion.Codigo;
                            if (itemAIR.Codigo != 0) {

                                if ((itemAIR.Estatus == "PROCESO DE DICTAMINADO") || (itemAIR.Estatus == "PROCESO CONCLUIDO")) {

                                    $("#textExencionQ1").prop("disabled", true);
                                    $("#textExencionQ2").prop("disabled", true);
                                    $("#textareajustificacion").prop("disabled", true);
                                    $("input").prop("disabled", true);
                                    $("#check1").prop("disabled", true);
                                    $("#check2").prop("disabled", true);
                                    $("#btnGuardar,#btnAutorizar,#btnUploadFile").hide();
                                    clase = "";

                                }

                                if ((data2.Exencion.autorizado) && (itemAIR.UsuarioActual == 2)) {

                                    $("#textExencionQ1").prop("disabled", true);
                                    $("#textExencionQ2").prop("disabled", true);
                                    $("#textareajustificacion").prop("disabled", true);
                                    $("input").prop("disabled", true);
                                    $("#check1").prop("disabled", true);
                                    $("#check2").prop("disabled", true);
                                    $("#btnAceptar,#btnInfo").show();
                                    $("#anclaidAnteproyecto").show();
                                    $("#btnGuardar,#btnAutorizar,#btnUploadFile,#btnRegresar").hide();
                                    clase = "";

                                }

                                if ((data2.Exencion.autorizado) && (itemAIR.UsuarioActual == 1)) {


                                    $("#anclaidAnteproyecto").show();
                                    $("#idRowConsulta").show();

                                }



                                $("#textExencionQ1").val(data2.Exencion.pregunta1);
                                $("#textExencionQ2").val(data2.Exencion.pregunta2);

                                if (idtype != 0) {

                                    if (itemAIR.publicidad != null) {

                                        if (itemAIR.publicidad) {
                                            $("#checkConstanciaPublicidad")[0].checked = true;

                                        } else {
                                            $("#check62")[0].checked = true;
                                        }

                                    };

                                    if (itemAIR.ConsultaDependencia != null) {

                                        if (itemAIR.ConsultaDependencia) {

                                            $("#textareajustificacion").val(itemAIR.JustificaPublicacion);
                                            $("#areajustificacion").show();
                                            $("#checkConsultaPublica")[0].checked = true;
                                        } else {
                                            $("#check52")[0].checked = true;
                                        }

                                    };


                                    $("#check42")[0].checked = true;
                                    $("#check32")[0].checked = true;
                                    $("#check22")[0].checked = true;
                                    $("#check12")[0].checked = true;

                                }





                                var append = "";

                                for (var i = 0; i < data2.Links2.length; i++) {
                                    var file = data2.Links2[i];
                                    append += "<li><i title='Eliminar' archivo='" + file.FileName + "' class='" + clase + "'></i> <a target='_blank' href='" + file.FilePath + "'>" + file.Nombre + "</a></li>";
                                    listFiles.push([file.FileName, file.Nombre]);
                                }

                                $(".files-list").append(append);

                            }

                        }
                    }
                    ajaxRequest(param2);
                }

            }
        });
        hideProcessing();

    }
});

$("#btnRegresar").on("click", function () {

    window.history.back();
})


$('#checkConsultaPublica').on('click', function () {

    $("#areajustificacion").show();
    $("#textareajustificacion").show();

});

$("#check52").on('click', function () {

    $("#areajustificacion").hide();
    $("#textareajustificacion").hide();

});


$("#btnAceptarConsulta").on("click", function () {

    itemAIR.ConsultaPublica = $("#checkConsulta")[0].checked;
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
        }
    };
    ajaxRequest(paramAIR);
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
                window.location.replace("ValidarList.aspx");
            }, 2000)
        }
    };
    ajaxRequest(paramAIR);

});

$('.checkTrue').on('click', function () {

    var textomodal = "SU PROYECTO NO ES CONSIDERADO MIR DE EXENCIÓN , HAGA LA SOLICITUD CORRESPONDIENTE";
    $("#btnExencionRegulacion2").attr("href", "AutorizadoList.aspx");

    $('#modalExencion2').modal({
        backdrop: 'static',
        keyboard: false
    })
    $('.modal-body').html(textomodal);
    $('#modalExencion2').modal('show');

});

$("body").delegate(".pointerCursor", "click", function () {

    var li = $(this).parent();

    var clase = $(this).attr('class');

    var fileName = $(this).attr("archivo");

    if (clase == "pointerCursor glyphicon glyphicon-remove") {
        listFiles = jQuery.grep(listFiles, function (value) {
            return value[0] != fileName;
        });
    }


    li.remove();

});

$("#btnInfo").on("click", function () {



    $('#modalExencion').modal({
        backdrop: 'static',
        keyboard: false
    })
    $('#modalExencion').modal('show');

});


$("#btnExencionRegulacion").on("click", function () {


    if ($("#Comentarioinfo").val().trim() == "") {
        $('#modalExencion').modal('hide');
        $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        $('.modal-backdrop').remove();//
        warningMessage("El comentario asignado no puede ser un comentario en blanco");
        return;
    };

    $('#modalExencion').modal('hide');
    
    console.log(itemAIR);



            var item = {
                codigo: itemAIR.CodigoTramite,
                autorizado: false,
                CodigoAnteproyecto: id
            };

            var param1 = {
                type: "POST",
                async: false,
                url: "OpcionCalculadora.aspx/ActualizarEstatusExencion",
                data: "{ item:" + JSON.stringify(item) + " }",
                method: function (data) {

                    if (data.Message != undefined && data.Message.length > 0) {
                        hideProcessing();
                        errorMessage(data.Message);
                        return false;
                    }

                    comentarioUMR = $("#Comentarioinfo").val();
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
                }
            };
            ajaxRequest(param1);




});


$("#btnGuardar").on("click", function () {


  
  
    var numcodigo       = "";
    var textoregulacion = "";
    showProcessing("Guardando...");
    var rb1 = $(".rb1");
    var rb2 = $(".rb2");
    var publicidad = "";
    var publicacion = "";

    $(rb1).each(function () {

        var _this = $(this)[0];

        if (_this.checked) {
            publicacion = _this.value;
        }
    });

    $(rb2).each(function () {

        var _this = $(this)[0];

        if (_this.checked) {
            publicidad = _this.value;
        }
    });
    var textExencionQ1 = $("#textExencionQ1").val();
    var textExencionQ2 = $("#textExencionQ2").val();



    var item = {
        Codigo: idtype,
        CodigoAnteproyecto: id,
        pregunta1:   textExencionQ1,
        pregunta2:   textExencionQ2,
        autorizado: false,

    };

    var param = {
        type: "POST",
        url: "OpcionCalculadora.aspx/GuardarExencion",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }



               
            var conspub = null;
            var condp = null;
            if ($("#checkConsultaPublica")[0].checked) {
                condp = true;
            }
            if ($("#check52")[0].checked) {
                condp = false;
            }

            if ($("#checkConstanciaPublicidad")[0].checked) {
                conspub = true;
            }
            if ($("#check62")[0].checked) {
                conspub = false;
            }
            if (itemAIR.TipoTramite != 2) {
                itemAIR.Codigo = 0
            }

            if (itemAIR.Codigo == 0) {
                itemAIR = {
                    Codigo: 0,
                    CodigoAnteproyecto: id,
                    TipoRegulacion: parseInt($("#cboRegulacion").select2('data').id),
                    TipoOrdenamiento: parseInt($("#cboOrdenamiento").select2('data').id),
                    ComentarioOrdenamiento: $("#comentarioOrden").val(),
                    TipoTramite: 2,
                    CodigoTramite: data.idexencion,
                    AltoImpacto: false,
                    UsuarioActual: 3,
                    ConsultaPublica: false,
                    ConsultaDependencia: condp,
                    publicidad:conspub,
                    Estatus: 0,
                    JustificaPublicacion:$("#textareajustificacion").val(),

                };

            } else {

                itemAIR.UsuarioActual = 3;
                itemAIR.TipoRegulacion= parseInt($("#cboRegulacion").select2('data').id);
                itemAIR.TipoOrdenamiento= parseInt($("#cboOrdenamiento").select2('data').id);
                itemAIR.ComentarioOrdenamiento = $("#comentarioOrden").val();
                itemAIR.ConsultaPublica = false;
                itemAIR.publicidad = conspub;
                itemAIR.ConsultaDependencia = condp;
                itemAIR.Estatus = 0;
                itemAIR.TipoTramite = 2;
                itemAIR.CodigoTramite = data.idexencion;
                itemAIR.JustificaPublicacion = $("#textareajustificacion").val();

            }

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

$("#btnAutorizar").on("click", function () {

    var numcodigo = "";
    var textoregulacion = "";
    var autorizado = false;


    if ($(this)[0].id == "btnAutorizar") {
        autorizado = true;

        if (!$(".formsave").valid()) {
            warningMessage("Información incompleta");
            return;
        }

    };

    if ($('#comentarioOrden').is(':visible')) {

        if ($("#comentarioOrden").val().trim() == "") {
            warningMessage("Información incompleta");
            $("#comentarioOrden").focus().addClass("error");
            return;
        }
    }


    if ($('#textareajustificacion').is(':visible')) {

        if ($("#textareajustificacion").val().trim() == "") {
            warningMessage("Información incompleta");
            $("#textareajustificacion").focus().addClass("error");
            return;
        }
    }

    var rb1 = $(".rb1");
    var rb2 = $(".rb2");
    var rb4 = $(".rb4");
    var publicidad = "";
    var publicacion = "";
    var contrb4 = 0;
    var contrb1 = 0;
    var contrb2 = 0;


    $(rb4).each(function () {
        var _this = $(this)[0];

        if (!_this.checked) {
            contrb4++;
            _this.focus();

        }

    });

    if (contrb4 > 0) {
        warningMessage("Información incompleta");
       
        return;
    }

    $(rb1).each(function () {
        var _this = $(this)[0];

        if (!_this.checked) {
            contrb1++;
            _this.focus();

        }

    });

    if (contrb1 > 1) {
        warningMessage("Información incompleta");
        $("#idPublicacion").addClass('error');
        return;
    }



    $(rb2).each(function () {
        var _this = $(this)[0];

        if (!_this.checked) {
            contrb2++;
            _this.focus();

        }

    });

    if (contrb2 > 1) {
        warningMessage("Información incompleta");
        $("#idConstancia").addClass('error');
        return;
    }

    $(rb1).each(function () {

        var _this = $(this)[0];

        if (_this.checked) {
            publicacion = _this.value;
        }
    });

    $(rb2).each(function () {

        var _this = $(this)[0];

        if (_this.checked) {
            publicidad = _this.value;
        }
    });
    var textExencionQ1 = $("#textExencionQ1").val();
    var textExencionQ2 = $("#textExencionQ2").val();



    var item = {
        Codigo: idtype,
        CodigoAnteproyecto: id,
        pregunta1: textExencionQ1,
        pregunta2: textExencionQ2,
        autorizado: autorizado,

    };

    showProcessing("Guardando...");

    var param = {
        type: "POST",
        url: "OpcionCalculadora.aspx/GuardarExencion",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }

            if (autorizado) {

                if (itemAIR.TipoTramite != 2) {
                    itemAIR.Codigo = 0
                }

                if (itemAIR.Codigo == 0) {
                    itemAIR = {
                        Codigo: 0,
                        CodigoAnteproyecto: id,
                        TipoRegulacion: parseInt($("#cboRegulacion").select2('data').id),
                        TipoOrdenamiento: parseInt($("#cboOrdenamiento").select2('data').id),
                        ComentarioOrdenamiento: $("#comentarioOrden").val(),
                        TipoTramite: 2,
                        CodigoTramite: data.idexencion,
                        AltoImpacto: false,
                        UsuarioActual: 2,
                        ConsultaPublica: false,
                        ConsultaDependencia: $("#checkConsultaPublica")[0].checked,
                        publicidad: $("#checkConstanciaPublicidad")[0].checked,
                        Estatus: 0,
                        JustificaPublicacion: $("#textareajustificacion").val(),

                    };

                } else {

                    itemAIR.UsuarioActual = 2;
                    itemAIR.TipoRegulacion = parseInt($("#cboRegulacion").select2('data').id);
                    itemAIR.TipoOrdenamiento = parseInt($("#cboOrdenamiento").select2('data').id);
                    itemAIR.ComentarioOrdenamiento = $("#comentarioOrden").val();
                    itemAIR.ConsultaPublica = false;
                    itemAIR.publicidad = $("#checkConstanciaPublicidad")[0].checked;
                    itemAIR.ConsultaDependencia = $("#checkConsultaPublica")[0].checked;
                    itemAIR.Estatus = 0;
                    itemAIR.TipoTramite = 2;
                    itemAIR.CodigoTramite = data.idexencion;
                    itemAIR.JustificaPublicacion=$("#textareajustificacion").val();

                }

            }

            console.log(JSON.stringify(itemAIR));

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

                    hideProcessing();
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

$('#btnUploadFile').on('click', function () {

    var fileUpload = $("#fileUpload");

    var files = fileUpload.get(0).files;

    for (var j = 0; j < files.length; j++) {

        if (files[j].name.trim().includes(" ")) {

            errorMessage("Los Nombres de Archivo No Deben Contener Espacios");
            $("#fileUpload").val("");
            return false;

        }

    }

    if (files.length == 0) {
        return false;
    }
    for (var i = 0; i < files.length; i++) {

        for (var j = 0; j < listFiles.length; j++) {

            if (files[i].name == listFiles[j][0]) {
                errorMessage("El archivo ya se encuentra en la lista");
                $("#fileUpload").val("");
                hideProcessing();
                return false;
            }
        }



        showProcessing("Cargando...");

        var data = new FormData();

        data.append("token", tokenFile);

        var maxSize = parseInt(fileUpload.attr('max-size'), 10),
        size = files[i].size;

        if (size > maxSize) {
            hideProcessing();
            $("#fileUpload").val("");
            errorMessage("El archivo no debe ser mayor a 10 mb");
            return false;
        }

        data.append("UploadedPdf", files[i]);

        $.ajax(
        {
            url: "handlers/fileupload.ashx",
            type: 'POST',
            async: false,
            complete: function (data) {

                if (data.length > 0) {
                    errorMessage(data);
                    return false;
                }

                $(".files-list").append("<li><i title='Eliminar' archivo='" + files[i].name + "' class='pointerCursor glyphicon glyphicon-remove'></i> " + files[i].name.toUpperCase() + "</li>");
                listFiles.push([Nombre = files[i].name, Consecutivo = i]);
                hideProcessing();
            },
            error: function (e) {
                hideProcessing();
                errorMessage("Ocurrió un error al subir el archivo, intente de nuevo");
            },
            data: data,
            cache: false,
            contentType: false,
            processData: false
        });
    }
});