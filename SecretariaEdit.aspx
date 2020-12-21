<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="SecretariaEdit.aspx.cs" Inherits="MIR.SecretariaEdit" %>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
<form class="formsave">
    <div class="form-group">
        <div class="form-block same-group">
            <h2>Secretaría / Organismo</h2>

            <div class="row">
                <div class="col-lg-6">
                     <label>Nombre: <span class="required"></span></label>
                    <input type="text" class="form-control" id="txtNombre" maxlength="200"  required/>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-lg-6">
                    <label>Descripcion <span class="required"></span></label>
                    <textarea class="form-control" id="txtDescripcion" maxlength="800" required></textarea>
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

<asp:Content ID="Content3" ClientIDMode ="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/jquery.validate.min.js"></script>
    <script src="Scripts/messages_es.min.js"></script>
    <script src="Scripts/ScriptForm/SecretariaEdit.js?v=1.1"></script>
</asp:Content>