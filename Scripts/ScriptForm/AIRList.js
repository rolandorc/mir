$(document).ready(function () {
    FillTable();
});

function FillTable() {

    showProcessing("Cargando...");

    var param = {
        type: "GET",
        url: "Handlers/AIRHandler.ashx",
        data: { method: "ObtenerAIR" },
        method: function (data) {

            var append = "";
            var tipotramite = "";
            for (var i = 0; i < data.Items.length; i++) {

                var item = data.Items[i];
                var clasetramite = "class='success'";

                var disabled = "";
                var title = "";
                var item = data.Items[i];
                var clase = "glyphicon glyphicon-arrow-right"
                var autorizado = "EN PROCESO"
                var clasetd = "class='warning'"

                var itemAIR = [];
                $.ajax({
                    type: "GET",
                    async: false,
                    url: "Handlers/AIRHandler.ashx",
                    data: { method: "ObtenerAIRid", args: { id: item.CodigoAnteproyecto } },
                    complete: function (data2) {

                        itemAIR = data2.responseJSON;
                        console.log(itemAIR);
                    },
                });
                if (item.TipoTramite == 1) {
                    if (item.validacion) {

                        autorizado = "DICTAMINADO"
                        clasetd = "class='warning'"
                        title = "Este anteproyecto ya ha sido dictaminado";
                        clase = "glyphicon glyphicon-ban-circle"
                    }
                }


                switch (item.TipoTramite) {
                    case 1:
                        clasetramite = "class='warning'";

                        break;
                }


                append +=

                    "<tr>" +
                        "<td>" + item.Folio + "</td>" +
                        "<td " + clasetramite + ">" + item.NombreTramite[item.TipoTramite - 1].Nombre + "</td>" +
                        "<td>" + item.Anteproyecto + "</a></td>" +
                        "<td>" + item.Usuario.Dependencia.Nombre + "</td>" +
                        "<td " + clasetd + " >" + autorizado + "</td>" +
                        "<td class='col-sm-1 text-center'><a href='OpcionCalculadora.aspx?id=" + item.Codigo + "&type=" + item.TipoTramite + "&idtype=" + item.CodigoTramite + "&idpr=" + item.CodigoAnteproyecto + "&blk=true'class='btn' ><span class='" + clase + "'></span></a></td>" +
                    "</tr>";
            }

            $("tbody").empty().append(append);
            $("#dataTable").DataTable();
        },
        unblockMessage: true
    };

    ajaxRequest(param);


} 