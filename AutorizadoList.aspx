<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="AutorizadoList.aspx.cs" Inherits="MIR.AutorizadoList" %>


<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/datatables.min.css" rel="stylesheet" />
    <link href="Content/css/select2.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
     <div class="form-group">
         <div class="form-block same-group">
            <h2>Listado de Proyectos </h2>
             
             <br />
             <div class="row">
                <div class="col-lg-12">
                    <ul class="nav nav-tabs">
                      <li class="active"><a href="#">Proyectos Autorizados</a></li>
                      <li><a href="#">Actualización periódica</a></li>
                    </ul>
                    <br />

                    <table id="dataTable"  class="display table table-bordered datagrid">
                        <thead id="thead">

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
    <script src="Scripts/ScriptForm/AutorizadoList.js?v=1.3"></script>
</asp:Content>