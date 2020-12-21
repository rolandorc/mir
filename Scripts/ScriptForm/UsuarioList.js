$(document).ready(function () {
    FillTable();
});

function FillTable() {

    showProcessing("Cargando...");

    var param = {
        type: "GET",
        url: "Handlers/UsuarioHandler.ashx",
        data: { method: "ObtenerUsuarios" },
        method: function (data) {

            var append = "";

            for (var i = 0; i < data.Items.length; i++) {
                var item = data.Items[i];

                append +=

                    "<tr>" +
                        "<td>" + item.Nombre + "</td>" +
                        "<td><a href='UsuarioPermisosEditar.aspx?id=" + item.Codigo + "'>" + item.UsuarioNombre + "</a></td>" +
                        "<td class='col-sm-1 text-center'><a href='UsuariosEdit.aspx?id=" + item.Codigo + "' class='btn'><span class='glyphicon glyphicon-cog'></span></a></td>" +
                    "</tr>";
            }

            $("tbody").empty().append(append);
            $("#dataTable").DataTable();
        },
        unblockMessage: true
    };

    ajaxRequest(param);
}