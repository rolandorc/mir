<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ComentarioEdit.aspx.cs" Inherits="MIR.ComentarioEdit" MasterPageFile="~/MasterPage.Master" %>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/datatables.min.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
     <div class="form-group">
         <div class="form-block same-group">
            <h2>Listado de comentarios del Proyecto:</h2>
             <br />
             <h4 id="txtTitulo"></h4>

             <div class="row">
                <div class="col-lg-3 pull-right">
                    <a class="btn btn-primary btn-block" id="btnNuevo"><i class="glyphicon glyphicon-plus"></i> Nuevo comentario</a>
                </div>
             </div>
             <br />
             <div class="row">
                <div class="col-lg-12">
                        <table id="dataTable" class="display table table-bordered datagrid">
                            <thead>
                                <tr>
                                    <th class="text-center">Remitente</th>
                                    <th class="text-center">Comentario</th>
                                    <th class="text-center col-lg-1">Archivo</th>
                                    <th class="text-center col-lg-1">Tipo</th>
                                    <th class="text-center col-lg-1">Estatus</th>
                                    <th class="text-center col-lg-1">Modificar</th>
                                </tr>
                            </thead>
                            <tbody id="tbody">
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modal">
        <div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
					<h4 class="modal-title">Agregar comentario</h4>
				</div>
                <div class="modal-body">
                    <form class="formmodal">
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="txtNombre">Remitente</label>
                                    <input class="form-control" id="txtNombre" name="txtNombre" maxlength="200" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-8">
                                <div class="form-group">
                                    <label for="txtCorreo">Correo</label>
                                    <input type="text" class="form-control" id="txtCorreo" name="txtCorreo" maxlength="200" required />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-12 form-group">
                                    <label for="txtComentarios">Comentarios</label>
                                    <textarea id="txtComentarios" rows="6" class="form-control" name="txtComentarios" maxlength="5000" required></textarea>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-8">
                            <h4>Archivo Adjunto</h4>

                           <div class="row">
                                <div class="col-lg-6">
                                  <input type="file" class="form-control-file" id="fileUpload"  accept=".pdf"  max-size=10096000 />
                                </div>
                            </div>
                         </div>
                            </div>
                    </form>
                </div>
				<div class="modal-footer">					
					<button type="button" class="btn btn-primary" id="btnAceptarModal">Aceptar</button>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
				</div>
            </div>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/datatables.min.js"></script>
    <script src="Scripts/ScriptForm/ComentarioEdit.js?v=1.7"></script>
</asp:Content>