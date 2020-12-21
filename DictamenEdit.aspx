<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="DictamenEdit.aspx.cs" Inherits="MIR.DictamenEdit" %>


<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/select2.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">



                        <div class="col-lg-12">
                            <h2>Dictamen</h2>

                            <div class="row">
                                <div class="col-lg-12">
                                    <label>Título: </label>
                                    <h3 id="txtTitulo"></h3>
                                </div>

                            </div>
                            <br />
                            <div class="row">
                                <div class="col-lg-12">
                                    <label>Dependencia</label>
                                    <h4 id="txtDependencia"></h4>
                                </div>
                            </div>
                          <div class="form-group">
                                <h3>Fecha de Publicación POE</h3>
                                <div class="row ">
                                    <div class="col-lg-4">
                                         <div class='input-group date' id='FechaPublicacionDOF'>
                                            <input id="fechaPub" type='text' class="form-control dtp" />
                                            <span class="input-group-addon dtp">
                                                <span class="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                     <div class="col-lg-8 text-right"> 
                                          <button type="button" class="btn btn-info" id="btnGuardarFechaDOF"><span class="glyphicon glyphicon-dashboard"></span>  Guardar Fecha</button>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group" id="divDictamenParcial">
                                <h3>Dictamen Parcial</h3>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="file" class="form-control-file" id="fileUploadDP"  accept=".pdf"  max-size=10096000  >
                                    </div>
                                    <div class="col-lg-6">
                                        <label>Archivo Cargado</label>
                                        <ul class="files-listDP">

                                        </ul>
                                    </div>
                                    <div class="col-lg-12">
                                        <button type="button" style="display:block"  id="btnUploadFileDP"class="btn btn-success"> <span class="glyphicon glyphicon-floppy-disk"></span> Cargar Archivos</button>
                                    </div>
                                </div>
                                <div class="col-lg-12 text-right">
                                    <button type="button" class="btn btn-success" id="btnGuardarDP"><span class="glyphicon glyphicon-ok"></span> Guardar dictamen parcial</button>
                                </div>
                            </div>

                            <div class="form-group" id="divDictamenFinal">
                                <h3 id="h3DF">Dictamen Final</h3>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="file" class="form-control-file" id="fileUploadDF"  accept=".pdf"  max-size=10096000  >
                                    </div>
                                    <div class="col-lg-6">
                                        <label>Archivo Cargado</label>
                                        <ul class="files-listDF">

                                        </ul>
                                    </div>
                                    <div class="col-lg-12">
                                        <button type="button" style="display:block"  id="btnUploadFileDF"class="btn btn-success"> <span class="glyphicon glyphicon-floppy-disk"></span> Cargar Archivos</button>
                                    </div>
                                </div>
                               <div class="col-lg-12 text-right">
                                 <button type="button" class="btn btn-primary" id="btnAutorizarDF"><span class="glyphicon glyphicon-file"></span > Autorizar Dictamen Final</button>
                                 </div>
                            </div>

                           <div class="form-group" id="divConstanciaPublicidad">
                                <h3>Constancia De Publicidad</h3>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="file" class="form-control-file" id="fileUploadCP"  accept=".pdf"  max-size=10096000  >
                                    </div>
                                    <div class="col-lg-6">
                                        <label>Archivos Cargado</label>
                                        <ul class="files-listCP">

                                        </ul>
                                    </div>
                                    <div class="col-lg-12">
                                        <button type="button" style="display:block"  id="btnUploadFileCP"class="btn btn-success"> <span class="glyphicon glyphicon-floppy-disk"></span> Cargar Archivos</button>
                                    </div>
                                </div>
                                <div class="col-lg-12 text-right">
                                 <button type="button" class="btn btn-secondary" id="btnGuardarCP"><span class="glyphicon glyphicon-list-alt"></span> Guardar Constancia de Publicidad</button>
                                </div>
                            </div>

                        </div>

          

        <div class="actions-group col-lg-12">
        <button type="button" class="btn btn-info" id="btnRegresar"><span class="glyphicon glyphicon-arrow-left"></span> Regresar a listado</button>
        </div>



</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/autoNumeric-1.9.25.min.js"></script>
    <script src="Scripts/select2.min.js"></script>
    <script src="Scripts/select2_locale_es.js"></script>
    <script src="Scripts/jquery.validate.min.js"></script>
    <script src="Scripts/messages_es.min.js"></script>
    <script src="Scripts/moment.js"></script>
    <script src="Scripts/datepicker.js"></script>
    <script src="Scripts/messageProcessing.js"></script>
    <script src="Scripts/ScriptForm/DictamenEdit.js?v=1.1"></script>
</asp:Content>