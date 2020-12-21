var id = 0;
var idmir = 0;
var fechaactual = new Date
var anio = fechaactual.getFullYear
var mes = fechaactual.getMonth() + 1;
var dia = fechaactual.getDate
var minuto = fechaactual.getMinutes
var fechafolio = "";
var tokenFile;
var tokenFileUbicacion;
var listFiles = [];
var itemAIR = [];
itemAIR.Codigo = 0;
var codigoActualizacion = 0;
var combo17 = "";
var PropuestaRegulacion = [];
var tipoaccion = [];
var pass = true;

$(document).ready(function () {

    showProcessing("Cargando..");
    $("select").select2();


        $("#OpcionCalculadora").show();
        $("<div>", { 'class': 'row' }).append(
            $('<div>', { 'class': 'col-lg-12' }).append(
                $('<textarea>', {
                    'class': 'form-control  resumen ', 'id': 'comentarioOrden',
                    'name': 'comentarioOrden', 'rows': '4', 'placeholder': 'Por favor Argumente Su Elección'
                }))).appendTo('#formOrden');

        $("#comentarioOrden").hide();
    

    if (dia.toString().length == 1) {
        dia = "0" + dia.toString
    }

    if (mes.toString().length == 1) {
        mes = "0" + mes.toString
    }



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
        ignore: ":hidden:not(.cboAccion)"


    });

    id = GetURLParameter("id");
    idmir = GetURLParameter("mir");
    pass = GetURLParameter("pass") == 1?false:true;

    if ((idmir === undefined)) {
        idmir = 0;
    }


    if (idmir != 0) {

        var param2 = {
            type: "GET",
            url: "Handlers/ActualizacionPeriodicaHandler.ashx",
            data: { method: "ObtenerRespuestasActualizacionId", args: { id: idmir } },
            method: function (data2) {

                var clase = "pointerCursor glyphicon glyphicon-remove";


                var estatus = "";
                var usuarioactual = 0;
                var actualizado = false;
                $.ajax({
                    type: "GET",
                    async: false,
                    url: "Handlers/AIRHandler.ashx",
                    data: { method: "ObtenerMirporID", args: { id: idmir } },
                    complete: function (data2) {


                        //obtener padre
                        var padre = [];
                        $.ajax({
                            type: "GET",
                            async: false,
                            url: "Handlers/AIRHandler.ashx",
                            data: { method: "ObtenerMirporID", args: { id: data2.responseJSON.AIRpadre } },
                            complete: function (datapadre) {

                                padre = datapadre.responseJSON;
                            }
                        });

                        estatus = data2.responseJSON.Estatus;
                        usuarioactual = data2.responseJSON.UsuarioActual;
                        actualizado = data2.responseJSON.Actualizado == null ? false : data2.responseJSON.Actualizado;

                        
                        if ((padre.Codigo == 0) || (padre.TipoTramite == 3 && pass)) {
                            $("#anchorBackProject").prop("href", "OpcionCalculadora.aspx?id="+ data2.responseJSON.CodigoAnteproyecto + "");

                        } else {
                            if (!pass) {

                                $("#anchorBackProject").prop("href", "ActualizacionPeriodicaEdit.aspx?mir=" + idmir+"");

                            } else {

                                $("#anchorBackProject").prop("href", "ActualizacionPeriodicaEdit.aspx?mir=" + data2.responseJSON.AIRpadre + "");
                            }
                           
                        }
                    }
                });

                if (data2.respuestas.Codigo != 0 && (estatus != "PROCESO CONCLUIDO" || usuarioactual == 1)&& pass) {

                    if (data2.respuestas.Autorizado ) {

                        $("textarea").prop("disabled", true);
                        $("input").prop("disabled", true);
                        $("#check1").prop("disabled", true);
                        $("#check2").prop("disabled", true);
                        $("#btnGuardar,#btnAutorizar,#btnUploadFile").hide();
                        $(".pt-3-half").prop("contenteditable", false);
                        $("#textareajustificacion").prop("disabled", true);
                        clase = "";

                    }

                    codigoActualizacion = data2.respuestas.Codigo;

                    $("#textActualizacionq1").val(data2.respuestas.pregunta1);
                    $("#textActualizacionq2").val(data2.respuestas.pregunta2);
                    $("#textActualizacionq3").val(data2.respuestas.pregunta3);
                    $("#tdAlternativas1").html(data2.respuestas.pregunta4);
                    var pregunta5 = $("#tdAlternativas2").html(data2.respuestas.pregunta5);
                    var pregunta6 = $("#tdAlternativas3").html(data2.respuestas.pregunta6);
                    var pregunta7 = $("#tdAlternativas4").html(data2.respuestas.pregunta7);
                    var pregunta8 = $("#tdAlternativas5").html(data2.respuestas.pregunta8);
                    var pregunta9 = $("#tdAlternativas6").html(data2.respuestas.pregunta9);
                    var pregunta10 = $("#textActualizacionq4").val(data2.respuestas.pregunta10);
                    if (data2.respuestas.pregunta11 != null) {
                        if (data2.respuestas.pregunta11) {
                            $("#check1")[0].checked = true;
                        } else {
                            $("#check2")[0].checked = true;
                        }
                    };
                    var pregunta12 = $("#textActualizacionq6").val(data2.respuestas.pregunta12);
                    var pregunta13 = $("#textActualizacionq7").val(data2.respuestas.pregunta13);
                    var pregunta14 = $("#textActualizacionq8").val(data2.respuestas.pregunta14);
                    var pregunta15 = $("#tdCostos1").html(data2.respuestas.pregunta15);
                    var pregunta16 = $("#tdCostos2").html(data2.respuestas.pregunta16);
                    var pregunta17 = $("#tdCostos3").html(data2.respuestas.pregunta17);
                    var pregunta18 = $("#tdCostos4").html(data2.respuestas.pregunta18);
                    var pregunta19 = $("#tdCostos5").html(data2.respuestas.pregunta19);
                    var pregunta20 = $("#tdCostos6").html(data2.respuestas.pregunta20);
                    var pregunta21 = $("#tdCostos7").html(data2.respuestas.pregunta21);
                    var pregunta22 = $("#tdCostos8").html(data2.respuestas.pregunta22);
                    var pregunta23 = $("#tdCostos9").html(data2.respuestas.pregunta23);
                    var pregunta24 = $("#tdCostos10").html(data2.respuestas.pregunta24);
                    var pregunta25 = $("#tdCostos11").html(data2.respuestas.pregunta25);
                    var pregunta26 = $("#tdCostos12").html(data2.respuestas.pregunta26);
                    var pregunta27 = $("#tdCostos13").html(data2.respuestas.pregunta27);
                    var pregunta28 = $("#tdCostos14").html(data2.respuestas.pregunta28);
                    var pregunta29 = $("#tdCostos15").html(data2.respuestas.pregunta29);
                    var pregunta30 = $("#tdCostos16").html(data2.respuestas.pregunta30);
                    var pregunta31 = $("#textActualizacionq9").val(data2.respuestas.pregunta31);
                    var pregunta32 = $("#textActualizacionq10").val(data2.respuestas.pregunta32);
                    var pregunta33 = $("#textActualizacionq11").val(data2.respuestas.pregunta33);
                    var pregunta34 = $("#tdConsulta1").html(data2.respuestas.pregunta34);
                    var pregunta35 = $("#tdConsulta2").html(data2.respuestas.pregunta35);
                    var pregunta36 = $("#tdConsulta3").html(data2.respuestas.pregunta36);
                    var pregunta37 = $("#tdConsulta4").html(data2.respuestas.pregunta37);
                    var pregunta38 = $("#tdConsulta5").html(data2.respuestas.pregunta38);
                    var pregunta39 = $("#tdConsulta6").html(data2.respuestas.pregunta39);
                    var pregunta40 = $("#tdConsulta7").html(data2.respuestas.pregunta40);
                    var pregunta41 = $("#tdConsulta8").html(data2.respuestas.pregunta41);
                    var pregunta42 = $("#tdConsulta9").html(data2.respuestas.pregunta42);
                    var pregunta43 = $("#tdConsulta10").html(data2.respuestas.pregunta43);
                    var pregunta44 = $("#tdConsulta11").html(data2.respuestas.pregunta44);
                    var pregunta45 = $("#tdConsulta12").html(data2.respuestas.pregunta45);
                    var pregunta46 = $("#tdConsulta13").html(data2.respuestas.pregunta46);
                    var pregunta47 = $("#tdConsulta14").html(data2.respuestas.pregunta47);
                    var pregunta48 = $("#tdConsulta15").html(data2.respuestas.pregunta48);
                    var pregunta49 = $("#tdConsulta16").html(data2.respuestas.pregunta49);
                    var pregunta50 = $("#textActualizacionq12").val(data2.respuestas.pregunta50);




                    var append = "";

                    for (var i = 0; i < data2.Links2.length; i++) {
                        var file = data2.Links2[i];
                        append += "<li><i title='Eliminar' archivo='" + file.FileName + "' class='" + clase + "'></i> <a target='_blank' href='" + file.FilePath + "'>" + file.Nombre + "</a></li>";
                        listFiles.push([file.FileName, file.Nombre]);
                    }

                    $(".files-list").append(append);



                    var paramAIRget = {
                        type: "GET",
                        url: "Handlers/AIRHandler.ashx",
                        data: { method: "ObtenerMirporID", args: { id: data2.respuestas.CodigoAir } },
                        method: function (data2){

                            itemAIR = data2;

                            var paramComent = {
                                type: "GET",
                                url: "Handlers/ComentarioHandler.ashx",
                                data: { method: "ObtenerComentario", args: { id: itemAIR.CodigoAnteproyecto } },
                                method: function (datan) {

                                    if (datan.Items.length != 0) {


                                        switch (itemAIR.Estatus) {


                                            case "SOLICITA MAS INFORMACIÓN":

                                                $("#txtComents").val(datan.Items[datan.Items.length - 1].Comentario);
                                                $("#divComents").show();
                                                break;



                                            case "RECHAZADO":

                                                $("#txtComents").val(datan.Items[datan.Items.length - 1].Comentario);
                                                $("#divComents").show();

                                                break;



                                            default:
                                                break;

                                        }

                                    }

                                }
                            };
                            ajaxRequest(paramComent);

                            var fechainicio = new Date(itemAIR.CicloVidaAir.fechaInicioProceso);
                            var anio = fechainicio.getFullYear();
                            var mes = fechainicio.getMonth() + 1;
                            var dia = fechainicio.getDate();
                            var fechaf = "";

                            if (dia.toString().length == 1) {
                                dia = "0" + dia.toString();
                            }

                            if (mes.toString().length == 1) {
                                mes = "0" + mes.toString();
                            }
                            fechaf = dia + "/" + mes + "/" + anio.toString();



                            $("#lblfecinicio").html("Fecha Inicio De Proceso: " + fechaf);
                            $("#lbllimitedias").html("Límite de Días: " + itemAIR.CicloVidaAir.diaslimite);
                            $("#lblDiastrans").html("Días Transcurridos: " + itemAIR.CicloVidaAir.diastranscurridos);


                            $(".fechaproceso").show();

                            var param = {
                                type: "GET",
                                url: "Handlers/OpcionCalculadoraHandler.ashx",
                                data: { method: "ObtenerCombos" },
                                method: function (data) {

                                    var cboRegulacion = $("#cboRegulacion");

                                    LoadSelects(cboRegulacion, data.Regulacion, true);

                                    cboRegulacion.select2("val", "");

                                    var cboOrdenamiento = $("#cboOrdenamiento");

                                    LoadSelects(cboOrdenamiento, data.Ordenamiento, true);

                                    cboOrdenamiento.select2("val", "");

                                    var cboAir = $("#cboAir");

                                    
                                    LoadSelects(cboAir, data.TipoAIR, true);

                                    cboAir.select2("val","");
                                    


                                    $("#OpcionCalculadora").show();
                                    $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                    $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                    $("#cboAir").select2("val", 4).prop("disabled", true);

                                    if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                        $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                    }

                                }
                            };
                            ajaxRequest(param);

                            if(itemAIR.publicidad != null){

                                if (itemAIR.publicidad){
                                    $("#checkConstanciaPublicidad")[0].checked = true;
                                } else {
                                    $("#check62")[0].checked = true;
                                }

                            };

                            if(itemAIR.ConsultaDependencia != null){

                                if (itemAIR.ConsultaDependencia) {
                                    $("#textareajustificacion").val(itemAIR.JustificaPublicacion);
                                    $("#areajustificacion").show();
                                    $("#checkConsultaPublica")[0].checked = true;
                                } else {
                                    $("#check52")[0].checked = true;
                                }

                            };



                            switch (itemAIR.UsuarioActual) {
                                case 1:
                                    break;
                                case 2:
                                    $("#btnAceptar").show();
                                    $("#btnInfo").show();
                                    $("#btnRechazar").show();
                                    $("#ComentarioRechazo").prop("disabled", false);
                                    break;

                                default:

                            }

                            

                        }
                    }
                    ajaxRequest(paramAIRget);

                } else {

                    var paramAIRget = {
                        type: "GET",
                        url: "Handlers/AIRHandler.ashx",
                        data: { method: "ObtenerMirporID", args: { id: idmir } },
                        method: function (data2) {

                            itemAIR = data2;


                            var fechainicio = new Date();
                            var anio = fechainicio.getFullYear();
                            var mes = fechainicio.getMonth() + 1;
                            var dia = fechainicio.getDate();
                            var fechaf = "";

                            if (dia.toString().length == 1) {
                                dia = "0" + dia.toString();
                            }

                            if (mes.toString().length == 1) {
                                mes = "0" + mes.toString();
                            }
                            fechaf = dia + "/" + mes + "/" + anio.toString();



                            $("#lblfecinicio").html("Fecha Inicio De Proceso: " + fechaf);
                            $("#lbllimitedias").html("Límite de Días: " +0);
                            $("#lblDiastrans").html("Días Transcurridos: " + 0);


                            $(".fechaproceso").show();

                            var param = {
                                type: "GET",
                                url: "Handlers/OpcionCalculadoraHandler.ashx",
                                data: { method: "ObtenerCombos" },
                                method: function (data) {

                                    var cboRegulacion = $("#cboRegulacion");

                                    LoadSelects(cboRegulacion, data.Regulacion, true);

                                    cboRegulacion.select2("val", "");

                                    var cboOrdenamiento = $("#cboOrdenamiento");

                                    LoadSelects(cboOrdenamiento, data.Ordenamiento, true);

                                    cboOrdenamiento.select2("val", "");

                                    var cboAir = $("#cboAir");


                                    LoadSelects(cboAir, data.TipoAIR, true);

                                    cboAir.select2("val", "");



                                    $("#OpcionCalculadora").show();
                                    $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                    $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                    $("#cboAir").select2("val", 4).prop("disabled", true);

                                    if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                        $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                    }

                                }
                            };
                            ajaxRequest(param);
                            itemAIR.Codigo = 0;
                        }
                    }
                    ajaxRequest(paramAIRget);
                }



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

$('#checkConsultaPublica').on('click', function () {

    $("#areajustificacion").show();
    $("#textareajustificacion").show();

});

$("#check52").on('click', function () {

    $("#areajustificacion").hide();
    $("#textareajustificacion").hide();

});


$("#btnGuardar").on("click", function () {



    showProcessing("Guardando..");
    var Autorizado = false;
    var CodigoAir = idmir;
    var pregunta1 = $("#textActualizacionq1").val();
    var pregunta2 = $("#textActualizacionq2").val();
    var pregunta3 = $("#textActualizacionq3").val();
    var pregunta4 = $("#tdAlternativas1").html();
    var pregunta5 = $("#tdAlternativas2").html();
    var pregunta6 = $("#tdAlternativas3").html();
    var pregunta7 = $("#tdAlternativas4").html();
    var pregunta8 = $("#tdAlternativas5").html();
    var pregunta9 = $("#tdAlternativas6").html();
    var pregunta10 = $("#textActualizacionq4").val();
    var pregunta11 = null;
    if ($("#check1")[0].checked) {
        pregunta11 = true;
    }
    if ($("#check2")[0].checked) {
        pregunta11 = false;
    }
    var pregunta12 = $("#textActualizacionq6").val();
    var pregunta13 = $("#textActualizacionq7").val();
    var pregunta14 = $("#textActualizacionq8").val();
    var pregunta15 = $("#tdCostos1").html();
    var pregunta16 = $("#tdCostos2").html();
    var pregunta17 = $("#tdCostos3").html();
    var pregunta18 = $("#tdCostos4").html();
    var pregunta19 = $("#tdCostos5").html();
    var pregunta20 = $("#tdCostos6").html();
    var pregunta21 = $("#tdCostos7").html();
    var pregunta22 = $("#tdCostos8").html();
    var pregunta23 = $("#tdCostos9").html();
    var pregunta24 = $("#tdCostos10").html();
    var pregunta25 = $("#tdCostos11").html();
    var pregunta26 = $("#tdCostos12").html();
    var pregunta27 = $("#tdCostos13").html();
    var pregunta28 = $("#tdCostos14").html();
    var pregunta29 = $("#tdCostos15").html();
    var pregunta30 = $("#tdCostos16").html();
    var pregunta31 = $("#textActualizacionq9").val();
    var pregunta32 = $("#textActualizacionq10").val();
    var pregunta33 = $("#textActualizacionq11").val();
    var pregunta34 = $("#tdConsulta1").html();
    var pregunta35 = $("#tdConsulta2").html();
    var pregunta36 = $("#tdConsulta3").html();
    var pregunta37 = $("#tdConsulta4").html();
    var pregunta38 = $("#tdConsulta5").html();
    var pregunta39 = $("#tdConsulta6").html();
    var pregunta40 = $("#tdConsulta7").html();
    var pregunta41 = $("#tdConsulta8").html();
    var pregunta42 = $("#tdConsulta9").html();
    var pregunta43 = $("#tdConsulta10").html();
    var pregunta44 = $("#tdConsulta11").html();
    var pregunta45 = $("#tdConsulta12").html();
    var pregunta46 = $("#tdConsulta13").html();
    var pregunta47 = $("#tdConsulta14").html();
    var pregunta48= $("#tdConsulta15").html();
    var pregunta49 = $("#tdConsulta16").html();
    var pregunta50 = $("#textActualizacionq12").val();


    var item = {
        codigo: codigoActualizacion,
        Autorizado: Autorizado,
        CodigoAir: CodigoAir,
        pregunta1: pregunta1,
        pregunta2: pregunta2,
        pregunta3: pregunta3,
        pregunta4: pregunta4,
        pregunta5: pregunta5,
        pregunta6: pregunta6,
        pregunta7: pregunta7,
        pregunta8: pregunta8,
        pregunta9: pregunta9,
        pregunta10: pregunta10,
        pregunta11: pregunta11,
        pregunta12: pregunta12,
        pregunta13: pregunta13,
        pregunta14: pregunta14,
        pregunta15: pregunta15,
        pregunta16: pregunta16,
        pregunta17: pregunta17,
        pregunta18: pregunta18,
        pregunta19: pregunta19,
        pregunta20: pregunta20,
        pregunta21: pregunta21,
        pregunta22: pregunta22,
        pregunta23: pregunta23,
        pregunta24: pregunta24,
        pregunta25: pregunta25,
        pregunta26: pregunta26,
        pregunta27: pregunta27,
        pregunta28: pregunta28,
        pregunta29: pregunta29,
        pregunta30: pregunta30,
        pregunta31: pregunta31,
        pregunta32: pregunta32,
        pregunta33: pregunta33,
        pregunta34: pregunta34,
        pregunta35: pregunta35,
        pregunta36: pregunta36,
        pregunta37: pregunta37,
        pregunta38: pregunta38,
        pregunta39: pregunta39,
        pregunta40: pregunta40,
        pregunta41: pregunta41,
        pregunta42: pregunta42,
        pregunta43: pregunta43,
        pregunta44: pregunta44,
        pregunta45: pregunta45,
        pregunta46: pregunta46,
        pregunta47: pregunta47,
        pregunta48: pregunta48,
        pregunta49: pregunta49,
        pregunta50: pregunta50,
 
    };

    console.log(JSON.stringify(item));


    var param = {
        type: "POST",
        async: false,
        url: "ActualizacionPeriodicaEdit.aspx/Guardar",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing()
                errorMessage(data.Message);
                return false;
            }



            if (itemAIR.Codigo == 0) {

                $.ajax({
                    type: "GET",
                    async: false,
                    url: "Handlers/AIRHandler.ashx",
                    data: { method: "ObtenerMirporID", args: { id: idmir } },
                    complete: function (data3) {

                        itemAIR = data3.responseJSON;
                        itemAIR.Codigo = 0;
                        itemAIR.TipoTramite = 4;
                        itemAIR.CodigoTramite = data.idactualizacion;
                        itemAIR.Estatus = 0;
                        itemAIR.UsuarioActual = 3;
                        itemAIR.ConsultaPublica = false;
                        itemAIR.ConsultaDependencia = false;
                        itemAIR.publicidad = false;
                        itemAIR.fechaDictamen = null;
                        itemAIR.FechaDictaminar = null;
                        itemAIR.FechaCreacion = null;
                        itemAIR.FechaValidacion = null;
                        itemAIR.DiasCreacionTranscurridos = 0;
                        itemAIR.DiasValidacionTranscurridos = 0;
                        itemAIR.DiasDictamenTranscurridos = 0;
                        itemAIR.DiasCuestionarioTranscurridos = 0;
                        itemAIR.FechaPublicacionDOF = null;
                        itemAIR.AIRpadre = idmir;
                    },
                    unblockMessage: true
                });

            } else {
                itemAIR.Estatus = 0;
                itemAIR.UsuarioActual = 3;
            }

                   

                    if ($("#checkConsultaPublica")[0].checked) {
                        itemAIR.ConsultaDependencia = true;
                        itemAIR.JustificaPublicacion = $("#textareajustificacion").val();
                    }

                    if ($("#check52")[0].checked) {
                        itemAIR.ConsultaDependencia = false;
                    }

                    if ($("#check52")[0].checked == false && $("#checkConsultaPublica")[0].checked == false) {
                        itemAIR.ConsultaDependencia = null;
                    }

                    if ($("#checkConstanciaPublicidad")[0].checked) {
                        itemAIR.publicidad = true;
                    }
                    if ($("#check62")[0].checked) {
                        itemAIR.publicidad = false;
                    }
                    if ($("#check62")[0].checked == false && $("#checkConstanciaPublicidad")[0].checked == false) {
                        itemAIR.publicidad = null;
                    }



                    var paramAIR = {
                        type: "POST",
                        async: false,
                        url: "AIRList.aspx/AIRProceso",
                        data: "{ item:" + JSON.stringify(itemAIR) + " }",
                        method: function (data2) {

                            if (data2.Message != undefined && data2.Message.length > 0) {
                                hideProcessing()
                                errorMessage(data2.Message);
                                return false;
                            }


                            var param = {
                                type: "POST",
                                url: "ActualizacionPeriodicaEdit.aspx/ActualizarAirActualizacionPeriodica",
                                data: "{ item:" + JSON.stringify(itemAIR) + "}",
                                method: function (data) {

                                    if (data.Message != undefined && data.Message.length > 0) {
                                        hideProcessing()
                                        errorMessage(data.Message);
                                        return false;
                                    }

                                    hideProcessing();
                                    successMessage("Cambios Guardados Correctamente");
                                    setTimeout(function () {
                                        window.history.back();
                                    }, 2000);
                                }
                            };
                            ajaxRequest(param);

                        }
                    };
                    ajaxRequest(paramAIR);

        }
    };
    ajaxRequest(param);


});





$("#btnAutorizar").on("click", function () {

        var _this = $(this)[0];
        var autorizado = false;
        var rb1 = $(".rb1");
        var rb2 = $(".rb2");
        var rb3 = $(".rb3");
        var contrb1 = 0;
        var contrb2 = 0;
        var contrb3 = 0;


        if (_this.id == "btnAutorizar") {

            autorizado = true;
        }


        var contd = 0;
        var tdempty = $(".pt-3-half");

        if (_this.id == "btnAutorizar") {

            if (!$(".formsave").valid()) {
                warningMessage("Información incompleta");
                return;
            }



            if ($('#textareajustificacion').is(':visible')) {

                if ($("#textareajustificacion").val().trim() == "") {
                    warningMessage("Información incompleta");
                    $("#textareajustificacion").focus().addClass("error");
                    return;
                }
            }

            $(tdempty).each(function () {
                var _this = $(this)[0];
                if (_this.innerHTML == "") {
                    contd++;

                    _this.focus();

                }

            });



            if (contd > 0) {
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

            $(rb3).each(function () {
                var _this = $(this)[0];

                if (!_this.checked) {
                    contrb3++;
                    _this.focus();

                }

            });

            if (contrb3 > 1) {
                warningMessage("Información incompleta");
                $("#idConstancia").addClass('error');
                return;
            }

        }

    showProcessing("Guardando..");
    var Autorizado = autorizado;
    var CodigoAir = idmir;
    var pregunta1 = $("#textActualizacionq1").val();
    var pregunta2 = $("#textActualizacionq2").val();
    var pregunta3 = $("#textActualizacionq3").val();
    var pregunta4 = $("#tdAlternativas1").html();
    var pregunta5 = $("#tdAlternativas2").html();
    var pregunta6 = $("#tdAlternativas3").html();
    var pregunta7 = $("#tdAlternativas4").html();
    var pregunta8 = $("#tdAlternativas5").html();
    var pregunta9 = $("#tdAlternativas6").html();
    var pregunta10 = $("#textActualizacionq4").val();
    var pregunta11 = null;
    if ($("#check1")[0].checked) {
        pregunta11 = true;
    }
    if ($("#check2")[0].checked) {
        pregunta11 = false;
    }
    var pregunta12 = $("#textActualizacionq6").val();
    var pregunta13 = $("#textActualizacionq7").val();
    var pregunta14 = $("#textActualizacionq8").val();
    var pregunta15 = $("#tdCostos1").html();
    var pregunta16 = $("#tdCostos2").html();
    var pregunta17 = $("#tdCostos3").html();
    var pregunta18 = $("#tdCostos4").html();
    var pregunta19 = $("#tdCostos5").html();
    var pregunta20 = $("#tdCostos6").html();
    var pregunta21 = $("#tdCostos7").html();
    var pregunta22 = $("#tdCostos8").html();
    var pregunta23 = $("#tdCostos9").html();
    var pregunta24 = $("#tdCostos10").html();
    var pregunta25 = $("#tdCostos11").html();
    var pregunta26 = $("#tdCostos12").html();
    var pregunta27 = $("#tdCostos13").html();
    var pregunta28 = $("#tdCostos14").html();
    var pregunta29 = $("#tdCostos15").html();
    var pregunta30 = $("#tdCostos16").html();
    var pregunta31 = $("#textActualizacionq9").val();
    var pregunta32 = $("#textActualizacionq10").val();
    var pregunta33 = $("#textActualizacionq11").val();
    var pregunta34 = $("#tdConsulta1").html();
    var pregunta35 = $("#tdConsulta2").html();
    var pregunta36 = $("#tdConsulta3").html();
    var pregunta37 = $("#tdConsulta4").html();
    var pregunta38 = $("#tdConsulta5").html();
    var pregunta39 = $("#tdConsulta6").html();
    var pregunta40 = $("#tdConsulta7").html();
    var pregunta41 = $("#tdConsulta8").html();
    var pregunta42 = $("#tdConsulta9").html();
    var pregunta43 = $("#tdConsulta10").html();
    var pregunta44 = $("#tdConsulta11").html();
    var pregunta45 = $("#tdConsulta12").html();
    var pregunta46 = $("#tdConsulta13").html();
    var pregunta47 = $("#tdConsulta14").html();
    var pregunta48 = $("#tdConsulta15").html();
    var pregunta49 = $("#tdConsulta16").html();
    var pregunta50 = $("#textActualizacionq12").val();


    var item = {
        codigo: codigoActualizacion,
        Autorizado: Autorizado,
        CodigoAir: CodigoAir,
        pregunta1: pregunta1,
        pregunta2: pregunta2,
        pregunta3: pregunta3,
        pregunta4: pregunta4,
        pregunta5: pregunta5,
        pregunta6: pregunta6,
        pregunta7: pregunta7,
        pregunta8: pregunta8,
        pregunta9: pregunta9,
        pregunta10: pregunta10,
        pregunta11: pregunta11,
        pregunta12: pregunta12,
        pregunta13: pregunta13,
        pregunta14: pregunta14,
        pregunta15: pregunta15,
        pregunta16: pregunta16,
        pregunta17: pregunta17,
        pregunta18: pregunta18,
        pregunta19: pregunta19,
        pregunta20: pregunta20,
        pregunta21: pregunta21,
        pregunta22: pregunta22,
        pregunta23: pregunta23,
        pregunta24: pregunta24,
        pregunta25: pregunta25,
        pregunta26: pregunta26,
        pregunta27: pregunta27,
        pregunta28: pregunta28,
        pregunta29: pregunta29,
        pregunta30: pregunta30,
        pregunta31: pregunta31,
        pregunta32: pregunta32,
        pregunta33: pregunta33,
        pregunta34: pregunta34,
        pregunta35: pregunta35,
        pregunta36: pregunta36,
        pregunta37: pregunta37,
        pregunta38: pregunta38,
        pregunta39: pregunta39,
        pregunta40: pregunta40,
        pregunta41: pregunta41,
        pregunta42: pregunta42,
        pregunta43: pregunta43,
        pregunta44: pregunta44,
        pregunta45: pregunta45,
        pregunta46: pregunta46,
        pregunta47: pregunta47,
        pregunta48: pregunta48,
        pregunta49: pregunta49,
        pregunta50: pregunta50,

    };

    console.log(JSON.stringify(item));


    var param = {
        type: "POST",
        async: false,
        url: "ActualizacionPeriodicaEdit.aspx/Guardar",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing()
                errorMessage(data.Message);
                return false;
            }



            if (itemAIR.Codigo == 0) {

                $.ajax({
                    type: "GET",
                    async: false,
                    url: "Handlers/AIRHandler.ashx",
                    data: { method: "ObtenerMirporID", args: { id: idmir } },
                    complete: function (data3) {

                        itemAIR = data3.responseJSON;
                        itemAIR.Codigo = 0;
                        itemAIR.TipoTramite = 4;
                        itemAIR.CodigoTramite = data.idactualizacion;
                        itemAIR.Estatus = 0;
                        itemAIR.UsuarioActual = 2;
                        itemAIR.ConsultaPublica = false;
                        itemAIR.ConsultaDependencia = false;
                        itemAIR.publicidad = false;
                        itemAIR.fechaDictamen = null;
                        itemAIR.FechaDictaminar = null;
                        itemAIR.FechaCreacion = null;
                        itemAIR.FechaValidacion = null;
                        itemAIR.DiasCreacionTranscurridos = 0;
                        itemAIR.DiasValidacionTranscurridos = 0;
                        itemAIR.DiasDictamenTranscurridos = 0;
                        itemAIR.DiasCuestionarioTranscurridos = 0;
                        itemAIR.FechaPublicacionDOF = null;
                        itemAIR.AIRpadre = idmir;
                    },
                    unblockMessage: true
                });

            } else {
                itemAIR.Estatus = 0;
                itemAIR.UsuarioActual = 2;
            }



            if ($("#checkConsultaPublica")[0].checked) {
                itemAIR.ConsultaDependencia = true;
                itemAIR.JustificaPublicacion = $("#textareajustificacion").val();
            }

            if ($("#check52")[0].checked) {
                itemAIR.ConsultaDependencia = false;
            }

            if ($("#check52")[0].checked == false && $("#checkConsultaPublica")[0].checked == false) {
                itemAIR.ConsultaDependencia = null;
            }

            if ($("#checkConstanciaPublicidad")[0].checked) {
                itemAIR.publicidad = true;
            }
            if ($("#check62")[0].checked) {
                itemAIR.publicidad = false;
            }
            if ($("#check62")[0].checked == false && $("#checkConstanciaPublicidad")[0].checked == false) {
                itemAIR.publicidad = null;
            }

            var paramAIR = {
                type: "POST",
                async: false,
                url: "AIRList.aspx/AIRValidacion",
                data: "{ item:" + JSON.stringify(itemAIR) + " }",
                method: function (data2) {

                    if (data2.Message != undefined && data2.Message.length > 0) {
                        hideProcessing()
                        errorMessage(data2.Message);
                        return false;
                    }


                    var param = {
                        type: "POST",
                        url: "ActualizacionPeriodicaEdit.aspx/ActualizarAirActualizacionPeriodica",
                        data: "{ item:" + JSON.stringify(itemAIR) + "}",
                        method: function (data) {

                            if (data.Message != undefined && data.Message.length > 0) {
                                hideProcessing()
                                errorMessage(data.Message);
                                return false;
                            }

                            hideProcessing();
                            successMessage("Cambios Guardados Correctamente");
                            setTimeout(function () {
                                window.history.back();
                            }, 2000);
                        }
                    };
                    ajaxRequest(param);

                }
            };
            ajaxRequest(paramAIR);

        }
    };
    ajaxRequest(param);


});

$("#btnRegresar").on("click", function () {
    window.history.back();
});

$("#btnLimpiar").on("click", function () {
    LimpiarControles();
});


function LimpiarControles() {

    $("#textAltoImpactoq1").val("");
    $("#textAltoImpactoq2").val("");
    $("#textAltoImpactoq3").val("");
    $("#tdAlternativas1").html("");
    $("#tdAlternativas2").html("");
    $("#tdAlternativas3").html("");
    $("#tdAlternativas4").html("");
    $("#tdAlternativas5").html("");
    $("#tdAlternativas6").html("");
    $("#textAltoImpactoq11").val("");
    $("#textAltoImpactoq12").val("");
    $("#check1")[0].checked = false;
    $("#check2")[0].checked = false;
    $("#textAltoImpactoq14").val("");
    $("#textAltoImpactoq15").val("");
    $("#textAltoImpactoq16").val("");
    $("#tdDisposicones1").html("");
    //var cboAccion = $("#cboAltoImpactoq17");
    //cboAccion.select2("val", "");
    $("#tdDisposicones2").html("");
    $("#tdDisposicones3").html("");
    $("#tdDisposicones4").html("");
    $("#tdDisposicones5").html("");
    $("#tdDisposicones6").html("");
    $("#tdDisposicones7").html("");
    $("#tdDisposicones8").html("");
    $("#tdDisposicones9").html("");
    $("#tdDisposicones10").html("");
    $("#tdDisposicones11").html("");
    $("#tdDisposicones12").html("");
    $("#tdDisposicones13").html("");
    $("#tdDisposicones14").html("");
    $("#tdDisposicones15").html("");
    $("#tdDisposicones16").html("");
    $("#tdDisposicones17").html("");
    $("#tdDisposicones18").html("");
    $("#textAltoImpactoq18").val("");
    $("#textAltoImpactoq19").val("");
    $("#textAltoImpactoq20").val("");
    $("#tdCostos1").html("");
    $("#tdCostos2").html("");
    $("#tdCostos3").html("");
    $("#tdCostos4").html("");
    $("#tdCostos5").html("");
    $("#tdCostos6").html("");
    $("#tdCostos7").html("");
    $("#tdCostos8").html("");
    $("#tdCostos9").html("");
    $("#tdCostos10").html("");
    $("#tdCostos11").html("");
    $("#tdCostos12").html("");
    $("#tdCostos13").html("");
    $("#tdCostos14").html("");
    $("#tdCostos15").html("");
    $("#tdCostos16").html("");
    $("#textAltoImpactoq21").val("");
    $("#textAltoImpactoq22").val("");
    $("#textAltoImpactoq25").val("");
    $("#tdConsulta1").html("");
    $("#tdConsulta2").html("");
    $("#tdConsulta3").html("");
    $("#tdConsulta4").html("");
    $("#tdConsulta5").html("");
    $("#tdConsulta6").html("");
    $("#tdConsulta7").html("");
    $("#tdConsulta8").html("");
    $("#tdConsulta9").html("");
    $("#tdConsulta10").html("");
    $("#tdConsulta11").html("");
    $("#tdConsulta12").html("");
    $("#tdConsulta13").html("");
    $("#tdConsulta14").html("");
    $("#tdConsulta15").html("");
    $("#tdConsulta16").html("");
    $("#textAltoImpactoq26").val("");
    $("#tdRegPropuesta1").html("");
    $("#tdRegPropuesta2").html("");
    $("#tdRegPropuesta3").html("");
    $("#tdRegPropuesta4").html("");
    $("#tdRegPropuesta5").html("");
    $("#tdRegPropuesta6").html("");
    $("#tdRegPropuesta7").html("");
    $("#tdRegPropuesta8").html("");
    $("#tdRegPropuesta9").html("");
    $("#tdRegPropuesta10").html("");
    $("#tdRegPropuesta11").html("");
    $("li").parent().remove
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
    showProcessing("Cargando..");
    for (var i = 0; i < files.length; i++) {

        for (var j = 0; j < listFiles.length; j++) {

            if (files[i].name == listFiles[j][0]) {
                errorMessage("El archivo ya se encuentra en la lista");
                $("#fileUpload").val("");
                hideProcessing();
                return false;
            }
        }

        var data = new FormData

        data.append("token", tokenFile);

        var maxSize = parseInt(fileUpload.attr('max-size'), 10),
        size = files[i].size;

        if (size > maxSize) {
            hideProcessing()
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

                hideProcessing()
            },
            error: function (e) {
                hideProcessing()
                errorMessage("Ocurrió un error al subir el archivo, intente de nuevo");
            },
            data: data,
            cache: false,
            contentType: false,
            processData: false
        });
    }
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

    if ($("#ComentarioRechazo").val().trim() == "") {
        $('#modalRechazo').modal('hide');
        $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        $('.modal-backdrop').remove();//
        warningMessage("El comentario asignado no puede ser un comentario en blanco");
        return;
    };

    $('#modalRechazo').modal('hide');




    /*MODIFICACION DE ESTATUS DEL ANTEPROYECTO PARA PERMITIR MODIFICAR EL ANTEPROYECTO*/
    /*por el momento siempre es true, si se desea modificar, pasar la variable a false desde la clase de c#*/
    var item = {
        Codigo:codigoActualizacion,
        CodigoAir: itemAIR.Codigo,
        Autorizado: false,
    };
    var param = {
        type: "POST",
        async: false,
        url: "ActualizacionPeriodicaEdit.aspx/ActualizarEstatus",
        data: "{ item:" + JSON.stringify(item) + " }",
        method: function (data) {


            /*APARTADO ENVIO Y GUARDADO DE COMENTARIO CORRESPONDIENTE A ANTEPROYECTO*/
            comentarioUMR = $("#ComentarioRechazo").val();
            var itemComentario = {

                CodigoAIR: itemAIR.Codigo,
                Comentario: comentarioUMR,
                CodigoAnteproyecto: itemAIR.CodigoAnteproyecto,

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
    /*por el momento siempre es true, si se desea modificar, pasar la variable a false desde la clase de c#*/
    var item = {
        Codigo: codigoActualizacion,
        CodigoAir: itemAIR.Codigo,
        Autorizado: false,
    };
    var param = {
        type: "POST",
        async: false,
        url: "ActualizacionPeriodicaEdit.aspx/ActualizarEstatus",
        data: "{ item:" + JSON.stringify(item) + " }",
        method: function (data) {


            /*APARTADO ENVIO Y GUARDADO DE COMENTARIO CORRESPONDIENTE A ANTEPROYECTO*/
            comentarioUMR = $("#ComentarioRechazo").val();
            var itemComentario = {

                CodigoAIR: itemAIR.Codigo,
                Comentario: comentarioUMR,
                CodigoAnteproyecto: itemAIR.CodigoAnteproyecto,

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
        }
     };
    ajaxRequest(param);





});