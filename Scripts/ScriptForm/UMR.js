var id = 1;
$(document).ready(function () {

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
        url: "Handlers/DependenciaHandler.ashx",
        data: { method: "ObtenerDependencias" },
        method: function (data) {

            var cboDependencia = $("#cboDependencia");
            LoadSelects(cboDependencia, data.Items, true);
            $("#cboDependencia").select2();

            var param = {
                type: "GET",
                async: false,
                url: "Handlers/DependenciaHandler.ashx",
                data: { method: "GetDependenciaUMR" },
                method: function (data) {

                    $("#cboDependencia").select2("val", data.CodigoDependencia);
                },
                unblockMessage: true
            };

            ajaxRequest(param);


        },
        unblockMessage: true
    };

    ajaxRequest(param);

});

$("#btnGuardar").on("click", function () {

    if (!$(".formsave").valid()) {
        warningMessage("Información incompleta");
        return;
    }

    var cboDependencia = $("#cboDependencia").select2("data");

    showProcessing("Guardando...");

    var item = {
        Codigo: id,
        CodigoDependencia: cboDependencia.id
    };

    var ajaxParams = {
        type: "POST",
        url: "UMR.aspx/Guardar",
        data: "{item:" + JSON.stringify(item) + " }",
        method: function (data) {

            if (data.Message != undefined && data.Message.length > 0) {
                hideProcessing();
                errorMessage(data.Message);
                return;
            }

            successMessage();

            window.setTimeout(function () {
                window.location.replace("default.aspx");
            }, 3000);
        },
        unblockMessage: true
    };

    ajaxRequest(ajaxParams);


});