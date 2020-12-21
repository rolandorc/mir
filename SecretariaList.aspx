<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="SecretariaList.aspx.cs" Inherits="MIR.SecretariaList" %>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/datatables.min.css" rel="stylesheet" />
    <link href="Content/css/select2.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
     <div class="form-group">
         <div class="form-block same-group">
            <h2>Listado de Secretarías / Organismos</h2>
             
             <div class="row">
                <div class="col-lg-3 pull-right">
                    <a href="SecretariaEdit.aspx?id=0" class="btn btn-primary btn-block"><i class="glyphicon glyphicon-plus"></i> Nueva Secretaría</a>
                </div>
             </div>
             <br />
             <div class="row">
                <div class="col-lg-12">
                        <table id="dataTable" class="display table table-bordered datagrid">
                            <thead>
                                <tr>
                                    <th class="text-center">Secretaría</th>
                                    <th class="text-center">Descripción</th>
                                    <th class="text-center col-lg-1">Editar</th>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>

</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/datatables.min.js"></script>
    <script src="Scripts/ScriptForm/SecretariaList.js?v=1.0"></script>
</asp:Content>