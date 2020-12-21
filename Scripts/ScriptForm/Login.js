$(document).ready(function () {

    $(".form-signin").validate({
        highlight: function (element) {
            jQuery(element).addClass('validation-error');
        },
        success: function (element) {
            jQuery(element).removeClass('validation-error');
        },
        errorClass: 'validation-error',
        errorPlacement: function(){
            return false;  // suppresses error message text
        },
        onfocusout: false,
        onsubmit: false,
        invalidHandler: function (form, validator) {
            var error = validator.numberOfInvalids();

            if (error) {
                validator.errorList[0].element.focus();
            }
        },
        messages: {
            txtUsuario: {
                required: "Usuario requerido"
            },
            txtContraseña: {
                required: "Contraseña requerida"
            }
        }
    });

    $("#txtUsuario").focus();

    $("#txtUsuario").on("keyup", function (event) {
        if (event.keyCode == 13) {
            Login();
        }
    });

    $("#txtContraseña").on("keyup", function (event) {
        if (event.keyCode == 13) {
            Login();
        }
    });

    $("#btnEntrar").on("click", function () {
        event.preventDefault();
        Login();
    });
});

function Login() {

   if (!$(".form-signin").valid()) {
        return;
    }

    var user = $("#txtUsuario").val();
    var pass = $("#txtContraseña").val();

    var ajaxParams = {
        type: "post",
        url: "Login.aspx/ValidarUsuario",
        data: "{ usuario:" + JSON.stringify(user) + ", password:" + JSON.stringify(pass) + " }",
        method: RequestLogin,
        unblockMessage: true
    };

    ajaxRequest(ajaxParams);
}

function RequestLogin(data) {
    if (!data.Success) {
        errorMessage("Usuario/contraseña incorrecto");
        !$(".form-signin").trigger('reset');
        return;
    }
    window.location.replace(data.Url);
}