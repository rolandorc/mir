var id = 0;
$(document).ready(function () {
    id = GetURLParameter("id");

    if (id == undefined || id == 0) {
        id = 0;
    }

    if (!(id == 0)) {
        $("#btnLimpiar").hide();
    }
    showProcessing("Cargando...");

    $(".formsave").validate({
        highlight: function (element) {
            jQuery(element).closest('.form-group').addClass('has-error');
        },
        success: function (element) {
            jQuery(element).closest('.form-group').removeClass('has-error');
        },
        onfocusout: false,
        invalidHandler: function (form, validator) {
            var error = validator.numberOfInvalids();

            if (error) {
                validator.errorList[0].element.focus();
            }
        }
    });


    var ajaxParams = {
        type: "get",
        url: "Handlers/SecretariaHandler.ashx",
        data: { method: "GetSecretaria", args: { id: id } },
        method: function (data) {

            id = 0;
            if (data.Codigo > 0) {
                id = data.Codigo;
                $("#txtNombre").val(data.Nombre);
                $("#txtDescripcion").val(data.Descripcion);
               

            }
        },
        unblockMessage: true
    };

    ajaxRequest(ajaxParams);
});

$("#btnLimpiar").on("click", function () {
    Limpiar();
});

function Limpiar() {
    $("input:text").val("");
    $("textarea").val("");
    id = 0;
}

$("#btnGuardar").on("click", function () {

    if (!$(".formsave").valid()) {
        warningMessage("Información incompleta");
        return;
    }

    var txtNombre = $("#txtNombre");
    var txtDescripcion = $("#txtDescripcion");


    showProcessing("Guardando...");

    var item = {
        Codigo: id,
        Nombre: txtNombre.val(),
        Descripcion: txtDescripcion.val(),
    };

    var ajaxParams = {
        type: "POST",
        asyn:false,
        url: "SecretariaEdit.aspx/Guardar",
        data: "{item:" + JSON.stringify(item) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return;
            }

            successMessage();
            Limpiar();
        },
        unblockMessage: true
    };

    ajaxRequest(ajaxParams);


});

$("#btnRegresar").on("click", function () {
    window.location.replace("SecretariaList.aspx");
});