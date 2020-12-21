<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="UMR.aspx.cs" Inherits="MIR.UMR" MasterPageFile="~/MasterPage.Master" %>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">

<form class="formsave">

    <div class="form-group">
        <div class="form-block same-group">
            <h2>Configurar dependencia de UMAR</h2>
            <br />

            <div class="row">
                <div class="col-lg-6">
                    <label for="cboDependencia">Dependencia:<span class="required"></span></label>
                    <select class="form-control select2" name="cboDependencia" id="cboDependencia" required></select>
                </div>
            </div>
        </div>
    </div>


    <div class="actions-group col-lg-12">
        <button type="button" class="btn btn-success" id="btnGuardar"><span class="glyphicon glyphicon-ok"></span> Guardar</button>
    </div>
</form>

</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/ScriptForm/UMR.js?v=1.3"></script>
</asp:Content>