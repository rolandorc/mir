var itemAIR = [];
var itemRow = 0;
$(document).ready(function () {
    FillTable(0);
});

function FillTable(index) {

    switch (index) {
        case 0:

            showProcessing("Cargando...");

            var param = {
                type: "GET",
                url: "Handlers/AnteproyectoHandler.ashx",
                data: { method: "ObtenerAutorizados" },
                method: function (data) {

                    var append = "";
                    var appendthead = "";

                    appendthead +=
                    "<tr>" +
                        "<th class='text-center'>Folio</th>" +
                        "<th class='text-center'>Nombre de Proyecto</th>" +
                        "<th class='text-center'>Nombre de Enlace</th>" +
                        "<th class='text-center'>Estatus</th>" +
                        "<th class='text-center col-lg-1'>Continuar Proyecto</th>" +
                    "</tr>";


                    for (var i = 0; i < data.Items.length; i++) {

                        var item = data.Items[i];
                        var clasetramite = "class='success'";

                        var disabled = "";
                        var title = "";
                        var item = data.Items[i];
                        var clase = "glyphicon glyphicon-arrow-right"
                        var estatus = "EN PROCESO"
                        var clasetd = "class='warning'"
                        var ruta = "OpcionCalculadora.aspx?id=" + item.Codigo;
                        var show =true;



                        $.ajax({
                            type: "GET",
                            async: false,
                            url: "Handlers/AIRHandler.ashx",
                            data: { method: "ObtenerAIRid", args: { id: item.Codigo } },
                            complete: function (data2) {

                                itemAIR = data2.responseJSON;

                                if (itemAIR.Codigo != 0) {

                                    switch (itemAIR.Estatus) {

                                        case "PROCESO CONCLUIDO":
                                            clase = "glyphicon glyphicon-ban-circle"
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            disabled = "disabled"

                                            if (itemAIR.TipoTramite >= 3) {
                                                show = false;
                                            }

                                            break;
                                        case "SOLICITA MAS INFORMACIÓN":
                                            estatus = itemAIR.Estatus;
                                            break;
                                            if (itemAIR.TipoTramite == 4) {
                                                show = false;
                                            }
                                        case "EN VALIDACION ":
                                            clase = "glyphicon glyphicon-ban-circle"
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            disabled = "disabled"
                                            if (itemAIR.TipoTramite ==4) {
                                                show = false;
                                            }
                                            break;
                                        case "RECHAZADO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            if (itemAIR.TipoTramite == 4) {
                                                show = false;
                                            }
                                            break;
                                        case "PROCESO DE DICTAMINADO":
                                            clase = "glyphicon glyphicon-ban-circle"
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            disabled = "disabled"
                                            if (itemAIR.TipoTramite == 4) {
                                                show = false;
                                            }
                                            break;
                                        case "VALIDADO":
                                            estatus = itemAIR.Estatus;
                                            break;
                                            if (itemAIR.TipoTramite == 4) {
                                                show = false;
                                            }
                                        default:
                                            break;

                                    }


                                }


                            }
                        });




                        if (show) {
                            append +=
                                "<tr>" +
                                    "<td>" + item.Folio + "</td>" +
                                    "<td>" + item.Titulo + "</td>" +
                                    "<td>" + item.Usuario.Nombre + " " + item.Usuario.ApellidoPaterno + " " + item.Usuario.ApellidoMaterno + "</td>" +
                                     "<td " + clasetd + "  title=" + title + ">" + estatus + "</td>" +
                                    "<td class='col-sm-1 text-center'><a href='" + ruta + "' class='btn' " + disabled + "><span class='" + clase + "'></span></a></td>" +
                                "</tr>";
                        }


                        

                    }

                   
                    $("#tbody").empty().append(append);
                    $("#thead").empty().append(appendthead);
                    $("#dataTable").DataTable().draw();
                   
                },
                unblockMessage: true
            };
            ajaxRequest(param);


            break;
        case 1:

            showProcessing("Cargando...");

            $.ajax({
                type: "GET",
                async: false,
                url: "Handlers/AIRHandler.ashx",
                data: { method: "ObtenerProyectosActualizacionPeriodica" },
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
                        "<th class='text-center col-lg-1'>Realizar Actualización</th>" +
                    "</tr>";
                    var tipotramite = "";

                    for (var i = 0; i < data.Items.length; i++) {

                        var item = data.Items[i];
                        var clasetramite = "class='success'";

                        var tipotramiteleyenda = item.NombreTramite[item.TipoTramite - 1].Nombre;
                        var disabled = "";
                        var title = "";
                        var item = data.Items[i];
                        var clase = "glyphicon glyphicon-arrow-right'";
                        var claseDictamen = "glyphicon glyphicon-list-alt";
                        var Consultapublica = "glyphicon glyphicon-comment";
                        var estatus = "EN PROCESO"
                        var clasetd = "class='warning'"
                        var ruta = "OpcionCalculadora.aspx?id=" + item.CodigoAnteproyecto;
                        var rutaActualizacion = "";
                        var pass = 0;


                        $.ajax({
                            type: "GET",
                            async: false,
                            url: "Handlers/AIRHandler.ashx",
                            data: { method: "ObtenerAIRidCalculadoraDictamen", args: { id: item.CodigoAnteproyecto } },
                            complete: function (data2) {

                                itemAIR = data2.responseJSON;
                                hideProcessing();
                                rutaActualizacion = "ActualizacionPeriodicaEdit.aspx?mir=" + itemAIR.Codigo+"&pass="+pass;
                               

                                if (itemAIR.ConsultaPublica) {
                                    Consultapublica = "glyphicon glyphicon-ok";

                                }

                                if (itemAIR.Codigo != 0) {
                                    switch (itemAIR.Estatus) {

                                        case "PROCESO CONCLUIDO":
                                            estatus = 'APTO P/ ACTUALIZACIÓN';
                                            pass = 1;
                                            rutaActualizacion = "ActualizacionPeriodicaEdit.aspx?mir=" + itemAIR.Codigo + "&pass=" + pass;
                                            clasetd = "class='warning'"
                                            //disabled = "disabled"
                                            //clase = "glyphicon glyphicon-ban-circle'";
                                            break;
                                        case "EN VALIDACION ":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            disabled = "disabled"
                                            clase = "glyphicon glyphicon-ban-circle'";
                                            break;
                                        case "RECHAZADO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            break;
                                        case "PROCESO DE DICTAMINADO":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            disabled = "disabled"
                                            clase = "glyphicon glyphicon-ban-circle'";
                                            break;
                                        case "VALIDADO":
                                            estatus = itemAIR.Estatus;
                                            disabled = "disabled"
                                            clase = "glyphicon glyphicon-ban-circle'";
                                            break;
                                        case "SOLICITA MAS INFORMACIÓN":
                                            estatus = itemAIR.Estatus;
                                            clasetd = "class='warning'"
                                            break;
                                        default:
                                            break;

                                    }


                                }
                            },
                        });

                        if (item.Actualizado == true) {

                            estatus = 'ACTUALIZADO';
                            clasetd = "class='warning'"
                            disabled = "disabled"
                            clase = "glyphicon glyphicon-ban-circle'";

                        }


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
                               "<td class='col-sm-1 text-center'><a href='" + rutaActualizacion + "'  class='btn' " + disabled + " ><span class='" + clase + "></span></a></td>" +

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
