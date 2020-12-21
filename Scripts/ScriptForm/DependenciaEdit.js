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

    var param = {
        type: "GET",
        async: false,
        url: "Handlers/UsuarioHandler.ashx",
        data: { method: "ObtenerUsuarios" },
        method: function (data) {

            var cboUsuarioTitular = $("#cboUsuarioTitular");
            LoadSelects(cboUsuarioTitular, data.Items, true);
            $("#cboUsuarioTitular").select2();

            var cboUsuarioEnlace= $("#cboUsuarioEnlace");
            LoadSelects(cboUsuarioEnlace, data.Items, true);
            $("#cboUsuarioEnlace").select2();

            var param = {
                type: "GET",
                async: false,
                url: "Handlers/SecretariaHandler.ashx",
                data: { method: "ObtenerSecretarias" },
                method: function (data) {

                    var cboSecretaria = $("#cboSecretaria");
                    LoadSelects(cboSecretaria, data.Items, true);
                    $("#cboSecretaria").select2();

                    if (id != 0) {

                        var ajaxParams = {
                            type: "GET",
                            async: false,
                            url: "Handlers/DependenciaHandler.ashx",
                            data: { method: "GetDependencia", args: { id: id } },
                            method: function (data) {

                                id = 0;
                                if (data.Codigo > 0) {
                                    id = data.Codigo;
                                    $("#txtNombre").val(data.Nombre);
                                    $("#txtDescripcion").val(data.Descripcion);
                                    $("#cboSecretaria").select2("val", data.CodigoSecretaria);
                                    $("#cboUsuarioTitular").select2("val", data.CodigoUsuarioTitular);
                                    $("#cboUsuarioEnlace").select2("val", data.CodigoUsuarioEnlace);
                                }
                            },
                            unblockMessage: true
                        };

                        ajaxRequest(ajaxParams);
                    }
                },
                unblockMessage: true
            };

            ajaxRequest(param);
        },
        unblockMessage: true
    };

    ajaxRequest(param);
});

$("#btnLimpiar").on("click", function () {
    Limpiar();
});

function Limpiar() {
    $("input:text").val("");
    $("textarea").val("");
    $("#cboSecretaria").select2("val", "");
    $("#cboUsuarioTitular").select2("val", "");
    $("#cboUsuarioEnlace").select2("val", "");
    id = 0;
}

$("#btnGuardar").on("click", function () {

    if (!$(".formsave").valid()) {
        warningMessage("Información incompleta");
        return;
    }

    var txtNombre = $("#txtNombre");
    var txtDescripcion = $("#txtDescripcion");
    var cboSecretaria = $("#cboSecretaria").select2("data");
    var cboUsuarioTitular = $("#cboUsuarioTitular").select2("data");
    var cboUsuarioEnlace = $("#cboUsuarioEnlace").select2("data");
   

    showProcessing("Guardando...");

    var item = {
        Codigo: id,
        Nombre: txtNombre.val(),
        Descripcion: txtDescripcion.val(),
        CodigoSecretaria: cboSecretaria.id,
        CodigoUsuarioEnlace: cboUsuarioEnlace.id,
        CodigoUsuarioTitular: cboUsuarioTitular.id
    };

    var ajaxParams = {
        type: "POST",
        url: "DependenciaEdit.aspx/Guardar",
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
    window.location.replace("DependenciaList.aspx");
});