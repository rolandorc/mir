var id = 0;
$(document).ready(function () {
    FillTable();
});

function FillTable() {

    idEnlace = GetURLParameter("id");

    if (id == undefined || id == 0) {
        id = 0;
    }

    showProcessing("Cargando...");

    var param = {
        type: "GET",
        url: "Handlers/ExencionHandler.ashx",
        data: { method: "ObtenerExenciones", id : id },
        method: function (data) {

            var append  = "";

            for (var i = 0; i < data.Items.length; i++) {

                var disabled = "";
                var title    = "";
                var item = data.Items[i];
                var clase = "glyphicon glyphicon-cog"

                if (item.autorizado)
                {
                   
                    title = "Esta Exención Ya Ha Sido Autorizada";
                    clase = "glyphicon glyphicon-ban-circle"
                }
                append +=

                    "<tr title = '"+title+"'>" +
                        "<td>" + item.Folio + "</td>" +
                        "<td>" + item.NombreCompleto + "</td>" +
                        "<td class='col-sm-1 text-center'   ><a href='ExencionEdit.aspx?id=" + item.Codigo + "' class='btn'><span class='"+clase+"'></span></a></td>" +
                    "</tr>";
            }

            $("tbody").empty().append(append);
            $("#dataTable").DataTable();
        },
        unblockMessage: true
    };

    ajaxRequest(param);
}