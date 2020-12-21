
$(document).ready(function () {
    FillTable(0);
});

function FillTable(index) {


    switch (index) {
        case 0:


            showProcessing("Cargando...");

            var param = {
                type: "GET",
                url: "Handlers/AIRHandler.ashx",
                data: { method: "ObtenerAIR"},
                method: function (data) {


                    var append = "";
                    var appendthead = "";

                    appendthead +=
                    "<tr>"+
                        "<th class='text-center'>Folio</th>"+
                        "<th class='text-center'>Nombre</th>"+
                        "<th class='text-center'>Dependencia</th>"+
                        "<th class='text-center'>Ver Anteproyecto</th>"+
                        "<th class='text-center'>Ver Cuestionario</th>"+
                        "<th class='text-center'>Ver Dictamen</th>"+
                        "<th class='text-center col-lg-1'>Ver Tiempos</th>"+
                    "</tr>";


                    for (var i = 0; i < data.Items.length; i++) {



                        var disabled = "disabled";
                        var disabled2 = "disabled";
                        var title = "";
                        var item = data.Items[i];
                        var clase = "glyphicon glyphicon-cog"
                        var ruta = "OpcionCalculadora.aspx?id=" + item.CodigoAnteproyecto;

                        if (item.Estatus == 2 || item.Estatus == 7) {

                            disabled = "";

                        }

                        if (item.Estatus == 7) {

                            disabled2 = "";

                        }

                        append +=

                            "<tr title = '" + title + "'>" +
                                "<td>" + item.Folio + "</td>" +
                                "<td>" + item.Titulo + "</td>" +
                                 "<td>" + item.NombreDependencia + "</td>" +
                                "<td class='col-sm-1 text-center'   ><a target='_blank' href='AnteproyectoEdit.aspx?id=" + item.CodigoAnteproyecto + "' class='btn'><span class='" + clase + "'></span></a></td>" +
                                "<td class='col-sm-1 text-center'><a target='_blank'  href='" + ruta + "' class='btn' " + disabled + " ><span class='" + clase + "'></span></a></td>" +
                                "<td class='col-sm-1 text-center'><a target='_blank'  href='DictamenEdit.aspx?id=" + item.CodigoAnteproyecto + "' class='btn' " + disabled2 + "><span class='" + clase + "'></span></a></td>" +
                                "<td class='col-sm-1 text-center'><a id='" + item.Codigo + "'class='btn btn-row' data-toggle='modal' data-target='#modaltracktime' " + disabled2 + " ><span  class='glyphicon glyphicon-time'></span></a></td>" +
                            "</tr>";
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

            var param = {
                type: "GET",
                url: "Handlers/AIRHandler.ashx",
                data: { method: "ObtenerAIRActualizacion"},
                method: function (data) {


                    var append = "";
                    var appendthead = "";

                    appendthead +=
                    "<tr>" +
                        "<th class='text-center'>Folio</th>" +
                         "<th class='text-center'>Fecha Inicio</th>" +
                        "<th class='text-center'>Nombre</th>" +
                        "<th class='text-center'>Dependencia</th>" +
                        "<th class='text-center'>Ver Anteproyecto</th>" +
                        "<th class='text-center'>Ver Cuestionario</th>" +
                        "<th class='text-center'>Ver Dictamen</th>" +
                        "<th class='text-center col-lg-1'>Ver Tiempos</th>" +
                    "</tr>";


                    for (var i = 0; i < data.Items.length; i++) {



                        var disabled = "disabled";
                        var disabled2 = "disabled";
                        var title = "";
                        var item = data.Items[i];
                        var clase = "glyphicon glyphicon-cog"
                        var ruta = "OpcionCalculadora.aspx?id=" + item.CodigoAnteproyecto;
                        var rutaActualizacion = "ActualizacionPeriodicaEdit.aspx?mir=" + item.Codigo;

                        if (item.Estatus == 2 || item.Estatus == 7) {

                            disabled = "";

                        }

                        if (item.Estatus == 7) {

                            disabled2 = "";

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

                            "<tr title = '" + title + "'>" +
                                "<td>" + item.Folio + "</td>" +
                                 "<td>" + fechaf + "</a></td>" +
                                "<td>" + item.Titulo + "</td>" +
                                 "<td>" + item.NombreDependencia + "</td>" +
                                "<td class='col-sm-1 text-center'   ><a target='_blank' href='AnteproyectoEdit.aspx?id=" + item.CodigoAnteproyecto + "' class='btn'><span class='" + clase + "'></span></a></td>" +
                                "<td class='col-sm-1 text-center'><a target='_blank' href='" + rutaActualizacion + "' class='btn' " + disabled + " ><span class='" + clase + "'></span></a></td>" +
                                "<td class='col-sm-1 text-center'><a target='_blank' href='DictamenEdit.aspx?id=" + item.CodigoAnteproyecto + "&TT=" + item.TipoTramite + "&mir=" + item.Codigo + "' class='btn' " + disabled2 + "><span class='" + clase + "'></span></a></td>" +
                                "<td class='col-sm-1 text-center'><a id='" + item.Codigo + "'class='btn btn-row' data-toggle='modal' data-target='#modaltracktime' " + disabled2 + " ><span  class='glyphicon glyphicon-time'></span></a></td>" +
                            "</tr>";
                    }


                    $("#tbody").empty().append(append);
                    $("#thead").empty().append(appendthead);
                    $("#dataTable").DataTable().draw();
                },
                unblockMessage: true
            };

            ajaxRequest(param);

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

$("#tbody").delegate(".btn-row", "click", function () {

    itemRow = $(this)[0];

    $.ajax({
        type: "GET",
        async: false,
        url: "Handlers/AIRHandler.ashx",
        data: { method: "ObtenerMirporID", args: { id: itemRow.id } },
        complete: function (data2) {

            itemAIR = data2.responseJSON;
        }
    });

    var div = $("#modalbodyComent");
    div.find(".progress,#idcreacion,#idvalidacion,#iddictaminacion,#idcuestionario,#idtotalreal").remove();

    var diascreacion     = 0;
    var diasvalidacion   = 0;
    var diasdictamen     = 0;
    var diascuestionario = 0;

    switch (itemAIR.TipoTramite) {
        case 1:
                diascreacion     = itemAIR.CicloVidaAir.DiasCicloProceso.SOLICITUDEMERGENCIA;
                diasvalidacion   = itemAIR.CicloVidaAir.DiasCicloProceso.VALIDACIONEMERGENCIA;
                diasdictamen     = itemAIR.CicloVidaAir.DiasCicloProceso.VALIDACIONUMREMERGENCIA;
                diascuestionario = itemAIR.CicloVidaAir.DiasCicloProceso.CREACIONCUESTIONARIO;
            break;
        case 2:
                diascreacion     = itemAIR.CicloVidaAir.DiasCicloProceso.SOLICITUDEXENCION;
                diasvalidacion   = itemAIR.CicloVidaAir.DiasCicloProceso.VALIDACIONEXENCION;
                diasdictamen     = itemAIR.CicloVidaAir.DiasCicloProceso.DICTAMENUMREXENCION;
            break;
        case 3:
                diascreacion     = itemAIR.CicloVidaAir.DiasCicloProceso.SOLICITUDCALCULADORA;
                diasvalidacion   = itemAIR.CicloVidaAir.DiasCicloProceso.VALIDACIONCALCULADORA;
                diasdictamen     = itemAIR.CicloVidaAir.DiasCicloProceso.DICTAMENUMRCALCULADORA;
            break;
        case 4:
                diascreacion     = itemAIR.CicloVidaAir.DiasCicloProceso.SOLICITUDACTUALIZACION;
                diasvalidacion   = itemAIR.CicloVidaAir.DiasCicloProceso.VALIDACIONACTUALIZACION;
                diasdictamen     = itemAIR.CicloVidaAir.DiasCicloProceso.DICTAMENUMRACTUALIZACION;
            break;

        default:
            break;

    }



    var porcentajeneto = itemAIR.CicloVidaAir.sumadedias;
    var sumadediasreales = (itemAIR.DiasCreacionTranscurridos == null ? 0 : itemAIR.DiasCreacionTranscurridos) + (itemAIR.DiasValidacionTranscurridos == null ? 0 : itemAIR.DiasValidacionTranscurridos) + (itemAIR.DiasDictamenTranscurridos == null ? 0 : itemAIR.DiasDictamenTranscurridos) + (itemAIR.DiasCuestionarioTranscurridos == null ? 0 : itemAIR.DiasCuestionarioTranscurridos);
    var porcentajecreacion = (itemAIR.DiasCreacionTranscurridos == null ? 0 : itemAIR.DiasCreacionTranscurridos) * 100 / diascreacion;
    var porcentajevalidacion = (itemAIR.DiasValidacionTranscurridos == null ? 0 : itemAIR.DiasValidacionTranscurridos) * 100 / diasvalidacion;
    var porcentajedictaminacion = (itemAIR.DiasDictamenTranscurridos == null ? 0 : itemAIR.DiasDictamenTranscurridos) * 100 / diasdictamen;
    var porcentajecuestionario = (itemAIR.DiasCuestionarioTranscurridos == null ? 0 : itemAIR.DiasCuestionarioTranscurridos) * 100 / diascuestionario;
    var porcentajenetoreal = sumadediasreales * 100 / porcentajeneto;
    

    $("<label>", { 'id': 'idtotal', }).appendTo('#texttotales');
    $("#idtotal").html("Límite Máximo de Días del Ciclo  (" + itemAIR.CicloVidaAir.sumadedias + ")");
    
    $("<label>", { 'id': 'idtotalreal', }).appendTo('#modalbodyComent');
    $("#idtotalreal").html("Días Reales Utilizados  (" + sumadediasreales + ")");
    $("<div>", { 'class': 'progress' }).append(
    $("<div>", { 'id': 'idfull', 'class': 'progress-bar progress-bar-striped', 'role': 'progressbar', 'title': 'Fecha de Inicio: ' + getFormattedDate(new Date(itemAIR.FechaCreacion)), 'style': 'width:' + (porcentajenetoreal > 100 ? 100 : porcentajenetoreal) + '%', 'aria-valuenow': porcentajenetoreal > 100 ? 100 : porcentajenetoreal, 'aria-valuemax': '100' })).appendTo('#modalbodyComent');
    $("#idfull").html((porcentajenetoreal > 100 ? "+100%" : porcentajenetoreal.toFixed(2) + "%"));

    $("<label>", { 'id': 'idcreacion' }).appendTo('#modalbodyComent');
    $("#idcreacion").html("Días de Creación (" + (itemAIR.DiasCreacionTranscurridos == null ? 0 : itemAIR.DiasCreacionTranscurridos) +"/"+ diascreacion +")");
    $("<div>", {  'class': 'progress' }).append(
    $("<div>", { 'id': 'idcr', 'class': 'progress-bar progress-bar-success', 'role': 'progressbar', 'title': 'Fecha de Inicio: '+getFormattedDate(new Date(itemAIR.FechaCreacion)), 'style': 'width:' + (porcentajecreacion > 100 ? 100 : porcentajecreacion) + '%', 'aria-valuenow': porcentajecreacion > 100 ? 100 : porcentajecreacion, 'aria-valuemax': '100' })).appendTo('#modalbodyComent');
    $("#idcr").html( (porcentajecreacion > 100 ? "+100%" : porcentajecreacion.toFixed(2)+"%"));

    $("<label>", { 'id': 'idvalidacion'}).appendTo('#modalbodyComent');
    $("#idvalidacion").html("Días de Validación (" + (itemAIR.DiasValidacionTranscurridos == null ? 0 : itemAIR.DiasValidacionTranscurridos)  + "/" + diasvalidacion + ")");
    $("<div>", {  'class': 'progress' }).append(
    $("<div>", { 'id': 'idvl', 'class': 'progress-bar progress-bar-info', 'role': 'progressbar', 'title': 'Fecha de Inicio: ' +getFormattedDate(new Date(itemAIR.FechaValidacion)), 'style': 'width:' + (porcentajevalidacion > 100 ? 100 : porcentajevalidacion) + '%', 'aria-valuenow': porcentajevalidacion > 100 ? 100 : porcentajevalidacion, 'aria-valuemax': '100' })).appendTo('#modalbodyComent');
    $("#idvl").html((porcentajevalidacion > 100 ? "+100%" : porcentajevalidacion.toFixed(2) + "%"));


    $("<label>", { 'id': 'iddictaminacion'}).appendTo('#modalbodyComent');
    $("#iddictaminacion").html("Días de Dictaminación (" + (itemAIR.DiasDictamenTranscurridos == null ? 0 : itemAIR.DiasDictamenTranscurridos)+ "/" + diasdictamen + ")");
    $("<div>", {  'class': 'progress' }).append(
    $("<div>", { 'id': 'iddic', 'class': 'progress-bar progress-bar-warning', 'role': 'progressbar', 'title': 'Fecha de Inicio: ' +getFormattedDate(new Date(itemAIR.FechaDictaminar)), 'style': 'width:' + (porcentajedictaminacion > 100 ? 100 : porcentajedictaminacion) + '%', 'aria-valuenow': porcentajedictaminacion > 100 ? 100 : porcentajedictaminacion, 'aria-valuemax': '100' })).appendTo('#modalbodyComent');
    $("#iddic").html((porcentajedictaminacion > 100 ? "+100%" : porcentajedictaminacion.toFixed(2) + "%"));

    if (itemAIR.TipoTramite == 1) {

        $("<label>", { 'id': 'idcuestionario' }).appendTo('#modalbodyComent');
        $("#idcuestionario").html("Días de Creación de Cuestionario (" + (itemAIR.DiasCuestionarioTranscurridos == null ? 0 : itemAIR.DiasCuestionarioTranscurridos) + "/" + diascuestionario + ")");
        $("<div>", { 'class': 'progress' }).append(
        $("<div>", { 'id': 'idcues', 'class': 'progress-bar progress-bar-danger', 'role': 'progressbar', 'title': 'Fecha de Inicio: ' +getFormattedDate(new Date(itemAIR.FechaPublicacionDOF)), 'style': 'width:' + (porcentajecuestionario > 100 ? 100 : porcentajecuestionario) + '%', 'aria-valuenow': porcentajecuestionario > 100 ? 100 : porcentajecuestionario, 'aria-valuemax': '100' })).appendTo('#modalbodyComent');
        $("#idcues").html((porcentajecuestionario > 100 ? "+100%" : porcentajecuestionario.toFixed(2) + "%"));
    }

});


function getFormattedDate(fechapub) {
    var anio = fechapub.getFullYear();
    var mes = fechapub.getMonth() + 1;
    var dia = fechapub.getDate();

    if (dia.toString().length == 1) {
        dia = "0" + dia.toString();
    }

    if (mes.toString().length == 1) {
        mes = "0" + mes.toString();
    }
    return dia + '/' + mes + '/' + anio;
}