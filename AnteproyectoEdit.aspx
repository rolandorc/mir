<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="AnteproyectoEdit.aspx.cs" Inherits="MIR.AnteproyectoEdit" %>


<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/select2.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">

<div class="form-group">
    <form class="formsave">
            <div class="form-block same-group">

                        <div class="col-lg-12">
                            <h2>Anteproyecto</h2>
                        </div>

                         <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Título: <span class="required"></span></label>
                                   <textarea rows="5" class="form-control ph-center text-capitalize text-center" id="txtTitulo" name="txtTitulo" placeholder="TITULO DE ANTEPROYECTO" required></textarea> 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Autores: <span class="required"></span></label>
                                   <textarea rows="2" class="form-control  timesnew text-uppercase text-center" id="txtAutores" name="txtAutores" placeholder="Autores" required></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Resumen: <span class="required"></span></label>
                                   <textarea rows="10" class="form-control resumen " id="txtResumen" name="txtResumen" placeholder="Resumen" required></textarea>
                                </div>
                            </div>
                        </div>


                         <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Agradecimientos: <span class="required"></span></label>
                                    <textarea rows="6" class="form-control resumen " id="txtAgradecimientos" name="txtAgradecimientos" placeholder="Agradecimientos" required></textarea>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Introducción: <span class="required"></span></label>
                                    <textarea rows="10" class="form-control resumen " id="txtIntroduccion" name="txtIntroduccion" placeholder="Introducción" required></textarea>
                                </div>
                            </div>
                        </div>

                          <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Objeto de Estudio: <span class="required"></span></label>
                                     <textarea rows="10" class="form-control resumen " id="txtObjEstudio" name="txtObjEstudio" placeholder="Objeto de Estudio" required></textarea>
                                </div>
                            </div>
                        </div>

                          <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Planteamiento del Problema: <span class="required"></span></label>
                                    <textarea rows="8" class="form-control resumen " id="txtPlanteamiento" name="txtPlanteamiento" placeholder="Planteamiento del Problema" required></textarea>
                                </div>
                            </div>
                        </div>


                       <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Justificación: <span class="required"></span></label>
                                     <textarea rows="10" class="form-control resumen " id="txtJustificacion" name="txtJustificacion" placeholder="Justificación" required></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Fuentes consultadas: <span class="required"></span></label>
                                     <textarea rows="4" class="form-control resumen " id="txtBibliografia" name="txtBibliografia" placeholder="Fuentes consultadas" required></textarea>
                                </div>
                            </div>
                        </div>

                       <div class="row">
                            <div class="col-lg-12">
                                <div class="form-group">
                                    <label>Conclusión: <span class="required"></span></label>
                                    <textarea rows="4" class="form-control resumen " id="txtConclusion"  name="txtConclusion"  placeholder="Conclusión" required></textarea>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <h2>Archivos Adjuntos</h2>

                           <div class="row">
                                <div class="col-lg-6">
                                  <input type="file" class="form-control-file" id="fileUpload"  accept=".pdf"  max-size=10096000  >
                                </div>
                               <div class="col-lg-6">
                                    <label>Archivos Cargados</label>
                                    <ul class="files-list">

                                    </ul>
                                </div>
                               <div class="col-lg-12">
                                 <button type="button" id="btnUploadFile"class="btn btn-success"> <span class="glyphicon glyphicon-floppy-disk"></span> Cargar Archivos</button>
                                </div>
                            </div>
                         </div>
         </div>             
    </form>
</div>           

        <div class="actions-group col-lg-12">
        <button type="button" class="btn btn-success" id="btnGuardar"><span class="glyphicon glyphicon-ok"></span> Guardar</button>
        <button type="button" class="btn btn-primary" id="btnAutorizar"><span class="glyphicon glyphicon-file"></span> Autorizar</button>
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
    <script src="Scripts/ScriptForm/AnteproyectoEdit.js?v=1.71"></script>
</asp:Content>