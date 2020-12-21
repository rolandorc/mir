<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="OpcionCalculadora.aspx.cs" Inherits="MIR.OpcionCalculadora" %>



<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">

<div class="row fechaproceso" style="display:none">
    <label id="lblfecinicio"></label>
</div>

<div class="row fechaproceso" style="display:none">
    <label id="lbllimitedias"></label>
</div>

<div class="row fechaproceso" style="display:none">
    <label id="lblDiastrans"></label>
</div>

<br />

<div id="OpcionCalculadora" style="display:none">
    <%--<form class="formsave">--%>
        <div class="row">
            <div class="col-lg-4">
                <div class="form-group">
                    <label>Tipo de Regulación:<span class="required"></span></label>
                    <select class="form-control" id="cboRegulacion" name="cboRegulacion" required></select>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group" id="formOrden">
                    <label>Tipo de Ordenamiento Jurídico <span class="required"></span></label>
                    <select class="form-control" id="cboOrdenamiento" name="cboOrdenamiento" required></select>
                </div>
            </div>

                <div class="col-lg-4">
                <div class="form-group">
                    <label>Tipo de MIR Correspondiente: <span class="required"></span></label>
                    <select class="form-control" id="cboAir" name="cboAir" required></select>
                </div>
            </div>
        </div>
    <%--</form>--%>
</div>

<div id="divComents"  class="row" style ="display: none">
    <div class="col-lg-8">
        <div class="form-group">
            <label>Comentarios:</label>
            <textarea rows="4" class=" form-control ph-center text-capitalize text-center" id="txtComents"   disabled></textarea> 
        </div>
    </div>
</div>

<div id="Loadpages"></div>

</asp:Content>




<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    
<%-- SCRIPT ANEXADO PARA EL PROYECTO MIR UNICAMENTE OpcionCalculadora.js --%>
    <script src="Scripts/ScriptForm/OpcionCalculadora.js?v=1.5"></script>
    <script src="Scripts/moment.js"></script>
</asp:Content>