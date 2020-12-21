var id = 0;
var TipoTramite = 0;
var mir=0;
var fechafolio = "";
var tokenFileDP;
var tokenFileDF;
var tokenFileCP;
var listFilesDP = [];
var listFilesDF = [];
var listFilesCP = [];
var itemAIR = [];


$(document).ready(function () {

    showProcessing("Cargando...");

    $('#FechaPublicacionDOF').datetimepicker({
        format: 'DD/MM/YYYY ',
    });




    tokenFileDP = Math.floor(Math.random() * (999999 - 10000)) + 10000;
    tokenFileDF = Math.floor(Math.random() * (999999 - 10000)) + 10000;
    tokenFileCP = Math.floor(Math.random() * (999999 - 10000)) + 10000;



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

    id = GetURLParameter("id");
    TipoTramite = GetURLParameter("TT");
    mir = GetURLParameter("mir");

    if ((mir === undefined)) {
        mir = 0;
    }

    if ((TipoTramite === undefined)) {
        TipoTramite = 0;
    }

    if ((id === undefined)) {
        id = 0;
    }

    if (id != 0) {
        showProcessing("Cargando...");

        var param = {
            type: "GET",
            url: "Handlers/AnteproyectoHandler.ashx",
            data: { method: "ObtenerAnteproyecto", args: { id: id } },
            method: function (data2) {

                $("#txtTitulo").html(data2.Anteproyecto.Titulo);
                $("#txtDependencia").html(data2.Anteproyecto.NombreDependencia);

                if (TipoTramite == 4) {

                    var param2 = {
                        type: "GET",
                        url: "Handlers/AIRHandler.ashx",
                        data: { method: "ObtenerArchivosDictamenActualizacion", args: { id: mir } },
                        method: function (data2) {

                            itemAIR = data2.ArchivosItem;
                            if (!itemAIR.publicidad) {
                                $("#divConstanciaPublicidad").hide();
                            };

                            if (itemAIR.TipoTramite == 1) {
                                $("#divDictamenParcial").hide();
                                //$("#divDictamenFinal").hide();
                                $("#btnAutorizarDF").html("Guardar Constancia de Emergencia");
                                $("#h3DF").html("Constancia de Emergencia");
                            };

                            if (itemAIR.TipoTramite == 2) {
                                $("#divDictamenParcial").hide();
                                //$("#divDictamenFinal").hide();
                                $("#btnAutorizarDF").html("Guardar Constancia de Exención");
                                $("#h3DF").html("Constancia de Exención");

                            };

                            if (itemAIR.FechaPublicacionDOF != null) {

                                var fechapub = new Date(itemAIR.FechaPublicacionDOF);
                                var anio = fechapub.getFullYear();
                                var mes = fechapub.getMonth() + 1;
                                var dia = fechapub.getDate();

                                if (dia.toString().length == 1) {
                                    dia = "0" + dia.toString();
                                }

                                if (mes.toString().length == 1) {
                                    mes = "0" + mes.toString();
                                }

                                $('#fechaPub').val(dia + "/" + mes + "/" + anio);
                                $('.dtp').prop("disabled", true);
                                $('#btnGuardarFechaDOF').hide();


                            }


                            var append = "";

                            for (var i = 0; i < data2.Links2.length; i++) {
                                var file = data2.Links2[i];
                                append = "<li> <a target='_blank' href='" + file.FilePath + "'>" + file.Nombre + "</a></li>";

                                switch (file.FileName) {
                                    case "DP":

                                        $(".files-listDP").append(append);
                                        $("#btnUploadFileDP").hide();
                                        $("#fileUploadDP").prop("disabled", true);
                                        $("#btnGuardarDP").hide();

                                        break;
                                    case "CP":

                                        $(".files-listCP").append(append);
                                        $("#btnUploadFileCP").hide();
                                        $("#fileUploadCP").prop("disabled", true);
                                        $("#btnGuardarCP").hide();


                                        break;

                                    case "DF":

                                        $(".files-listDF").append(append);
                                        $("#btnUploadFileDF").hide();
                                        $("#fileUploadDF").prop("disabled", true);
                                        $("#btnAutorizarDF").hide();

                                        $("#btnUploadFileDP").hide();
                                        $("#fileUploadDP").prop("disabled", true);
                                        $("#btnGuardarDP").hide();

                                        break;

                                    default:

                                }

                            }




                            var append = "";

                        }
                    }
                    ajaxRequest(param2);
                } else {
                    var param2 = {
                        type: "GET",
                        url: "Handlers/AIRHandler.ashx",
                        data: { method: "ObtenerArchivosDictamen", args: { id: id } },
                        method: function (data2) {

                            itemAIR = data2.ArchivosItem;
                            if (!itemAIR.publicidad) {
                                $("#divConstanciaPublicidad").hide();
                            };

                            if (itemAIR.TipoTramite == 1) {
                                $("#divDictamenParcial").hide();
                                //$("#divDictamenFinal").hide();
                                $("#btnAutorizarDF").html("Guardar Constancia de Emergencia");
                                $("#h3DF").html("Constancia de Emergencia");
                            };

                            if (itemAIR.TipoTramite == 2) {
                                $("#divDictamenParcial").hide();
                                //$("#divDictamenFinal").hide();
                                $("#btnAutorizarDF").html("Guardar Constancia de Exención");
                                $("#h3DF").html("Constancia de Exención");

                            };

                            if (itemAIR.FechaPublicacionDOF != null) {

                                var fechapub = new Date(itemAIR.FechaPublicacionDOF);
                                var anio = fechapub.getFullYear();
                                var mes = fechapub.getMonth() + 1;
                                var dia = fechapub.getDate();

                                if (dia.toString().length == 1) {
                                    dia = "0" + dia.toString();
                                }

                                if (mes.toString().length == 1) {
                                    mes = "0" + mes.toString();
                                }

                                $('#fechaPub').val(dia + "/" + mes + "/" + anio);
                                $('.dtp').prop("disabled", true);
                                $('#btnGuardarFechaDOF').hide();


                            }


                            var append = "";

                            for (var i = 0; i < data2.Links2.length; i++) {
                                var file = data2.Links2[i];
                                append = "<li> <a target='_blank' href='" + file.FilePath + "'>" + file.Nombre + "</a></li>";

                                switch (file.FileName) {
                                    case "DP":

                                        $(".files-listDP").append(append);
                                        $("#btnUploadFileDP").hide();
                                        $("#fileUploadDP").prop("disabled", true);
                                        $("#btnGuardarDP").hide();

                                        break;
                                    case "CP":

                                        $(".files-listCP").append(append);
                                        $("#btnUploadFileCP").hide();
                                        $("#fileUploadCP").prop("disabled", true);
                                        $("#btnGuardarCP").hide();


                                        break;

                                    case "DF":

                                        $(".files-listDF").append(append);
                                        $("#btnUploadFileDF").hide();
                                        $("#fileUploadDF").prop("disabled", true);
                                        $("#btnAutorizarDF").hide();

                                        $("#btnUploadFileDP").hide();
                                        $("#fileUploadDP").prop("disabled", true);
                                        $("#btnGuardarDP").hide();

                                        break;

                                    default:

                                }

                            }




                            var append = "";

                        }
                    }
                    ajaxRequest(param2);
                }

            }
        }
        ajaxRequest(param);
    }
    hideProcessing();



});

$("body").delegate(".pointerCursorDP", "click", function () {

    var li = $(this).parent();

    var clase = $(this).attr('class');

    var fileName = $(this).attr("archivo");

    if (clase == "pointerCursorDP glyphicon glyphicon-remove") {
        listFilesDP = jQuery.grep(listFilesDP, function (value) {
            return value[0] != fileName;
        });
    }


    li.remove();

});
$("body").delegate(".pointerCursorDF", "click", function () {

    var li = $(this).parent();

    var clase = $(this).attr('class');

    var fileName = $(this).attr("archivo");

    if (clase == "pointerCursorDF glyphicon glyphicon-remove") {
        listFilesDF = jQuery.grep(listFilesDF, function (value) {
            return value[0] != fileName;
        });
    }


    li.remove();

});
$("body").delegate(".pointerCursorCP", "click", function () {

    var li = $(this).parent();

    var clase = $(this).attr('class');

    var fileName = $(this).attr("archivo");

    if (clase == "pointerCursorCP glyphicon glyphicon-remove") {
        listFilesCP = jQuery.grep(listFilesCP, function (value) {
            return value[0] != fileName;
        });
    }


    li.remove();

});

$('#btnUploadFileDP').on('click', function () {

    if (listFilesDP.length < 1) {

        var fileUpload = $("#fileUploadDP");

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
        showProcessing("Cargando...");
        for (var i = 0; i < files.length; i++) {

            for (var j = 0; j < listFilesDP.length; j++) {

                if (files[i].name == listFilesDP[j][0]) {
                    errorMessage("El archivo ya se encuentra en la lista");
                    $("#fileUploadDP").val("");
                    hideProcessing();
                    return false;
                }
            }





            var data = new FormData();

            data.append("token", tokenFileDP);

            var maxSize = parseInt(fileUpload.attr('max-size'), 10),
            size = files[i].size;

            if (size > maxSize) {
                hideProcessing();
                $("#fileUploadDP").val("");
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

                    $(".files-listDP").append("<li><i title='Eliminar' archivo='" + files[i].name + "' class='pointerCursorDP glyphicon glyphicon-remove'></i> " + files[i].name.toUpperCase() + "</li>");
                    listFilesDP.push([Nombre = files[i].name, Consecutivo = i]);

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
        $("#fileUploadDP").val("");
    } else {
        errorMessage("Solo se permite un Archivo, favor de eliminar el Existente");
    }
});

$('#btnUploadFileDF').on('click', function () {

    if (listFilesDF.length < 1) {

        var fileUpload = $("#fileUploadDF");

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
        showProcessing("Cargando...");
        for (var i = 0; i < files.length; i++) {

            for (var j = 0; j < listFilesDF.length; j++) {

                if (files[i].name == listFilesDF[j][0]) {
                    errorMessage("El archivo ya se encuentra en la lista");
                    $("#fileUploadDF").val("");
                    hideProcessing();
                    return false;
                }
            }





            var data = new FormData();

            data.append("token", tokenFileDF);

            var maxSize = parseInt(fileUpload.attr('max-size'), 10),
            size = files[i].size;

            if (size > maxSize) {
                hideProcessing();
                $("#fileUploadDF").val("");
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

                    $(".files-listDF").append("<li><i title='Eliminar' archivo='" + files[i].name + "' class='pointerCursorDF glyphicon glyphicon-remove'></i> " + files[i].name.toUpperCase() + "</li>");
                    listFilesDF.push([Nombre = files[i].name, Consecutivo = i]);

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
        $("#fileUploadDP").val("");
    } else {
            errorMessage("Solo se permite un Archivo, favor de eliminar el Existente");
    }
});
$('#btnUploadFileCP').on('click', function () {

    if (listFilesCP.length < 1) {

        var fileUpload = $("#fileUploadCP");

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
        showProcessing("Cargando...");
        for (var i = 0; i < files.length; i++) {

            for (var j = 0; j < listFilesCP.length; j++) {

                if (files[i].name == listFilesCP[j][0]) {
                    errorMessage("El archivo ya se encuentra en la lista");
                    $("#fileUploadCP").val("");
                    hideProcessing();
                    return false;
                }
            }





            var data = new FormData();

            data.append("token", tokenFileCP);

            var maxSize = parseInt(fileUpload.attr('max-size'), 10),
            size = files[i].size;

            if (size > maxSize) {
                hideProcessing();
                $("#fileUploadCP").val("");
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

                    $(".files-listCP").append("<li><i title='Eliminar' archivo='" + files[i].name + "' class='pointerCursorCP glyphicon glyphicon-remove'></i> " + files[i].name.toUpperCase() + "</li>");
                    listFilesCP.push([Nombre = files[i].name, Consecutivo = i]);

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
        $("#fileUploadDP").val("");
    } else {
            errorMessage("Solo se permite un Archivo, favor de eliminar el Existente");
    }
});

$("#btnGuardarDP").on("click", function () {


    var _this = $(this)[0];

    if (!(listFilesDP.length > 0)) {
        warningMessage("Favor de Agregar Archivos de Dictamen");
        return;
    }

    itemAIR.Estatus = 0;
    var param = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/GuardarDictamenParcial",
        data: "{ item:" + JSON.stringify(itemAIR) + ", token:" + JSON.stringify(tokenFileDP) + ", listFilesDP:" + JSON.stringify(listFilesDP) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }
            successMessage();
            $("#btnUploadFileDP").prop("disabled", true);
            $("#fileUploadDP").prop("disabled", true);
            $("#btnGuardarDP").prop("disabled", true);
            $(".pointerCursorDP").removeClass("glyphicon glyphicon-remove");

        }
    };
    ajaxRequest(param);


});
$("#btnAutorizarDF").on("click", function () {

    if (!(listFilesDF.length > 0)) {
        warningMessage("Favor de Agregar Archivos de Dictamen");
        return;
    }

    itemAIR.Estatus = 0;
    var param = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/GuardarDictamenFinal",
        data: "{ item:" + JSON.stringify(itemAIR) + ", token:" + JSON.stringify(tokenFileDF) + ", listFilesDF:" + JSON.stringify(listFilesDF) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }
            successMessage();
            $("#btnUploadFileDF").prop("disabled", true);
            $("#fileUploadDF").prop("disabled", true);
            $("#btnAutorizarDF").prop("disabled", true);
            $(".pointerCursorDF").removeClass("glyphicon glyphicon-remove");

            $("#btnUploadFileDP").hide();
            $("#fileUploadDP").prop("disabled", true);
            $("#btnGuardarDP").hide();
            $(".pointerCursorDP").removeClass("glyphicon glyphicon-remove");
        }
    };
    ajaxRequest(param);


});
$("#btnGuardarCP").on("click", function () {


    var _this = $(this)[0];
    var autorizado = false;

    if (!(listFilesCP.length > 0)) {
        warningMessage("Favor de Agregar Archivos de Dictamen");
        return;
    }

    itemAIR.Estatus = 0;
    var param = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/GuardarConstanciaPublicidad",
        data: "{ item:" + JSON.stringify(itemAIR) + ", token:" + JSON.stringify(tokenFileCP) + ", listFilesCP:" + JSON.stringify(listFilesCP) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }
            successMessage();

            $("#btnUploadFileCP").prop("disabled", true);
            $("#fileUploadCP").prop("disabled", true);
            $("#btnGuardarCP").prop("disabled", true);
            $(".pointerCursorCP").removeClass("glyphicon glyphicon-remove");
        }
    };
    ajaxRequest(param);


});

$("#btnRegresar").on("click", function () {
    window.location.replace("DictaminarList.aspx");
});

$("#btnGuardarFechaDOF").on("click", function () {

  
    var fechadof = $("#fechaPub").val().split("/");

    itemAIR.FechaPublicacionDOF = fechadof[1] + "/" + fechadof[0] + "/" + fechadof[2];
    if (itemAIR.FechaPublicacionDOF =="" || fechadof.length != 3) {
        warningMessage("Favor de Proporcionar una fecha de Publicación Correcta");
        $("#fechaPub").addClass("error");
        return;
    }

    
    itemAIR.Estatus = 0;
    var paramAIR = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/GuardarFechaDof",
        data: "{ item:" + JSON.stringify(itemAIR) + " }",
        method: function (data2) {

            if (data2.Message != undefined && data2.Message.length > 0) {
                hideProcessing();
                errorMessage(data2.Message);
                return false;
            }

            hideProcessing();
            successMessage();
            $('.dtp').prop("disabled", true);
            $("#btnGuardarFechaDOF").prop("disabled", true);
        }
    };
    ajaxRequest(paramAIR);
});