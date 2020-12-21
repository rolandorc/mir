$(document).ready(function () {
    FillTable();
});

function FillTable() {

    showProcessing("Cargando...");

    var param = {
        type: "GET",
        url: "Handlers/AnteproyectoHandler.ashx",
        data: { method: "ObtenerAnteproyectos" },
        method: function (data) {

            var append = "";

            for (var i = 0; i < data.Items.length; i++) {

                var title = "";
                var item = data.Items[i];
                var clase = "glyphicon glyphicon-arrow-right"
                var autorizado = "EN PROCESO"
                var clasetd = "class='warning'"

                if (item.Autorizado) {

                    autorizado = "AUTORIZADO"
                    clasetd = "class='success'"
                    title = "Este anteproyecto ya ha sido autorizado";
                    clase = "glyphicon glyphicon-ban-circle"
                }



                append +=

                    "<tr title = '" + title + "'>" +
                        "<td>" + item.Folio + "</td>" +
                        "<td>" + item.Titulo + "</td>" +
                        "<td>" + item.Usuario.Nombre + " " + item.Usuario.ApellidoPaterno + " " + item.Usuario.ApellidoMaterno + "</td>" +
                        "<td "+clasetd+" >" + autorizado + "</td>" +
                        "<td class='col-sm-1 text-center'><a href='AnteproyectoEdit.aspx?id=" + item.Codigo + "' class='btn'><span class='" + clase + "'></span></a></td>" +
                        
                    "</tr>";
            }

            $("tbody").empty().append(append);
            $("#dataTable").DataTable();
            hideProcessing();

        },
        unblockMessage: true
    };
    ajaxRequest(param);
   
}