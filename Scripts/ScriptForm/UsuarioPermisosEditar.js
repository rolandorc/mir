var id = 0;
$(document).ready(function () {

    showProcessing("Cargando...");

    $("body").delegate(".nav-tabs li a", "click", function (event) {
        event.preventDefault();
    });

    $("body").delegate(".permissions-table-actions li a", "click", function () {
        event.preventDefault();

        var self = $(this),
            parent = self.parent(),
            permissions_table = $('.permissions-table'),
            parentList = parent.parent();

        parentList.find(".active").removeClass("active");

        parent.addClass("active");

        permissions_table.fadeOut(200);
        $(permissions_table[parent.index()]).delay(400).fadeIn();
    });

    $(".nav-container").delegate("input.escritura", "change", function () {
        var checkbocEscritura = $(this);
        var checkboxLectura = checkbocEscritura.closest("tr").find(".lectura");

        if (checkboxLectura.length == 0) {
            return false;
        }

        if (checkbocEscritura.is(":checked")) {
            checkboxLectura.prop("checked", checkbocEscritura.is(":checked"));
        }

    });

    $("#btnRegresar").on("click", function () {
        window.location.href = "UsuarioList.aspx";
    });

    $("#btnGuardar").on("click", function () {

        showProcessing("Guardando...");

        var trs = $(".nav-container tbody tr");

        var permisos = [];

        for (var i = 0; i < trs.length; i++) {
            var tr = $(trs[i]);

            var codigo = parseInt(tr.prop("id"));
            var check = tr.find(".escritura").is(":checked");
            var checkLectura = tr.find(".lectura");

            var permiso = {
                CodigoMenu: codigo,
                Escritura: check,
                CodigoUsuario: id,
                Lectura: checkLectura.is(":checked")
            };

            permisos.push(permiso);
        }

        var param = {
            type: "POST",
            url: "UsuarioPermisosEditar.aspx/Guardar",
            data: "{ permisos:" + JSON.stringify(permisos) + "}",
            method: function (data) {

                if (data.Message != undefined && data.Message.length > 0) {
                    hideProcessing();
                    errorMessage(data.Message);
                    return false;
                }

                successMessage();
                window.location.replace("UsuarioList.aspx");
            }
        };

        ajaxRequest(param);

    });

    showProcessing("Cargando...");

    id = parseInt(GetURLParameter("id"));

    var param = {
        type: "GET",
        url: "UsuarioPermisosEditar.aspx/ObtenerMenu",
        method: function (data) {

            var append = "<option value=0>SELECCIONE...</option>";
            var appendUL = "";
            var appendContainer = "";


            for (var i = 0; i < data.Menu.length; i++) {
                var menuItem = data.Menu[i];

                if (menuItem.Padre == null) {
                    appendUL += "<li><a href='#'>" + menuItem.Descripcion + "</a></li>";

                    if (appendContainer.length > 0) {
                        appendContainer += "</table>";
                    }

                    appendContainer += "<table class='tab-pane table permissions-table'><thead><tr><td></td><td style='cursor:pointer;' class='cargar'>Escritura</td><td  style='cursor:pointer;' class='cargar'>Lectura</td></thead>";
                    continue;
                }

                appendContainer += "<tr id=" + menuItem.Codigo + "><td>" + menuItem.Descripcion + "</td><td><input class='escritura' type='checkbox'></td><td>" + (menuItem.AplicaSoloLectura ? "<input class='lectura' type='checkbox'>" : "") + "</td></tr>";
            }

            var navTabs = $(".nav-tabs");

            navTabs.append(appendUL);
            $(".nav-tabs li").first().addClass("active");
            var body = $(".nav-container");

            body.append(appendContainer);

            id = parseInt(GetURLParameter("id"));

            if (id === undefined || id == 0) {
                window.location.href = "UsuarioList.aspx";
                return false;
            }

            var param2 = {
                type: "GET",
                url: "UsuarioPermisosEditar.aspx/ObtenerUsuario",
                data: { idUsuario: id },
                method: function (data2) {

                    $("#spUsuario").text(data2.Nombre);

                    $("#aEditar").prop("href", "UsuariosEdit.aspx?id=" + id);

                    for (var i = 0; i < data2.Permisos.length; i++) {
                        $("#" + data2.Permisos[i].CodigoMenu).find(".escritura").prop("checked", data2.Permisos[i].Escritura);

                        var chkLectura = $("#" + data2.Permisos[i].CodigoMenu).find(".lectura")

                        if (chkLectura.length > 0) {
                            chkLectura.prop("checked", data2.Permisos[i].Lectura);
                        }
                    }
                },
                unblockMessage: true
            };

            ajaxRequest(param2);

            $(".nav-container").find("input").prop("checked", false);
        },
        unblockMessage: false
    };

    ajaxRequest(param);

});

$(".nav-container").delegate(".cargar", "click", function () {
    var _this = $(this);
    var indice = _this.index();
    var reg = _this.closest("table").find("tbody").children();
    for (var i = 0; i < reg.length; i++) {
        var item = $(reg[i]);

        item.children().eq(indice).find("input").prop("checked", true);
    }
});