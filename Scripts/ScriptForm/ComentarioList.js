$(document).ready(function () {
    FillTable();
});

function FillTable() {

    showProcessing("Cargando...");

    var param = {
        type: "GET",
        url: "Handlers/AIRHandler.ashx",
        data: { method: "ObtenerProyectoPublicados" },
        method: function (data) {

            var append = "";

            for (var i = 0; i < data.Items.length; i++) {

                var item = data.Items[i];

                append +=

                    "<tr>" +
                        "<td>" + item.Folio + "</td>" +
                        "<td>" + item.Titulo + "</td>" +
                        "<td class='col-sm-1 text-center'>" + item.Comentarios + "</td>" +
                        "<td class='col-sm-1 text-center'><a href='ComentarioEdit.aspx?id=" + item.CodigoAnteproyecto + " 'class='btn' ><span class='glyphicon glyphicon-arrow-right'></span></a></td>" +
                    "</tr>";
            }

            $("tbody").empty().append(append);
            $("#dataTable").DataTable();
        },
        unblockMessage: true
    };

    ajaxRequest(param);
}