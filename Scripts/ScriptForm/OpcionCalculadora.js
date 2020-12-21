var id = 0;
var type =0;
var idtype = 0;
var idpr = 0;
var itemAIR = [];
$(document).ready(function () {

    $("select").select2();
    
    if (($(document)["0"].URL.search(/OpcionCalculadora.aspx/i) != -1)){
        $("#OpcionCalculadora").show();
        $("<div>", { 'class': 'row' }).append(
            $('<div>', { 'class': 'col-lg-12' }).append(
                $('<textarea>', {
                    'class': 'form-control  resumen ', 'id': 'comentarioOrden',
                    'name': 'comentarioOrden', 'rows': '4', 'placeholder': 'Por favor Argumente Su Elección'
                }))).appendTo('#formOrden');

        $("#comentarioOrden").hide();
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


    id = GetURLParameter("id");

    if (id === undefined) {
        id = 0;
    }

    if (id != 0) {


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

            data.TipoAIR.pop();
            LoadSelects(cboAir, data.TipoAIR, true);

            cboAir.select2("val", "");
            //cboAir.find("option[value='" + 4 + "']").prop("disabled", true);

            if (id == 0) {
                id = 0;

                return false;
            }
            $.ajax({
                type: "GET",
                url: "Handlers/AIRHandler.ashx",
                async: false,
                data: { method: "ObtenerAIRid", args: { id: id } },
                complete: function (data1) {

                    itemAIR = data1.responseJSON;


                    idtype = itemAIR.CodigoTramite;
                    if (itemAIR.Codigo != 0) {


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
                        $("#lblDiastrans").html("Días Transcurridos: " + +itemAIR.CicloVidaAir.diastranscurridos);
                        

                        $(".fechaproceso").show();



                        switch (itemAIR.Estatus) {
                            case "PROCESO CONCLUIDO":
                                $("#OpcionCalculadora").show();
                                $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);

                                if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                    $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                }
                                validarproyecto(itemAIR.TipoTramite, itemAIR.CodigoTramite, id);
                                break;
                            case "SOLICITA MAS INFORMACIÓN":

      

                                $("#OpcionCalculadora").show();
                                $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion);
                                $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento);
                                $("#cboAir").select2("val", itemAIR.TipoTramite);
                                if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                    $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", false);

                                }
                                $('#cboAir').trigger('change.select2');

                                break;
                            case "EN PROCESO":
                                $("#OpcionCalculadora").show();
                                $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion);
                                $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento);
                                $("#cboAir").select2("val", itemAIR.TipoTramite);

                                if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                    $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show();

                                }

                                validarproyecto(itemAIR.TipoTramite, itemAIR.CodigoTramite, id);
                                break;
                            case "EN VALIDACION ":

                                $("#OpcionCalculadora").show();
                                $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);

                                if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                    $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                }

                                validarproyecto(itemAIR.TipoTramite, itemAIR.CodigoTramite, id);

                                break;
                            case "RECHAZADO":



                                $("#OpcionCalculadora").show();
                                $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion);
                                $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento);
                                $("#cboAir").select2("val", itemAIR.TipoTramite);
                                
                                if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                    $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", false);

                                }
                                $('#cboAir').trigger('change.select2');

                                break;
                            case "PROCESO DE DICTAMINADO":
                                $("#OpcionCalculadora").show();
                                $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);

                                if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                    $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                }
                                validarproyecto(itemAIR.TipoTramite, itemAIR.CodigoTramite, id);
                                break;
                            case "VALIDADO":
                                $("#OpcionCalculadora").show();
                                $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);

                                if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                    $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                }
                                if (itemAIR.TipoTramite == 1) {

                                    window.location.replace("CuestionarioEmergencia.aspx?id=" + id);
                                }
                                break;
                            default:

                        }


                    }

                    var paramComent = {
                        type: "GET",
                        url: "Handlers/ComentarioHandler.ashx",
                        data: { method: "ObtenerComentario", args: { id: id } },
                        method: function (data2) {

                            if (data2.Items.length != 0) {


                                switch (itemAIR.Estatus) {
                                    case "PROCESO CONCLUIDO":
                                        $("#OpcionCalculadora").show();
                                        $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                        $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                        $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);

                                        if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                            $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                        }
                                        break;

                                    case "SOLICITA MAS INFORMACIÓN":

                                     

                                        $("#OpcionCalculadora").show();
                                        $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion);
                                        $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento);
                                        $("#cboAir").select2("val", itemAIR.TipoTramite);

                                        if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                            $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", false);

                                        }
                                        $("#txtComents").val(data2.Items[data2.Items.length - 1].Comentario);
                                        $("#divComents").show();
                                        break;
                                    case "EN PROCESO":

                                        $("#OpcionCalculadora").show();
                                        $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion);
                                        $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento);
                                        $("#cboAir").select2("val", itemAIR.TipoTramite);

                                        if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                            $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show();

                                        }
                                        
                                        break;
                                    case "EN VALIDACION ":

                                        $("#OpcionCalculadora").show();
                                        $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                        $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                        $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);

                                        if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                            $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                        }
                                        
                                        break;

                                    case "RECHAZADO":

                                      

                                        $("#OpcionCalculadora").show();
                                        $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion);
                                        $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento);
                                        $("#cboAir").select2("val", itemAIR.TipoTramite);

                                        if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                            $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", false);

                                        }
                                        $("#txtComents").val(data2.Items[data2.Items.length - 1].Comentario);
                                        $("#divComents").show();

                                        break;

                                    case "PROCESO DE DICTAMINADO":

                                        $("#OpcionCalculadora").show();
                                        $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                        $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                        $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);

                                        if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                            $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                        }
                                       
                                        break;

                                    case "VALIDADO":

                                        $("#OpcionCalculadora").show();
                                        $("#cboRegulacion").select2("val", itemAIR.TipoRegulacion).prop("disabled", true);
                                        $("#cboOrdenamiento").select2("val", itemAIR.TipoOrdenamiento).prop("disabled", true);
                                        $("#cboAir").select2("val", itemAIR.TipoTramite).prop("disabled", true);

                                        if ((itemAIR.ComentarioOrdenamiento != "") && (itemAIR.TipoOrdenamiento == 6)) {

                                            $("#comentarioOrden").val(itemAIR.ComentarioOrdenamiento).show().prop("disabled", true);

                                        }
                                        validarproyecto(itemAIR.TipoTramite, itemAIR.CodigoTramite, id);

                                        break;

                                    default:
                                        break;

                                }

                            }

                        }
                    };
                    ajaxRequest(paramComent);


                }
            });
           
        },
        unblockMessage: true
    };

    ajaxRequest(param);



    
    };
   
    


   

});




$('#cboAir, #cboRegulacion, #cboOrdenamiento').on('change.select2', function (e) {
  
    var cboAir = $("#cboAir")
    var cboRegulacion = $("#cboRegulacion");
    var cboOrdenamiento = $("#cboOrdenamiento");

    idAIR          = $("#cboAir").select2("data");
    idRegulacion   = $("#cboRegulacion").select2("data");
    idOrdenamiento = $("#cboOrdenamiento").select2("data");
    console.log($(document)["0"].URL);


    if (idOrdenamiento.id == 6) {

        $("#comentarioOrden").show();

    } else {

        $("#comentarioOrden").hide();
        $("#comentarioOrden").val("");
    }

    if ((idAIR.id != "") && (idRegulacion.id != "") && (idOrdenamiento.id != "")) {


        //$("#comentarioOrden").prop("disabled", false);
        if ((idOrdenamiento.id == 6) && ($("#comentarioOrden").val() == "")) {

            warningMessage("Argumente su Elección");
            $("#comentarioOrden").addClass('error');

            setTimeout(function () {
                $("#comentarioOrden").removeClass('error');
            }, 5000);

            return;

        }
        //$("#comentarioOrden").prop("disabled",true);


        switch (parseInt(idAIR.id)) {
            case 1:
                    $("#Loadpages").html("<form class='formsave'>" +
                                    "<div class='form-block same-group'> "+
                                        "<h2>Formato para Emergencia </h2>"+
                                            "<br />"+
                                                "<div class='row'>"+
                                                    "<div class='col-lg-8'>"+
                                                         "<div class='form-group'>"+
                                                            "<label>Seleccione el sector que atiende su MIR: <span class='required'></span></label>"+
                                                            "<select class='form-control' id='cboSector' name='cboSector' required></select>"+
                                                        "</div>"+
                                                    "</div>"+
                                                 "</div>"+
                                            "<br />"+
                                                "<div class='row'>"+
                                                    "<div class='col-lg-12'>"+
                                                        "<div class='form-group'>"+
                                                            "<label>¿Qué población o industria afecta? (Unidades Económicas)<span class='required'></span></label>"+
                                                            "<textarea rows='10' class='form-control' id='textPoblacion' name='textPoblacion' placeholder='....' required></textarea>" +
                                                        "</div>"+
                                                    "</div>"+
                                                "</div>"+
                                            "<br />"+
                                                "<div class='row'>"+
                                                    "<div class='col-lg-12'>"+
                                                        "<div class='form-group'>"+
                                                            "<label>Justifique que la situación que se prentende resolver o prevenir es una emergencia: <span class='required'></span></label>"+
                                                                "<textarea rows='10' class='form-control' id='textJustificacion'  name='textJustificacion' placeholder='....'required></textarea>" +
                                                         "</div>"+
                                                    "</div>"+
                                                "</div>"+
                                    "</div>"+
                            "</form>"+
      
                            "<div class='actions-group col-lg-12 text-right'>"+
                                "<button type='button' id='btnEnviar' class='btn btn-info'>Enviar Solicitud de Emergencia a Validar</button"+
                            "</div>" +
                            "<script src='Scripts/ScriptForm/CuestionarioSectorEmergencia.js?v=1.2'></script>");
                break;
            case 2:

                    $("#Loadpages").html(  "<form class='formsave'>"+
                                                "<div class='form-group'>" +
                                                    "<div class='form-block same-group'>"+                  
                                                        "<h2>Formato para la exención de MIR </h2>"+
                                                        "<div class='form-group'>" +
                                                            "<div class='row'>"+
                                                                 "<div class='col-lg-12'>"+
                                                                     "<label class='text-uppercase'>Definición del problema y objetivos generales de la regulación <span class='required'></span></label>"+
                                                                 "</div>"+
                                                            "</div>" +
                                                            "<div class='row'>"+
                                                                "<div class='col-lg-12'>" +
                                                                    "<textarea rows='2' class='form-control mediumbold normaltext' id='exencionq1' disabled>1) Explique brevemente en que consiste la regulación propuesta así como sus objetivos generales</textarea>"+  
                                                                "</div>"+
                                                            "</div>"+
                                                            "<div class='row'>" +
                                                                "<div class='col-lg-12'>"+
                                                                    "<textarea rows='4' class='form-control normaltext' id='textExencionQ1'  name='textExencionQ1' placeholder='....' required></textarea>" +
                                                                "</div>"+
                                                            "</div>" +
                                                         "</div>"+
                                                    "<div class='form-group'>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-12'>"+
                                                                "<label class='text-uppercase'>Impacto de la regulación <span class='required'></span></label>"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-12'>"+
                                                                "<textarea rows='2' class='form-control mediumbold normaltext' id='exencionq2' disabled>2) Justifique las razones por las que considera que la regulación propuesta no genera costos de cumplimiento para los particulares independientemente de los beneficios que ésta genera</textarea>"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-12'>"+
                                                                "<textarea rows='4' class='form-control normaltext' id='textExencionQ2' name='textExencionQ2' placeholder='....' required></textarea>" +
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-12'>"+
                                                                "<textarea rows='2' class='form-control mediumbold normaltext' id='exencionq3' disabled>3) Indique cuál(es) de las siguientes acciones corresponde(n) a la regulación propuesta</textarea>"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-10'>"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<label class='text-uppercase'>SI</label>"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<label class='text-uppercase'>NO</label>"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-10'>"+
                                                                "<textarea rows='3' class='form-control normaltext radiob' id='opcion1q3' disabled>Crea nuevas obligaciones y/o sanciones para los particulares o hace más estrictas las existentes</textarea>"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<Input type ='radio' class='checkbox checkTrue' id='check11' name='check1' />"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<Input type ='radio' class='checkbox rb4' id='check12' name='check1' />" +
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-10'>"+
                                                                "<textarea rows='3' class='form-control normaltext radiob' id='opcion2q3' disabled>Modifica o crea trámites que signifiquen mayores cargas administrativas o costos de cumplimiento para los particulares</textarea>"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<Input type ='radio' class='checkbox checkTrue' id='check21' name='check2' />"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<Input type ='radio' class='checkbox rb4' id='check22' name='check2' />"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-10'>"+
                                                                "<textarea rows='3' class='form-control normaltext radiob' id='opcion3q3' disabled>Reduce o restringe prestaciones o derechos para los particulares</textarea>"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<Input type ='radio' class='checkbox checkTrue' id='check31' name='check3' />"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<Input type ='radio' class='checkbox rb4' id='check32' name='check3' />"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-10'>"+
                                                                "<textarea rows='3' class='form-control normaltext radiob' id='opcion4q3' disabled>Establece o modifica definiciones, clasificaciones, metodologías, criterios, caracterizaciones o cualquier otro término de referencia, afectando derechos, obligaciones, prestaciones o trámites de los particulares </textarea>"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<Input type ='radio' class='checkbox checkTrue' id='check41' name='check4' />"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>"+
                                                                "<Input type ='radio' class='checkbox rb4' id='check42' name='check4' />"+
                                                            "</div>"+
                                                        "</div>"+
                                                    "</div>"+
                                                    "<div class='form-group'>"+
                                                        "<div class='row'>"+
                                                             "<h2>Archivos Adjuntos</h2>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-12'>"+
                                                                "<textarea rows='2' class='form-control mediumbold normaltext' id='anexos' disabled>Anexe las versiones electrónicas de los documentos consultados o elaborados para diseñar la regulación</textarea>"+
                                                            "</div>"+
                                                        "</div>"+
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-6'>"+
                                                                "<input type='file' class='form-control-file' id='fileUpload'  accept='.pdf'  max-size=10096000  >" +
                                                            "</div>"+
                                                            "<div class='col-lg-6'>"+
                                                                "<label>Archivos Cargados</label>"+
                                                                "<ul class='files-list'>"+
                                                                "</ul>"+
                                                            "</div>"+
                                                            "<div class='col-lg-12'>"+
                                                                "<button type='button' id='btnUploadFile'class='btn btn-success'>Cargar Archivos</button>"+
                                                            "</div>"+
                                                        "</div>"+
                                                    "</div>"+
                                                    "</div>"+
                                                    "<div class='form-group'>" +
                                                           "<div class='row'>" +
                                                            "<div class='col-lg-10'>" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<label class='text-uppercase'>SI<label>" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<label class='text-uppercase'>NO</label>" +
                                                            "</div>" +
                                                        "</div>" +
                                                        "<div class='row'>"+
                                                            "<div class='col-lg-10'>"+
                                                                "<Input disabled class='form-control normaltext' id='idPublicacion' value='Requiere que este proyecto NO sea publicado' />"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox rb1' id='checkConsultaPublica' name='check5' value='true' />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox rb1' id='check52' name='check5'  value='false' />" +
                                                            "</div>" +
                                                        "</div>" +

                                                        "<div class='row' id='areajustificacion' style='display:none'>" + 
                                                            "<div class='col-lg-6'>" +
                                                                "<textarea rows='4' class='form-control normaltext' id='textareajustificacion' name='textareajustificacion' placeholder='Argumente Su Elección' ></textarea>"+
                                                                "<br>"+
                                                            "</div>"+ 
                                                        "</div>"+

                                                        "<div class='row'>"+
                                                            "<div class='col-lg-10'>"+
                                                                "<Input disabled class='form-control normaltext' id='idConstancia' value='Indicar si se requiere la Constancia de Publicidad' />"+
                                                            "</div>"+
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox rb2' id='checkConstanciaPublicidad' name='check6' value= true />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox rb2' id='check62' name='check6'  value= false />" +
                                                            "</div>" +
                                                        "</div>"+
                                                    "</div>"+
                                                "</div>"+
                                        "</form>"+
                                                    "<div class='actions-group col-lg-12'>"+
                                                        "<button type='button' class='btn btn-success' id='btnGuardar'><span class='glyphicon glyphicon-ok'></span> Guardar</button>"+
                                                        "<button type='button' class='btn btn-primary' id='btnAutorizar'><span class='glyphicon glyphicon-file'></span> Autorizar</button>"+
                                                        "<button type='button' class='btn btn-info' id='btnRegresar'><span class='glyphicon glyphicon-arrow-left'></span> Regresar a listado</button>"+
                                                    "</div>" +

                                    "<!-- Modal -->" +
                                    "<div class='modal fade' id='modalExencion2' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
                                      "<div class='modal-dialog modal-dialog-centered' role='document'>" +
                                        "<div class='modal-content'>" +
                                          "<div class='modal-header'>" +
                                            "<h5 class='modal-title' id='exampleModalLongTitle'>Formato para la exención de MIR</h5>" +
                                          "</div>" +
                                          "<div class='modal-body'>" +
                                          "</div>" +
                                          "<div class='modal-footer'>" +
                                           "<a id='btnExencionRegulacion2'   class='btn btn-primary btn-block'>Aceptar</a>" +
                                          "</div>" +
                                        "</div>" +
                                      "</div>" +
                                    "</div>" +
                                                    "<script src='Scripts/ScriptForm/ExencionEdit.js?v=1.1'></script>");


               

                break;
            case 3:

                $("#Loadpages").html("<form class='formsave'>"+
                                        "<div class='form-group'>"+
                                            "<div class='form-block same-group'>"+
                                                "<h2>Calculadora de Impacto</h2>"+
                                                "<div id ='CuestionarioDiv'>"+
                                                "</div>"+
                                            "</div>"+
                                        "</div>"+
                                        "<div class='actions-group col-lg-12 text-right'>"+
                                        " <button type='button' class='btn btn-success' id='btnGuardar'><span class='glyphicon glyphicon-ok'></span> Evaluar Respuestas</button>"+
                                        "</div>"+
                                    "</form>" +

                                    
                                    "<!-- Modal -->"+
                                    "<div class='modal fade' id='modalImpacto' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
                                      "<div class='modal-dialog modal-dialog-centered' role='document'>"+
                                        "<div class='modal-content'>"+
                                          "<div class='modal-header'>"+
                                            "<h5 class='modal-title' id='exampleModalLongTitle'>Calculadora de Impacto</h5>"+
                                          "</div>"+
                                          "<div class='modal-body'>"+
                                          "</div>"+
                                          "<div class='modal-footer'>" +
                                           "<a id='btnCuestionarioImpacto'   class='btn btn-primary btn-block'>Aceptar</a>" +
                                          "</div>"+
                                        "</div>"+
                                      "</div>"+
                                    "</div>" +

                                        "<script src='Scripts/ScriptForm/Cuestionario.js?v=1.1'></script>");

                break;

            default:
                break;

        }
       

    }
   
});


//ESTA FUNCION SE REPLICO A LA ANTERIOR, DANDOLE ALGUNOS CAMBIOS PARA QUE SE ADAPTE A LAS VALIDACIONES
function validarproyecto(type, idtype, idpr) {

    var cboAir = $("#cboAir")
    var cboRegulacion = $("#cboRegulacion");
    var cboOrdenamiento = $("#cboOrdenamiento");
    

    

    switch (parseInt(type)) {
        case 1:

            var idemergencia = 0;
            var display = "";
            var display2 = "";

            var param2 = {
                type: "GET",
                url: "Handlers/EmergenciaHandler.ashx",
                data: { method: "ObtenerIdEmergencia", args: { id: idpr } },
                method: function (data2) {
                    idemergencia = data2.Codigo;
                    if (idemergencia == 0) {
                        display = "style='display:none'"

                    } else {
                        display2 = "style='display:none'"
                    }


                $("#Loadpages").html("<form class='formsave'>" +
                                "<div class='form-block same-group'> " +
                                    "<h2>Validación de Formato para Emergencia </h2>" +
                                    "<br />" +
                                     "<div class='row'>" +
                                       "<a href= CuestionarioEmergencia.aspx?id=" + idpr + " target='_blank' " + display + " ><i class='glyphicon glyphicon-paperclip'></i> Cuestionario de Emergencia</a>" +
                                        "</div>" +
                                        "<div class='row'>" +
                                         "<a href= 'AnteproyectoEdit.aspx?id=" + idpr + "' target='_blank' ><i class='glyphicon glyphicon-paperclip'></i> Anteproyecto</a>" +
                                         "</div>" +
                                           "<br />" +
                                            "<br />" +
                                            "<div class='row'>" +
                                                "<div class='col-lg-8'>" +
                                                     "<div class='form-group'>" +
                                                        "<label>Seleccione el sector que atiende su MIR: <span class='required'></span></label>" +
                                                        "<select class='form-control' id='cboSector' name='cboSector' disabled></select>" +
                                                    "</div>" +
                                                "</div>" +
                                             "</div>" +
                                        "<br />" +
                                            "<div class='row'>" +
                                                "<div class='col-lg-12'>" +
                                                    "<div class='form-group'>" +
                                                        "<label>¿Qué población o industria afecta? (Unidades Económicas)<span class='required'></span></label>" +
                                                        "<textarea rows='10' class='form-control' id='textPoblacion'  name='textPoblacion' placeholder='....' disabled></textarea>" +
                                                    "</div>" +
                                                "</div>" +
                                            "</div>" +
                                        "<br />" +
                                            "<div class='row'>" +
                                                "<div class='col-lg-12'>" +
                                                    "<div class='form-group'>" +
                                                        "<label>Justifique que la situación que se prentende resolver o prevenir es una emergencia: <span class='required'></span></label>" +
                                                            "<textarea rows='10' class='form-control' id='textJustificacion' name='textJustificacion' placeholder='....'disabled></textarea>" +
                                                     "</div>" +
                                                "</div>" +
                                            "</div>" +
                                            "<br/>"+
                                "</div>" +
                        "</form>" +


                                "<!-- Modal -->" +
                                "<div class='modal fade' id='modalRechazo' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
                                  "<div class='modal-dialog modal-dialog-centered' role='document'>" +
                                    "<div class='modal-content'>" +
                                      "<div class='modal-header'>" +
                                        "<h5 class='modal-title' id='titulo1'>Comentario a Enlace</h5>" +
                                        "<h5 class='modal-title' id='titulo2'>Motivo de Rechazo</h5>" +
                                         "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
                                        " <span aria-hidden='true'>&times;</span>" +
                                        "</button>" +
                                      "</div>" +
                                      "<div class='modal-body'>" +
                                        "<textarea rows='4' class='form-control' id='ComentarioRechazo' placeholder='....' required></textarea>" +
                                      "</div>" +
                                      "<div class='modal-footer'>" +
                                       "<a id='btnEnviarComent'   class='btn btn-primary btn-block'>Enviar Comentario</a>" +
                                       "<a id='btnmodalRechazo'   class='btn btn-warning btn-block'>Enviar motivo de rechazo</a>" +
                                      "</div>" +
                                    "</div>" +
                                  "</div>" +
                                "</div>" +

                            "<div class='actions-group col-lg-12 '>" +

                            "<button type='button' " + display2 + "  class='btn btn-success' id='btnValidado'><span class='glyphicon glyphicon-ok'></span> Validar</button>" +
                            "<button type='button' " + display2 + "  class='btn btn-success' id='btnAceptar'><span class='glyphicon glyphicon-ok'></span> Aceptar</button>" +
                            "<button type='button' " + display2 + "  class='btn btn-warning' id='btnRechazar'><span class='glyphicon glyphicon-warning-sign'></span> Rechazar</button>" +
                            "<button type='button' " + display2 + "  class='btn btn-info' id='btnInfo'><span class='glyphicon glyphicon-plus'></span> Solicitar mas Información</button>" +
                            "</div>"+

                       "<div class='actions-group col-lg-12 '>" +
                            " <a href='ValidarList.aspx'  class='btn btn-primary ' id='btnRegresar'><i class='glyphicon glyphicon-arrow-left'></i> Regresar a Listado</a>" +
                        "</div>" +

                        "<script src='Scripts/ScriptForm/CuestionarioSectorEmergencia.js?v=1.2'></script>");

                

                }
            }
            ajaxRequest(param2);

                break;
            case 2:

                $("#Loadpages").html("<form class='formsave'>" +
                                            "<div class='form-group'>" +
                                                "<div class='form-block same-group'>" +
                                                    "<h2>Formato para la exención de MIR </h2>" +

                                                   "<div class='row'>" +
                                                 "<a href= 'AnteproyectoEdit.aspx?id=" + idpr + "' target='_blank' style='display:none' id='anclaidAnteproyecto'><i class='glyphicon glyphicon-paperclip'></i> Anteproyecto</a>" +
                                                 "</div>" +
                                                  "<br />" +
                                                    "<div class='form-group'>" +
                                                        "<div class='row'>" +
                                                             "<div class='col-lg-12'>" +
                                                                 "<label class='text-uppercase'>Definición del problema y objetivos generales de la regulación <span class='required'></span></label>" +
                                                             "</div>" +
                                                        "</div>" +
                                                        "<div class='row'>" +
                                                            "<div class='col-lg-12'>" +
                                                                "<textarea rows='2' class='form-control mediumbold normaltext' id='exencionq1' disabled>1) Explique brevemente en que consiste la regulación propuesta así como sus objetivos generales</textarea>" +
                                                            "</div>" +
                                                        "</div>" +
                                                        "<div class='row'>" +
                                                            "<div class='col-lg-12'>" +
                                                                "<textarea rows='4' class='form-control normaltext' id='textExencionQ1'  name='textExencionQ1' placeholder='....' required></textarea>" +
                                                            "</div>" +
                                                        "</div>" +
                                                     "</div>" +
                                                "<div class='form-group'>" +
                                                    "<div class='row'>" +
                                                        "<div class='col-lg-12'>" +
                                                            "<label class='text-uppercase'>Impacto de la regulación <span class='required'></span></label>" +
                                                        "</div>" +
                                                    "</div>" +
                                                    "<div class='row'>" +
                                                        "<div class='col-lg-12'>" +
                                                            "<textarea rows='2' class='form-control mediumbold normaltext' id='exencionq2' disabled>2) Justifique las razones por las que considera que la regulación propuesta no genera costos de cumplimiento para los particulares independientemente de los beneficios que ésta genera</textarea>" +
                                                        "</div>" +
                                                    "</div>" +
                                                    "<div class='row'>" +
                                                        "<div class='col-lg-12'>" +
                                                            "<textarea rows='4' class='form-control normaltext' id='textExencionQ2'  name='textExencionQ2' placeholder='....' required></textarea>" +
                                                        "</div>" +
                                                    "</div>" +
                                                    "<div class='row'>" +
                                                        "<div class='col-lg-12'>" +
                                                            "<textarea rows='2' class='form-control mediumbold normaltext' id='exencionq3' disabled>3) Indique cuál(es) de las siguientes acciones corresponde(n) a la regulación propuesta</textarea>" +
                                                        "</div>" +
                                                    "</div>" +
                                                    "<div class='row'>" +
                                                        "<div class='col-lg-10'>" +
                                                        "</div>" +
                                                        "<div class='col-lg-1'>" +
                                                            "<label class='text-uppercase'>SI</label>" +
                                                        "</div>" +
                                                        "<div class='col-lg-1'>" +
                                                            "<label class='text-uppercase'>NO</label>" +
                                                        "</div>" +
                                                    "</div>" +
                                                   "<div class='row'>" +
                                                            "<div class='col-lg-10'>" +
                                                                "<textarea rows='3' class='form-control normaltext radiob' id='opcion1q3' disabled>Crea nuevas obligaciones y/o sanciones para los particulares o hace más estrictas las existentes</textarea>" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox checkTrue' id='check11' name='check1' />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox' id='check12' name='check1' />" +
                                                            "</div>" +
                                                        "</div>" +
                                                        "<div class='row'>" +
                                                            "<div class='col-lg-10'>" +
                                                                "<textarea rows='3' class='form-control normaltext radiob' id='opcion2q3' disabled>Modifica o crea trámites que signifiquen mayores cargas administrativas o costos de cumplimiento para los particulares</textarea>" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox checkTrue' id='check21' name='check2' />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox' id='check22' name='check2' />" +
                                                            "</div>" +
                                                        "</div>" +
                                                        "<div class='row'>" +
                                                            "<div class='col-lg-10'>" +
                                                                "<textarea rows='3' class='form-control normaltext radiob' id='opcion3q3' disabled>Reduce o restringe prestaciones o derechos para los particulares</textarea>" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox checkTrue' id='check31' name='check3' />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox' id='check32' name='check3' />" +
                                                            "</div>" +
                                                        "</div>" +
                                                        "<div class='row'>" +
                                                            "<div class='col-lg-10'>" +
                                                                "<textarea rows='3' class='form-control normaltext radiob' id='opcion4q3' disabled>Establece o modifica definiciones, clasificaciones, metodologías, criterios, caracterizaciones o cualquier otro término de referencia, afectando derechos, obligaciones, prestaciones o trámites de los particulares </textarea>" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox checkTrue' id='check41' name='check4' />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox' id='check42' name='check4' />" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>" +
                                                    "<div class='form-group'>" +
                                                        "<div class='row'>" +
                                                        "<h2>Archivos Adjuntos</h2>" +
                                                        "</div>" +
                                                        "<div class='row'>" +
                                                            "<div class='col-lg-12'>" +
                                                                "<textarea rows='2' class='form-control mediumbold normaltext' id='anexos' disabled>Anexe las versiones electrónicas de los documentos consultados o elaborados para diseñar la regulación</textarea>" +
                                                            "</div>" +
                                                        "</div>" +
                                                        "<div class='row'>" +
                                                            "<div class='col-lg-6'>" +
                                                                "<input type='file' class='form-control-file' id='fileUpload'  accept='.pdf'  max-size=10096000  >" +
                                                            "</div>" +
                                                            "<div class='col-lg-6'>" +
                                                                "<label>Archivos Cargados</label>" +
                                                                "<ul class='files-list'>" +
                                                                "</ul>" +
                                                            "</div>" +
                                                            "<div class='col-lg-12'>" +
                                                                "<button type='button' id='btnUploadFile'class='btn btn-success'>Cargar Archivos</button>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>" +
                                                    "</div>" +
                                                    "<div class='form-group'>" +
                                                           "<div class='row'>" +
                                                            "<div class='col-lg-10'>" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<label class='text-uppercase'>SI</label>" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<label class='text-uppercase'>NO</label>" +
                                                            "</div>" +
                                                        "</div>" +
                                                        "<div class='row'>" +
                                                            "<div class='col-lg-10'>" +
                                                                "<Input disabled class='form-control normaltext' id='idPublicacion' value='Requiere que este proyecto NO sea publicado' />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox rb1' id='checkConsultaPublica' name='check5' value='true' />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox rb1' id='check52' name='check5'  value='false' />" +
                                                            "</div>" +
                                                        "</div>" +

                                                         "<div class='row' id='areajustificacion' style='display:none'>" +
                                                            "<div class='col-lg-6'>" +
                                                                "<textarea rows='4' class='form-control normaltext' id='textareajustificacion' name='textareajustificacion' placeholder='Argumente Su Elección' ></textarea>" +
                                                                "<br>" +
                                                            "</div>" +
                                                        "</div>" +

                                                        "<div class='row'>" +
                                                            "<div class='col-lg-10'>" +
                                                                "<Input disabled class='form-control normaltext' id='idConstancia' value='Indicar si se requiere la Constancia de Publicidad' />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox rb2' id='checkConstanciaPublicidad' name='check6' value= true />" +
                                                            "</div>" +
                                                            "<div class='col-lg-1'>" +
                                                                "<Input type ='radio' class='checkbox rb2' id='check62' name='check6'  value= false />" +
                                                            "</div>" +
                                                        "</div>" +

                                                    "</div>" +

                                                "</div>" +
                                        "</form>" +
                                    "</form>" +
                                                    "<div class='actions-group col-lg-12'>" +
                                                        "<button type='button' class='btn btn-success' id='btnGuardar'><span class='glyphicon glyphicon-ok'></span> Guardar</button>" +
                                                        "<button type='button' class='btn btn-primary' id='btnAutorizar'><span class='glyphicon glyphicon-file'></span> Autorizar</button>" +
                                                        "<button type='button' class='btn btn-info' id='btnRegresar'><span class='glyphicon glyphicon-arrow-left'></span> Regresar a listado</button>" +
                                                    "</div>" +

                                                  "<div class='actions-group col-lg-12 '>" +
                                                    "<button type='button'  style='display:none' class='btn btn-success' id='btnAceptar'><span class='glyphicon glyphicon-ok'></span> Aceptar</button>" +
                                                    "<button type='button'  style='display:none' class='btn btn-info' id='btnInfo'><span class='glyphicon glyphicon-plus'></span>Solicitar mas Información</button>" +
                                                    "</div>" +

                               "<!-- Modal -->" +
                                    "<div class='modal fade' id='modalExencion2' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
                                      "<div class='modal-dialog modal-dialog-centered' role='document'>" +
                                        "<div class='modal-content'>" +
                                          "<div class='modal-header'>" +
                                            "<h5 class='modal-title' id='exampleModalLongTitle'>Formato para la exención de MIR</h5>" +
                                          "</div>" +
                                          "<div class='modal-body'>" +
                                          "</div>" +
                                          "<div class='modal-footer'>" +
                                           "<a id='btnExencionRegulacion2'   class='btn btn-primary btn-block'>Aceptar</a>" +
                                          "</div>" +
                                        "</div>" +
                                      "</div>" +
                                    "</div>" +

                                "<!-- Modal -->" +
                                "<div class='modal fade' id='modalExencion' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
                                  "<div class='modal-dialog modal-dialog-centered' role='document'>" +
                                    "<div class='modal-content'>" +
                                      "<div class='modal-header'>" +
                                        "<h5 class='modal-title' id='exampleModalLongTitle'>Solicitud de Información a enlace</h5>" +
                                         "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
                                        " <span aria-hidden='true'>&times;</span>" +
                                        "</button>" +
                                      "</div>" +
                                      "<div class='modal-body'>" +
                                       "<textarea rows='4' class='form-control' id='Comentarioinfo' placeholder='....' required></textarea>" +
                                      "</div>" +
                                      "<div class='modal-footer'>" +
                                       "<a id='btnExencionRegulacion'   class='btn btn-primary btn-block'>Enviar Comentarios</a>" +
                                      "</div>" +
                                    "</div>" +
                                  "</div>" +
                                "</div>" +


                                                "<script src='Scripts/ScriptForm/ExencionEdit.js?v=1.1'></script>");




                break;
            case 3:

                $("#Loadpages").html("<form class='formsave'>" +
                                        "<div class='form-group'>" +
                                            "<div class='form-block same-group'>" +
                                                "<h2>Calculadora de Impacto</h2>" +
                                        "<div class='row'>" +
                                       "<a target='_blank' style='display:none' id='idCuestionario'><i class='glyphicon glyphicon-paperclip'></i> Cuestionario de Impacto</a>" +
                                        "</div>" +
                                        "<div class='row'>" +
                                         "<a href= 'AnteproyectoEdit.aspx?id=" + idpr + "' target='_blank' style='display:none' id='idanteproyecto'><i class='glyphicon glyphicon-paperclip'></i> Anteproyecto</a>" +
                                         "</div>" +
                                                "<div id ='CuestionarioDiv'>" +
                                                "</div>" +
                                            "</div>" +
                                        "</div>" +
                                                        "<div class='row' id='idRowConsulta' style='display:none'>" +
                                                        "<div class='col-lg-3'>" +
                                                            "<label>Exponer a Consulta Publica:</label>" +
                                                        "</div>" +
                                                        "<div class='col-lg-1'>" +
                                                            "<Input type ='checkbox' class='checkbox' id='checkConsulta' name='check32' />" +
                                                        "</div>" +
                                                        "<div class='col-lg-12'>" +
                                                           "<button type='button' class='btn btn-success' id='btnAceptarConsulta'><span class='glyphicon glyphicon-ok'></span> Aceptar Cambio</button>" +
                                                        "</div>" +

                                                    "</div>" +
                                        "<div class='actions-group col-lg-12 text-right'>" +
                                        " <button type='button' class='btn btn-success' id='btnGuardar'><span class='glyphicon glyphicon-ok'></span> Evaluar Respuestas</button>" +
                                        "</div>" +
                                    "</form>" +

                                    "<div class='actions-group col-lg-12'>" +
                                    "<button type='button' class='btn btn-info' id='btnRegresar'><span class='glyphicon glyphicon-arrow-left'></span> Regresar a listado</button>" +
                                "</div>" +

                                "<div class='actions-group col-lg-12 '>" +
                                "<button type='button'  style='display:none' class='btn btn-success' id='btnAceptar'><span class='glyphicon glyphicon-ok'></span> Aceptar</button>" +
                                "<button type='button'  style='display:none' class='btn btn-info' id='btnInfo'><span class='glyphicon glyphicon-plus'></span>Solicitar mas Información</button>" +
                                "</div>" +




                                "<!-- Modal -->" +
                                "<div class='modal fade' id='modalRechazo' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>" +
                                  "<div class='modal-dialog modal-dialog-centered' role='document'>" +
                                    "<div class='modal-content'>" +
                                      "<div class='modal-header'>" +
                                        "<h5 class='modal-title' id='titulo1'>Comentario a Enlace</h5>" +
                                        "<h5 class='modal-title' id='titulo2'>Motivo de Rechazo</h5>" +
                                          "<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
                                        " <span aria-hidden='true'>&times;</span>" +
                                        "</button>" +
                                      "</div>" +
                                      "<div class='modal-body'>" +
                                        "<textarea rows='4' class='form-control' id='ComentarioRechazo' placeholder='....' required></textarea>" +
                                      "</div>" +
                                      "<div class='modal-footer'>" +
                                       "<a id='btnEnviarComent'   class='btn btn-primary btn-block'>Enviar Comentario</a>" +
                                       "<a id='btnmodalRechazo'   class='btn btn-warning btn-block'>Enviar motivo de rechazo</a>" +
                                      "</div>" +
                                    "</div>" +
                                  "</div>" +
                                "</div>" +

                                        "<script src='Scripts/ScriptForm/Cuestionario.js?v=1.1'></script>");

                break;

            default:
                break;

        }



};