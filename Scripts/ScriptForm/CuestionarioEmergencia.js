var id = 0;
var fechaactual = new Date();
var anio = fechaactual.getFullYear();
var mes = fechaactual.getMonth() + 1;
var dia = fechaactual.getDate();
var fechafolio = "";
var tokenFile;
var tokenFileUbicacion;
var listFiles = [];
var itemAIR = [];
var idemergencia = 0;
var combo17 = "";
var PropuestaRegulacion = [];
var tipoaccion = [];

$(document).ready(function () {

    showProcessing("Cargando...");

    $('#FechaPublicacionDOF').datetimepicker({
        format: 'DD/MM/YYYY ',
    });



    $("select").select2();

    if (dia.toString().length == 1) {
        dia = "0" + dia.toString();
    }

    if (mes.toString().length == 1) {
        mes = "0" + mes.toString();
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

    if ((id === undefined)) {
        id = 0;
    }


    if (id != 0) {

        $.ajax({
            type: "GET",
            url: "Handlers/EmergenciaHandler.ashx",
            data: { method: "ObtenerIdEmergencia", args: { id: id } },
            complete: function (data2) {

                idemergencia = data2.responseJSON.Codigo;


                $.ajax({
                    type: "GET",
                    async: false,
                    url: "Handlers/AIRHandler.ashx",
                    data: { method: "ObtenerAIRid", args: { id: id } },
                    complete: function (data2) {

                        itemAIR = data2.responseJSON;
                        console.log(itemAIR);

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
                            $("#lbllimitedias").html("Limite de Dias: " + itemAIR.CicloVidaAir.diaslimite);
                            $("#lblDiastrans").html("Dias Transcurridos: " + +itemAIR.CicloVidaAir.diastranscurridos);
                            $(".fechaproceso").show();


                        }
    

                        var param2 = {
                            type: "GET",
                            url: "Handlers/EmergenciaHandler.ashx",
                            data: { method: "ObtenerRespuestasEmergencia", args: { id: itemAIR.CodigoAnteproyecto } },
                            method: function (data2) {

                                emergenciadata = data2.RespuestasEmergencia;
                                var paramTablas2 = {
                                    type: "GET",
                                    url: "Handlers/AccionRegulacionPropuestaHandler.ashx",
                                    data: { method: "ObtenerAccionRegulacionPropuestasEmergencia", args: { id: itemAIR.Codigo, Tipotramite: itemAIR.TipoTramite, CodigoCuestionario: emergenciadata.Codigo } },
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
                                           
                                            $(newtabla.find(".Medio")[0]).val(tabla.MedioDePresentacion);
                                            $(newtabla.find(".Requisitos")[0]).val(tabla.Requisitos);
                                            $(newtabla.find(".Poblacion")[0]).val(tabla.Poblacion);
                                            $(newtabla.find(".Ficta")[0]).val(tabla.Ficta);
                                            $(newtabla.find(".Plazo")[0]).val(tabla.Plazo);
                                            $(newtabla.find(".Justificacion")[0]).val(tabla.Justificacion);

                                        });
                                        if (itemAIR.Estatus == "PROCESO DE DICTAMINADO" || itemAIR.Estatus == "PROCESO CONCLUIDO") {

                                            $("textarea").prop("disabled", true);
                                            $("input").prop("disabled", true);
                                            $("#check1").prop("disabled", true);
                                            $("#check2").prop("disabled", true);
                                            $("select[name^=cboAccion]").prop("disabled", true);
                                            $("#btnaddtabla").hide();
                                            $(".tddroptabla").hide();
                                            $(".pt-3-half").prop("contenteditable", false);
                                            $("#textareajustificacion").prop("disabled", true);

                                            $("#btnGuardar,#btnAutorizar,#btnUploadFile").hide();
                                            clase = "";

                                        }
 
                                    }
                                }
                                ajaxRequest(paramTablas2);

                                var clase = "pointerCursor glyphicon glyphicon-remove";
                                if (itemAIR.Estatus == "PROCESO DE DICTAMINADO" || itemAIR.Estatus == "PROCESO CONCLUIDO") {

                                    $("textarea").prop("disabled", true);
                                    $("input").prop("disabled", true);
                                    $("#check1").prop("disabled", true);
                                    $("#check2").prop("disabled", true);
                                    $("select[name^=cboAccion]").prop("disabled", true);
                                    $("#btnaddtabla").hide();
                                    $(".tddroptabla").hide();
                                    $(".pt-3-half").prop("contenteditable", false);
                                    $("#textareajustificacion").prop("disabled", true);

                                    $("#btnGuardar,#btnAutorizar,#btnUploadFile").hide();
                                    clase = "";

                                }

                                $("#textEmergenciaq1").val(data2.RespuestasEmergencia.pregunta1);
                                $("#textEmergenciaq2").val(data2.RespuestasEmergencia.pregunta2);
                                $("#textEmergenciaq3").val(data2.RespuestasEmergencia.pregunta3);
                                $("#check1")[0].checked = data2.RespuestasEmergencia.pregunta4;
                                $("#check2")[0].checked = data2.RespuestasEmergencia.pregunta5;
                                $("#check3")[0].checked = data2.RespuestasEmergencia.pregunta6;
                                $("#check4")[0].checked = data2.RespuestasEmergencia.pregunta7;
                                $("#check5")[0].checked = data2.RespuestasEmergencia.pregunta8;
                                $("#check6")[0].checked = data2.RespuestasEmergencia.pregunta9;
                                $("#check7")[0].checked = data2.RespuestasEmergencia.pregunta11;
                                $("#textEmergenciaq5").val(data2.RespuestasEmergencia.pregunta10);
                                $("#textEmergenciaq6").val(data2.RespuestasEmergencia.pregunta12);
                                $("#textEmergenciaq7").val(data2.RespuestasEmergencia.pregunta13);

                                $("#textEmergenciaq8").val(data2.RespuestasEmergencia.pregunta24);
                                $("#textEmergenciaq9").val(data2.RespuestasEmergencia.pregunta25);
                                $("#textEmergenciaq10").val(data2.RespuestasEmergencia.pregunta26);
                                $("#textEmergenciaq11").val(data2.RespuestasEmergencia.pregunta27);
                               
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
                    },
                });

            },
        });

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

    showProcessing("Guardando...");

    var pregunta1 = $("#textEmergenciaq1").val();
    var pregunta2 = $("#textEmergenciaq2").val();
    var pregunta3 = $("#textEmergenciaq3").val();
    var pregunta4 = $("#check1")[0].checked;
    var pregunta5 = $("#check2")[0].checked;
    var pregunta6 = $("#check3")[0].checked;
    var pregunta7 = $("#check4")[0].checked;
    var pregunta8 = $("#check5")[0].checked;
    var pregunta9 = $("#check6")[0].checked;
    var pregunta11 = $("#check7")[0].checked;
    var pregunta10 = $("#textEmergenciaq5").val();
    var pregunta12 = $("#textEmergenciaq6").val();
    var pregunta13 = $("#textEmergenciaq7").val();

    var pregunta24 = $("#textEmergenciaq8").val();
    var pregunta25 = $("#textEmergenciaq9").val();
    var pregunta26 = $("#textEmergenciaq10").val();
    var pregunta27 = $("#textEmergenciaq11").val();
   

    var tablas = $(".tableadd");

    $(tablas).each(function (e) {
        var _this = $(this);

        var itemPropuesta = {
            Codigo: PropuestaRegulacion[e] == null ? 0 : PropuestaRegulacion[e].Codigo,
            CodigoAir: itemAIR.Codigo,
            Tipotramite: itemAIR.TipoTramite,
            CodigoCuestionarioAltoimpacto: null,
            CodigoCuestionarioModeradoImpacto:null,
            Accion: _this.find("select[name^=cboAccion]")[0].value == "" ? 0 : _this.find("select[name^=cboAccion]")[0].value,
            NombredelTramite: _this.find(".Nombre")[0].value,
            Tipo:"",
            Vigencia:"",
            MedioDePresentacion: _this.find(".Medio")[0].value,
            Requisitos: _this.find(".Requisitos")[0].value,
            Poblacion: _this.find(".Poblacion")[0].value,
            Ficta: _this.find(".Ficta")[0].value,
            Plazo: _this.find(".Plazo")[0].value,
            Homoclave: "",
            Justificacion: _this.find(".Justificacion")[0].value,
        }

        if (PropuestaRegulacion[e] == null)
        {
            PropuestaRegulacion.push(itemPropuesta);
        } else {
            PropuestaRegulacion[e] = itemPropuesta;
        }
       

    });


    var item = {
        Codigo : idemergencia,
        codigoAnteproyecto: id,
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
  
        pregunta24: pregunta24,
        pregunta25: pregunta25,
        pregunta26: pregunta26,
        pregunta27: pregunta27,
       

    };

    console.log(JSON.stringify(item));


    var param = {
        type: "POST",
        async: false,
        url: "CuestionarioEmergencia.aspx/Guardar",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return false;
            }

            for (var i = 0; i < PropuestaRegulacion.length; i++) {

                PropuestaRegulacion[i].CodigoCuestionarioEmergencia = data.idemergencia;

            }
            var paramTablas = {
                type: "POST",
                async: false,
                url: "CuestionarioEmergencia.aspx/GuardarTablas",
                data: "{ item:" + JSON.stringify(PropuestaRegulacion) + " }",
                method: function (dataTablas) {

                    if (dataTablas.Message != undefined && dataTablas.Message.length > 0) {
                        hideProcessing()
                        errorMessage(dataTablas.Message);
                        return false;
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

                itemAIR.Estatus = 0;
                itemAIR.cuestionario = true;
               
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

                        hideProcessing();
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

    if (itemAIR.FechaPublicacionDOF != null && itemAIR.FechaPublicacionDOF != "") {
        var _this = $(this)[0];
        var autorizado = _this.id;
        var contcheck = 0;
        var contd = 0;
        var checks = $(".checkTrue");
        var tdempty = $(".pt-3-half");
        var contrb1 = 0;
        var contrb2 = 0;
        var rb1 = $(".rb1");
        var rb2 = $(".rb2");

        if (autorizado == "btnAutorizar") {

            if (!$(".formsave").valid()) {
                warningMessage("Información incompleta");
                return;
            }



            $(checks).each(function () {
                if ($(this)[0].checked) {
                    contcheck++;
                }

            });

            if (contcheck == 0) {
                warningMessage("Seleccione al menos una opción");
                $("#opcion1q4").addClass('error');
                $("#check1").focus();
                return;
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
                $("#tr1").addClass('error');
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

            if ($('#textareajustificacion').is(':visible')) {

                if ($("#textareajustificacion").val().trim() == "") {
                    warningMessage("Información incompleta");
                    $("#textareajustificacion").focus().addClass("error");
                    return;
                }
            }

        }

        showProcessing("Guardando...");

        var pregunta1 = $("#textEmergenciaq1").val();
        var pregunta2 = $("#textEmergenciaq2").val();
        var pregunta3 = $("#textEmergenciaq3").val();
        var pregunta4 = $("#check1")[0].checked;
        var pregunta5 = $("#check2")[0].checked;
        var pregunta6 = $("#check3")[0].checked;
        var pregunta7 = $("#check4")[0].checked;
        var pregunta8 = $("#check5")[0].checked;
        var pregunta9 = $("#check6")[0].checked;
        var pregunta11 = $("#check7")[0].checked;
        var pregunta10 = $("#textEmergenciaq5").val();
        var pregunta12 = $("#textEmergenciaq6").val();
        var pregunta13 = $("#textEmergenciaq7").val();
        var pregunta24 = $("#textEmergenciaq8").val();
        var pregunta25 = $("#textEmergenciaq9").val();
        var pregunta26 = $("#textEmergenciaq10").val();
        var pregunta27 = $("#textEmergenciaq11").val();

        var tablas = $(".tableadd");

        $(tablas).each(function (e) {
            var _this = $(this);

            var itemPropuesta = {
                Codigo: PropuestaRegulacion[e] == null ? 0 : PropuestaRegulacion[e].Codigo,
                CodigoAir: itemAIR.Codigo,
                Tipotramite: itemAIR.TipoTramite,
                CodigoCuestionarioAltoimpacto: null,
                CodigoCuestionarioModeradoImpacto: null,
                Accion: _this.find("select[name^=cboAccion]")[0].value == "" ? 0 : _this.find("select[name^=cboAccion]")[0].value,
                NombredelTramite: _this.find(".Nombre")[0].value,
                Tipo: "",
                Vigencia: "",
                MedioDePresentacion: _this.find(".Medio")[0].value,
                Requisitos: _this.find(".Requisitos")[0].value,
                Poblacion: _this.find(".Poblacion")[0].value,
                Ficta: _this.find(".Ficta")[0].value,
                Plazo: _this.find(".Plazo")[0].value,
                Homoclave: "",
                Justificacion: _this.find(".Justificacion")[0].value,
            }

            if (PropuestaRegulacion[e] == null) {
                PropuestaRegulacion.push(itemPropuesta);
            } else {
                PropuestaRegulacion[e] = itemPropuesta;
            }


        });



        var item = {
            Codigo: idemergencia,
            codigoAnteproyecto: id,
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
            pregunta24: pregunta24,
            pregunta25: pregunta25,
            pregunta26: pregunta26,
            pregunta27: pregunta27,

        };

        console.log(JSON.stringify(item));


        var param = {
            type: "POST",
            async: false,
            url: "CuestionarioEmergencia.aspx/Guardar",
            data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify(tokenFile) + ", listFiles:" + JSON.stringify(listFiles) + " }",
            method: function (data) {

                if (data.Message != undefined && data.Message.length > 0) {
                    hideProcessing();
                    errorMessage(data.Message);
                    return false;
                }

                for (var i = 0; i < PropuestaRegulacion.length; i++) {

                    PropuestaRegulacion[i].CodigoCuestionarioEmergencia = data.idemergencia;

                }

                var paramTablas = {
                    type: "POST",
                    async: false,
                    url: "CuestionarioEmergencia.aspx/GuardarTablas",
                    data: "{ item:" + JSON.stringify(PropuestaRegulacion) + " }",
                    method: function (dataTablas) {

                        if (dataTablas.Message != undefined && dataTablas.Message.length > 0) {
                            hideProcessing()
                            errorMessage(dataTablas.Message);
                            return false;
                        }

                if (autorizado == "btnAutorizar") {

                    itemAIR.UsuarioActual = 1;
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
                    url: "AIRList.aspx/AIRProcesoDictamen",
                    data: "{ item:" + JSON.stringify(itemAIR) + " }",
                    method: function (data2) {

                        if (data2.Message != undefined && data2.Message.length > 0) {
                            hideProcessing();
                            errorMessage(data2.Message);
                            return false;
                        }

                        hideProcessing();
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
    } else {
        warningMessage("El proyecto aún no cuenta con fecha de publicación en el DOF");
        $("#fechaPub").addClass("error").focus();
        return;
    }

});

function VerificarNewTable() {

    var contvacio = 0;
    var tablas = $(".tableadd");
    $(tablas).each(function (e) {
        var _this = $(this);
        _this.find("select[name^=cboAccion]")[0].value.trim() == ""? contvacio++ : null ;
        _this.find(".Nombre")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Medio")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Requisitos")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Poblacion")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Ficta")[0].value.trim() == "" ? contvacio++ : null;
        _this.find(".Plazo")[0].value.trim() == "" ? contvacio++ : null;
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
                "<td class='text-center'  style='width:20%'><h6><strong>Medio de presentación</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Medio' name='Medio" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Requisitos</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Requisitos' name='Requisitos" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Población a la que impacta</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Poblacion' name='Poblacion" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Ficta</strong></h6></td>" +
                "<td class='pt-3-half ' ><textarea rows='2' class='form-control Ficta' name='Ficta" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +

            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Plazo</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Plazo' name='Plazo" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +


            "<tr>" +
                "<td class='text-center'  style='width:20%'><h6><strong>Justificación</strong></h6></td>" +
                "<td class='pt-3-half '  ><textarea rows='2' class='form-control Justificacion' name='Justificacion" + id + "' placeholder='....' required></textarea></td>" +
            "</tr>" +
                
           "<tr>" +
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

    } else {

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

    $("#textEmergenciaq1").val("");
    $("#textEmergenciaq2").val("");
    $("#textEmergenciaq3").val("");
    $("#check1")[0].checked = false;
    $("#check2")[0].checked = false;
    $("#check3")[0].checked = false;
    $("#check4")[0].checked = false;
    $("#check5")[0].checked = false;
    $("#check6")[0].checked = false;
    $("#check7")[0].checked = false;
    $("#textEmergenciaq5").val("");
    $("#textEmergenciaq6").val("");
    $("#textEmergenciaq7").val("");
    //$("#tdRegPropuesta1").html("");
    ////$("#tdRegPropuesta2").html("");
    ////$("#tdRegPropuesta3").html("");
    //$("#tdRegPropuesta4").html("");
    //$("#tdRegPropuesta5").html("");
    //$("#tdRegPropuesta6").html("");
    //$("#tdRegPropuesta7").html("");
    //$("#tdRegPropuesta8").html("");
    ////$("#tdRegPropuesta9").html("");
    //$("#tdRegPropuesta10").html("");
    $("#textEmergenciaq8").val("");
    $("#textEmergenciaq9").val("");
    $("#textEmergenciaq10").val("");
    $("#textEmergenciaq11").val("");
    $("#checkConstanciaPublicidad")[0].checked = false;
    $("#checkConsultaPublica")[0].checked = false;
    //var cboAccion = $("#cboAltoImpactoq17");
    //cboAccion.select2("val", "");


    $("li").parent().remove();
    $(".form-control.error").removeClass("error");
    $("#fileUpload").val("");
    $(".message.error").css("display", "none");
    id = 0;
}

$("#btnGuardarFechaDOF").on("click", function () {

    var fechadof = $("#fechaPub").val().split("/");

    itemAIR.FechaPublicacionDOF = fechadof[1] + "/" + fechadof[0] + "/" + fechadof[2];

    if (itemAIR.FechaPublicacionDOF == "" || fechadof.length != 3) {
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