var id = 0;
var fechaactual = new Date();
var anio = fechaactual.getFullYear();
var mes = fechaactual.getMonth()+1;
var dia = fechaactual.getDate();
var fechafolio = "";
var fechaf = "";
var tokenFile;
var tokenFileUbicacion;
var listFiles = [];
var itemAIR = [];


$(document).ready(function () {

    showProcessing("Cargando...");

    if (dia.toString().length == 1)
    {
        dia = "0"+dia.toString();
    }

    if (mes.toString().length == 1) {
        mes = "0" + mes.toString();
    }

    fechaf = dia.toString() + mes.toString() + anio.toString();

    tokenFile = Math.floor(Math.random() * (999999 - 10000)) + 10000;


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

    if((id === undefined)) {
        id = 0;
    }

    if (id != 0) {
      
        var param2 = {
            type: "GET",
            url: "Handlers/AnteproyectoHandler.ashx",
            data: { method: "ObtenerAnteproyecto", args: { id: id } },
            method: function (data2) {

                var clase = "pointerCursor glyphicon glyphicon-remove";
                if (data2.Anteproyecto.Autorizado) {

                    $("textarea").prop("disabled", true);
                    $("input").prop("disabled", true);
                    $("#check1").prop("disabled", true);
                    $("#check2").prop("disabled", true);
                    $("#btnGuardar,#btnAutorizar,#btnUploadFile,#btnRegresar").hide();
                    clase = "";

                }

                $("#txtTitulo").val(data2.Anteproyecto.Titulo);
                $("#txtAutores").val(data2.Anteproyecto.Autores);
                $("#txtResumen").val(data2.Anteproyecto.Resumen);
                $("#txtAbstractTitulo").val(data2.Anteproyecto.TituloIngles);
                $("#txtAbstract").val(data2.Anteproyecto.ResumenIngles);
                $("#txtAgradecimientos").val(data2.Anteproyecto.Agradecimientos);
                $("#txtIntroduccion").val(data2.Anteproyecto.Introduccion);
                $("#txtObjEstudio").val(data2.Anteproyecto.ObjetoEstudio);
                $("#txtPlanteamiento").val(data2.Anteproyecto.PlanteamientoProblema);
                $("#txtJustificacion").val(data2.Anteproyecto.Justificacion);
                $("#txtInterrogantes").val(data2.Anteproyecto.Interrogantes);
                $("#txtPreguntaesp").val(data2.Anteproyecto.PreguntaEspecifica);
                $("#txtBibliografia").val(data2.Anteproyecto.Bibliografia);
                $("#txtConclusion").val(data2.Anteproyecto.Conclusion);





                var append = "";

                for (var i = 0; i < data2.Links2.length; i++) {
                    var file = data2.Links2[i];
                    append += "<li><i title='Eliminar' archivo='" + file.FileName + "' class='" + clase + "'></i> <a target='_blank' href='" + file.FilePath + "'>" + file.Nombre + "</a></li>";
                    listFiles.push([file.FileName, file.Nombre]);
                }

                $(".files-list").append(append);
               
            }
        }
        ajaxRequest(param2);
    }
    hideProcessing();



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

$("#btnGuardar , #btnAutorizar").on("click", function () {


    var _this = $(this)[0];
    var autorizado = false;

    if (_this.id == "btnAutorizar") {
       
        autorizado = true;

        if (!$(".formsave").valid()) {
            warningMessage("Información incompleta");
            return;
        }
    }



 

    var Titulo                = $("#txtTitulo").val();
    var Autores               = $("#txtAutores").val();
    var Resumen               = $("#txtResumen").val();
    var Agradecimientos       = $("#txtAgradecimientos").val();
    var Introduccion          = $("#txtIntroduccion").val();
    var ObjetoEstudio         = $("#txtObjEstudio").val();
    var PlanteamientoProblema = $("#txtPlanteamiento").val();
    var Justificacion         = $("#txtJustificacion").val();
    var Interrogantes         = $("#txtInterrogantes").val();
    var PreguntaEspecifica    = $("#txtPreguntaesp").val();
    var Bibliografia          = $("#txtBibliografia").val();
    var Conclusion            = $("#txtConclusion").val();


    var formcontrol = 0;
    $(".form-control").each(function () {
        var _this = $(this)[0];
        if ($(_this).val() == "") {
            formcontrol++;

        }

    });

    if (formcontrol == 10) {
        warningMessage("Favor de Guardar el Titulo");
        return;
    }

    if (Titulo.trim() != "") {

        Titulo = Titulo.trim();
        fechafolio = fechaf + Titulo[0].toUpperCase() + Titulo[Titulo.length - 1].toUpperCase() + "-";

    } else {

        warningMessage("Favor de Guardar el Titulo");
        return;

    }





    var item = {
        codigo : id,
        Titulo,
        Autores,
        Resumen,
        Agradecimientos,
        Introduccion,
        ObjetoEstudio,
        PlanteamientoProblema,
        Justificacion,
        Interrogantes,
        PreguntaEspecifica,
        Bibliografia,
        Conclusion,
        Autorizado: autorizado,
        Folio : fechafolio
    };


    showProcessing("Guardando...");

    var param = {
        type: "POST",
        async: false,
        url: "AnteproyectoEdit.aspx/Guardar",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }
            successMessage();
                LimpiarControles(); setTimeout(function () {
                    window.location.replace("AnteproyectoList.aspx");
                }, 2000)
           
        }
    };
    ajaxRequest(param);
    hideProcessing();
   

});

$("#btnRegresar").on("click", function () {
    window.history.back();
});

$("#btnLimpiar").on("click", function () {
    LimpiarControles();
});


function LimpiarControles() {
    $('textarea').val('');
    $("li").parent().remove();
    $(".form-control.error").removeClass("error");
    $("#fileUpload").val("");
    $(".message.error").css("display", "none");
    id = 0;
}



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
    showProcessing("Cargando...");
    for (var i = 0; i < files.length; i++) {

        for (var j = 0; j < listFiles.length; j++) {

            if (files[i].name == listFiles[j][0]) {
                errorMessage("El archivo ya se encuentra en la lista");
                $("#fileUpload").val("");
                hideProcessing();
                return false;
            }
        }


        var data = new FormData();

        data.append("token", tokenFile);

        var maxSize = parseInt(fileUpload.attr('max-size'), 10),
        size = files[0].size;

        if (size > maxSize) {
            hideProcessing();
            $("#fileUpload").val("");
            errorMessage("El archivo no debe ser mayor a 10 mb");
            return false;
        }

        data.append("UploadedPdf", files[0]);

        $.ajax(
        {
            url: "handlers/fileupload.ashx",
            type: 'POST',
            complete: function (data) {

                if (data.length > 0) {
                    errorMessage(data);
                    return false;
                }

                $(".files-list").append("<li><i title='Eliminar' archivo='" + files[0].name + "' class='pointerCursor glyphicon glyphicon-remove'></i> " + files[0].name.toUpperCase() + "</li>");
                listFiles.push([Nombre = files[0].name, Consecutivo = 0]);
                $("#fileUpload").val("");
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