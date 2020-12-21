<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="ExencionList.aspx.cs" Inherits="MIR.ExencionList" %>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/datatables.min.css" rel="stylesheet" />
    <link href="Content/css/select2.css" rel="stylesheet" />
   
</asp:Content>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
     <div class="form-group">
         <div class="form-block same-group">
            <h2>Listado de Cuestionarios de Exención</h2>
             
             <div class="row">
                <div class="col-lg-3 pull-right">
                    <a href="ExencionEdit.aspx?id=0" class="btn  btn-info btn-block"><i class="fa fa-file-o"></i> Nueva Exención</a>
                </div>
             </div>

             <div class="row">
                <div class="col-lg-12">
                        <table id="dataTable" class="display table table-bordered datagrid">
                            <thead>
                                <tr>
                                    <th class="text-center">Folio</th>
                                    <th class="text-center">Enlace</th>
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
    <script src="Scripts/ScriptForm/ExencionList.js?v=1"></script>
</asp:Content>