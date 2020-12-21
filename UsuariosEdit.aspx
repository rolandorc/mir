<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="UsuariosEdit.aspx.cs" Inherits="MIR.UsuariosEdit" %>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/select2.css" rel="stylesheet" />
    <link href="Content/datepicker.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
    <div class="form-group">
        <form class="formsave">
        <div class="form-block same-group">

            <div class="col-lg-12">
                <h2>Datos personales</h2>

                <div class="row">
                    <div class="col-lg-4">
                        <div class="form-group">
                            <label>Usuario del sistema <span class="required"></span></label>
                            <input type="text" id="txtUsuario" name="txtUsuario" class="form-control" maxlength="15" required />
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-lg-4">
                <div>
                    <label>Nombre(s) <span class="required"></span></label>
                    <input type="text" id="txtNombre" name="txtNombre" class="form-control" maxlength="100" required/>
                </div>

                <div class="radio-group">
                    <label>Género</label>

                    <div class="radio-inline">
                        <label>
                            <input type="radio" name="optGenero" value="M" checked /> Masculino
                        </label>
                    </div>

                    <div class="radio-inline">
                        <label>
                            <input type="radio" name="optGenero" value="F" /> Femenino
                        </label>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <div>
                    <label>Apellido paterno <span class="required"></span></label>
                    <input type="text" id="txtApellidoP" name="txtApellidoP" class="form-control" maxlength="100" required/>
                </div>

                <div class="form-group">
                    <label>Cargo <span class="required"></span></label>
                    <select class="form-control" id="cboCargo" name="cboCargo" required></select>
                </div>
            </div>

            <div class="col-lg-4">
                <div>
                    <label>Apellido materno</label>
                    <input type="text" id="txtApellidoM" class="form-control" maxlength="100" />
                </div>

                <div class="form-group">
                    <label>Tipo usuario <span class="required"></span></label>
                    <select class="form-control" id="cboTipo" name="cboTipo" required></select>
                </div>
            </div>

            <hr class="breakline" />

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-8">
                        <label>CURP</label>
                        <input type="text" class="form-control" id="txtCURP" maxlength="18" />
                    </div>
                    <div class="col-lg-2 no-label">
                        <a class="btn btn-full btn-primary" href="http://consultas.curp.gob.mx/CurpSP/" target="_blank">Consultar</a>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-8">
                        <label>RFC</label>
                        <input type="text" class="form-control" id="txtRFC" maxlength="10" />
                    </div>

                    <div class="col-lg-2">
                        <label>Homoclave</label>
                        <input type="text" class="form-control" id="txtHC" maxlength="3" />
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-4">
                        <label>Contraseña <span class="required"></span></label>
                        <input type="password" id="txtContraseña" name="txtContraseña" class="form-control" required/>
                    </div>

                    <div class="col-lg-4">
                        <label>Confirmar contraseña <span class="required"></span></label>
                        <input type="password" class="form-control" id="txtContraseñaConfirmacion" name="txtContraseñaConfirmacion" required />
                    </div>
                </div>
            </div>

            <hr class ="breakline" />

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-6">
                        <label>Secretaria / Organismo</label>
                        <select class="form-control cboParent" id="cboSecretaria"></select>
                    </div>
                    <div class="col-lg-6">
                        <label>Dependencia <span class="required"></span></label>
                        <select class="form-control" id="cboDependencia" name="cboDependencia" required></select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="pull-left">
                            <input type="checkbox" id="chkEstatus" checked /> <label for="chkEstatus">Usuario activo</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="form-block same-group">
            <div class="col-lg-12">
                <h2>Contacto</h2>
                <div class="row">
                    <div class="col-lg-2 form-group">
                        <label>Teléfono <span class="required"></span></label>
                        <input type="text" class="form-control lada-format" id="txtLadaTelefono" name="txtLadaTelefono" maxlength="3" required/>
                    </div>
                    <div class="col-lg-6 form-group">
                        <input type="text" class="form-control no-label tel-format" id="txtTelefono" name="txtTelefono" maxlength="7" required/>
                    </div>
                    <div class="col-lg-2 form-group">
                        <label>Extensión </label>
                        <input type="text" class="form-control extension-format" id="txtExtension" name="txtExtension" maxlength="4"/>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-2">
                        <label>Celular</label>
                        <input type="text" class="form-control lada-format" id="txtLadaCelular" maxlength="3" />
                    </div>
                    <div class="col-lg-6">
                        <input type="text" class="form-control no-label tel-format" id="txtCelular" maxlength="7" />
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-8">
                        <label>Correo electrónico <span class="required"></span></label>
                        <div class="form-control">
                            <input type="text" class="form-control" id="txtCorreo" name="txtCorreo" maxlength="100" required/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-block same-group">
            <div class="col-lg-12">
                <h2>Domicilio</h2>

                <div class="row">
                    <div class="col-lg-8">
                        <label>Calle</label>
                        <input type="text" class="form-control" id="txtCalle" maxlength="200" />
                    </div>

                    <div class="col-lg-2">
                        <label>Núm. ext</label>
                        <input type="text" class="form-control" id="txtNumExt" maxlength="6" />
                    </div>

                    <div class="col-lg-2">
                        <label>Núm. int</label>
                        <input type="text" class="form-control" id="txtNumInt" maxlength="6" />
                    </div>
                </div>
            </div>
                
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-8">
                        <label>Colonia</label>
                        <input type="text" class="form-control" id="txtColonia" maxlength="100" />
                    </div>

                    <div class="col-lg-2">
                        <label>C.P.</label>
                        <input type="text" class="form-control cp-format" id="txtCP" maxlength="5" />
                    </div>
                </div>
            </div>            

            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-4">
                        <label>Estado</label>
                        <select class="form-control estado" id="cboEstadoDomicilio"></select>
                    </div>
                    <div class="col-lg-4">
                        <label>Delegación o municipio</label>
                        <select class="form-control" id="cboMunicipioDomicilio"></select>
                    </div>
                    <div class="col-lg-4">
                        <label>Ciudad o localidad</label>
                        <input type="text" class="form-control" id="txtLocalidadDomicilio" maxlength="50" />
                    </div>
                </div>
            </div>
        </div>
            </form>
    </div>

    <div class="actions-group col-lg-12">
        <button type="button" class="btn btn-success" id="btnGuardar"><span class="glyphicon glyphicon-ok"></span> Guardar</button>
        <button type="button" class="btn btn-primary" id="btnLimpiar"><span class="glyphicon glyphicon-file"></span> Limpiar controles</button>
        <button type="button" class="btn btn-info" id="btnRegresar"><span class="glyphicon glyphicon-arrow-left"></span> Regresar a listado</button>
    </div>

</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/autoNumeric-1.9.25.min.js"></script>
    <script src="Scripts/select2.min.js"></script>
    <script src="Scripts/select2_locale_es.js"></script>
    <script src="Scripts/jquery.validate.min.js"></script>
    <script src="Scripts/messages_es.min.js"></script>
    <script src="Scripts/moment.js"></script>
    <script src="Scripts/datepicker.js"></script>
    <script src="Scripts/ScriptForm/UsuarioEdit.js?v=1.4"></script>
</asp:Content>