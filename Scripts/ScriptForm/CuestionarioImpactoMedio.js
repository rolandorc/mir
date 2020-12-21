
var id = 0;
var idcalc = 0;
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
var codigo = 0;
var combo17 = "";
var PropuestaRegulacion = [];
var tipoaccion = [];

$(document).ready(function () {

    showProcessing("Cargando..");
    $("select").select2();

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
    idcalc = GetURLParameter("idcalc");

    if ((id === undefined)) {
        id = 0;
    }

    if (id != 0) {

        var param2 = {
            type: "GET",
            url: "Handlers/CuestionarioAltoImpactoHandler.ashx",
            data: { method: "ObtenerRespuestasImpactoModerado", args: { id: idcalc } },
            method: function (data2) {

                var clase = "pointerCursor glyphicon glyphicon-remove";
                if (data2.respuestas.Autorizado) {
                   
                    $("textarea").prop("disabled", true);
                    $("input").prop("disabled", true);
                    $("#check1").prop("disabled", true);
                    $("#check2").prop("disabled", true);
                    $("#btnGuardar,#btnAutorizar,#btnUploadFile").hide();
                    $("select[name^=cboAccion]").prop("disabled", true);
                    $("#btnaddtabla").hide();
                    $(".tddroptabla").hide();
                    $(".pt-3-half").prop("contenteditable", false);
                    $("#textareajustificacion").prop("disabled", true);
                    clase = "";

                }

                if (data2.respuestas.Codigo != 0) {


                    codigo = data2.respuestas.Codigo;
                    $("#textAltoImpactoq1").val(data2.respuestas.pregunta1);
                    $("#textAltoImpactoq2").val(data2.respuestas.pregunta2);
                    $("#textAltoImpactoq3").val(data2.respuestas.pregunta3);
                    $("#textAltoImpactoq4").val(data2.respuestas.pregunta93);
                    
                    $("#tdAlternativas1").html(data2.respuestas.pregunta4);
                    $("#tdAlternativas2").html(data2.respuestas.pregunta5);
                    $("#tdAlternativas3").html(data2.respuestas.pregunta6);
                    $("#tdAlternativas4").html(data2.respuestas.pregunta7);
                    $("#tdAlternativas5").html(data2.respuestas.pregunta8);
                    $("#tdAlternativas6").html(data2.respuestas.pregunta9);
                    $("#textAltoImpactoq7").val(data2.respuestas.pregunta11);

                    $("#tdDisposicones1").html(data2.respuestas.pregunta22);
                    $("#tdDisposicones2").html(data2.respuestas.pregunta23);
                    $("#tdDisposicones3").html(data2.respuestas.pregunta24);
                    $("#tdDisposicones4").html(data2.respuestas.pregunta25);
                    $("#tdDisposicones5").html(data2.respuestas.pregunta26);
                    $("#tdDisposicones6").html(data2.respuestas.pregunta27);
                    $("#tdDisposicones7").html(data2.respuestas.pregunta28);
                    $("#tdDisposicones8").html(data2.respuestas.pregunta29);
                    $("#tdDisposicones9").html(data2.respuestas.pregunta30);
                    $("#tdDisposicones10").html(data2.respuestas.pregunta31);
                    $("#tdDisposicones11").html(data2.respuestas.pregunta32);
                    $("#tdDisposicones12").html(data2.respuestas.pregunta33);
                    $("#tdDisposicones13").html(data2.respuestas.pregunta34);
                    $("#tdDisposicones14").html(data2.respuestas.pregunta35);
                    $("#tdDisposicones15").html(data2.respuestas.pregunta36);
                    $("#tdDisposicones16").html(data2.respuestas.pregunta37);
                    $("#tdDisposicones17").html(data2.respuestas.pregunta38);
                    $("#tdDisposicones18").html(data2.respuestas.pregunta39);
                    $("#tdDisposicones19").html(data2.respuestas.pregunta40);
                    $("#tdDisposicones20").html(data2.respuestas.pregunta41);
                    $("#tdDisposicones21").html(data2.respuestas.pregunta42);
                    $("#tdDisposicones22").html(data2.respuestas.pregunta43);
                    $("#tdDisposicones23").html(data2.respuestas.pregunta44);
                    $("#tdDisposicones24").html(data2.respuestas.pregunta45);
                    $("#tdDisposicones25").html(data2.respuestas.pregunta46);
                    $("#tdDisposicones26").html(data2.respuestas.pregunta47);
                    $("#tdDisposicones27").html(data2.respuestas.pregunta48);
                    $("#tdDisposicones28").html(data2.respuestas.pregunta49);
                    $("#tdDisposicones29").html(data2.respuestas.pregunta50);
                    $("#tdDisposicones30").html(data2.respuestas.pregunta51);
                    $("#tdDisposicones31").html(data2.respuestas.pregunta52);
                    $("#tdDisposicones32").html(data2.respuestas.pregunta53);
                    $("#tdDisposicones33").html(data2.respuestas.pregunta54);
                    $("#tdDisposicones34").html(data2.respuestas.pregunta55);
                    $("#tdDisposicones35").html(data2.respuestas.pregunta56);
                    $("#tdDisposicones36").html(data2.respuestas.pregunta57);
                    $("#tdDisposicones37").html(data2.respuestas.pregunta94);
                    $("#tdDisposicones38").html(data2.respuestas.pregunta95);
                    $("#tdDisposicones39").html(data2.respuestas.pregunta96);
                    $("#tdDisposicones40").html(data2.respuestas.pregunta97);
                    $("#textAltoImpactoq8").val(data2.respuestas.pregunta58);
                    $("#tdCostos1").html(data2.respuestas.pregunta59);
                    $("#tdCostos2").html(data2.respuestas.pregunta60);
                    $("#tdCostos3").html(data2.respuestas.pregunta61);
                    $("#tdCostos4").html(data2.respuestas.pregunta62);
                    $("#tdCostos5").html(data2.respuestas.pregunta63);
                    $("#tdCostos6").html(data2.respuestas.pregunta64);
                    $("#tdCostos7").html(data2.respuestas.pregunta65);
                    $("#tdCostos8").html(data2.respuestas.pregunta66);
                    $("#tdCostos9").html(data2.respuestas.pregunta67);
                    $("#tdCostos10").html(data2.respuestas.pregunta68);
                    $("#tdCostos11").html(data2.respuestas.pregunta69);
                    $("#tdCostos12").html(data2.respuestas.pregunta70);
                    $("#tdCostos13").html(data2.respuestas.pregunta71);
                    $("#tdCostos14").html(data2.respuestas.pregunta72);
                    $("#textAltoImpactoq9").val(data2.respuestas.pregunta73);
                    $("#textAltoImpactoq10").val(data2.respuestas.pregunta74);
                    $("#textAltoImpactoq11").val(data2.respuestas.pregunta75);
                    $("#tdConsulta1").html(data2.respuestas.pregunta76);
                    $("#tdConsulta2").html(data2.respuestas.pregunta77);
                    $("#tdConsulta3").html(data2.respuestas.pregunta78);
                    $("#tdConsulta4").html(data2.respuestas.pregunta79);
                    $("#tdConsulta5").html(data2.respuestas.pregunta80);
                    $("#tdConsulta6").html(data2.respuestas.pregunta81);
                    $("#tdConsulta7").html(data2.respuestas.pregunta82);
                    $("#tdConsulta8").html(data2.respuestas.pregunta83);
                    $("#tdConsulta9").html(data2.respuestas.pregunta84);
                    $("#tdConsulta10").html(data2.respuestas.pregunta85);
                    $("#tdConsulta11").html(data2.respuestas.pregunta86);
                    $("#tdConsulta12").html(data2.respuestas.pregunta87);
                    $("#tdConsulta13").html(data2.respuestas.pregunta88);
                    $("#tdConsulta14").html(data2.respuestas.pregunta89);
                    $("#tdConsulta15").html(data2.respuestas.pregunta90);
                    $("#tdConsulta16").html(data2.respuestas.pregunta91);
                    $("#textAltoImpactoq13").val(data2.respuestas.pregunta92);

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

        var paramAIRget = {
            type: "GET",
            url: "Handlers/AIRHandler.ashx",
            data: { method: "ObtenerAIRid", args: { id: id } },
            method: function (data2) {
                itemAIR = data2;

                var param2 = {
                    type: "GET",
                    url: "Handlers/CuestionarioAltoImpactoHandler.ashx",
                    data: { method: "ObtenerRespuestasImpactoModerado", args: { id: idcalc } },
                    method: function (data3) {

                        codigo = data3.respuestas.Codigo;
                        if (codigo != 0) {

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
                        

                        var paramTablas2 = {
                            type: "GET",
                            url: "Handlers/AccionRegulacionPropuestaHandler.ashx",
                            data: { method: "ObtenerAccionRegulacionPropuestasModeradoImpacto", args: { id: itemAIR.Codigo, Tipotramite: itemAIR.TipoTramite, CodigoCuestionario: codigo } },
                            method: function (dataTables) {

                                console.log(dataTables);
                                PropuestaRegulacion = dataTables.Items;
                                $.each(PropuestaRegulacion, function (index, tabla) {

                                    if (index > 0) {
                                        crearNuevaTabla();
                                    }
                                    var tablas = $(".tableadd");

                                    var newtabla = $($(tablas)[tablas.length - 1]);
                                    $(newtabla.find("select[name^=cboAccion]")[0]).select2();

                                    if ($(newtabla.find("select[name^=cboAccion]")[0])[0].options.length == 0) {
                                        LoadSelects($(newtabla.find("select[name^=cboAccion]")[0]), tipoaccion, true);
                                    }

                                    $(newtabla.find("select[name^=cboAccion]")[0]).select2("val", tabla.Accion == 0 ? "" : tabla.Accion);
                                    $(newtabla.find(".Nombre")[0]).val(tabla.NombredelTramite);
                                    $(newtabla.find(".Tipo")[0]).val(tabla.Tipo);
                                    $(newtabla.find(".Vigencia")[0]).val(tabla.Vigencia);
                                    $(newtabla.find(".Medio")[0]).val(tabla.MedioDePresentacion);
                                    $(newtabla.find(".Requisitos")[0]).val(tabla.Requisitos);
                                    $(newtabla.find(".Poblacion")[0]).val(tabla.Poblacion);
                                    $(newtabla.find(".Ficta")[0]).val(tabla.Ficta);
                                    $(newtabla.find(".Plazo")[0]).val(tabla.Plazo);
                                    $(newtabla.find(".Homoclave")[0]).val(tabla.Homoclave);
                                    $(newtabla.find(".Justificacion")[0]).val(tabla.Justificacion);

                                });

                                if (data3.respuestas.Autorizado) {

                                    $("textarea").prop("disabled", true);
                                    $("input").prop("disabled", true);
                                    $("#check1").prop("disabled", true);
                                    $("#check2").prop("disabled", true);
                                    $("#btnGuardar,#btnAutorizar,#btnUploadFile").hide();
                                    $("select[name^=cboAccion]").prop("disabled", true);
                                    $("#btnaddtabla").hide();
                                    $(".tddroptabla").hide();
                                    $(".pt-3-half").prop("contenteditable", false);
                                    $("#textareajustificacion").prop("disabled", true);
                                    clase = "";

                                }


                            }
                        }
                        ajaxRequest(paramTablas2);
                    }

                    }
                }
                ajaxRequest(param2);
            }
        }
        ajaxRequest(paramAIRget);
    }
    hideProcessing();


    var param = {
        type: "GET",
        url: "Handlers/OpcionCalculadoraHandler.ashx",
        data: { method: "ObtenerCombos" },
        method: function (data) {

            var cboAccion = $("select[name^=cboAccion]");
            tipoaccion = data.TipoAccion;
            $(cboAccion).each(function (e) {

                var _this = $(this);

                if (_this[0].options.length == 0) {
                    LoadSelects(_this, data.TipoAccion, true);
                    _this.select2("val", "");
                }

            });


        },
        unblockMessage: true
    };
    ajaxRequest(param);


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
    var CodigoCuestionario = idcalc;
    var pregunta1 = $("#textAltoImpactoq1").val();
    var pregunta2 = $("#textAltoImpactoq2").val();
    var pregunta3 = $("#textAltoImpactoq3").val();
    var pregunta93 = $("#textAltoImpactoq4").val();
    var pregunta4 = $("#tdAlternativas1").html();
    var pregunta5 = $("#tdAlternativas2").html();
    var pregunta6 = $("#tdAlternativas3").html();
    var pregunta7 = $("#tdAlternativas4").html();
    var pregunta8 = $("#tdAlternativas5").html();
    var pregunta9 = $("#tdAlternativas6").html();
    var pregunta11 = $("#textAltoImpactoq7").val();

    var pregunta22 = $("#tdDisposicones1").html();
    var pregunta23 = $("#tdDisposicones2").html();
    var pregunta24 = $("#tdDisposicones3").html();
    var pregunta25 = $("#tdDisposicones4").html();
    var pregunta26 = $("#tdDisposicones5").html();
    var pregunta27 = $("#tdDisposicones6").html();
    var pregunta28 = $("#tdDisposicones7").html();
    var pregunta29 = $("#tdDisposicones8").html();
    var pregunta30 = $("#tdDisposicones9").html();
    var pregunta31 = $("#tdDisposicones10").html();
    var pregunta32 = $("#tdDisposicones11").html();
    var pregunta33 = $("#tdDisposicones12").html();
    var pregunta34 = $("#tdDisposicones13").html();
    var pregunta35 = $("#tdDisposicones14").html();
    var pregunta36 = $("#tdDisposicones15").html();
    var pregunta37 = $("#tdDisposicones16").html();
    var pregunta38 = $("#tdDisposicones17").html();
    var pregunta39 = $("#tdDisposicones18").html();
    var pregunta40 = $("#tdDisposicones19").html();
    var pregunta41 = $("#tdDisposicones20").html();
    var pregunta42 = $("#tdDisposicones21").html();
    var pregunta43 = $("#tdDisposicones22").html();
    var pregunta44 = $("#tdDisposicones23").html();
    var pregunta45 = $("#tdDisposicones24").html();
    var pregunta46 = $("#tdDisposicones25").html();
    var pregunta47 = $("#tdDisposicones26").html();
    var pregunta48 = $("#tdDisposicones27").html();
    var pregunta49 = $("#tdDisposicones28").html();
    var pregunta50 = $("#tdDisposicones29").html();
    var pregunta51 = $("#tdDisposicones30").html();
    var pregunta52 = $("#tdDisposicones31").html();
    var pregunta53 = $("#tdDisposicones32").html();
    var pregunta54 = $("#tdDisposicones33").html();
    var pregunta55 = $("#tdDisposicones34").html();
    var pregunta56 = $("#tdDisposicones35").html();
    var pregunta57 = $("#tdDisposicones36").html();
    var pregunta94 = $("#tdDisposicones37").html();
    var pregunta95 = $("#tdDisposicones38").html();
    var pregunta96 = $("#tdDisposicones39").html();
    var pregunta97 = $("#tdDisposicones40").html();
    var pregunta58 = $("#textAltoImpactoq8").val();
    var pregunta59 = $("#tdCostos1").html();
    var pregunta60 = $("#tdCostos2").html();
    var pregunta61 = $("#tdCostos3").html();
    var pregunta62 = $("#tdCostos4").html();
    var pregunta63 = $("#tdCostos5").html();
    var pregunta64 = $("#tdCostos6").html();
    var pregunta65 = $("#tdCostos7").html();
    var pregunta66 = $("#tdCostos8").html();
    var pregunta67 = $("#tdCostos9").html();
    var pregunta68 = $("#tdCostos10").html();
    var pregunta69 = $("#tdCostos11").html();
    var pregunta70 = $("#tdCostos12").html();
    var pregunta71 = $("#tdCostos13").html();
    var pregunta72 = $("#tdCostos14").html();
    var pregunta73 = $("#textAltoImpactoq9").val();
    var pregunta74 = $("#textAltoImpactoq10").val();
    var pregunta75 = $("#textAltoImpactoq11").val();
    var pregunta76 = $("#tdConsulta1").html();
    var pregunta77 = $("#tdConsulta2").html();
    var pregunta78 = $("#tdConsulta3").html();
    var pregunta79 = $("#tdConsulta4").html();
    var pregunta80 = $("#tdConsulta5").html();
    var pregunta81 = $("#tdConsulta6").html();
    var pregunta82 = $("#tdConsulta7").html();
    var pregunta83 = $("#tdConsulta8").html();
    var pregunta84 = $("#tdConsulta9").html();
    var pregunta85 = $("#tdConsulta10").html();
    var pregunta86 = $("#tdConsulta11").html();
    var pregunta87 = $("#tdConsulta12").html();
    var pregunta88 = $("#tdConsulta13").html();
    var pregunta89 = $("#tdConsulta14").html();
    var pregunta90 = $("#tdConsulta15").html();
    var pregunta91 = $("#tdConsulta16").html();
    var pregunta92 = $("#textAltoImpactoq13").val();

    var tablas = $(".tableadd");
    $(tablas).each(function (e) {
        var _this = $(this);

        var itemPropuesta = {
            Codigo: PropuestaRegulacion[e] == null ? 0 : PropuestaRegulacion[e].Codigo,
            CodigoAir: itemAIR.Codigo,
            Tipotramite: itemAIR.TipoTramite,
            CodigoCuestionarioAltoimpacto: null,
            CodigoCuestionarioEmergencia:null,
            Accion: _this.find("select[name^=cboAccion]")[0].value == "" ? 0 : _this.find("select[name^=cboAccion]")[0].value,
            NombredelTramite: _this.find(".Nombre")[0].value,
            Tipo: _this.find(".Tipo")[0].value,
            Vigencia: _this.find(".Vigencia")[0].value,
            MedioDePresentacion: _this.find(".Medio")[0].value,
            Requisitos: _this.find(".Requisitos")[0].value,
            Poblacion: _this.find(".Poblacion")[0].value,
            Ficta: _this.find(".Ficta")[0].value,
            Plazo: _this.find(".Plazo")[0].value,
            Homoclave: _this.find(".Homoclave")[0].value,
            Justificacion: _this.find(".Justificacion")[0].value,
        }
        if (PropuestaRegulacion[e] == null) {
            PropuestaRegulacion.push(itemPropuesta);
        } else {
            PropuestaRegulacion[e] = itemPropuesta;
        }

    });

    var item = {
        codigo : codigo,
        Autorizado: Autorizado,
        CodigoCuestionario: CodigoCuestionario,
        pregunta1: pregunta1,
        pregunta2: pregunta2,
        pregunta3: pregunta3,
        pregunta4: pregunta4,
        pregunta5: pregunta5,
        pregunta6: pregunta6,
        pregunta7: pregunta7,
        pregunta8: pregunta8,
        pregunta9: pregunta9,
        pregunta11: pregunta11,
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
        pregunta51: pregunta51,
        pregunta52: pregunta52,
        pregunta53: pregunta53,
        pregunta54: pregunta54,
        pregunta55: pregunta55,
        pregunta56: pregunta56,
        pregunta57: pregunta57,
        pregunta58: pregunta58,
        pregunta59: pregunta59,
        pregunta60: pregunta60,
        pregunta61: pregunta61,
        pregunta62: pregunta62,
        pregunta63: pregunta63,
        pregunta64: pregunta64,
        pregunta65: pregunta65,
        pregunta66: pregunta66,
        pregunta67: pregunta67,
        pregunta68: pregunta68,
        pregunta69: pregunta69,
        pregunta70: pregunta70,
        pregunta71: pregunta71,
        pregunta72: pregunta72,
        pregunta73: pregunta73,
        pregunta74: pregunta74,
        pregunta75: pregunta75,
        pregunta76: pregunta76,
        pregunta77: pregunta77,
        pregunta78: pregunta78,
        pregunta79: pregunta79,
        pregunta80: pregunta80,
        pregunta81: pregunta81,
        pregunta82: pregunta82,
        pregunta83: pregunta83,
        pregunta84: pregunta84,
        pregunta85: pregunta85,
        pregunta86: pregunta86,
        pregunta87: pregunta87,
        pregunta88: pregunta88,
        pregunta89: pregunta89,
        pregunta90: pregunta90,
        pregunta91: pregunta91,
        pregunta92: pregunta92,
        pregunta93: pregunta93,
        pregunta94: pregunta94,
        pregunta95: pregunta95,
        pregunta96: pregunta96,
        pregunta97: pregunta97
    };

    console.log(JSON.stringify(item));


    var param = {
        type: "POST",
        async: false,
        url: "CuestionarioImpactoMedio.aspx/Guardar",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing()
                errorMessage(data.Message);
                return false;
            }
            

            for (var i = 0; i < PropuestaRegulacion.length; i++) {

                PropuestaRegulacion[i].CodigoCuestionarioModeradoImpacto = data.idimpactomedio;

            }

            var paramTablas = {
                type: "POST",
                async: false,
                url: "CuestionarioImpactoMedio.aspx/GuardarTablas",
                data: "{ item:" + JSON.stringify(PropuestaRegulacion) + " }",
                method: function (dataTablas) {

                    if (dataTablas.Message != undefined && dataTablas.Message.length > 0) {
                        hideProcessing()
                        errorMessage(dataTablas.Message);
                        return false;
                    }

            itemAIR.UsuarioActual = 3;
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

                itemAIR.Estatus = 0;

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

                    hideProcessing()
                    successMessage("Cambios Guardados Correctamente");
                    setTimeout(function () {
                        window.location.replace("Default.aspx");
                    }, 2000)

                }
            };
            ajaxRequest(paramAIR);
                }
            };
            ajaxRequest(paramTablas);
        }
    };
    ajaxRequest(param);


});

$("#btnAutorizar").on("click", function () {


    var _this = $(this)[0];
    var autorizado = false;
    var rb1 = $(".rb1");
    var rb2 = $(".rb2");
    var contrb1 = 0;
    var contrb2 = 0;

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



    }

    showProcessing("Guardando..");
    var Autorizado = autorizado;
    var CodigoCuestionario = idcalc;
    var pregunta1 = $("#textAltoImpactoq1").val();
    var pregunta2 = $("#textAltoImpactoq2").val();
    var pregunta3 = $("#textAltoImpactoq3").val();
    var pregunta93 = $("#textAltoImpactoq4").val();
    var pregunta4 = $("#tdAlternativas1").html();
    var pregunta5 = $("#tdAlternativas2").html();
    var pregunta6 = $("#tdAlternativas3").html();
    var pregunta7 = $("#tdAlternativas4").html();
    var pregunta8 = $("#tdAlternativas5").html();
    var pregunta9 = $("#tdAlternativas6").html();
    var pregunta11 = $("#textAltoImpactoq7").val();

    var pregunta22 = $("#tdDisposicones1").html();
    var pregunta23 = $("#tdDisposicones2").html();
    var pregunta24 = $("#tdDisposicones3").html();
    var pregunta25 = $("#tdDisposicones4").html();
    var pregunta26 = $("#tdDisposicones5").html();
    var pregunta27 = $("#tdDisposicones6").html();
    var pregunta28 = $("#tdDisposicones7").html();
    var pregunta29 = $("#tdDisposicones8").html();
    var pregunta30 = $("#tdDisposicones9").html();
    var pregunta31 = $("#tdDisposicones10").html();
    var pregunta32 = $("#tdDisposicones11").html();
    var pregunta33 = $("#tdDisposicones12").html();
    var pregunta34 = $("#tdDisposicones13").html();
    var pregunta35 = $("#tdDisposicones14").html();
    var pregunta36 = $("#tdDisposicones15").html();
    var pregunta37 = $("#tdDisposicones16").html();
    var pregunta38 = $("#tdDisposicones17").html();
    var pregunta39 = $("#tdDisposicones18").html();
    var pregunta40 = $("#tdDisposicones19").html();
    var pregunta41 = $("#tdDisposicones20").html();
    var pregunta42 = $("#tdDisposicones21").html();
    var pregunta43 = $("#tdDisposicones22").html();
    var pregunta44 = $("#tdDisposicones23").html();
    var pregunta45 = $("#tdDisposicones24").html();
    var pregunta46 = $("#tdDisposicones25").html();
    var pregunta47 = $("#tdDisposicones26").html();
    var pregunta48 = $("#tdDisposicones27").html();
    var pregunta49 = $("#tdDisposicones28").html();
    var pregunta50 = $("#tdDisposicones29").html();
    var pregunta51 = $("#tdDisposicones30").html();
    var pregunta52 = $("#tdDisposicones31").html();
    var pregunta53 = $("#tdDisposicones32").html();
    var pregunta54 = $("#tdDisposicones33").html();
    var pregunta55 = $("#tdDisposicones34").html();
    var pregunta56 = $("#tdDisposicones35").html();
    var pregunta57 = $("#tdDisposicones36").html();
    var pregunta94 = $("#tdDisposicones37").html();
    var pregunta95 = $("#tdDisposicones38").html();
    var pregunta96 = $("#tdDisposicones39").html();
    var pregunta97 = $("#tdDisposicones40").html();
    var pregunta58 = $("#textAltoImpactoq8").val();
    var pregunta59 = $("#tdCostos1").html();
    var pregunta60 = $("#tdCostos2").html();
    var pregunta61 = $("#tdCostos3").html();
    var pregunta62 = $("#tdCostos4").html();
    var pregunta63 = $("#tdCostos5").html();
    var pregunta64 = $("#tdCostos6").html();
    var pregunta65 = $("#tdCostos7").html();
    var pregunta66 = $("#tdCostos8").html();
    var pregunta67 = $("#tdCostos9").html();
    var pregunta68 = $("#tdCostos10").html();
    var pregunta69 = $("#tdCostos11").html();
    var pregunta70 = $("#tdCostos12").html();
    var pregunta71 = $("#tdCostos13").html();
    var pregunta72 = $("#tdCostos14").html();
    var pregunta73 = $("#textAltoImpactoq9").val();
    var pregunta74 = $("#textAltoImpactoq10").val();
    var pregunta75 = $("#textAltoImpactoq11").val();
    var pregunta76 = $("#tdConsulta1").html();
    var pregunta77 = $("#tdConsulta2").html();
    var pregunta78 = $("#tdConsulta3").html();
    var pregunta79 = $("#tdConsulta4").html();
    var pregunta80 = $("#tdConsulta5").html();
    var pregunta81 = $("#tdConsulta6").html();
    var pregunta82 = $("#tdConsulta7").html();
    var pregunta83 = $("#tdConsulta8").html();
    var pregunta84 = $("#tdConsulta9").html();
    var pregunta85 = $("#tdConsulta10").html();
    var pregunta86 = $("#tdConsulta11").html();
    var pregunta87 = $("#tdConsulta12").html();
    var pregunta88 = $("#tdConsulta13").html();
    var pregunta89 = $("#tdConsulta14").html();
    var pregunta90 = $("#tdConsulta15").html();
    var pregunta91 = $("#tdConsulta16").html();
    var pregunta92 = $("#textAltoImpactoq13").val();

    var tablas = $(".tableadd");
    $(tablas).each(function (e) {
        var _this = $(this);

        var itemPropuesta = {
            Codigo: PropuestaRegulacion[e] == null ? 0 : PropuestaRegulacion[e].Codigo,
            CodigoAir: itemAIR.Codigo,
            Tipotramite: itemAIR.TipoTramite,
            CodigoCuestionarioAltoimpacto: null,
            CodigoCuestionarioEmergencia: null,
            Accion: _this.find("select[name^=cboAccion]")[0].value == "" ? 0 : _this.find("select[name^=cboAccion]")[0].value,
            NombredelTramite: _this.find(".Nombre")[0].value,
            Tipo: _this.find(".Tipo")[0].value,
            Vigencia: _this.find(".Vigencia")[0].value,
            MedioDePresentacion: _this.find(".Medio")[0].value,
            Requisitos: _this.find(".Requisitos")[0].value,
            Poblacion: _this.find(".Poblacion")[0].value,
            Ficta: _this.find(".Ficta")[0].value,
            Plazo: _this.find(".Plazo")[0].value,
            Homoclave: _this.find(".Homoclave")[0].value,
            Justificacion: _this.find(".Justificacion")[0].value,
        }
        if (PropuestaRegulacion[e] == null) {
            PropuestaRegulacion.push(itemPropuesta);
        } else {
            PropuestaRegulacion[e] = itemPropuesta;
        }

    });

    var item = {
        codigo: codigo,
        Autorizado: Autorizado,
        CodigoCuestionario: CodigoCuestionario,
        pregunta1: pregunta1,
        pregunta2: pregunta2,
        pregunta3: pregunta3,
        pregunta4: pregunta4,
        pregunta5: pregunta5,
        pregunta6: pregunta6,
        pregunta7: pregunta7,
        pregunta8: pregunta8,
        pregunta9: pregunta9,   
        pregunta11: pregunta11,
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
        pregunta51: pregunta51,
        pregunta52: pregunta52,
        pregunta53: pregunta53,
        pregunta54: pregunta54,
        pregunta55: pregunta55,
        pregunta56: pregunta56,
        pregunta57: pregunta57,
        pregunta58: pregunta58,
        pregunta59: pregunta59,
        pregunta60: pregunta60,
        pregunta61: pregunta61,
        pregunta62: pregunta62,
        pregunta63: pregunta63,
        pregunta64: pregunta64,
        pregunta65: pregunta65,
        pregunta66: pregunta66,
        pregunta67: pregunta67,
        pregunta68: pregunta68,
        pregunta69: pregunta69,
        pregunta70: pregunta70,
        pregunta71: pregunta71,
        pregunta72: pregunta72,
        pregunta73: pregunta73,
        pregunta74: pregunta74,
        pregunta75: pregunta75,
        pregunta76: pregunta76,
        pregunta77: pregunta77,
        pregunta78: pregunta78,
        pregunta79: pregunta79,
        pregunta80: pregunta80,
        pregunta81: pregunta81,
        pregunta82: pregunta82,
        pregunta83: pregunta83,
        pregunta84: pregunta84,
        pregunta85: pregunta85,
        pregunta86: pregunta86,
        pregunta87: pregunta87,
        pregunta88: pregunta88,
        pregunta89: pregunta89,
        pregunta90: pregunta90,
        pregunta91: pregunta91,
        pregunta92: pregunta92,
        pregunta93: pregunta93,
        pregunta94: pregunta94,
        pregunta95: pregunta95,
        pregunta96: pregunta96,
        pregunta97: pregunta97
    };

    console.log(JSON.stringify(item));


    var param = {
        type: "POST",
        async: false,
        url: "CuestionarioImpactoMedio.aspx/Guardar",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing()
                errorMessage(data.Message);
                return false;
            }

            for (var i = 0; i < PropuestaRegulacion.length; i++) {

                PropuestaRegulacion[i].CodigoCuestionarioModeradoImpacto = data.idimpactomedio;

            }

            var paramTablas = {
                type: "POST",
                async: false,
                url: "CuestionarioImpactoMedio.aspx/GuardarTablas",
                data: "{ item:" + JSON.stringify(PropuestaRegulacion) + " }",
                method: function (dataTablas) {

                    if (dataTablas.Message != undefined && dataTablas.Message.length > 0) {
                        hideProcessing()
                        errorMessage(dataTablas.Message);
                        return false;
                    }
            if (autorizado) {
                itemAIR.UsuarioActual = 2;
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
                itemAIR.Estatus = 0;
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

                    hideProcessing()
                    successMessage("Cambios Guardados Correctamente");
                    setTimeout(function () {
                        window.location.replace("Default.aspx");
                    }, 2000)

                }
            };
            ajaxRequest(paramAIR);
                }
            };
            ajaxRequest(paramTablas);
        }
    };
    ajaxRequest(param);


});

function VerificarNewTable() {

    var contvacio = 0;
    var tablas = $(".tableadd");
    $(tablas).each(function (e) {
        var _this = $(this);
        _this.find("select[name^=cboAccion]")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Nombre")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Tipo")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Vigencia")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Medio")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Requisitos")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Poblacion")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Ficta")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Plazo")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Homoclave")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Justificacion")[0].value.trim() == "" ? contvacio++ : null;
    });

    if (contvacio == 0) {
        crearNuevaTabla();
    } else {
        errortable();

    }

}

function errortable() {
    warningMessage("Favor de llenar completamente las tablas ya existentes");
    return;
}

function crearNuevaTabla() {

    var tablas = $(".tableadd");
    var id = tablas.length;
    var tablanueva = "";
    tablanueva =
    "<div  class='table-editable tableadd'  style='word-break: break-all'>" +
        "<span class='table-add float-right mb-3 mr-2'><a href='#!' class='text-success'><i class='fa fa-plus fa-2x' aria-hidden='true'></i></a></span>" +
        "<table class='table table-bordered table-responsive-md table-striped text-center'>" +
            "<tr> " +
                "<td class='text-center'  style='width:20%'><h6><strong>Acción </strong></h6></td>" +
                "<td> <select class='form-control cboAccion' name='cboAccion" + id + "' required></select></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Nombre del Trámite</strong></h6></td>" +
                "<td class='pt-3-half '  > <textarea rows='2' class='form-control Nombre' name='Nombre" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Tipo</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Tipo' name='Tipo" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Vigencia</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Vigencia' name='Vigencia" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +
            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Medio de presentación</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Medio' name='Medio" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Requisitos</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Requisitos' name='Requisitos" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Población a la que impacta</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Poblacion'  name='Poblacion" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Ficta</strong></h6></td>" +
                "<td class='pt-3-half ' ><textarea rows='2' class='form-control Ficta' name='Ficta" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Plazo</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Plazo'  name='Plazo" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Homoclave</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Homoclave'  name='Homoclave" + id + "' placeholder='....' required></textarea></td>" +
           "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Justificación</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Justificacion' name='Justificacion" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>"+
                "<td class='text-center tddroptabla'  style='width:10%'> <button type='button' class='btn btn-danger'onclick='DropTablaActual(" + id + ")' title='Eliminar Tabla Actual'><span class='glyphicon glyphicon-remove'></span></button> </td>" +
            "</tr>" +

        "</table>" +
    "</div>";

    $("#bodytable").append(tablanueva);

    var param = {
        type: "GET",
        url: "Handlers/OpcionCalculadoraHandler.ashx",
        data: { method: "ObtenerCombos" },
        method: function (data) {

            var cboAccion = $("select[name^=cboAccion]");
            $(cboAccion).each(function (e) {

                var _this = $(this);
                if (_this[0].options.length == 0) {
                    LoadSelects(_this, data.TipoAccion, true);
                    _this.select2();
                    _this.select2("val", "");
                }

            });
        },
        unblockMessage: true
    };
    ajaxRequest(param);

};


function DropTablaActual(id) {

    var _this = $(this);
    var tablas = $(".tableadd");
    showProcessing("Cargando..");
    if (PropuestaRegulacion[id] == undefined) {

        tablas[id].remove();
        hideProcessing()
        successMessage("Tabla Eliminada Correctamente");

    }else{
        
        var paramAIR = {
            type: "POST",
            async: false,
            url: "OpcionCalculadora.aspx/DropTablas",
            data: "{ item:" + JSON.stringify(PropuestaRegulacion[id].Codigo) + " }",
            method: function (data2) {

                if (data2.Message != undefined && data2.Message.length > 0) {
                    hideProcessing()
                    errorMessage(data2.Message);
                    return false;
                }

                hideProcessing()
                PropuestaRegulacion.splice(id, 1);
                tablas[id].remove();
                successMessage("Tabla Eliminada Correctamente");


            }
        };
        ajaxRequest(paramAIR);

    }

};

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
    $("#textAltoImpactoq4").val("");
    $("#tdAlternativas1").html("");
    $("#tdAlternativas2").html("");
    $("#tdAlternativas3").html("");
    $("#tdAlternativas4").html("");
    $("#tdAlternativas5").html("");
    $("#tdAlternativas6").html("");
    $("#textAltoImpactoq7").val("");
    $("#tdDisposicones1").html("");
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
    $("#tdDisposicones19").html("");
    $("#tdDisposicones20").html("");
    $("#tdDisposicones21").html("");
    $("#tdDisposicones22").html("");
    $("#tdDisposicones23").html("");
    $("#tdDisposicones24").html("");
    $("#tdDisposicones25").html("");
    $("#tdDisposicones26").html("");
    $("#tdDisposicones27").html("");
    $("#tdDisposicones28").html("");
    $("#tdDisposicones29").html("");
    $("#tdDisposicones30").html("");
    $("#tdDisposicones31").html("");
    $("#tdDisposicones32").html("");
    $("#tdDisposicones33").html("");
    $("#tdDisposicones34").html("");
    $("#tdDisposicones35").html("");
    $("#tdDisposicones36").html("");
    $("#tdDisposicones37").html("");
    $("#tdDisposicones38").html("");
    $("#tdDisposicones39").html("");
    $("#tdDisposicones40").html("");
    $("#textAltoImpactoq8").val("");
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
    $("#textAltoImpactoq9").val("");
    $("#textAltoImpactoq10").val("");
    $("#textAltoImpactoq11").val("");
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
    $("#textAltoImpactoq13").val("");
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