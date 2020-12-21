var itemAIR = [];
var itemRow = 0;

$(document).ready(function () {
    FillTable(0);
});

function FillTable(index) {

   
    switch (index) {
        case 0:

            showProcessing("Cargando...");

            $.ajax({
                type: "GET",
                async: false,
                url: "Handlers/AIRHandler.ashx",
                data: { method: "ObtenerProyectosDictaminar" },
                complete: function (datan) {

                    var data = datan.responseJSON;
                    var append = "";
                    var appendthead = "";

                    appendthead =
                    "<tr>" +
                        "<th class='text-center'>Folio</th>" +
                        "<th class='text-center'>Tipo de MIR</th>" +
                        "<th class='text-center'>Nombre</th>" +
                        "<th class='text-center'>Nombre de Dependencia</th>" +
                        "<th class='text-center'>Estatus</th>" +
                        "<th class='text-center col-lg-1'>Revisar Proyecto</th>" +
                        "<th class='text-center col-lg-1'>Emitir Dictamen</th>" +
                        "<th class='text-center col-lg-1'>Mostrar a Consulta Pública</th>" +
                    "</tr>";


                    var tipotramite = "";

                    for (var i = 0; i < data.Items.length; i++) {

                        var item = data.Items[i];
                        var clasetramite = "class='success'";

                        var tipotramiteleyenda = item.NombreTramite[item.TipoTramite - 1].Nombre;
                        var disabled = "";
                        var title = "";
                        var item = data.Items[i];
                        var clase = "glyphicon glyphicon-arrow-right";
                        var claseDictamen = "glyphicon glyphicon-list-alt";
                        var Consultapublica = "glyphicon glyphicon-comment";
                        var estatus = "EN PROCESO"
                        var clasetd = "class='warning'"
                        var ruta = "OpcionCalculadora.aspx?id=" + item.CodigoAnteproyecto;


                        $.ajax({
                            type: "GET",
                            async: false,
                            url: "Handlers/AIRHandler.ashx",
                            data: { method: "ObtenerAIRid", args: { id: item.CodigoAnteproyecto } },
                            complete: function (data2) {

                                itemAIR = data2.responseJSON;
                                hideProcessing();

                                if (itemAIR.ConsultaPublica) {
                                    Consultapublica = "glyphicon glyphicon-ok";

                                }

                                if (itemAIR.Codigo != 0) {
                                    switch (itemAIR.Estatus) {

                                        case "PROCESO CONCLUIDO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            break;
                                        case "EN VALIDACION ":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            disabled = "disabled"
                                            break;
                                        case "RECHAZADO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            break;
                                        case "PROCESO DE DICTAMINADO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            break;
                                        case "VALIDADO":
                                            estatus = itemAIR.Estatus;
                                            break;
                                        default:
                                            break;

                                    }
                                    if (itemAIR.TipoTramite == 1) {
                                        estatus = itemAIR.Estatus;
                                        clasetd = "class='warning'";
                                        disabled = "disabled";
                                    }
                                    if (itemAIR.TipoTramite == 3) {

                                        if (itemAIR.AltoImpacto) {

                                            tipotramiteleyenda = "Calculadora de Alto Impacto ";

                                        } else {

                                            tipotramiteleyenda = "Calculadora de Moderado Impacto";

                                        }

                                    }


                                }
                            },
                        });



                        append +=

                            "<tr>" +
                                "<td>" + item.Folio + "</td>" +
                                "<td " + clasetramite + ">" + tipotramiteleyenda + "</td>" +
                                "<td>" + item.Anteproyecto + "</a></td>" +
                                "<td>" + item.Dependencia.Nombre + "</td>" +
                                "<td " + clasetd + " >" + estatus + "</td>" +
                               "<td class='col-sm-1 text-center'><a href='" + ruta + "' class='btn' ><span class='" + clase + "'></span></a></td>" +
                               "<td class='col-sm-1 text-center'><a href='DictamenEdit.aspx?id=" + item.CodigoAnteproyecto + "&TT=" + itemAIR.TipoTramite + "&mir=" + itemAIR.Codigo + "' class='btn'><span class='" + claseDictamen + "'></span></a></td>" +
                               "<td class='col-sm-1 text-center'><a id='" + item.Codigo + "'class='btn btn-row' data-toggle='modal' data-target='#modalConsultaPublica' ><span  class='" + Consultapublica + "'></span></a></td>" +

                            "</tr>";
                    }
                    $("#tbody").empty().append(append);
                    $("#thead").empty().append(appendthead);
                    $("#dataTable").DataTable().draw();
                },
                unblockMessage: true
            });
            hideProcessing();


            break;
        case 1:

            showProcessing("Cargando...");

            $.ajax({
                type: "GET",
                async: false,
                url: "Handlers/AIRHandler.ashx",
                data: { method: "ObtenerProyectosDictaminarActualizacion" },
                complete: function (datan) {

                    var data = datan.responseJSON;
                    var append = "";
                    var appendthead = "";

                    appendthead =
                    "<tr>" +
                        "<th class='text-center'>Folio</th>" +
                        "<th class='text-center'>Fecha Inicio</th>" +
                        "<th class='text-center'>Tipo de MIR</th>" +
                        "<th class='text-center'>Nombre</th>" +
                        "<th class='text-center'>Nombre de Dependencia</th>" +
                        "<th class='text-center'>Estatus</th>" +
                        "<th class='text-center col-lg-1'>Revisar Proyecto</th>" +
                        "<th class='text-center col-lg-1'>Emitir Dictamen</th>" +
                        "<th class='text-center col-lg-1'>Mostrar a Consulta Pública</th>" +
                    "</tr>";


                    var tipotramite = "";

                    for (var i = 0; i < data.Items.length; i++) {

                        var item = data.Items[i];
                        var clasetramite = "class='success'";

                        var tipotramiteleyenda = item.NombreTramite[item.TipoTramite - 1].Nombre;
                        var disabled = "";
                        var title = "";
                        var item = data.Items[i];
                        var clase = "glyphicon glyphicon-arrow-right";
                        var claseDictamen = "glyphicon glyphicon-list-alt";
                        var Consultapublica = "glyphicon glyphicon-comment";
                        var estatus = "EN PROCESO"
                        var clasetd = "class='warning'"
                        var ruta = "OpcionCalculadora.aspx?id=" + item.CodigoAnteproyecto;
                        var rutaActualizacion = "";

                        $.ajax({
                            type: "GET",
                            async: false,
                            url: "Handlers/AIRHandler.ashx",
                            data: { method: "ObtenerMirporID", args: { id: item.Codigo } },
                            complete: function (data2) {

                                itemAIR = data2.responseJSON;
                                hideProcessing();
                                rutaActualizacion = "ActualizacionPeriodicaEdit.aspx?mir=" + itemAIR.Codigo;
                                if (itemAIR.ConsultaPublica) {
                                    Consultapublica = "glyphicon glyphicon-ok";

                                }

                                if (itemAIR.Codigo != 0) {
                                    switch (itemAIR.Estatus) {

                                        case "PROCESO CONCLUIDO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            break;
                                        case "EN VALIDACION ":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            disabled = "disabled"
                                            break;
                                        case "RECHAZADO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            break;
                                        case "PROCESO DE DICTAMINADO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            break;
                                        case "VALIDADO":
                                            estatus = itemAIR.Estatus;
                                            break;
                                        default:
                                            break;

                                    }
                                    if (itemAIR.TipoTramite == 1) {
                                        estatus = itemAIR.Estatus;
                                        clasetd = "class='warning'";
                                        disabled = "disabled";
                                    }
                                    if (itemAIR.TipoTramite == 3) {

                                        if (itemAIR.AltoImpacto) {

                                            tipotramiteleyenda = "Calculadora de Alto Impacto ";

                                        } else {

                                            tipotramiteleyenda = "Calculadora de Moderado Impacto";

                                        }

                                    }


                                }
                            },
                        });

                        var fechainicio = new Date(item.FechaCreacion);
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

                        append +=

                            "<tr>" +
                                "<td>" + item.Folio + "</td>" +
                                "<td>" + fechaf + "</a></td>" +
                                "<td " + clasetramite + ">" + tipotramiteleyenda + "</td>" +
                                "<td>" + item.Anteproyecto + "</a></td>" +
                                "<td>" + item.Dependencia.Nombre + "</td>" +
                                "<td " + clasetd + " >" + estatus + "</td>" +
                               "<td class='col-sm-1 text-center'><a href='" + rutaActualizacion + "' class='btn' ><span class='" + clase + "'></span></a></td>" +
                               "<td class='col-sm-1 text-center'><a href='DictamenEdit.aspx?id=" + item.CodigoAnteproyecto + "&TT=" + itemAIR.TipoTramite + "&mir=" + itemAIR.Codigo + "'class='btn'><span class='" + claseDictamen + "'></span></a></td>" +
                               "<td class='col-sm-1 text-center'><a id='" + item.Codigo + "'class='btn btn-row' data-toggle='modal' data-target='#modalConsultaPublica' ><span  class='" + Consultapublica + "'></span></a></td>" +

                            "</tr>";
                    }
                    $("#tbody").empty().append(append);
                    $("#thead").empty().append(appendthead);
                    $("#dataTable").DataTable().draw();
                },
                unblockMessage: true
            });
            hideProcessing();

            break;

        default:

    }

}


$("#tbody").delegate(".btn-row", "click", function () {

    itemRow = $(this)[0];

    console.log(itemRow);
    $.ajax({
        type: "GET",
        async: false,
        url: "Handlers/AIRHandler.ashx",
        data: { method: "ObtenerMirporID", args: { id: itemRow.id } },
        complete: function (data2) {

            itemAIR = data2.responseJSON;
        }
    });

    itemAIR.Estatus = itemAIR.Estatus;

    if (itemAIR.ConsultaPublica) {
        $("#modalbodyComent").html("La UNIDAD DE MEJORA ADMINISTRATIVA Y REGULATORIA acepta retirar de Dominio público el proyecto correspondiente");
        itemAIR.ConsultaPublica = false;
    } else {
        $("#modalbodyComent").html("La UNIDAD DE MEJORA ADMINISTRATIVA Y REGULATORIA acepta hacer de Dominio público el proyecto correspondiente");
        itemAIR.ConsultaPublica = true;
    };


});




$("#btnModalAceptarConsultaPublica").on("click", function () {

   
    itemAIR.Estatus = 0;
    var paramAIR = {
        type: "POST",
        async: false,
        url: "AIRList.aspx/GuardarConsultaPublica",
        data: "{ item:" + JSON.stringify(itemAIR) + " }",
        method: function (data2) {

            if (data2.Message != undefined && data2.Message.length > 0) {
                hideProcessing();
                errorMessage(data2.Message);
                return false;
            }
           
            //FillTable();
            window.location.reload();
            hideProcessing();
            successMessage();
          

            $('#modalConsultaPublica').modal('hide');
            $('body').removeClass('modal-open');//eliminamos la clase del body para poder hacer scroll
        }
    };
    ajaxRequest(paramAIR);
});


$('ul li').click(function () {

    var self = $(this);
    tablas = $('table'),
    parentList = self.parent();

    parentList.find(".active").removeClass("active");
    self.addClass("active");
    tablas.fadeOut(200);

    $('#dataTable').DataTable().destroy();
    FillTable(self.index());
    tablas.delay(400).fadeIn();

});