
$(document).ready(function () {
    FillTable();
});

function FillTable() {

    showProcessing("Cargando...");

    var param = {
        type: "GET",
        url: "Handlers/SecretariaHandler.ashx",
        data: { method: "ObtenerSecretarias" },
        method: function (data) {

            var append = "";

            for (var i = 0; i < data.Items.length; i++) {
                var item = data.Items[i];

                append +=

                     "<tr class='text-center'>" +
                        "<td>" + item.Nombre + "</td>" +
                        "<td>" + item.Descripcion + "</td>" +
                         "<td class='col-sm-1 text-center'><a href='SecretariaEdit.aspx?id=" + item.Codigo + "' class='btn'><span class='glyphicon glyphicon-cog'></span></a></td>" +
                    "</tr>";
            }

            $("tbody").empty().append(append);
            $("#dataTable").DataTable();
        },
        unblockMessage: true
    };

    ajaxRequest(param);
}