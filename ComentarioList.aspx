<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ComentarioList.aspx.cs" Inherits="MIR.ComentarioList" MasterPageFile="~/MasterPage.Master" %>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/datatables.min.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
     <div class="form-group">
         <div class="form-block same-group">
            <h2>Listado de Proyectos publicados</h2>

             <br />
             <div class="row">
                <div class="col-lg-12">
                        <table id="dataTable" class="display table table-bordered datagrid">
                            <thead>
                                <tr>
                                    <th class="text-center">Folio</th>
                                    <th class="text-center">Nombre de Proyecto</th>
                                    <th class="text-center col-lg-1">Cantidad de comentarios</th>
                                    <th class="text-center col-lg-1">Ver comentarios</th>
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
    <script src="Scripts/ScriptForm/ComentarioList.js?v=1.2"></script>
</asp:Content>