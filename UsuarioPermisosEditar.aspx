<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="UsuarioPermisosEditar.aspx.cs" Inherits="MIR.UsuarioPermisosEditar" %>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <style type="text/css">
        .nav-container thead td 
        { 
            padding: 15px 0 !important;
            font-weight: bold;
        }
    </style>
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
         <div class="form-group">
            <div class="form-block same-group">
                    <h2>Permisos de usuario</h2>

                        <div class="row">              
							<div class="col-lg-6">
								<label>Usuario: </label>
								<span id="spUsuario"></span>
							</div>
						</div>
						
						<div class="row">
							<%--<a class="user-edit-action" id="aEditar" >Editar usuario</a>--%>

							<ul class="permissions-table-actions nav nav-tabs nav-justified" role="tablist">

							</ul>

							<div class="nav-container">

							</div>
						</div>
						
                        <div class="form-actions text-right">
                            <button type="button" id="btnGuardar" class="btn btn-success">Guardar</button>
                            <button type="button" id="btnRegresar" class="btn btn-default">Regresar a listado</button>
                        </div>
                    
                </div>
            </div>

</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/jquery.validate.min.js"></script>
    <script src="Scripts/messages_es.min.js"></script>
    <script src="Scripts/ScriptForm/UsuarioPermisosEditar.js"></script>
</asp:Content>