
var itemAIR = [];
$(document).ready(function () {
    FillTable();
});

function FillTable() {

    showProcessing("Cargando...");

    var param = {
        type: "GET",
        url: "Handlers/AIRHandler.ashx",
        data: { method: "ObtenerProyectosValidar" },
        method: function (data) {

            var append = "";
            var tipotramite = "";
            for (var i = 0; i < data.Items.length; i++) {

                var item = data.Items[i];
                var clasetramite = "class='info'";
                var ruta = "OpcionCalculadora.aspx?id=" + item.CodigoAnteproyecto;
                var disabled = "";
                var title = "";
                var item = data.Items[i];
                var clase = "glyphicon glyphicon-arrow-right"
                var estatus = "EN PROCESO"
                var clasetd = "''"
                if (item.TipoTramite == 4) {
                    ruta = "ActualizacionPeriodicaEdit.aspx?mir=" + item.Codigo;
                }


                append +=

                    "<tr>" +
                        "<td>" + item.Folio + "</td>" +
                        "<td " + clasetramite + ">" + item.NombreTramite[item.TipoTramite-1].Nombre + "</td>" +
                        "<td>" + item.Anteproyecto + "</a></td>" +
                        "<td " + clasetd + " >" + estatus + "</td>" +
                         "<td class='col-sm-1 text-center'><a href='" + ruta + "' class='btn' " + disabled + "><span class='" + clase + "'></span></a></td>" +
                    "</tr>";
            }

            $("tbody").empty().append(append);
            $("#dataTable").DataTable();
        },
        unblockMessage: true
    };

    ajaxRequest(param);
}