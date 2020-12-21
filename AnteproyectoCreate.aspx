<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="AnteproyectoCreate.aspx.cs" Inherits="MIR.AnteproyectoCreate" %>

<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
    <link href="Content/css/select2.css" rel="stylesheet" />
     <link href="Content/css/anteproyecto.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
         <div class="form-group">
            <div class="form-block same-group">
                    

                        <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="1" class="form-control ph-center text-capitalize text-center" id="txtTitulo" placeholder="TITULO DE ANTEPROYECTO" required></textarea>
                            </div>
                        </div>

                       <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="2" class="form-control  timesnew text-uppercase text-center" id="txtAutores" placeholder="Autores" required></textarea>
                            </div>
                        </div>

                         <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="4" class="form-control resumen " id="txtResumen" placeholder="Resumen" required></textarea>
                            </div>
                         </div>

                         <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="1" class="form-control abstracttitle text-capitalize text-center" id="txtAbstractTitulo" placeholder="TITULO DE ANTEPROYECTO EN INGLES" required></textarea>
                            </div>
                         </div>

                          <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="4" class="form-control resumen" id="txtAbstract" placeholder="Abstract (Resumen Fragmento en Ingles)" required></textarea>
                            </div>
                         </div>



                       <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="4" class="form-control resumen " id="txtAgradecimientos" placeholder="Agradecimientos" required></textarea>
                            </div>
                         </div>



                       <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="6" class="form-control resumen " id="txtIntroduccion" placeholder="Introduccion" required></textarea>
                            </div>
                         </div>

                          <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="10" class="form-control resumen " id="txtObjEstudio" placeholder="Objeto de Estudio" required></textarea>
                            </div>
                         </div>

                       <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="8" class="form-control resumen " id="txtPlanteamiento" placeholder="Planteamiento del Problema" required></textarea>
                            </div>
                         </div>

                          <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="10" class="form-control resumen " id="txtJustificacion" placeholder="Justificacion" required></textarea>
                            </div>
                         </div>

                         <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="4" class="form-control resumen " id="txtInterrogantes" placeholder="Grandes Interrogantes" required></textarea>
                            </div>
                         </div>

                          <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="4" class="form-control resumen " id="txtPreguntaesp" placeholder="Pregunta Especifica" required></textarea>
                            </div>
                         </div>
                                          <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="4" class="form-control resumen " id="txtBibliografia" placeholder="Bibliografia" required></textarea>
                            </div>
                         </div>
                              <div class="row">
                            <div class="col-lg-12">
                                <textarea rows="4" class="form-control resumen " id="txtConclusion" placeholder="Conclusion" required></textarea>
                            </div>
                         </div>

                       <div class="row">
                            <div class="col-lg-12">
                               <label for="inputAdjuntos">Archivos Adjuntos</label> 
                               <input type="file" class="form-control-file" id="inputAdjuntos" multiple>
                            </div>
                         </div>
                    </div>
             </div>

              
                        <div class="actions-group col-lg-12 text-right">
                            <%--<button type="button" id="btnLimpiar" class="btn btn-info">Limpiar controles</button>--%>
                            <button type="button" id="btnGuardar" class="btn btn-success">Guardar</button>
                            <button type="button" id="btnRegresar" class="btn btn-info">Autorizar</button>
                        </div>


</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Script/autoNumeric-min.js"></script>
    <script src="Script/select2.min.js"></script>
    <script src="Script/select2-es.js"></script>
    <script src="Script/jquery.validate.min.js"></script>
    <script src="Script/messages_es.min.js"></script>
    <%--<script src="Script/ScriptForm/UsuarioEdit.js?v=3.0"></script>--%>
</asp:Content>