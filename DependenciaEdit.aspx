<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="DependenciaEdit.aspx.cs" Inherits="MIR.DependenciaEdit" %>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">

<form class="formsave">

    <div class="form-group">
        <div class="form-block same-group">
            <h2>Registro de Dependencia</h2>
            <br />
            <div class="row">
                <div class="col-lg-6">
                    <label for="txtDependenciaName">Nombre de la Dependencia:<span class="required"></span></label>
                    <input type="text" class="form-control" id="txtNombre" name="txtNombre" maxlength="200" required />
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6  ">
                    <label for="txtDescripcion">Descripción:<span class="required"></span></label>
                    <textarea class="form-control" rows="3"  id="txtDescripcion" name="txtDescripcion" maxlength="800" required></textarea>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <label for="cboSecretaria">Secretaría Dependiente:<span class="required"></span></label>
                    <select class="form-control select2" name="cboSecretaria" id="cboSecretaria" required></select>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <label for="cboSecretaria">Usuario Titular:<span class="required"></span></label>
                    <select class="form-control select2" name="cboUsuarioTitular" id="cboUsuarioTitular" required></select>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <label for="cboSecretaria">Usuario Enlace:<span class="required"></span></label>
                    <select class="form-control select2" name="cboUsuarioEnlace" id="cboUsuarioEnlace" required></select>
                </div>
            </div>
        </div>
    </div>


        <div class="actions-group col-lg-12">
        <button type="button" class="btn btn-success" id="btnGuardar"><span class="glyphicon glyphicon-ok"></span> Guardar</button>
        <button type="button" class="btn btn-primary" id="btnLimpiar"><span class="glyphicon glyphicon-file"></span> Limpiar controles</button>
        <button type="button" class="btn btn-info" id="btnRegresar"><span class="glyphicon glyphicon-arrow-left"></span> Regresar a listado</button>
    </div>
</form>

</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/ScriptForm/DependenciaEdit.js?v=1.3"></script>
</asp:Content>