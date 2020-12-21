var id = 0;
var $token = Math.floor(Math.random() * (999999 - 10000)) + 10000;
var listFiles = [];

$(document).ready(function () {

    id = parseInt(GetURLParameter("id"));

    if (id === undefined) {
        id = 0;
    }

    showProcessing("Cargando...");

    var param = {
        type: "GET",
        url: "Handlers/ComentarioHandler.ashx",
        data: { method: "GetComentariosAnteproyecto", args: { id: id } },
        method: function (data) {

            $("#txtTitulo").html(data.Nombre);

            var append = "";

            for (var i = 0; i < data.Items.length; i++) {
                var item = data.Items[i];
                var Consultapublica = "glyphicon glyphicon-ok";

                if (item.Estatus == 'Publicado')
                    Consultapublica = "glyphicon glyphicon-remove";

                append +=

                    "<tr>" +
                        "<td>" + item.Remitente + "</td>" +
                        "<td>" + item.Comentarios + "</td>" +
                        "<td class='col-sm-1 text-center'><a target='_blank' href='" + item.URL + " 'class='btn' ><span class='glyphicon glyphicon-file'></span></a></td>" +
                        "<td class='col-sm-1 text-center'>" + item.Tipo + "</td>" +
                        "<td>" + item.Estatus + "</td>" +
                        "<td class='col-sm-1 text-center'><a id='" + item.Consecutivo + "'class='btn btn-row' ><span  class='" + Consultapublica + "'></span></a></td>" +
                    "</tr>";
            }

            $("tbody").empty().append(append);
            $("#dataTable").DataTable();
        },
        unblockMessage: true
    };

    ajaxRequest(param);
});

$("#btnNuevo").on("click", function () {
    $("#modal").modal("show");
});

function Limpiar() {
    $("input:text").val("");
    $("textarea").val("");
}

$("#btnAceptarModal").on("click", function () {

    if (!$(".formmodal").valid()) {
        warningMessage("Información incompleta");
        return;
    }

    var txtNombre = $("#txtNombre");
    var txtCorreo = $("#txtCorreo");
    var txtComentarios = $("#txtComentarios");

    showProcessing("Guardando...");

    var item = {
        CodigoAnteproyecto: id,
        Remitente: txtNombre.val(),
        Comentarios: txtComentarios.val(),
        Correo: txtComentarios.val()
    };

    var ajaxParams = {
        type: "POST",
        asyn: false,
        url: "ComentarioEdit.aspx/Guardar",
        data: "{ item:" + JSON.stringify(item) + ", token:" + JSON.stringify($token) + ", listFiles:" + JSON.stringify(listFiles) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return;
            }

            successMessage();
            setTimeout(function () {
                location.reload();
            }, 4000);
            
        },
        unblockMessage: true
    };

    ajaxRequest(ajaxParams);
});

$(".form-control-file").on("change", function () {

    listFiles = [];
    const $self = $(this),
          $files = $self.get(0).files;

    if ($files.length == 0) {
        return;
    }

    showProcessing();

    const $file = $files[0];

    const $maxSize = parseInt($self.attr('max-size'), 10),
          $size = $file.size;

    if ($size > $maxSize) {
        hideProcessing();
        $self.val("");
        errorMessage("El archivo de evidencia no debe ser mayor a 10 mb");
        return false;
    }

    let $data = new FormData();

    $data.append("UploadedPdf", $file);
    $data.append("token", $token);

    $.ajax(
    {
        url: "../handlers/FileUpload.ashx",
        type: 'POST',
        complete: function (data) {

            if (data.responseJSON.length > 0) {
                hideProcessing();
                errorMessage(data.responseJSON);
                return false;
            }

            $self.data("filename", $file.name);
            listFiles.push([Nombre = $file.name]);
            hideProcessing();
        },
        error: function (e) {
            hideProcessing();
            errorMessage("Ocurrió un error al subir el archivo, intente de nuevo");
        },
        data: $data,
        cache: false,
        contentType: false,
        processData: false
    });

});

$("#tbody").delegate(".btn-row", "click", function () {

    var $self = $(this)[0].id;

    showProcessing("Actualizando...");

    var param = {
        type: "POST",
        async: false,
        url: "ComentarioEdit.aspx/Actualizar",
        data: "{ codigoAnteproyecto:" + JSON.stringify(id) + ", consecutivo: " + JSON.stringify($self) + " }",
        method: function (data2) {

            if (data2.Message != undefined && data2.Message.length > 0) {
                hideProcessing();
                errorMessage(data2.Message);
                return false;
            }

            hideProcessing();
            successMessage();
            $('#modalConsultaPublica').modal('hide');
            $('body').removeClass('modal-open');

            setTimeout(function () {
                location.reload();
            }, 4000);
        }
    };

    ajaxRequest(param);
});