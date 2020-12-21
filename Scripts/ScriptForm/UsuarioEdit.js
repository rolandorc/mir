var id = 0;
$(document).ready(function () {

    showProcessing("Cargando...");
    $("select").select2();
    $(".int-format, .cp-format").val("");

    var txtFechaNacimiento = $("#txtFechaNacimiento");

    txtFechaNacimiento.data("date-format", "DD/MM/YYYY");

    txtFechaNacimiento.datetimepicker({
        pickTime: false
    });

    $(".formsave").validate({
        highlight: function (element) {
            jQuery(element).closest('.form-control').addClass('error');
        },
        success: function (element) {
            jQuery(element).closest('.form-control').removeClass('error');
        },
        onfocusout: false,
        invalidHandler: function (form, validator) {
            var error = validator.numberOfInvalids();

            if (error) {
                validator.errorList[0].element.focus();
            }
        },
        ignore: 'input[type=hidden]',
        messages: {
            cboCargo: {
                required: "Este campo es obligatorio"
            },
            cboDependencia: {
                required: "Este campo es obligatorio"
            }
        },
        rules: {
            txtContraseña: "required",
            txtContraseñaConfirmacion: {
                equalTo: "#txtContraseña"
            }
        }
    });

    id = parseInt(GetURLParameter("id"));

    if (id === undefined) {
        id = 0;
    }

    var param = {
        type: "GET",
        url: "Handlers/UsuarioHandler.ashx",
        data: { method: "ObtenerCombos" },
        method: function (data) {

            var cboEstado = $("#cboEstadoDomicilio");

            LoadSelects(cboEstado, data.Estados, true);

            cboEstado.select2("val", "");

            var cboCargo = $("#cboCargo");

            LoadSelects(cboCargo, data.Cargos, true);

            cboCargo.select2("val", "");

            var cboSecretaria = $("#cboSecretaria");

            LoadSelects(cboSecretaria, data.Secretarias, true);

            cboSecretaria.select2("val", "");

            var cboTipo = $("#cboTipo");

            LoadSelects(cboTipo, data.Tipos, true);

            cboTipo.select2("val", "");

            append = "";

            if (id == 0) {
                id = 0;
                hideProcessing();
                return false;
            }

            var param2 = {
                type: "GET",
                url: "Handlers/UsuarioHandler.ashx",
                data: { method: "ObtenerUsuario", args: { id: id } },
                method: function (data) {

                    $("#txtUsuario").val(data.UsuarioNombre);
                    $("#txtNombre").val(data.Nombre);
                    $("#txtApellidoP").val(data.ApellidoPaterno);
                    $("#txtApellidoM").val(data.ApellidoMaterno);
                    
                    $("input:radio[name=optGenero][value=" + data.Genero + "]").prop("checked", true);

                    $("#txtCURP").val(data.Curp);
                    $("#txtRFC").val(data.RFC);
                    $("#txtHC").val(data.HC);

                    $("#cboSecretaria").select2("val", data.CodigoSecretaria);
                    $("#cboSecretaria").trigger("change", [data.CodigoDependencia]);

                    $("#txtLadaTelefono").autoNumeric("set", data.LadaTelefono);
                    $("#txtTelefono").autoNumeric("set", data.Telefono);
                    if (data.Extension == "")
                        $("#txtExtension").val("")
                    else
                        $("#txtExtension").autoNumeric("set", data.Extension);

                    if (data.LadaCelular == "")
                        $("#txtLadaCelular").val("")
                    else
                        $("#txtLadaCelular").autoNumeric("set", data.LadaCelular);

                    if (data.Celular == "")
                        $("#txtCelular").val("")
                    else
                        $("#txtCelular").autoNumeric("set", data.Celular);

                    $("#txtCorreo").val(data.Correo);
                     
                    $("#txtCalle").val(data.Calle);
                    $("#txtNumExt").val(data.NumeroExt);
                    $("#txtNumInt").val(data.NumeroInt);
                    $("#txtColonia").val(data.Colonia);
                    if (data.CP == "")
                        $("#txtCP").val("")
                    else
                        $("#txtCP").autoNumeric("set", data.CP);
                    $("#cboEstadoDomicilio").select2("val", data.CodigoEstado);
                    $("#cboEstadoDomicilio").trigger("change", [data.CodigoMunicipio]);
                    $("#txtLocalidadDomicilio").val(data.Localidad);

                    $("#txtContraseña").val(data.Contraseña);
                    $("#txtContraseñaConfirmacion").val(data.Contraseña);
                    $("#chkEstatus").prop("checked", data.Estatus);
                    $("#cboTipo").select2("val", data.TipoUsuario);
                    $("#cboCargo").select2("val", data.CodigoCargo);
                },
                unblockMessage: true
            };

            ajaxRequest(param2);
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
    var genero = $("input:radio[name=optGenero]:checked").val();
    var activo = $("#chkEstatus").is(":checked");
    var cboCargo = $("#cboCargo").select2("data");
    var tipo = $("#cboTipo").select2("data");
    var cboMunicipioDomicilio = $("#cboMunicipioDomicilio").select2("data");

    showProcessing("Guardando...");

    var usuario = {
        Codigo: id,
        Nombre: $("#txtNombre").val(),
        ApellidoPaterno: $("#txtApellidoP").val(),
        ApellidoMaterno: $("#txtApellidoM").val(),
        Genero: genero,
        Curp: $("#txtCURP").val(),
        RFC: $("#txtRFC").val(),
        HC: $("#txtHC").val(),
        LadaTelefono: $("#txtLadaTelefono").autoNumeric("get"),
        Telefono: $("#txtTelefono").autoNumeric("get"),
        LadaCelular: $("#txtLadaCelular").autoNumeric("get"),
        Celular: $("#txtCelular").autoNumeric("get"),
        Correo: $("#txtCorreo").val(),
        Calle: $("#txtCalle").val(),
        NumeroInt: $("#txtNumInt").val(),
        NumeroExt: $("#txtNumExt").val(),
        Colonia: $("#txtColonia").val(),
        CodigoMunicipio: cboMunicipioDomicilio == null || cboMunicipioDomicilio == undefined ? null : cboMunicipioDomicilio.id,
        Localidad: $("#txtLocalidadDomicilio").val(),
        CP: $("#txtCP").autoNumeric("get"),
        Estatus: activo,
        UsuarioNombre: $("#txtUsuario").val(),
        CodigoDependencia: cboDependencia.id,
        Contraseña: $("#txtContraseña").val(),
        CodigoCargo: cboCargo.id,
        TipoUsuario: tipo.id,
        Extension: $("#txtExtension").autoNumeric("get")
    };

    var param = {
        type: "POST",
        url: "UsuariosEdit.aspx/Guardar",
        data: "{ usuario:" + JSON.stringify(usuario) + " }",
        method: function (data) {

            if (data.message != undefined && data.message.length > 0) {
                hideProcessing();
                errorMessage(data.message);
                return false;
            }

            LimpiarControles();

            successMessage();
        }
    };

    ajaxRequest(param);
});

$("#btnRegresar").on("click", function () {
    window.location.replace("UsuarioList.aspx");
});

$("#btnLimpiar").on("click", function () {
    LimpiarControles();
});

function LimpiarControles() {
    $("input:text").val("");
    $("input:password").val("");

    $(".form-control.error").removeClass("error");

    $(".message.error").css("display", "none");
    id = 0;
    $("#cboSecretaria").select2("val", "").trigger("change");
    $("#cboTipo").select2("val", "");
    $("#cboCargo").select2("val", "");
    $("#cboEstadoDomicilio").select2("val", "").trigger("change");;

}

$("#cboEstadoDomicilio").on("change", function (event, codigoMunicipio) {
    showProcessing("Cargando...");

    var ajaxParams = {
        type: "get",
        url: "Handlers/EstadoHandler.ashx",
        data: { method: "ObteneMunicipiosPorEstado", args: { id: $("#cboEstadoDomicilio").select2("val") } },
        method: function (data) {

            $("#cboMunicipioDomicilio").empty();

            var cboMunicipio = $("#cboMunicipioDomicilio");

            LoadSelects(cboMunicipio, data.Municipios, true);

            cboMunicipio.select2("val", codigoMunicipio);
        },
        unblockMessage: true
    };

    ajaxRequest(ajaxParams);
});

$("#cboSecretaria").on("change", function (event, codigoDependencia) {
    showProcessing("Cargando...");

    var ajaxParams = {
        type: "get",
        url: "Handlers/DependenciaHandler.ashx",
        data: { method: "ObtenerPorSecretaria", args: { id: $("#cboSecretaria").select2("val") } },
        method: function (data) {

            $("#cboDependencia").empty();

            var cboDependencia = $("#cboDependencia");

            LoadSelects(cboDependencia, data.Items, true);

            cboDependencia.select2("val", codigoDependencia);
        },
        unblockMessage: true
    };

    ajaxRequest(ajaxParams);
});