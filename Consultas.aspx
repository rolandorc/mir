<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="Consultas.aspx.cs" Inherits="MIR.Consultas" %>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/datatables.min.css" rel="stylesheet" />
    <link href="Content/css/select2.css" rel="stylesheet" />
   
</asp:Content>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
     <div class="form-group">
         <div class="form-block same-group">
            <h2>Consultas</h2>
             
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

        <!-- Modal -->
<div class="modal fade" id="modaltracktime" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Tiempos de procesos</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div id="modalbodyComent" class="modal-body">
       <div class="row">
            <div class="col-lg-12" id="texttotales">
            </div>
        </div> 
        <div class="row">
            <div class="col-lg-12" id="textreales">
            </div>
        </div> 
          <br />
      </div>
      <div class="modal-footer">
        <button type="button"  data-dismiss="modal"  id="btnModalAceptarConsultaPublica" class="btn btn-primary">Aceptar</button>
      </div>
    </div>
  </div>
</div>

</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/datatables.min.js"></script>
    <script src="Scripts/ScriptForm/Consultas.js?v=1.7"></script>
</asp:Content>